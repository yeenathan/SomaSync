import { Link, useOutletContext, useParams } from "react-router";
import { useState, useEffect } from "react";

function SessionActivity() {
  const params = useParams();
  const { posts }: { posts: Array<any> } = useOutletContext();

  const post = posts.find((p) => p.slug === params.activityid);
  const filteredPosts = posts.filter((post) =>
    post.slug.startsWith(params.sessionid)
  );
  const maxPosts = filteredPosts.length;
  const currentIndex = filteredPosts.indexOf(post);


  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!post) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, "text/html");
    const quiz = doc.querySelector("quiz");

    if (quiz) {
      const q = quiz.querySelector("question")?.textContent || "";
      const c = Array.from(quiz.querySelectorAll("choice")).map(choice => choice.textContent || "");
      const a = quiz.querySelector("answer")?.textContent?.trim() || "";

      setQuestion(q);
      setChoices(c);
      setAnswer(a);
      setSelected(null);
      setFeedback("");
      setIsCorrect(false);
    }
  }, [post]);

const handleSelect = (choice: string) => {
  setSelected(choice);
  const selectedLetter = choice.trim().charAt(0); 
  if (selectedLetter === answer) {
    setFeedback("Correct!");
    setIsCorrect(true);
  } else {
    setFeedback("Try again.");
  }
};

  function getNextSlug() {
    if (currentIndex<maxPosts-1) {
      const next = filteredPosts[currentIndex+1];
      return next.slug;
    } else return null;
  }

  const nextSlug = getNextSlug();
  const isActivity = nextSlug.includes("activity");


  if (!post) return <p>Post not found</p>;


  return (
<div className="flex flex-col items-center">
  <div className="w-[609px] flex flex-col flex-grow">
    <div className="h-[198px] bg-[#64B4CB] rounded-2xl mb-8"></div>

    <hr className="border-2 w-full mb-8 bg-black" />

    <div className="text-center">
      <h1 className="font-bold text-4xl mb-8">Question 1</h1>
      <p className="mb-8">{question}</p>
      <ul className="flex flex-col items-center">
        {choices.map((choice, i) => {
          const isSelected = selected === choice;
          const isCorrectChoice = choice.trim().charAt(0) === answer;
          const showGreen = isCorrect && isCorrectChoice;
          const showRed = isSelected && !isCorrect && !isCorrectChoice;

          return (
            <li
              key={i}
              className={`border-2 rounded-lg p-4 m-2 w-72 text-center transition-colors duration-200
                ${showGreen ? "bg-green-300" : ""}
                ${showRed ? "bg-red-300" : ""}
              `}
            >
              <button
                className="w-full h-full"
                onClick={() => !isCorrect && handleSelect(choice)}
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>

      {selected && <p className="mt-4 font-semibold">{feedback}</p>}
    </div>
  </div>

  {isCorrect && nextSlug && (
    <div className="w-[609px] flex justify-end mt-auto mb-8">
      <Link
        className="border-2 bg-[#3C8F6166] text-black px-4 py-2 rounded-2xl hover:bg-[#3C8F6166]"
        to={`/sessions/${params.sessionid}/${isActivity ? "activity" : "chapter"}/${nextSlug}`}
      >
        Next Question
      </Link>
    </div>
  )}
</div>

  );

}

export default SessionActivity;

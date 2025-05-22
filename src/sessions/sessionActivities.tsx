import { useParams, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

function SessionActivity() {
  const { sessionid } = useParams();
  const { posts }: { posts: Array<any> } = useOutletContext();

  // Get only activity posts for this session
  const activityPosts = posts.filter((post) =>
    post.slug.startsWith(`${sessionid}-activity`)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const post = activityPosts[currentIndex];

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
      const c = Array.from(quiz.querySelectorAll("choice")).map(
        (choice) => choice.textContent || ""
      );
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

    const cleanedChoice = choice.trim();
    const cleanedAnswer = answer.trim();

    const byLetter = cleanedAnswer.length === 1 && /^[A-Za-z]$/.test(cleanedAnswer);

    const match = byLetter
      ? cleanedChoice.charAt(0).toLowerCase() === cleanedAnswer.toLowerCase()
      : cleanedChoice.toLowerCase() === cleanedAnswer.toLowerCase();

    if (match) {
      setFeedback("Correct!");
      setIsCorrect(true);
    } else {
      setFeedback("Try again.");
    }
  };

  const handleNext = () => {
    if (currentIndex < activityPosts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[609px] flex flex-col flex-grow">
        <div className="h-[198px] bg-[#64B4CB] rounded-2xl mb-8"></div>

        <hr className="border-2 w-full mb-8 bg-black" />

        <div className="text-center">
          <h1 className="font-bold text-4xl mb-8">Question {currentIndex + 1}</h1>
          <p className="mb-8">{question}</p>
          <ul className="flex flex-col items-center">
            {choices.map((choice, i) => {

              const isSelected = selected === choice;
              const cleanedChoice = choice.trim().toLowerCase();
              const cleanedAnswer = answer.trim().toLowerCase();
              const isCorrectChoice =
                cleanedChoice === cleanedAnswer || cleanedChoice.charAt(0) === cleanedAnswer;

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

      {isCorrect && currentIndex < activityPosts.length - 1 && (
        <div className="w-[609px] flex justify-end mt-auto mb-8">
          <button
            className="border-2 bg-[#3C8F6166] text-black px-4 py-2 rounded-2xl hover:bg-[#3C8F6166]"
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      )}

      {isCorrect && currentIndex === activityPosts.length - 1 && (
        <div className="w-[609px] flex justify-center mt-auto mb-8">
          <p className="font-bold text-lg">You've completed all the questions!</p>
        </div>
      )}
    </div>
  );
}

export default SessionActivity;

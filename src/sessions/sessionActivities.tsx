import { useParams, useOutletContext } from "react-router";
import { useEffect, useState } from "react";

function SessionActivity() {
  const { sessionid } = useParams();
  const { posts }: { posts: any[] } = useOutletContext();


  const activityPosts = posts.filter((post) =>
    post.slug.startsWith(`${sessionid}-activity`)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const post = activityPosts[currentIndex];


  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const [choiceKeys, setChoiceKeys] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (!post) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, "text/html");
    const quiz = doc.querySelector("quiz");
    if (!quiz) return;

    const q = quiz.querySelector("question")?.textContent || "";
    const rawChoices = Array.from(quiz.querySelectorAll("choice")).map(
      (choice) => choice.textContent || ""
    );

    const keys = rawChoices.map((choice) => {
      const match = choice.match(/^([A-Z])\./i);
      return match ? match[1].toLowerCase() : choice.toLowerCase();
    });

    const answerText = quiz.querySelector("answer")?.textContent || "";
    const a = answerText
      .split(",")
      .map((ans) => ans.trim().toLowerCase())
      .filter((ans) => ans.length > 0);

    setQuestion(q);
    setChoices(rawChoices);
    setChoiceKeys(keys);
    setAnswers(a);
    setSelected([]);
    setFeedback("");
    setIsCorrect(false);
  }, [post]);


  const handleSelect = (choice: string) => {
    const match = choice.match(/^([A-Z])\./i);
    const key = match ? match[1].toLowerCase() : choice.toLowerCase();

    let updatedSelected: string[];

    if (answers.length === 1) {
      updatedSelected = [key];
    } else {
      updatedSelected = selected.includes(key)
        ? selected.filter((s) => s !== key)
        : [...selected, key];
    }

    setSelected(updatedSelected);

    const hasAnyCorrect = updatedSelected.some((s) => answers.includes(s));
    const allCorrect = answers.every((a) => updatedSelected.includes(a));
    const noExtraSelected = updatedSelected.every((s) => answers.includes(s));

    if (allCorrect && noExtraSelected) {
      setIsCorrect(true);
      setFeedback("Correct!");
    } else if (hasAnyCorrect) {
      setIsCorrect(false);
      setFeedback("You got some correct, keep going!");
    } else {
      setIsCorrect(false);
      setFeedback("Try Again.");
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
              const match = choice.match(/^([A-Z])\./i);
              const key = match ? match[1].toLowerCase() : choice.toLowerCase();

              const isSelected = selected.includes(key);
              const isCorrectAnswer = answers.includes(key);
              const bgGreen = isSelected && isCorrectAnswer;
              const bgRed = isSelected && !isCorrectAnswer;

              return (
                <li
                  key={i}
                  className={`border-2 rounded-lg p-4 m-2 w-72 text-center transition-colors duration-200
          ${bgGreen ? "bg-green-300" : ""}
          ${bgRed ? "bg-red-300" : ""}
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


          {selected.length > 0 && <p className="mt-4 font-semibold">{feedback}</p>}
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


import { useEffect } from "react";

function QuizContent({ html }: { html: string }) {

  useEffect(() => {
    const root = document.querySelector(".quiz-options");
    const resultBox = document.querySelector(".quiz-result");
    if (!root || !resultBox) return;

    const correctAnswer = root.getAttribute("data-correct");

    root.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-answer");
        if (selected === correctAnswer) {
          resultBox.textContent = "Correct!";
          resultBox.style.color = "green";
        } else {
          resultBox.textContent = "Wrong. Try again!";
          resultBox.style.color = "red";
        }
        resultBox.style.display = "block";
      });
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default QuizContent;
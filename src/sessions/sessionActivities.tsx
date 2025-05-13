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


  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

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
    }
  }, [post]);

const handleSelect = (choice: string) => {
  setSelected(choice);
  const selectedLetter = choice.trim().charAt(0); 
  if (selectedLetter === answer) {
    setFeedback("Correct!");
  } else {
    setFeedback("Try again.");
  }
};

  function getNextSlug() {
    if (!post) return "";
    const next = Number(post.slug.slice(-1)) + 1;
    if (next > maxPosts) return "";
    return post.slug.slice(0, post.slug.length - 1) + next;
  }

  const nextSlug = getNextSlug();
  const isActivity = nextSlug.includes("activity");

  if (!post) return <p>Post not found</p>;


  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {choices.map((choice, i) => (
          <li key={i}>
            <button onClick={() => handleSelect(choice)}>{choice}</button>
          </li>
        ))}
      </ul>
      {selected && <p>{feedback}</p>}

      <p>{post.slug.slice(-1)}/{maxPosts}</p>

      {nextSlug && (
        <Link to={`/sessions/${params.sessionid}/${isActivity ? "activity" : "chapter"}/${nextSlug}`}>
          Next
        </Link>
      )}
    </div>
  );

}

export default SessionActivity;

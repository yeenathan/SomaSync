const DOMAIN = "35.94.240.193";

import { Link, useOutletContext } from "react-router";
import { useNavigate } from "react-router";
import { updateUserMeta } from "./utils/WP";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Onboarding() {
  const navigate = useNavigate();
  const { setOnboarding } = useOutletContext();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function handleclick(e) {
    e.preventDefault();
    await updateUserMeta("doneOnboarding", true);
    setOnboarding(true);
    navigate("/");
  }

  useEffect(() => {
    async function fetchOnboardingPosts() {
      try {
        const res = await fetch(`http://${DOMAIN}/wp-json/wp/v2/posts?categories=13`);
        const data = await res.json();

        const sorted = data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setPosts(sorted);
      } catch (err) {
        console.error("Failed to load", err);
      } finally {
        setLoading(false);
      }
    }

    fetchOnboardingPosts();
  }, []);

  function handleNext() {
    setCurrentIndex((prev) => Math.min(prev + 1, posts.length - 1));
  }

  if (loading) return <div>Loading...</div>;
  if (posts.length === 0) return <div>No posts found.</div>;

  const currentPost = posts[currentIndex];

  return (
    <div className="onboarding-step">
      <h1 dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }} />

      {currentIndex < posts.length - 1 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={() => window.location.href = "/"}>Finish Onboarding</button>
      )}
    </div>
  );
}

export default Onboarding;
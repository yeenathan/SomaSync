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
    <>
      <style>{`
    .wp-block-list {
      list-style-type: decimal;
      margin-left: 1.5rem;
      padding-left: 1rem;
      margin-top: 2rem;
      
    }

    .wp-block-list li {
      margin-bottom: 0.5rem;
    }

    .wp-block-paragraph {
      margin-top: 4rem;
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: small;
      margin-bottom: 4rem;
    }


  `}</style>

      <div className="px-4 pt-8 ">
        <div className="w-full max-w-prose">
          <div className="h-[198px] bg-[#64B4CB] rounded-2xl mb-8 md:w-[610px] w-full"></div>

          <h1
            className="text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }}
          />
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }}
          />

        </div>
        <div className="flex justify-end mt-8">
          {currentIndex < posts.length - 1 ? (
            <button
              className="button border-1 bg-[#53C285] text-black px-4 py-2 rounded-2xl hover:bg-[#3C8F6166]"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="border-2 bg-[#3C8F61] text-black px-4 py-2 rounded-2xl hover:bg-[#3C8F6166]"
              onClick={handleclick}
            >
              Finish Onboarding
            </button>
          )}
        </div>
      </div>

    </>
  );
}

export default Onboarding;
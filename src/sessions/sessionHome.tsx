import { useOutletContext, useParams, useNavigate } from "react-router";
import Category from "@/components/category";
import { useEffect } from "react";


function SessionHome() {
  const navigate = useNavigate();
  const params = useParams();
  const { posts, userProgress }: { posts: Array<any>, userProgress: string } = useOutletContext();
  
  useEffect(() => {
    if (userProgress < params.sessionid) {
      navigate("/sessions");
    }
  }, []);

  const chapterPosts = posts.filter((post) =>
    post.slug.split("-")[0] === params.sessionid && !post.slug.includes("activity")
  );

  const hasQuiz:boolean = posts.filter((post) => {
    return (post.slug.split("-")[0] === params.sessionid && post.slug.includes("activity"))
  }).length > 0;

  return (
    <div className="flex flex-col gap-4 min-w-full">
      {chapterPosts.map((post, i) => (
        <Category
          key={i}
          title={post.title.rendered}
          route={`/sessions/${params.sessionid}/chapter/${post.slug}`}
          isChapter
        />
      ))}
      { hasQuiz &&
        <Category
          title="Session Quiz"
          route={`/sessions/${params.sessionid}/activity`}
          isChapter
        />
      }
    </div>
  )
}

export default SessionHome;
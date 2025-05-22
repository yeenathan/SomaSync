import { Link, useOutletContext, useParams, Outlet, useNavigate } from "react-router";
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
    post.slug.startsWith(params.sessionid) && !post.slug.includes("activity")
  );

  return (
    <div className="flex flex-col gap-4 min-w-full">
      {chapterPosts.map((post, i) => (
        <Category
          key={i}
          title={post.title.rendered}
          route={`/sessions/${params.sessionid}/chapter/${post.slug}`}
        />
      ))}

      <Category
        title="Session Quiz"
        route={`/sessions/${params.sessionid}/activity`}
      />

      <Outlet />
    </div>
  )
}

export default SessionHome;
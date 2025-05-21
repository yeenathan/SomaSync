import { Link, useOutletContext, useParams, Outlet, useNavigate } from "react-router";
import Category from "@/components/category";
import { useEffect } from "react";

function SessionHome() {
  const navigate = useNavigate();
  const params = useParams();
  const { posts, userProgress }: { posts: Array<any>, userProgress:string } = useOutletContext();
  
  useEffect(() => {
    if (userProgress<params.sessionid) {
      navigate("/sessions");
    }
  }, []); 

  const currentPosts = posts.filter((post) => {
    return post.slug.slice(0, 8) === params.sessionid;
  })
  return (
    <div className="flex flex-col gap-4 min-w-full">
      {
        currentPosts.map((post, i) => {
          const isActivity = post.slug.includes("activity");
          const type = isActivity ? "activity" : "chapter";
          return (
            <Category title={post.title.rendered} subtitle={post.excerpt.rendered} route={`/sessions/${params.sessionid}/${type}/${post.slug}`} key={i}/>
          );
        })
      }
      <Outlet />
    </div>
  )
}

export default SessionHome;
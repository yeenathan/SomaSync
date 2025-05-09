import { Link, useOutletContext, useParams, Outlet } from "react-router";
import Category from "@/components/category";

function SessionHome() {
  const params = useParams();
  const { posts, categories }: { posts: Array<any>, categories: Array<any> } = useOutletContext();
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
            <Link key={i} to={`/sessions/${params.sessionid}/${type}/${post.slug}`}>
              <Category title={post.title.rendered} subtitle={post.excerpt.rendered} />
            </Link>
          );
        })
      }
      <Outlet />
    </div>
  )
}

export default SessionHome;
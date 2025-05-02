import { Link, useOutletContext, useParams } from "react-router";
import SessionCategory from "@/components/sessionCategory";

function SessionHome() {
  const params = useParams();
  const posts: Array<any> = useOutletContext();
  const currentPosts = posts.filter((post) => {
    return post.slug.slice(0,8) === params.sessionid;
  })
  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        currentPosts.map((post, i) => {
          return(
            <Link key={i} to={`/sessions/${params.sessionid}/${post.slug}`}>
              <SessionCategory title={post.title.rendered} subtitle={post.excerpt.rendered}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SessionHome;
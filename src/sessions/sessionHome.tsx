import { Link, useOutletContext, useParams } from "react-router";
import SessionCategory from "@/components/sessionCategory";

function SessionHome() {
  const params = useParams();
  const {posts, categories}:{posts: Array<any>, categories: Array<any>} = useOutletContext();
  const currentPosts = posts.filter((post) => {
    return post.categories[0] === Number(params.sessionid);
  })
  return(
    <div>
      {
        currentPosts.map((post, i) => {
          return(
            <Link to={`/sessions/${params.sessionid}/${post.id}`}>
              <SessionCategory title={post.title.rendered} key={i}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SessionHome;
import { useOutletContext } from "react-router";
import Category from "@/components/category";
import { Link } from "react-router";
import { getCategoryNameFromID } from "@/utils/WP";

function Sessions() {
  const {posts, categories}:{posts:Array<any>, categories:Array<any>} = useOutletContext();
  let sessions: Array<any> = [];
  for (let i of posts) {
    if (sessions.some(session => session.sessionid === i.slug.slice(0,8))) continue;
    sessions.push(
      {
        sessionid: i.slug.slice(0,8),
        title: getCategoryNameFromID(i.categories[0], categories)
      }
    );
  }

  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          return(
            <Link key={key} to={`/sessions/${session.sessionid}`}>
              <Category title={session.title} subtitle={null}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sessions;
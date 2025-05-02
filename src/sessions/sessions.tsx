import { useOutletContext } from "react-router";
import SessionCategory from "@/components/sessionCategory";
import { Link } from "react-router";

function Sessions() {
  const posts: Array<any> = useOutletContext();
  let postSessions: Array<any> = [];
  for (let i of posts) {
    postSessions.push(i.slug.slice(0,8));
  }
  const sessions = [...new Set(postSessions)];
  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          return(
            <Link key={key} to={`/sessions/${session}`}>
              <SessionCategory title={session}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sessions;
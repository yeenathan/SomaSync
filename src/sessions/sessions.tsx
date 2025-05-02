import { useOutletContext } from "react-router";
import SessionCategory from "@/components/sessionCategory";
import { Link } from "react-router";
import { getCategories } from "@/utils/WP";

const categories = await getCategories();

function Sessions() {
  function getCategoryNameFromID(id:number) {
    return categories.filter((category:any) => {
      return category.id === id;
    })[0].name;
  }

  const posts: Array<any> = useOutletContext();
  let sessions: Array<any> = [];
  for (let i of posts) {
    if (sessions.some(session => session.sessionid === i.slug.slice(0,8))) continue;
    sessions.push(
      {
        sessionid: i.slug.slice(0,8),
        title: getCategoryNameFromID(i.categories[0])
      }
    );
  }

  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          return(
            <Link key={key} to={`/sessions/${session.sessionid}`}>
              <SessionCategory title={session.title}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sessions;
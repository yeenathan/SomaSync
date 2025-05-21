import { useOutletContext } from "react-router";
import Category from "@/components/category";
import { Link } from "react-router";
import { getCategoryNameFromID } from "@/utils/WP";

function Sessions() {
  const {posts, categories, userProgress}:{posts:Array<any>, categories:Array<any>, userProgress:string} = useOutletContext();
  const ONBOARDING_CATEGORY_ID = 13;
  let sessions: Array<any> = [];

  for (let i of posts) {
    if (
      i.categories.includes(ONBOARDING_CATEGORY_ID) ||
      i.categories.includes(1)
    ) continue;

    const sessionSlug = i.slug.slice(0, 8);

    if (sessions.some(session => session.sessionid === sessionSlug)) continue;

    sessions.push({
      sessionid: sessionSlug,
      title: getCategoryNameFromID(i.categories[0], categories)
    });
  }

  function getStatus(sessionid:string) {
    if (userProgress<sessionid) {
      return "disabled";
    }
    else if (userProgress>sessionid) {
      return "checked";
    }
    else {
      return "neutral";
    }
  }

  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          return(
            <Category title={session.title} subtitle={null} status={getStatus(session.sessionid)} route={`/sessions/${session.sessionid}`} key={key}/>
          )
        })
      }
    </div>
  )
}

export default Sessions;
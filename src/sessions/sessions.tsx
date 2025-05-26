import { useOutletContext } from "react-router";
import Category from "@/components/category";
import { Link } from "react-router";
import { getCategoryNameFromID } from "@/utils/WP";
import ColourBlock from "@/components/ui/colourBlock";

function Sessions() {
  const { posts, categories, userProgress }: { posts: Array<any>, categories: Array<any>, userProgress: string } = useOutletContext();
  const ONBOARDING_CATEGORY_ID = 13;
  let sessions: Array<any> = [];

  for (let i of posts) {
    if (
      i.categories.includes(ONBOARDING_CATEGORY_ID) ||
      i.categories.includes(1)
    ) continue;

    const match = i.slug.match(/^session\d+/);
    const sessionSlug = match ? match[0] : i.slug;


    if (sessions.some(session => session.sessionid === sessionSlug)) continue;

    sessions.push({
      sessionid: sessionSlug,
      title: getCategoryNameFromID(i.categories[0], categories)
    });
  }
  
  sessions.sort((a, b) => {
  const numA = parseInt(a.sessionid.replace("session", ""), 10);
  const numB = parseInt(b.sessionid.replace("session", ""), 10);
  return numA - numB;
});


  function getStatus(sessionid: string) {
    if (!sessionid) return "neutral";
    const id = parseInt(sessionid.match(/\d+$/)[0]);
    const userid = parseInt(userProgress.match(/\d+$/)[0]);
    if (userid < id) {
      return "disabled";
    }
    else if (userid > id) {
      return "checked";
    }
    else {
      return "neutral";
    }
  }

  return (
    <>
    <ColourBlock/>
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          return (
            <Category title={session.title} subtitle={null} status={getStatus(session.sessionid)} route={`/sessions/${session.sessionid}`} key={key} />
          )
        })
      }
    </div>
    </>
  )
}

export default Sessions;
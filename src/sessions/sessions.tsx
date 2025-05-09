import { useOutletContext } from "react-router";
import Category from "@/components/category";
import { Link } from "react-router";
import { getCategoryNameFromID, getUserMeta } from "@/utils/WP";
import { useEffect, useState } from "react";

function Sessions() {
  const {posts, categories}:{posts:Array<any>, categories:Array<any>} = useOutletContext();
  const ACTIVITY_CATEGORY_ID = 26;
  let sessions: Array<any> = [];
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const userMeta = await getUserMeta();
        const progress = userMeta.meta.progress[0];
        setProgress(progress);
      } catch (error) {
        console.error("Failed to fetch user progress:", error);
        setProgress("session1");
      }
    }
    fetchProgress();
  }, []);

  for (let i of posts) {
    if (i.categories.includes(ACTIVITY_CATEGORY_ID) || i.categories.includes(1)) continue;
    const sessionSlug = i.slug.slice(0, 8);

    if (sessions.some(session => session.sessionid === sessionSlug)) continue;

    sessions.push({
      sessionid: sessionSlug,
      title: getCategoryNameFromID(i.categories[0], categories)
    });
  }

  if (!progress) {
    return <p>Loading Sessions...</p>
  }

  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        sessions.map((session, key) => {
          const isDisabled = progress<session.sessionid;
          return(
            <Link key={key} to={`/sessions/${session.sessionid}`}>
              <Category title={session.title} subtitle={null}/>
              {
                isDisabled && <p>disabled</p>
              }
            </Link>
            
          )
        })
      }
    </div>
  )
}

export default Sessions;
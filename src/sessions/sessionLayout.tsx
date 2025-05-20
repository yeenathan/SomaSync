import { Outlet, Link, useParams } from "react-router"; //children
import SectionHead from "@/components/sectionHead";
import { getPosts, getCategories, getCategoryNameFromID, getUserMeta } from "@/utils/WP";
import { useEffect, useState } from "react";
import BackButton from "@/components/ui/backButton";

const posts = await getPosts();
const categories = await getCategories();

function SessionLayout() {
  const params = useParams();
  const sessionid = params.sessionid;
  const [userProgress, setProgress] = useState(null);
 
  const header = sessionid?
    getCategoryNameFromID(posts.find((post:any) => post.slug.slice(0,8) === sessionid).categories[0], categories)
    : "Sessions";

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

  if (!userProgress) {
    return <p>Loading...</p>
  }

  return(
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      <header className="mb-4 flex flex-row gap-4 items-center">
        <BackButton/>
        <Link to="/sessions" className="text-3xl"><h2>Sessions</h2></Link>
      </header>
      <div className="flex flex-col mx-auto min-w-full h-full">
        <SectionHead header={header}/>
        <Outlet context={{posts, categories, userProgress, setProgress}}/>
      </div>
    </div>
  )
}

export default SessionLayout;
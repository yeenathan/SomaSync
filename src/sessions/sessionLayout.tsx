import { Outlet, Link, useParams, useNavigate, useLocation } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
import SectionHead from "@/components/sectionHead";
import { getPosts, getCategories, getCategoryNameFromID, getUserMeta } from "@/utils/WP";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const posts = await getPosts();
const categories = await getCategories();

function SessionLayout() {
  const params = useParams();
  const sessionid = params.sessionid;
  const [userProgress, setProgress] = useState(null);
  const location = useLocation();

  function getParentPath(pathname: string) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "/";
    if (segments[segments.length-2] === "chapter" || segments[segments.length-2] === "activity") {
      segments.pop();
      segments.pop();
    } else {
      segments.pop();
    }
    return "/" + segments.join("/");
  }

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
    <div className="p-8 min-w-full">
      <header className="pb-4 flex flex-row gap-4 items-center">
        <Link to={getParentPath(location.pathname)}>
          <ArrowBackIcon/>
        </Link>
        <Link to="/sessions" className="text-3xl"><h2>Sessions</h2></Link>
      </header>
      <div className="container flex flex-col mx-auto gap-8">
        <SectionHead header={header}/>
        <Outlet context={{posts, categories, userProgress, setProgress}}/>
      </div>
    </div>
  )
}

export default SessionLayout;
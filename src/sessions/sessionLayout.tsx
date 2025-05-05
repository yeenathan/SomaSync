import { Outlet, Link, useParams } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
import SectionHead from "@/components/sectionHead";
import { getPosts, getCategories, getCategoryNameFromID } from "@/utils/WP";

const posts = await getPosts();
const categories = await getCategories();

function SessionLayout() {
  const params = useParams();
  const sessionid = params.sessionid;

  const header = sessionid?
    getCategoryNameFromID(posts.find((post:any) => post.slug.slice(0,8) === sessionid).categories[0], categories)
    : "Sessions";

  return(
    <div className="flex flex-row min-h-screen">
      <NavigationRail/>
      <div className="p-8 min-w-full">
        <header className="pb-4">
          <Link to="/sessions" className="text-3xl"><h2>Sessions</h2></Link>
        </header>
        <div className="container flex flex-col mx-auto gap-8">
          <SectionHead header={header}/>
          <Outlet context={{posts, categories}}/>
        </div>
      </div>
    </div>
  )
}

export default SessionLayout;
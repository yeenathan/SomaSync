import { Outlet, useOutletContext, Link, useParams } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
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
          <Link to="/sessions"><h2>Sessions</h2></Link>
        </header>
        <div className="container flex flex-col mx-auto gap-8">
          <h1>{header}</h1>
          <img src="https://placehold.co/600x400" style={{height: 400}}/>
          <Outlet context={{posts, categories}}/>
        </div>
      </div>
    </div>
  )
}

export default SessionLayout;
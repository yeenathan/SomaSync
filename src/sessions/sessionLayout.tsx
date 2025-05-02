import { Outlet, Link } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
import { getPosts, getCategories } from "@/utils/WP";

const posts = await getPosts();
const categories = await getCategories();

function SessionLayout() {
  return(
    <div className="flex flex-row min-h-screen">
      <NavigationRail/>
      <div className="p-8 min-w-full">
        <header className="pb-4">
          <Link to="/sessions"><h1>Sessions</h1></Link>
        </header>
        <div className="container flex flex-col mx-auto gap-8">
          <img src="https://placehold.co/600x400" style={{height: 400}}/>
          <Outlet context={{posts, categories}}/>
        </div>
      </div>
    </div>
  )
}

export default SessionLayout;
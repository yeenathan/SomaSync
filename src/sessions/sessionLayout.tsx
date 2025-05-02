import { Outlet, Link } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
import { getPosts, getCategories } from "@/utils/WP";

const posts = await getPosts();
const categories = await getCategories();

function SessionLayout() {
  return(
    <div>
      <NavigationRail/>
      <div>
        <header>
          <Link to="/sessions">Sessions</Link>
        </header>
        <Outlet context={{posts, categories}}/>
      </div>
    </div>
  )
}

export default SessionLayout;
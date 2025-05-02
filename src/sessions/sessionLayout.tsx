import { Outlet, Link } from "react-router"; //children
import NavigationRail from "@/components/ui/navigationRail";
import { getPages } from "@/utils/WP";

const pages = await getPages();

function SessionLayout() {
  return(
    <div>
      <NavigationRail/>
      <div>
        <header>
          <Link to="/sessions">Sessions</Link>
        </header>
        <Outlet context={pages}/>
      </div>
    </div>
  )
}

export default SessionLayout;
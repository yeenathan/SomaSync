import NavigationRail from "../components/ui/navigationRail";
import Welcome from "../components/ui/welcome";
import MenuButtons from "../components/ui/menuButtons";
import MobileMenu from "../components/ui/mobileMenu";
import { Link } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function JournalEntry() {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="hidden md:block w-20 border-r">
        <NavigationRail />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-4 ">
        {/* heading ?*/}
        <div className="flex items-center pt-8 pl-5">
          <Link to={`/journal`}className="flex place-items-center">
          <ArrowBackIcon className="text-gray-700" /> 
            <h1 className="text-xl w-full pl-2 ">
              {" "}
              New Journal
              Entry
            </h1>
          </Link>
  
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between m-5 "></div>
      </div>
    </div>
  );
}

export default JournalEntry;

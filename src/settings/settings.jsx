import TextSize from "../utils/textSize";
import ThemeToggle from "../utils/themeToggle";
import { Outlet } from "react-router-dom";
import BackButton from "../components/ui/backButton";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      <header className="mb-4 flex flex-row gap-4 items-center">
        <BackButton />
        <Link to="/" className="text-3xl"><h2>Settings</h2></Link>
      </header>

      <div>
        <Link
         to="profile">
          Edit Profile
        </Link>
      </div>

      <div>
        <Link
        to="accessibility">
        Accessibility
        </Link>
      </div>
     
    </div>
  );
}

export default Settings;

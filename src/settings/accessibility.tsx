import ThemeToggle from "../utils/themeToggle";
import TextSize from "../utils/textSize";
import { Link } from "react-router";
import BackButton from "../components/ui/backButton";

function Accessibility() {
  return (
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      <header className="mb-4 flex flex-row gap-4 items-center">
        <BackButton />
        <Link to="/" className="text-3xl"><h2>Accessibility</h2></Link>
      </header>

      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col gap-2 items-center w-full max-w-sm">
          <p className="self-start font-bold">Theme</p>
          <div className="settingsButton flex h-20 bg-gray-100 rounded-xl px-4 w-full">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center w-full max-w-sm">
          <p className="self-start font-bold">Text Size</p>
          <div className="settingsButton flex items-center justify-center h-20 bg-gray-100 rounded-xl px-4 w-full">
            <TextSize />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Accessibility;
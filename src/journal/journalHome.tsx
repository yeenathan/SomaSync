import NavigationRail from "../components/ui/navigationRail";
import { Link } from "react-router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function JournalHome() {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="hidden md:block w-20 border-r">
        <NavigationRail />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-4 ">
        {/* heading ?*/}
        <div className="flex items-center pt-8 pl-5 ">
          <Link to={`/`} className="flex place-items-center">
            <ArrowBackIcon className="" />

            <h1 className=" pl-2 text-xl">Journal</h1>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between m-5">
          {/* Top part */}
          <div className="flex md:flex-row flex-col items-stretch gap-4">

            <Link
              to={`/journalEntry`}
              className="md:w-1/2 w-full h-[152px] md:aspect-[577/152] rounded-md bg-[#ECE6F0] order-1"
            >
              <CreateOutlinedIcon />
              Write new entry
            </Link>

            {/* Daily Intentions mobile */}
            <div className="flex flex-col mt-4 md:hidden order-2">
              <p>Daily Intentions</p>
              <div className="flex gap-2 h-[223px] w-full">
                <div className="basis-3/6 bg-black rounded-2xl"></div>
                <div className="basis-3/6 bg-black rounded-2xl"></div>
                <div className="basis-1/6 bg-black rounded-2xl"></div>
                <div className="basis-1/12 bg-black rounded-2xl"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-[152px] flex flex-col justify-between order-3">
              <p>How are you feeling today?</p>
              <div className="rounded-md bg-[#D9D9D9] flex-1 w-full"></div>
            </div>
          </div>

          {/* Daily Intentions desktop */}
          <div className="hidden md:flex flex-col mt-10">
            <p>Daily Intentions</p>
            <div className="flex gap-2 h-[223px] w-full">
              <div className="basis-3/6 bg-black rounded-2xl"></div>
              <div className="basis-3/6 bg-black rounded-2xl"></div>
              <div className="basis-1/6 bg-black rounded-2xl"></div>
              <div className="basis-1/12 bg-black rounded-2xl"></div>
            </div>
          </div>

          {/* Bottom part */}
          <div className="mt-10">
            <p>Module Reflections</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalHome;

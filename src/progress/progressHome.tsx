import NavigationRail from "../components/ui/navigationRail";
import { Link } from "react-router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

function ProgressHome() {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="hidden md:block w-20 border-r">
        <NavigationRail />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-4 ">
        {/* heading */}
        <div className="flex items-center pt-8 pl-5 ">
          <Link to={`/`} className="flex place-items-center">
            <ArrowBackIcon className="" />
            <h1 className=" pl-2 text-xl">Progress</h1>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between md:mr-12 m-4">
          {/* Top part */}
          <div className="flex md:flex-row flex-col items-stretch gap-4">
            {/* Almost Done - Mobile Only */}
            <div className="flex flex-col mt-4 md:hidden order-2">
              <div className="flex bg-black rounded-2xl h-[107px] w-full"></div>
            </div>

            {/* Main Banner */}
            <div className="w-full h-[205px] flex flex-col justify-between order-3">
              <div className="rounded-2xl bg-[#D9D9D9] flex-1 w-full"></div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row align-center gap-4 mt-10">

            {/* Completed Modules */}
            <div className="w-1/2 flex flex-col ml-4">
              <p className="mb-2">Completed Modules</p>
              <div className="flex gap-2 ">
              
              </div>
            </div>
            {/** Almost Done */}
            <div className="w-1/2 flex flex-col">
              <div className="flex gap-2 h-[324px] w-full">
                <div className="flex-1 bg-black rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Mobile Only - Completed Modules*/}
          <div className="mt-10 md:hidden">
            <p>Completed Modules</p>
            <div className="flex gap-2 ">
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProgressHome;

import NavigationRail from "../components/ui/navigationRail";
import { Link } from "react-router";
import CompletedModule from "@/components/ui/completedModule";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { CircularProgress } from '@mui/material';
import BackButton from "@/components/ui/backButton";
function ProgressHome() {
  return (
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-4 ">
        {/* heading */}
        <header className="mb-4 flex flex-row gap-4 items-center">
          <BackButton />
          <Link to="/sessions" className="text-3xl"><h2>Progress</h2></Link>
        </header>

        {/* Main Content */}
        <div className="flex flex-col justify-between md:mr-12 m-4">
          {/* Top part */}
          <div className="flex md:flex-row flex-col items-stretch gap-4">
            {/* Almost Done - Mobile Only */}
            <div className="flex flex-col mt-4 md:hidden order-2">
              <div className="flex bg-red-200 rounded-2xl h-[107px] w-full relative">
                <div className="absolute bottom-2 left-3">
                  <p className="text-sm font-semibold">You are almost done!</p>
                  <p className="text-sm">00/00 Modules Completed.</p>
                </div>
              </div>
            </div>


            {/* Main Banner */}
            <div className="w-full md:h-[312px] h-[205px] flex flex-col justify-between order-3">
              <div className="relative rounded-2xl bg-[#D9D9D9] flex-1 w-full">
                <div className="absolute md:bottom-4 md:left-4 bottom-2 left-2">
                  <p className=" md:text-3xl text-sm font-semibold mb-2">Session 1: SomaSync Overview</p>
                  <div className="flex flex-row items-center gap-2 mt-1">
                    <CircularProgress className="" variant="determinate" value={54} />
                    <p className="text-sm">54% Completed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row align-center gap-4 mt-10">
            {/* Completed Modules */}
            <div className="w-1/2 flex flex-col ml-4">
              <p className="mb-2 text-xl mb-6">Completed Modules</p>
              <div className="flex flex-col">
                <CompletedModule />
              </div>
            </div>
            {/** Almost Done */}
            <div className="w-1/2 flex flex-col">
              <div className="flex gap-2 h-[324px] w-full">
                <div className="flex-1 bg-red-200 rounded-2xl relative">
                  <div className="absolute bottom-4 left-4">
                    <p className=" font-semibold text-3xl">You are almost done!</p>
                    <p className="text-sm">00/00 Modules Completed.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Only - Completed Modules*/}
          <div className="mt-10 md:hidden">
            <p>Completed Modules</p>
            <div className="flex flex-col ">
              <CompletedModule />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProgressHome;

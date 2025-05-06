import NavigationRail from "../components/ui/navigationRail";
import MobileMenu from "../components/ui/mobileMenu";

function ProgressHome() {
  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <div className="hidden md:block w-20 border-r">
        <NavigationRail />
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col gap-4 ">

        {/* heading ?*/}
        <div className="flex justify-between items-center pt-8 pl-5">
          <MobileMenu />
          {/* desktop */}
          <h1 className="text-xl w-full pl-2 md:visible invisible">Journal</h1>
          <h1 className="text-xl pt-8 pl-12 md:invisible visible ">Journal</h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-between m-5 ">

          {/* Top part*/}
          <div className="flex flex-row items-stretch gap-4">
            <button className="w-1/2 h-[152px] aspect-[577/152] rounded-md bg-[#ECE6F0]">
              Write new entry
            </button>

            <div className="w-1/2 h-[152px] flex flex-col justify-between ">
              <p>How are you feeling today?</p>
              <div className="rounded-md bg-[#D9D9D9] flex-1 w-full"></div>
            </div>
          </div>


          {/* Middle part*/}
          <div className="flex flex-col mt-10">
            <p>Daily Intentions</p>

            {/*carousel */}
            <div className="flex gap-2 h-[223px] w-full">
              <div className="basis-3/6 bg-black rounded-2xl"></div>
              <div className="basis-3/6 bg-black rounded-2xl"></div>
              <div className="basis-1/6 bg-black rounded-2xl"></div>
              <div className="basis-1/12 bg-black rounded-2xl"></div>
            </div>

          </div>

          {/* Bottom part*/}
          <div className="mt-10">
            <button>Module Reflections</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressHome; 
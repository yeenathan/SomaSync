"use client";

import Welcome from "./components/ui/welcome";
import MenuButtons from "./components/ui/menuButtons";
import MobileMenu from "./components/ui/mobileMenu";

function App() {

  return (
    <div className="flex flex-col gap-4 h-full w-full p-8 md:justify-between">
      <div className="flex justify-between items-center">
        <MobileMenu />
        <h1 className="text-xl w-full">SomaSync Home</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-between m-5 lg:m-0">
        <div className="flex-1 flex flex-col gap-4">
          <Welcome />
          <MenuButtons />
        </div>
      </div>
    </div>
  );
}

export default App;

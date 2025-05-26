"use client";

import Welcome from "./components/ui/welcome";
import MenuButtons from "./components/ui/menuButtons";
import MobileOverlayMenu from "./components/ui/mobileOverlayMenu";

function App() {

  return (
    <div className="flex flex-col gap-4 h-full w-full p-2 md:justify-between">
      <div className="flex justify-between items-center">
 
        <h1 className="text-xl w-full pl-2 md:p-0">SomaSync Home</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-between m-2 lg:m-0">
        <div className="flex-1 flex flex-col gap-4">
          <Welcome />
          <MenuButtons />
        </div>
      </div>
    </div>
  );
}

export default App;

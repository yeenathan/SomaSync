"use client";

import Welcome from "./components/ui/welcome";
import MenuButtons from "./components/ui/menuButtons";

function App() {

  return (
    <div className="flex flex-col gap-4 h-full w-full p-2 md:justify-between">
      <div className="flex flex-row gap-3 md:mt-4 items-center md:pl-2">
        <img src="/somasync-logo.png" className="h-6 md:h-10"/>
        <h1 className="text-xl md:text-3xl w-full pl-2 md:p-0">SomaSync Home</h1>
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

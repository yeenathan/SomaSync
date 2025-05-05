"use client";

import { Button } from "./components/ui/button";
import NavigationRail from "./components/ui/navigationRail";
import Welcome from "./components/ui/welcome";
import MenuButtons from "./components/ui/menuButtons";
import MobileMenu from "./components/ui/mobileMenu";
import { useState } from "react";

function App() {

  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <NavigationRail />

      {/* Main Section */}
      <div className=" flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center pt-8 pl-5">
          <MobileMenu />
          {/**Desktop */}
          <h1 className="text-xl w-full pl-2  md:mb-24 mb-0">SomaSync Home</h1>
          {/** Mobile */}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between m-5 lg:m-0">
          <div className="relative flex-1 flex flex-col   ">
            <div className="mb-3 mt-3 md:mb-0 ">
              <Welcome />
            </div>

            {/* MenuButtons */}
            <div className="w-full md:max-w-[80%] mx-auto md:mx-0 mt-6 md:mt-auto">
              <MenuButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

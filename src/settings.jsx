import TextSize from "./components/ui/textSize";
import NavigationRail from "./components/ui/navigationRail";

function Settings() {
  return (
    <div className="flex  h-screen">
      <div className="hidden md:block w-20 border-r">
        <NavigationRail />
      </div>
      <TextSize />
    </div>
  );
}

export default Settings;

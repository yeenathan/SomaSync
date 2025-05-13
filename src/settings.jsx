import TextSize from "./components/ui/textSize";
import ThemeToggle from "./utils/themeToggle";

function Settings() {
  return (
    <div className="flex  h-screen">
      <TextSize />
      <ThemeToggle/>
    </div>
  );
}

export default Settings;

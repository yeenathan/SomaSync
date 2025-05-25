import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const isDark = theme === "dark";

  return (
    <div className="flex flex-row items-center w-full gap-4">
      <p className="font-medium">Light/Dark</p>
      <div className="ml-auto">
        <button
          onClick={toggleTheme}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              isDark ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;

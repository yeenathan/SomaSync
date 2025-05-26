import { useFontSize } from "../components/fontSizeContext";
import { useState, useEffect } from "react";

export default function TextSize() {
  const { fontScale, setFontScale } = useFontSize();


  const scaleMap = { small: 0, medium: 1, large: 2 };
  const reverseMap = ["small", "medium", "large"];

  const [value, setValue] = useState(scaleMap[fontScale] || 1);

  useEffect(() => {
    setFontScale(reverseMap[value]);
  }, [value]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full appearance-none h-2 bg-gray-300 rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-sm ">
        <span className={value === 0 ? "font-bold " : ""}>Small</span>
        <span className={value === 1 ? "font-bold " : ""}>Medium</span>
        <span className={value === 2 ? "font-bold " : ""}>Large</span>
      </div>
    </div>
  );
}

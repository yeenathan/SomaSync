import { useFontSize } from "../fontSizeContext";

export default function TextSize() {
  const { fontScale, setFontScale } = useFontSize();

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setFontScale("small")} className="px-2 py-1 rounded bg-gray-200">
        Small
      </button>
      <button onClick={() => setFontScale("medium")} className="px-2 py-1 rounded bg-gray-200">
        Medium
      </button>
      <button onClick={() => setFontScale("large")} className="px-2 py-1 rounded bg-gray-200">
        Large
      </button>
    </div>
  );
}



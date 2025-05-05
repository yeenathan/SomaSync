import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type FontScale = "small" | "medium" | "large";

const scaleMap: Record<FontScale, string> = {
  small: "14px",
  medium: "16px", // default
  large: "18px",
};

const FontSizeContext = createContext<{
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
} | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScale] = useState<FontScale>("medium");

  useEffect(() => {
    document.documentElement.style.fontSize = scaleMap[fontScale];
  }, [fontScale]);

  return (
    <FontSizeContext.Provider value={{ fontScale, setFontScale }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const ctx = useContext(FontSizeContext);
  if (!ctx) throw new Error("useFontSize must be used inside FontSizeProvider");
  return ctx;
}

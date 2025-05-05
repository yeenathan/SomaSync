import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router";
import Sessions from "@/sessions/sessions.tsx";
import SessionLayout from "@/sessions/sessionLayout.tsx";
import SessionHome from "@/sessions/sessionHome.tsx";
import SessionChapter from "@/sessions/sessionContent.tsx";
import JournalHome from "@/journal/journalHome.tsx";
import JournalEntry from "./journal/journalEntry.tsx";
import Settings from "./settings";

import { FontSizeProvider } from "./components/fontSizeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <FontSizeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/journal" element={<JournalHome />} />
        <Route path="/journalEntry" element={<JournalEntry />} />
        <Route path="sessions" element={<SessionLayout />}>
          <Route index element={<Sessions />} />
          <Route path="/sessions/:sessionid" element={<SessionHome />} />
          <Route
            path="/sessions/:sessionid/:chapterid"
            element={<SessionChapter />}
          />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </FontSizeProvider>
);

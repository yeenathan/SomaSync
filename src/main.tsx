import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router";
import Sessions from "@/sessions/sessions.tsx";
import SessionLayout from "@/sessions/sessionLayout.tsx";
import SessionHome from "@/sessions/sessionHome.tsx";
import SessionContent from "@/sessions/sessionContent.tsx";
import SessionActivity from "./sessions/sessionActivities.tsx";
import JournalHome from "@/journal/journalHome.tsx";
import JournalEntry from "./journal/journalEntry.tsx";
import ProgressHome from "./progress/progressHome.tsx";
import Settings from "./settings";

import { FontSizeProvider } from "./components/fontSizeContext.tsx";
import { AuthContextProvider } from "./utils/authContext.tsx";
import { LoginPage, RegisterPage } from "./registerLogin.tsx";
import PrivateRouteLayout from "./utils/privateRouteLayout.tsx";
import Onboarding from "./onboarding.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <FontSizeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<PrivateRouteLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/onboarding" element={<Onboarding />}/>
            <Route path="/journal" element={<JournalHome />} />
            <Route path="/journalEntry" element={<JournalEntry />} />
            <Route path="/progress" element={<ProgressHome />} />

            <Route path="sessions" element={<SessionLayout />}>
              <Route index element={<Sessions />} />
              <Route path=":sessionid" element={<SessionHome />} />
              <Route path=":sessionid/chapter/:chapterid" element={<SessionContent />} />
              <Route path=":sessionid/activity/:activityid" element={<SessionActivity />} />
            </Route>

            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FontSizeProvider>
  </AuthContextProvider>
);

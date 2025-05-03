// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router';
import Sessions from '@/sessions/sessions.tsx';
import SessionLayout from '@/sessions/sessionLayout.tsx';
import SessionHome from '@/sessions/sessionHome.tsx';
import SessionChapter from '@/sessions/sessionChapter.tsx';
import JournalHome from '@/journal/journalHome.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/journal' element={<JournalHome/>}/>
      <Route path='sessions' element={<SessionLayout/>}>
        <Route index element={<Sessions/>}/>
        <Route path='/sessions/:sessionid' element={<SessionHome/>}/>
        <Route path='/sessions/:sessionid/:chapterid' element={<SessionChapter/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

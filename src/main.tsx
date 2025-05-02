// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router';
import SessionsHome from '@/sessions/sessionsHome.tsx';
import SessionLayout from '@/sessions/sessionLayout.tsx';
import Session from '@/sessions/session.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='sessions' element={<SessionLayout/>}>
        <Route index element={<SessionsHome/>}/>
        <Route path=':sessionid' element={<Session/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

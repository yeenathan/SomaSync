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
      <Route path='sessions'>
        <Route index element={<SessionsHome/>}/>
        <Route element={<SessionLayout/>}>
          <Route path=':sessionid' element={<Session/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

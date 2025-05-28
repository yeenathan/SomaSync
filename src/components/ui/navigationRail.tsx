import React from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TodayIcon from '@mui/icons-material/Today';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

import MobileOverlayMenu from './mobileOverlayMenu';

import { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '@/utils/authContext';

const iconMap: Record<string, React.ReactNode> = {
  Home: <HomeIcon className="w-6 h-6 mb-1" />,
  Sessions: <FormatListBulletedIcon className="w-6 h-6 mb-1" />,
  Progress: <StarOutlineIcon className="w-6 h-6 mb-1" />,
  Journal: <TodayIcon className="w-6 h-6 mb-1" />,
  Settings: <SettingsIcon className="w-6 h-6 mb-1" />,
};

const items = [
  { label: 'Home', path: '/' },
  { label: 'Sessions', path: '/sessions' },
  // { label: 'Progress', path: '/progress' },
  // { label: 'Journal', path: '/journal' },
  { label: 'Settings', path: '/settings' },
];

const NavigationRail = () => {
  const { setUnauthorized } = useAuth();
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    setUnauthorized();
    navigate("/");
  }

  return (
    <>
      {/* mobile */}
      <div className="md:hidden py-2 px-4">
        <button onClick={() => setShowOverlay(true)} aria-label="Open Menu">
          <MenuIcon className="w-6 h-6 text-black menuIcons" />
        </button>
      </div>

      <div className="navigationRail hidden md:flex fixed top-0 left-0 h-screen w-20 flex-col justify-between py-11 bg-white shadow-md z-50">


        <div className="w-20 flex flex-col items-center">
          <button onClick={() => setShowOverlay(true)} aria-label="Open Menu">
            <MenuIcon className="w-6 h-6 text-black menuIcons mb-6" />
          </button>
          <div className="mt-4 space-y-6">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="menuIcons flex flex-col items-center w-10 h-10 text-sm  hover:text-[#3C8F61] hover:opacity-[50] transition hover:rounded-md  "
                style={{cursor: "pointer"}}
              >
                {iconMap[item.label]}
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleClick} className='menuIcons flex flex-col items-center text-sm  hover:text-[#3C8F61] hover:opacity-[50] transition hover:rounded-md ' style={{ cursor: "pointer" }}>
          <LogoutIcon />
          <p>Log Out</p>
        </button>
      </div>

      {showOverlay && (
        <MobileOverlayMenu onClose={() => setShowOverlay(false)} />
      )}

    </>
  );
};

export default NavigationRail;
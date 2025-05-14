import React from 'react';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router';
import { useAuth } from '@/utils/authContext';

const items = [
  { label: 'Sessions', path: '/sessions' },
  { label: 'Progress', path: '/progress' },
  { label: 'Journal', path: '/journal' },
  { label: 'Settings', path: '/settings' },
];

const NavigationRail = () => {
  const {setUnauthorized} = useAuth();  
  const navigate = useNavigate();
  function handleClick() {
    setUnauthorized();
    navigate("/");
  }

  return (
    <div className="navigationRail hidden md:flex w-20 min-h-full flex-col justify-between py-11 ">
      <div className="w-20 flex flex-col items-center">
        <Link to="/" className="p-2 rounded hover:bg-gray-100" aria-label="Menu">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </Link>
      <div className="mt-4 space-y-6">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center w-10 h-10 text-sm text-gray-500 hover:text-blue-600 transition"
          >
            <StarOutlineIcon className="w-6 h-6 mb-1" />
            {item.label}
          </button>
        ))}
        </div>
      </div>
      <button onClick={handleClick} style={{cursor: "pointer"}}>log out</button>
    </div>
  );
};

export default NavigationRail;
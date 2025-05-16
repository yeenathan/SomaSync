import React from 'react';
import { useNavigate } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TodayIcon from '@mui/icons-material/Today';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
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
  { label: 'Progress', path: '/progress' },
  // { label: 'Journal', path: '/journal' },
  { label: 'Settings', path: '/settings' },
];

const MobileOverlayMenu = ({ onClose }: { onClose: () => void }) => {
  const { setUnauthorized } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  const handleLogout = () => {
    setUnauthorized();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col p-6 md:hidden">
      <div className="flex justify-end">
        <button onClick={onClose} aria-label="Close menu">
          <CloseIcon className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      <div className="flex-1 mt-10 space-y-6 text-lg">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigate(item.path)}
            className="flex items-center text-gray-700 hover:text-blue-600 transition"
          >
            {iconMap[item.label]}
            {item.label}
          </button>
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center text-gray-700 hover:text-red-500 transition"
        >
          <LogoutIcon className="w-6 h-6 mr-3" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default MobileOverlayMenu;

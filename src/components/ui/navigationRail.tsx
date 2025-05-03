import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const items = [ 
  {label: 'Sessions', path: '/sessions'},
  {label: 'Journal', path: '/journal'},
  {label: 'Settings', path: '/settings'},
];

const NavigationRail = () => {
const navigate = useNavigate();

  return (
    <div className="w-20 flex flex-col items-center py-11 ">
      <button className="p-2 rounded hover:bg-gray-100" aria-label="Menu">
        <MenuIcon className="w-6 h-6 text-gray-700" />
      </button>


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
  );
};

export default NavigationRail;
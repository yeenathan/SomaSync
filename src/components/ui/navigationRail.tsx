import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router';

const items = ['Sessions', 'Journal', 'Settings'];

const NavigationRail = () => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className="hidden md:block w-20 min-h-full border-r">
      <div className="w-20 flex flex-col items-center py-11 ">
        <Link to="/" className="p-2 rounded hover:bg-gray-100" aria-label="Menu">
          <MenuIcon className="w-6 h-6 text-gray-700" />
        </Link>


        <div className="mt-4 space-y-6">
          {items.map((label) => (
            <button
              key={label}
              onClick={() => setSelectedItem(label)} 
              className={`flex flex-col items-center w-10 h-10 text-sm transition ${
                selectedItem === label
                  ? 'text-blue-600 bg-blue-50 rounded-md font-bold'
                  : 'text-gray-500'
              } `}
            >
              <StarOutlineIcon className="w-6 h-6 mb-1" />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationRail;
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="block md:hidden p-2 text-black"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      
    </>
  );
}

export default MobileMenu;

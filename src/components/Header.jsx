import React from 'react';
import './Header.css'

const listElements = ['First', 'Second', 'Third']

const Header = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
      <img src="" alt="Logo placeholder" width={14} height={18} />

        <div className="flex flex-1 justify-center">
          {listElements.map((nav) => (
              <div key={nav} className="px-5 text-sm cursor-pointer text-white">
                {nav}
              </div>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

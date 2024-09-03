import { MenuBarItems } from '@/utils/data';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PopupNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="sm:hidden flex justify-center items-center bg-[#1F0C4C] rounded-full p-4 fixed right-5 bottom-10 z-50"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white " />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Menu */}
      <div
        className={`${
          isOpen ? 'translate-y-0' : 'translate-y-full rounded-t-0 border-t-0'
        } transition-transform duration-300 ease-in-out fixed bottom-0 left-0 w-full h-[70vh] backdrop-filter backdrop-blur-lg bg-[#1F0C4C]/10 z-40 flex flex-col items-start justify-start px-10 pt-2 rounded-t-xl border-t`}
      >
        <ul className="text-[#E5DDFC] text-lg mt-4 space-y-4 w-full">
          <li className="hover:text-[#BC7DFE] flex items-center w-full justify-between cursor-pointer group">
            Platform
            <ChevronRight className="w-5 h-5 mx-2 group-hover:translate-x-1 transition-all duration-200 ease-in-out" />
          </li>
          {MenuBarItems.map((item, i) => (
            <li key={i} className="hover:text-[#BC7DFE] cursor-pointer w-2/6">
              {item}
            </li>
          ))}
          <li className="hover:text-[#BC7DFE] pt-6 cursor-pointer">Log in</li>
          <li className="hover:text-[#BC7DFE] cursor-pointer">Get started</li>
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )}
    </div>
  );
}

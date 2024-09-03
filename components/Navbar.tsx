'use client';
import Image from 'next/image';
import Logo from '../public/vector-shift-logo.png';
import { ChevronDown } from 'lucide-react';
import { navItems } from '@/utils/data';
import { poppins } from '@/utils/font';

export default function Navbar() {
  return (
    <nav
      className={`${poppins.className} w-full h-10 bg-transparent text-white flex sm:justify-between sm:px-44  `}
    >
      <div className="sm:w-1/6 w-full flex items-center justify-center">
        <Image src={Logo} alt="logo" className="sm:w-6 sm:h-6 w-5 h-5 mr-2" />
        <p className="font-normal sm:text-md text-sm">VectorShift</p>
      </div>
      <div className="w-5/6 sm:flex hidden items-center justify-end ">
        <p className="text-[15px] px-4 flex items-center cursor-pointer hover:text-[#BC7DFE]">
          Platform <ChevronDown className="w-5 h-5 mx-2" />
        </p>
        {navItems.map((item, i) => (
          <p
            key={i}
            className="text-[15px] px-4 hover:text-[#BC7DFE] cursor-pointer"
          >
            {item}
          </p>
        ))}
        <button className="bg-gradient-to-r from-[#4B2398] via-[#4169AB] to-[#2E7DD6] px-5 py-2 text-[15px] rounded-full mx-2">
          Get started
        </button>
      </div>
    </nav>
  );
}

"use client"
import Image from 'next/image';
import { useState } from 'react';
import { LuBell, LuMenu, LuX } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

const NavBar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Discover', href: '#' },
    { name: 'My Projects', href: '#' },
    { name: 'Payments', href: '#' },
  ];

  return (
    <nav className="bg-white  ">
      <div className="">
        <div className="flex justify-between items-center  h-20">
          <div className="flex items-center px-14">
            <div className="flex-shrink-0">
              <Image src={logo} alt='logo' width={60} className='' />
            </div>
            <div className="hidden md:flex ml-20
             space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-900 font-semibold text-[15px]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-7 px-10  mt-2 ">
            <TbMessages className="text-2xl text-slate-600 cursor-pointer" />
            <LuBell className="text-2xl text-slate-700 cursor-pointer" />
            <div className="relative  flex items-center justify-center">
              <button onClick={() => setProfileOpen(!isProfileOpen)}>
                <Image
                  src={profile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white border rounded shadow-xl z-10">
                  {['Profile', 'Settings', 'Logout'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <LuX className="block h-6 w-6" />
              ) : (
                <LuMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Image
                  src={profile}
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">User Name</div>
                <div className="text-sm font-medium text-gray-500">user@example.com</div>
              </div>
              <div className="ml-auto flex space-x-4">
                <TbMessages className="text-xl text-slate-500 cursor-pointer" />
                <LuBell className="text-xl text-slate-500 cursor-pointer" />
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              {['Profile', 'Settings', 'Logout'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
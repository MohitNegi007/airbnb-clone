import React from "react";
import Image from "next//image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky w-full top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/images/airbnbLogo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle-search box */}

      <div
        className="flex items-center rounded-full md:border-2 
       py-2 md:shadow-sm
      "
      >
        <input
          className="pl-5 bg-transparent outline-none
          flex-grow text-gray-600 placeholder-gray-400
          "
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full
         p-2 cursor-pointer md:mx-2
        "
        />
      </div>

      {/* right */}
      <div
        className="flex items-center space-x-4 justify-end
      text-gray-500
      "
      >
        <p className="hidden md:inline cursor-pointer">Become a host </p>
        <GlobeAltIcon className="h-6" />
        <div className="flex itemss-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

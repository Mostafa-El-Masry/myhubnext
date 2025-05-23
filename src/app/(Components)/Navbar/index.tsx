"use client";
import { Bell, Menu, Settings, Sun } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import myGif from '@/src/app/gif.gif';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/*Left Side*/}
      <div className="flex justify-between items-center gap-5">
        <button
          className="p-3 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500 " size={20} />
          </div>
        </div>
      </div>
      {/*Right Side*/}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 rounded-full bg-red-400">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">
            <Image className="flex items-center pt-2 hover:scale-800" src={myGif} width="200" height="200" alt=""/>
            </div>
            <span className="font-semibold">Mostafa</span>
          </div>
        </div>
        <Link href="" />
        <Settings className="cursor-pointer text-gray-500" size={24} />
      </div>
    </div>
  );
};

export default Navbar;

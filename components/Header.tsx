"use client";

import { tommy } from "@/app/fonts";
import {
  Twitter,
  UserRound,
  Instagram,
  ShoppingBag,
  Search,
  ChevronDown,
  Menu,
  X,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`w-full h-h-26 bg-neutral-900 text-white text-sm ${tommy.className} `}
    >
      <nav className="flex items-center px-0 md:px-10 justify-between  w-full h-full">
        <div onClick={() => setIsOpen(!isOpen)} className="w-1/6 md:hidden p-4">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
        <div
          className={`absolute w-screen h-[calc(100dvh-6.25rem)] py-10  px-5 z-40	 flex md:hidden flex-col justify-between bg-neutral-900 ${
            isOpen ? "bottom-0" : "-bottom-32 opacity-0"
          } duration-500  transition-all`}
        >
          <ul className="h-full flex  md:hidden flex-col gap-8 text-xl font-bold">
            <li>brands</li>
            <li>shop</li>
            <li>premium</li>
            <li>gift cards</li>
            <li>become an affiliate</li>
            <span className="flex gap-2">
              <li className="hover:text-yellow-500 cursor-pointer">
                <Twitter size={20} />
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                <Instagram size={20} />
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                <Facebook size={20} />
              </li>
            </span>
          </ul>
          <span>
            {" "}
            <UserRound size={20} className="inline mr-3" />
            Login
          </span>
        </div>
        <ul className="font-bold hidden md:flex gap-8 items-center">
          <li className="group transition duration-300 hover:text-yellow-500 cursor-pointer">
            brands
            <ChevronDown className="inline ml-1" size={15} />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500"></span>
          </li>
          <li className="group transition duration-300 hover:text-yellow-500 cursor-pointer">
            shop
            <ChevronDown className="inline ml-1" size={15} />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500"></span>
          </li>
          <li className="group transition duration-300 hover:text-yellow-500 cursor-pointer">
            premium
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500"></span>
          </li>
          <li className="group transition duration-300 hover:text-yellow-500 cursor-pointer">
            gift cards
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500"></span>
          </li>
        </ul>
        <div className="sm: w-3/3">
          <Image
            className="w-32"
            src="/brava_logo.webp"
            alt="bravaland.com"
            title="bravaland.com"
            width={150}
            height={100}
          />
        </div>
        <span className="flex gap-2 w-1/6 md:hidden">
          <Search size={20} />
          <ShoppingBag size={20} />
        </span>
        <ul className="font-bold hidden md:flex gap-8 items-center">
          <li className="group transition duration-300 hover:text-yellow-500 cursor-pointer">
            become an affiliate
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-500"></span>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Twitter size={20} />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <UserRound size={20} />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Instagram size={20} />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Search size={20} />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <ShoppingBag size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

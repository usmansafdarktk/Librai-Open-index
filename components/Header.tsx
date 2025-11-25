"use client"; // Required for state (useState)

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('home');

  // Helper function for link styles
  const getLinkClass = (name: string) => {
    const baseClass = "transition-colors duration-200 cursor-pointer";
    const activeClass = "text-[#5b62ff]"; // Active Blue
    const inactiveClass = "hover:text-[#5b62ff] text-slate-700"; // Default Dark Grey

    return activeLink === name ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return (
    /* HEADER CONTAINER */
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] border border-gray-400 max-w-5xl bg-white shadow-xl shadow-blue-900/10 rounded-full px-4 md:px-8 py-2.5 md:py-3 flex items-center justify-between transition-all duration-300">
      
      {/* LEFT: Logo Area */}
      <div className="flex items-center">
        <Link 
          href="/" 
          className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition"
          onClick={() => setActiveLink('home')}
        >
          {/* Public Icon - Hidden on smaller screens (< sm) */}
          <Image 
            src="/librai-icon-dark.png" 
            alt="LibrAI Logo" 
            width={100} 
            height={100} 
            className="object-contain hidden sm:block"
          />
          
          {/* Vertical Divider - Hidden on smaller screens */}
          <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
          
          {/* "Open Index" - Always visible (removed 'hidden sm:block') */}
          <span className="text-slate-900 font-bold text-xl md:text-2xl tracking-tight whitespace-nowrap">
            Open Index
          </span>
        </Link>
      </div>

      {/* RIGHT: Navigation */}
      <nav className="flex items-center gap-4 md:gap-8 text-sm md:text-base font-bold">
        
        <Link 
          href="/" 
          className={getLinkClass('home')}
          onClick={() => setActiveLink('home')}
        >
          Home
        </Link>
        
        <Link 
          href="#about" 
          className={getLinkClass('about')}
          onClick={() => setActiveLink('about')}
        >
          About
        </Link>

        <Link 
          href="#datasets" 
          className={getLinkClass('datasets')}
          onClick={() => setActiveLink('datasets')}
        >
          Datasets
        </Link>

      </nav>

    </header>
  );
}
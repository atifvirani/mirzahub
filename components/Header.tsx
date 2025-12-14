import React from 'react';
import { Search, Menu, Upload, User, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-[#1b1b1b] h-16 flex items-center justify-between px-4 md:px-8 shadow-lg">
      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-[#ff9000] transition-colors md:hidden">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-1 cursor-pointer select-none group">
          <span className="text-white text-2xl font-bold tracking-tighter group-hover:text-gray-200 transition-colors">
            MIRZA
          </span>
          <span className="bg-[#ff9000] text-black text-2xl font-bold tracking-tighter px-1.5 rounded-[4px] group-hover:bg-[#ffae00] transition-colors">
            HUB
          </span>
        </div>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 ml-4 text-sm font-semibold text-white">
            <span className="hover:text-[#ff9000] cursor-pointer transition-colors">Home</span>
            <span className="hover:text-[#ff9000] cursor-pointer transition-colors">Top Rated</span>
            <span className="hover:text-[#ff9000] cursor-pointer transition-colors">Community</span>
            <span className="hover:text-[#ff9000] cursor-pointer transition-colors">Premium</span>
        </nav>
      </div>

      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8">
        <div className="relative w-full group">
          <input
            type="text"
            placeholder="Search videos..."
            disabled
            className="w-full bg-[#1b1b1b] text-white border border-[#333] rounded-full py-2 px-10 focus:outline-none focus:border-[#ff9000] transition-all placeholder-gray-500 cursor-not-allowed"
          />
          <div className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-gray-400">
             <Search size={18} />
          </div>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 text-white text-sm font-semibold">
           <div className="flex items-center gap-1 hover:text-[#ff9000] cursor-pointer transition-colors">
             <Upload size={18} />
             <span>Upload</span>
           </div>
           <div className="w-px h-6 bg-[#333]"></div>
           <span className="hover:text-[#ff9000] cursor-pointer transition-colors">Log In</span>
           <button className="bg-[#ff9000] text-black px-4 py-1.5 rounded font-bold hover:bg-[#ffae00] transition-colors">
             Sign Up
           </button>
        </div>
        
        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4 text-white">
            <Search size={22} />
            <User size={22} />
        </div>
      </div>
    </header>
  );
};

export default Header;
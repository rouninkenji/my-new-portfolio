import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-center py-6">
      <div className="bg-[#12141c]/80 backdrop-blur-md border border-gray-800 px-8 py-3 rounded-full flex items-center justify-center gap-8 shadow-xl">
        <a href="#home" className="text-teal-400 font-medium text-xl hover:text-white transition-colors">Home</a>
        <a href="#skills" className="text-gray-300 font-medium text-xl hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="text-gray-300 font-medium text-xl hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="text-gray-300 font-medium text-xl hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};
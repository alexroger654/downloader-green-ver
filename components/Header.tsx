'use client';

import { Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
            <Download className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            VideoDownloader
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
            How it Works
          </a>
          <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
            Features
          </a>
          <a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
            FAQ
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
            Testimonials
          </a>
        </nav>
      </div>
    </header>
  );
}
'use client';

import { useState } from 'react';
import { Download, Play, Star, CheckCircle, HelpCircle, Users } from 'lucide-react';
import Header from '@/components/Header';
import DownloadSection from '@/components/DownloadSection';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <DownloadSection />
        <HowItWorks />
        <Features />
        <FAQ />
        <Testimonials />
        
        {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-400">
          <div className="max-w-6xl mx-auto">
            <p>&copy; 2025 VideoDownloader. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
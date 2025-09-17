'use client';

import { useState } from 'react';
import { Download, Link, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SocialMediaButtons from './SocialMediaButtons';
import VideoPreviewModal from './VideoPreviewModal';

export default function DownloadSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!videoUrl.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowPreview(true);
    }, 2000);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Download
            </span>
            <br />
            <span className="text-white">Any Video</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download videos from your favorite social media platforms in seconds. 
            High quality, fast, and completely free.
          </p>
        </div>

        {/* Social Media Platform Selection */}
        <div className="mb-8">
          <SocialMediaButtons 
            selectedPlatform={selectedPlatform}
            onPlatformSelect={setSelectedPlatform}
          />
        </div>

        {/* Download Form */}
        <div className="backdrop-blur-xl bg-black/40 rounded-3xl p-8 border border-green-500/20 shadow-2xl shadow-green-500/10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="url"
                placeholder="Paste your video URL here..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="pl-12 h-14 bg-black/20 border-green-500/30 text-white placeholder:text-gray-400 rounded-2xl text-lg focus:border-green-400 focus:ring-green-400/20"
              />
            </div>
            <Button
              onClick={handleDownload}
              disabled={!videoUrl.trim() || isLoading}
              className="h-14 px-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/25 hover:shadow-green-400/30"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </div>
              )}
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            Supports: MP4, AVI, MOV formats • Quality: 144p to 4K
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-slate-400">Videos Downloaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-gray-400">Platforms Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Free Forever</div>
          </div>
        </div>
      </div>

      <VideoPreviewModal 
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        platform={selectedPlatform}
      />
    </section>
  );
}
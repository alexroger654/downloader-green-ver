'use client';

import { useState } from 'react';
import { X, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: string;
}

const qualityOptions = [
  { label: '4K (2160p)', size: '~500MB', quality: '4k' },
  { label: '1080p HD', size: '~200MB', quality: '1080p' },
  { label: '720p HD', size: '~100MB', quality: '720p' },
  { label: '360p', size: '~50MB', quality: '360p' },
  { label: '144p', size: '~20MB', quality: '144p' },
];

export default function VideoPreviewModal({ isOpen, onClose, platform }: VideoPreviewModalProps) {
  const [selectedQuality, setSelectedQuality] = useState('1080p');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (quality: string) => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/80 backdrop-blur-xl rounded-3xl border border-green-500/20 shadow-2xl shadow-green-500/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-500/20">
          <h3 className="text-2xl font-bold text-white">Video Preview</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors border border-red-500/30"
          >
            <X className="w-5 h-5 text-red-400" />
          </button>
        </div>

        {/* Video Preview */}
        <div className="p-6">
          <div className="aspect-video bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl mb-6 flex items-center justify-center border border-green-500/20">
            <div className="text-center">
              <Play className="w-16 h-16 text-green-400/60 mx-auto mb-4" />
              <p className="text-green-400/60">Video Preview</p>
              <p className="text-sm text-gray-400 mt-2">Sample video from {platform}</p>
            </div>
          </div>

          {/* Quality Selection */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-4">Select Quality</h4>
            <div className="grid gap-3">
              {qualityOptions.map((option) => (
                <button
                  key={option.quality}
                  onClick={() => setSelectedQuality(option.quality)}
                  className={`
                    p-4 rounded-xl border transition-all duration-200 text-left
                    ${selectedQuality === option.quality
                      ? 'border-green-500 bg-green-500/20 text-white shadow-lg shadow-green-500/20'
                      : 'border-green-500/20 bg-black/20 text-gray-300 hover:bg-black/30 hover:border-green-400/30'
                    }
                  `}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{option.label}</span>
                    <span className="text-sm opacity-70">{option.size}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <Button
            onClick={() => handleDownload(selectedQuality)}
            disabled={isDownloading}
            className="w-full h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 shadow-lg shadow-green-500/25 hover:shadow-green-400/30"
          >
            {isDownloading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Downloading...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download {selectedQuality}</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
'use client';

interface SocialMediaButtonsProps {
  selectedPlatform: string;
  onPlatformSelect: (platform: string) => void;
}

const platforms = [
  { 
    id: 'facebook', 
    name: 'Facebook', 
    gradient: 'from-blue-500 to-blue-600 shadow-blue-500/25',
    hoverGradient: 'hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-400/40',
    icon: '📘'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    gradient: 'from-pink-500 via-purple-500 to-orange-500 shadow-pink-500/25',
    hoverGradient: 'hover:from-pink-400 hover:via-purple-400 hover:to-orange-400 hover:shadow-pink-400/40',
    icon: '📷'
  },
  { 
    id: 'twitter', 
    name: 'X (Twitter)', 
    gradient: 'from-gray-700 to-gray-800 shadow-gray-500/25',
    hoverGradient: 'hover:from-gray-600 hover:to-gray-700 hover:shadow-gray-400/40',
    icon: '🐦'
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    gradient: 'from-blue-600 to-blue-700 shadow-blue-600/25',
    hoverGradient: 'hover:from-blue-500 hover:to-blue-600 hover:shadow-blue-500/40',
    icon: '💼'
  },
  { 
    id: 'tiktok', 
    name: 'TikTok', 
    gradient: 'from-black via-red-500 to-pink-500 shadow-red-500/25',
    hoverGradient: 'hover:from-gray-900 hover:via-red-400 hover:to-pink-400 hover:shadow-red-400/40',
    icon: '🎵'
  },
];

export default function SocialMediaButtons({ selectedPlatform, onPlatformSelect }: SocialMediaButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {platforms.map((platform) => (
        <button
          key={platform.id}
          onClick={() => onPlatformSelect(platform.id)}
          className={`
            px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105
            backdrop-blur-xl border border-green-500/20 shadow-lg
            ${selectedPlatform === platform.id 
              ? `bg-gradient-to-r ${platform.gradient} text-white shadow-2xl scale-105 border-green-400/30` 
              : `bg-black/20 text-gray-300 hover:bg-black/30 ${platform.hoverGradient} hover:text-white hover:border-green-400/20`
            }
          `}
        >
          <span className="mr-2">{platform.icon}</span>
          {platform.name}
        </button>
      ))}
    </div>
  );
}
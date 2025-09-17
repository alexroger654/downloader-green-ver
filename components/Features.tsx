'use client';

import { Shield, Zap, Smartphone, Globe, Heart, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Download videos in seconds with our optimized servers',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'No registration required. Your privacy is our priority',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - phone, tablet, or desktop',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Multiple Platforms',
    description: 'Support for Facebook, Instagram, Twitter, LinkedIn, and TikTok',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Heart,
    title: 'Always Free',
    description: 'No hidden fees, no premium plans. Completely free forever',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Star,
    title: 'High Quality',
    description: 'Download in original quality up to 4K resolution',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Us?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We've built the most advanced video downloader with features that matter to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-8 border border-green-500/20 shadow-2xl shadow-green-500/5 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/40 hover:border-green-400/30 hover:shadow-green-400/10 h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30 shadow-2xl shadow-green-500/10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Downloading?</h3>
            <p className="text-gray-300 mb-6">Join millions of users who trust our platform for their video downloads.</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-green-400/30">
              Start Downloading Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
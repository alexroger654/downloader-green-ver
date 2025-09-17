'use client';

import { Link, Search, Download } from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: 'Paste URL',
    description: 'Copy and paste the video URL from any supported social media platform',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'Choose Quality',
    description: 'Select your preferred video quality from 144p to 4K resolution',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Click download and get your video instantly, no registration required',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download videos in just 3 simple steps. It's fast, easy, and completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-8 border border-green-500/20 shadow-2xl shadow-green-500/5 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/40 hover:border-green-400/30 hover:shadow-green-400/10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-gray-500 mr-4">0{index + 1}</span>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
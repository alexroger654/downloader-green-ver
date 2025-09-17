'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Content Creator',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'This is hands down the best video downloader I\'ve used! Super fast, high quality downloads, and the interface is absolutely gorgeous. Love the 4K support!',
    rating: 5,
    platform: 'Instagram'
  },
  {
    name: 'Maya Rodriguez',
    role: 'Social Media Manager',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'I download videos daily for my clients and this tool saves me so much time. The quality options are perfect and it works flawlessly across all platforms.',
    rating: 5,
    platform: 'Facebook'
  },
  {
    name: 'Jordan Kim',
    role: 'Digital Marketer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Finally, a video downloader that actually works! Clean design, no ads, no registration required. This is exactly what I was looking for.',
    rating: 5,
    platform: 'TikTok'
  },
  {
    name: 'Sam Taylor',
    role: 'Student',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Love how simple and fast this is! I can download videos for my projects in seconds. The mobile experience is fantastic too.',
    rating: 5,
    platform: 'Twitter'
  },
  {
    name: 'Riley Johnson',
    role: 'Freelancer',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The quality is amazing and it supports all the platforms I need. Plus, it\'s completely free! This tool is a game-changer for my workflow.',
    rating: 5,
    platform: 'LinkedIn'
  },
  {
    name: 'Casey Wong',
    role: 'Video Editor',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'As someone who works with videos professionally, I appreciate the high-quality downloads and multiple format options. Excellent tool!',
    rating: 5,
    platform: 'Instagram'
  }
];

const platformColors = {
  Facebook: 'from-blue-500 to-blue-600',
  Instagram: 'from-pink-500 via-purple-500 to-orange-500',
  Twitter: 'from-slate-700 to-slate-800',
  LinkedIn: 'from-blue-600 to-blue-700',
  TikTok: 'from-black via-red-500 to-pink-500'
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join millions of satisfied users who trust our platform for their video downloads.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">1M+</div>
            <div className="text-gray-400">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">50M+</div>
            <div className="text-gray-400">Videos Downloaded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent mb-2">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-400">Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="backdrop-blur-xl bg-black/30 rounded-3xl p-8 border border-green-500/20 shadow-2xl shadow-green-500/5 transition-all duration-300 hover:transform hover:scale-105 hover:bg-black/40 hover:border-green-400/30 hover:shadow-green-400/10 h-full">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-green-400 opacity-60" />
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-500/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Platform Badge */}
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${platformColors[testimonial.platform as keyof typeof platformColors]} shadow-lg`}>
                    {testimonial.platform}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30 shadow-2xl shadow-green-500/10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-gray-300 mb-6">Start downloading your favorite videos today and see why millions choose us.</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-green-400/30">
              Try It Now - It's Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is this video downloader really free?',
    answer: 'Yes! Our video downloader is completely free to use. There are no hidden fees, premium plans, or subscription requirements. You can download as many videos as you want without any cost.'
  },
  {
    question: 'Which platforms do you support?',
    answer: 'We currently support Facebook, Instagram, Twitter (X), LinkedIn, and TikTok. We\'re constantly working to add support for more platforms based on user demand.'
  },
  {
    question: 'What video qualities are available?',
    answer: 'You can download videos in various qualities ranging from 144p to 4K (2160p), depending on the original video quality. Available options include 144p, 360p, 720p HD, 1080p HD, and 4K.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account required! We believe in keeping things simple. Just paste your video URL, select quality, and download. Your privacy is important to us.'
  },
  {
    question: 'Is it safe to use?',
    answer: 'Absolutely! We use secure HTTPS connections and don\'t store any of your personal data or downloaded videos. Your downloads are processed securely and privately.'
  },
  {
    question: 'How long does it take to download a video?',
    answer: 'Most videos are processed and ready for download within seconds. The actual download time depends on your internet connection and the video file size.'
  },
  {
    question: 'Can I download private videos?',
    answer: 'No, we can only download publicly available videos. This is to respect privacy settings and platform policies. Make sure the video is publicly accessible.'
  },
  {
    question: 'What formats do you support?',
    answer: 'We support the most popular video formats including MP4, AVI, and MOV. MP4 is the most common format and works on all devices and platforms.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our video downloader.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="backdrop-blur-xl bg-black/30 rounded-2xl border border-green-500/20 shadow-xl shadow-green-500/5 overflow-hidden transition-all duration-300 hover:bg-black/40 hover:border-green-400/30">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-black/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-400 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 shadow-lg shadow-green-500/10">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-300 mb-4">We're here to help! Reach out to our support team.</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25 hover:shadow-green-400/30">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
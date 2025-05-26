"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Remove the Napoleon import since we'll use the path directly in the Image component

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About Mr. President</h1>
          <div className="rounded-full overflow-hidden mb-8">
            <Image 
              src="/Trump_2024_2022_Campaign_Logo.png" 
              alt="Trump Campaign Logo"
              width={450}
              height={200}
              className="w-[450px] h-48 object-cover"
            />
          </div>
          <p className="text-xl mb-6">
            Connect with Mr. President through multiple channels:
          </p>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Follow on Twitter</h2>
                <p className="text-gray-300">
                  Stay updated with the latest news and insights from Mr. President
                  by following him on Twitter.
                </p>
              </div>
              <Link 
                href="https://x.com/MrPresiden7031" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Follow on Twitter
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Chat on Telegram</h2>
                <p className="text-gray-300">
                  Engage in direct conversations with Mr. President through his Telegram bot.
                  Get instant responses and personalized interactions.
                </p>
              </div>
              <Link 
                href="https://t.me/President25bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Chat on Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

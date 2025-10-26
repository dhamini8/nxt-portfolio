'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pt-32 md:pt-40">
      <div className="max-w-7xl w-full px-4">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Side - Testimonial */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="relative">
              <span className="text-6xl" style={{ color: '#FF8A4C' }}>"</span>
              <p className="text-lg mt-2" style={{ color: 'var(--text-secondary)' }}>
                Dhamini's exceptional coding skills outperforms client's overall expectations. Highly Recommended.
              </p>
            </div>
          </div>

          {/* Center - Avatar and Main Text */}
          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Hello Badge */}
            <div className="relative">
              <div 
                className="px-6 py-2 rounded-full border-2 inline-block"
                style={{
                  borderColor: '#FF8A4C',
                  background: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(255, 138, 76, 0.2)'
                }}
              >
                <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>Hello!</span>
              </div>
              {/* Decorative lines */}
              <svg className="absolute -top-4 -right-8 w-16 h-16" viewBox="0 0 64 64">
                <path d="M10 32 Q 32 10, 54 32" stroke="#FF8A4C" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M15 40 Q 32 25, 49 40" stroke="#FF8A4C" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span style={{ color: 'var(--text-primary)' }}>I'm </span>
              <span style={{ color: '#FF8A4C' }}>Dhamini</span>
              <span style={{ color: 'var(--text-primary)' }}>,</span>
            </h1>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Software Engineer
            </h2>

            {/* Decorative curved line left */}
            <svg className="absolute left-8 top-1/3 w-24 h-24 hidden lg:block" viewBox="0 0 96 96">
              <path d="M10 86 Q 48 48, 10 10" stroke="#FF8A4C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
            </svg>

            {/* Avatar with Orange Circle Background */}
            <div className="relative mt-8">
              {/* Orange Circle Background */}
              <div 
                className="absolute inset-0 -bottom-1/3 left-1/2 transform -translate-x-1/2"
                style={{
                  width: '280px',
                  height: '280px',
                  background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
              />
              
              {/* Avatar Image */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80">
                <Image
                  src="/cute_png.png"
                  alt="Dhamini Avatar"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side - Get in Touch Button */}
          <div className="hidden lg:flex flex-col justify-center items-center">
            <button
              className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(255, 138, 76, 0.4)'
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </button>
          </div>

        </div>

        {/* Get in Touch Button - Mobile only */}
        <div className="flex lg:hidden justify-center mt-12">
          <button
            className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(255, 138, 76, 0.4)'
            }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
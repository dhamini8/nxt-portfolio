'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 20; // small offset for top
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:flex top-6 left-0 right-0 w-full h-16 z-50 justify-center items-center px-2 gap-3">
        <div 
          className="flex items-center gap-2 px-2 py-2"
          style={{
            background: theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 30, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: theme === 'light' ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
          }}
        >
          <ul className="flex flex-row gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id ? 'text-white' : 'text-gray-600'
                  }`}
                  style={
                    activeSection === section.id
                      ? {
                          background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                          boxShadow: '0 4px 12px rgba(255, 138, 76, 0.3), inset 0 1px 0 rgba(255,255,255,0.4)'
                        }
                      : { 
                          background: 'transparent', 
                          color: theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'
                        }
                  }
                  aria-label={section.label}
                >
                  <span className="text-base font-medium select-none whitespace-nowrap">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-8 left-4 right-4 z-50 flex justify-between items-start">
        {/* Circular Menu Button - Top Left */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            background: theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 30, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: theme === 'light' ? '0 4px 12px rgba(0, 0, 0, 0.08)' : '0 4px 12px rgba(0, 0, 0, 0.4)',
          }}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span 
              className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ 
                background: theme === 'light' ? '#FF8A4C' : '#FFB088',
                width: '100%'
              }}
            />
            <span 
              className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              style={{ 
                background: theme === 'light' ? '#FF8A4C' : '#FFB088',
                width: '100%'
              }}
            />
            <span 
              className={`h-0.5 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ 
                background: theme === 'light' ? '#FF8A4C' : '#FFB088',
                width: '100%'
              }}
            />
          </div>
        </button>

        {/* Theme Toggle - Top Right */}
        <ThemeToggle />
      </nav>

      {/* Mobile Menu - Simple Bottom Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{
          background: theme === 'light' 
            ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)' 
            : 'linear-gradient(180deg, rgba(20, 20, 20, 0.98) 0%, rgba(15, 15, 15, 0.95) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTop: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.08)',
          padding: '20px 16px 28px 16px',
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="flex-1 flex flex-col items-center gap-1.5 py-2 transition-all duration-300 group"
              >
                {/* Icon container */}
                <div
                  className={`relative transition-all duration-300 ${
                    activeSection === section.id ? 'scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                >
                  {/* Active indicator glow */}
                  {activeSection === section.id && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                        filter: 'blur(8px)',
                        opacity: 0.6,
                      }}
                    />
                  )}
                  
                  {/* Icon circle */}
                  <div
                    className="relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: activeSection === section.id
                        ? 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)'
                        : 'transparent',
                      boxShadow: activeSection === section.id
                        ? '0 4px 16px rgba(255, 138, 76, 0.3)'
                        : 'none',
                    }}
                  >
                    {section.id === 'home' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                        style={{ color: activeSection === section.id ? 'white' : theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {section.id === 'education' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: activeSection === section.id ? 'white' : theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                      </svg>
                    )}
                    {section.id === 'skills' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: activeSection === section.id ? 'white' : theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                    {section.id === 'projects' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: activeSection === section.id ? 'white' : theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    )}
                    {section.id === 'certificates' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ color: activeSection === section.id ? 'white' : theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] font-medium transition-all duration-300 ${
                    activeSection === section.id ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{
                    color: activeSection === section.id 
                      ? '#FF8A4C' 
                      : theme === 'light' 
                        ? 'rgba(0, 0, 0, 0.6)' 
                        : 'rgba(255, 255, 255, 0.6)',
                    fontWeight: activeSection === section.id ? '600' : '500',
                  }}
                >
                  {section.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
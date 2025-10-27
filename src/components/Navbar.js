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
    { id: 'contact', label: 'Contact' },
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-24 left-4 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          background: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(30, 30, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: theme === 'light' ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 8px 32px rgba(0, 0, 0, 0.5)',
          padding: '8px'
        }}
      >
        <ul className="flex flex-col gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-full px-6 py-3 rounded-full transition-all duration-300 text-left ${
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
              >
                <span className="text-base font-medium select-none">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
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
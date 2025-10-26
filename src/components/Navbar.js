'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
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
  };

  return (
    <nav
      className="fixed top-2 left-0 right-0 w-full h-14 sm:h-16 z-50 flex justify-center items-center px-2 gap-3"
      
    >
      <div 
        className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1.5 sm:py-2"
        style={{
          background: theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(30, 30, 30, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '9999px',
          border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: theme === 'light' ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)',
        }}
      >
        <ul className="flex flex-row gap-1 sm:gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full transition-all duration-300 ${
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
                <span className="text-xs sm:text-base font-medium select-none whitespace-nowrap">{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <ThemeToggle />
    </nav>
  );
}
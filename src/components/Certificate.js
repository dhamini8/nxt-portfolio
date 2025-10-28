'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Certificate() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'AWS-123456789',
      description: 'Cloud computing fundamentals and AWS services',
      link: 'https://aws.amazon.com/certification/',
      image: '/certificates/aws-cert.png' // Add your certificate image path
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'January 2024',
      credentialId: 'META-987654321',
      description: 'Advanced React patterns and best practices',
      link: 'https://www.coursera.org/professional-certificates/meta-react-native',
      image: '/certificates/react-cert.png' // Add your certificate image path
    },
    {
      title: 'Full Stack Development',
      issuer: 'Coursera',
      date: 'December 2023',
      credentialId: 'COURSE-456789123',
      description: 'Complete web development with MERN stack',
      link: 'https://www.coursera.org/',
      image: '/certificates/fullstack-cert.png' // Add your certificate image path
    }
    
  ];

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-6xl w-full px-4">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 md:mb-16 text-center tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={(e) => {
                handleMouseLeave(e);
                setHoveredIndex(null);
              }}
            >
              <div
                className="relative p-4 sm:p-5 rounded-xl theme-card transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: hoveredIndex === index 
                    ? '0 20px 60px rgba(255, 138, 76, 0.3), 0 0 0 1px rgba(255, 138, 76, 0.2)' 
                    : '0 8px 32px rgba(0, 0, 0, 0.06)',
                  transformStyle: 'preserve-3d',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                {/* Shine effect overlay */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    transform: 'translateZ(1px)'
                  }}
                />

                {/* Certificate Image */}
                {cert.image && (
                  <div 
                    className="mb-3 relative w-full h-32 sm:h-36 rounded-lg overflow-hidden"
                    style={{
                      transform: 'translateZ(40px)',
                      background: 'linear-gradient(135deg, rgba(255, 138, 76, 0.05) 0%, rgba(255, 176, 136, 0.05) 100%)'
                    }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback icon if image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FF8A4C' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div
                  style={{
                    transform: 'translateZ(30px)'
                  }}
                >
                  <h3 
                    className="text-base sm:text-lg font-bold mb-1 theme-text-primary line-clamp-2"
                  >
                    {cert.title}
                  </h3>
                  <p 
                    className="text-sm font-semibold mb-2"
                    style={{ color: '#FF8A4C' }}
                  >
                    {cert.issuer}
                  </p>
                  <p className="text-xs theme-text-secondary mb-3 line-clamp-2">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-col gap-1.5 mb-3 text-xs theme-text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <button
                    className="w-full px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                      boxShadow: '0 4px 20px rgba(255, 138, 76, 0.3)',
                      transform: 'translateZ(20px)'
                    }}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
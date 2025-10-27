'use client';

export default function Education() {
  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'BMS Institute of Technology and Management',
      year: '11/2022 – 06/2026',
      description: 'CGPA: 8.11'
    },
    {
      degree: 'Senior Secondary (XII) – CBSE',
      institution: 'Sri Chaithanya Techno, Bangalore',
      year: '04/2022',
      description: 'Percentage: 74.3%'
    },
    {
      degree: 'Secondary (X) – CBSE',
      institution: 'Army Public School, PRTC Bangalore',
      year: '04/2020',
      description: 'Percentage: 84.3%'
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl w-full pt-6 sm:pt-8 md:pt-10 px-4">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 md:mb-16 text-center tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Education
        </h2>
        
        <div className="relative">
          {/* Vertical dashed line - simpler single line approach */}
          <div 
            className="absolute left-1/2 hidden md:block timeline-line-vertical"
            style={{
              top: 'calc(3rem + 57px)',
              bottom: 'calc(3rem + 57px)',
              width: '2px',
              borderLeft: '2px dashed rgba(26, 31, 43, 0.6)',
              transform: 'translateX(-1px)',
              zIndex: 0
            }}
          />

          <div className="space-y-0">
            {education.map((edu, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center relative"
              >
                {/* Left side - Institution info */}
                <div className={`text-left md:text-right py-8 md:py-12 px-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                  <h3 
                    className="text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 theme-text-primary line-clamp-2" 
                  >
                    {edu.institution}
                  </h3>
                  <p 
                    className="text-xs md:text-sm lg:text-base theme-text-secondary"
                  >
                    {edu.year}
                  </p>
                </div>

                {/* Center - Timeline dot */}
                <div className="hidden md:flex md:order-2 justify-center items-center" style={{ width: '28px', height: '28px' }}>
                  {/* Outer dashed border circle */}
                  <div
                    className="absolute rounded-full border-2 border-dashed timeline-circle-border"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderColor: 'rgba(26, 31, 43, 0.6)',
                      backgroundColor: 'transparent',
                      zIndex: 10
                    }}
                  />
                  {/* Inner filled circle */}
                  <div
                    className="rounded-full"
                    style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: index === 1 ? '#1a1f2b' : '#FF8A4C',
                      zIndex: 11
                    }}
                  />
                </div>

                {/* Right side - Degree details */}
                <div className={`text-left py-8 md:py-12 px-4 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                  <div
                    className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-400 theme-card"
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(40px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(255, 138, 76, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)';
                    }}
                  >
                    <h4 
                      className="text-sm md:text-base lg:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2"
                      style={{
                        color: '#FF8A4C',
                        textShadow: '0 2px 12px rgba(255, 138, 76, 0.2)'
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p className="text-xs md:text-sm lg:text-base theme-text-secondary">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
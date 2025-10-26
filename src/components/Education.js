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
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-8 items-center"
            >
              {/* Left side - Institution info */}
              <div className={`md:text-right text-left ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                <h3 
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 theme-text-primary" 
                >
                  {edu.institution}
                </h3>
                <p 
                  className="text-sm sm:text-base md:text-lg mb-1 theme-text-secondary"
                >
                  {edu.year}
                </p>
              </div>

              {/* Center - Timeline dot */}
              <div className="hidden md:flex md:order-2 flex-col items-center relative">
                {/* Line above (except for first item) */}
                {index > 0 && (
                  <div
                    className="absolute timeline-line"
                    style={{
                      top: '-64px',
                      height: '64px',
                      width: '2px',
                      backgroundImage: 'repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0.3) 8px, transparent 8px, transparent 16px)',
                    }}
                  />
                )}
                
                {/* Circle/Dot */}
                <div
                  className="w-8 h-8 rounded-full relative z-10 transition-all duration-300 flex items-center justify-center timeline-dot-border"
                  style={{
                    border: `3px dashed ${index === 1 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 138, 76, 0.6)'}`,
                    background: 'transparent'
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full timeline-dot-inner"
                    style={{
                      background: index === 1 ? 'rgba(0, 0, 0, 0.9)' : '#FF8A4C'
                    }}
                  />
                </div>
                
                {/* Line below (except for last item) */}
                {index < education.length - 1 && (
                  <div
                    className="timeline-line"
                    style={{
                      height: '128px',
                      width: '2px',
                      backgroundImage: 'repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0.3) 8px, transparent 8px, transparent 16px)',
                      marginTop: '0px'
                    }}
                  />
                )}
              </div>

              {/* Right side - Degree details */}
              <div className={`text-left ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
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
                    className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2"
                    style={{
                      color: '#FF8A4C',
                      textShadow: '0 2px 12px rgba(255, 138, 76, 0.2)'
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <p className="text-sm sm:text-base theme-text-secondary">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
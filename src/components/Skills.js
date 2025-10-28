'use client';

import { FaJava, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function Skills() {
  const allSkills = [
    { name: 'Java', icon: <FaJava className="text-[#007396]" />, color: '#007396' },
    { name: 'Next.js', icon: <SiNextdotjs className="dark-theme-icon" />, color: '#000000' },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, color: '#F7DF1E' },
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, color: '#06B6D4' },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, color: '#339933' },
    { name: 'Express', icon: <SiExpress className="dark-theme-icon" />, color: '#000000' },
    { name: 'REST APIs', icon: <TbApi className="text-[#FF8A4C]" />, color: '#FF8A4C' },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, color: '#47A248' },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub className="dark-theme-icon" />, color: '#000000' },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, color: '#2496ED' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 pt-15 sm:pt-20 md:pt-24">
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
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-2xl transition-all duration-500 theme-card skill-card cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)',
                minHeight: '160px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.05)';
                e.currentTarget.style.boxShadow = `0 24px 48px ${skill.color}20, 0 0 0 3px ${skill.color}30, inset 0 1px 0 rgba(255, 255, 255, 1)`;
                e.currentTarget.style.borderColor = `${skill.color}80`;
                e.currentTarget.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, ${skill.color}08 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
            >
              {/* Animated gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }}
              />
              
              {/* Shine effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  transform: 'translateX(-100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Icon with enhanced glow effect on hover */}
              <div className="relative z-10">
                <span className="text-5xl sm:text-6xl md:text-7xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {skill.icon}
                </span>
                <div 
                  className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500"
                  style={{ background: skill.color }}
                />
              </div>
              
              {/* Skill name with color transition */}
              <span 
                className="relative z-10 text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-300 group-hover:scale-110"
                style={{ color: '#FF8A4C' }}
              >
                {skill.name}
              </span>

              {/* Decorative corner elements */}
              <div 
                className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, transparent 50%, ${skill.color} 50%)`,
                  borderRadius: '0 1rem 0 0'
                }}
              />
              <div 
                className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(315deg, transparent 50%, ${skill.color} 50%)`,
                  borderRadius: '0 0 0 1rem'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
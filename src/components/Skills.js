'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export default function Skills() {
  const skillsRow1 = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="dark-theme-icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  ];

  const skillsRow2 = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', icon: <SiExpress className="dark-theme-icon" /> },
    { name: 'REST APIs', icon: <TbApi className="text-[#FF8A4C]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  ];

  const skillsRow3 = [
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="dark-theme-icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      <div className="w-full px-4">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 text-center tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Skills
        </h2>

        <div className="space-y-6">
          {/* Row 1 - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-left">
              {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl whitespace-nowrap flex-shrink-0 theme-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 138, 76, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)'
                  }}
                >
                  <span className="text-2xl flex items-center">{skill.icon}</span>
                  <span className="text-base sm:text-lg font-semibold" style={{ color: '#FF8A4C' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-right">
              {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl whitespace-nowrap flex-shrink-0 theme-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 138, 76, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)'
                  }}
                >
                  <span className="text-2xl flex items-center">{skill.icon}</span>
                  <span className="text-base sm:text-lg font-semibold" style={{ color: '#FF8A4C' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-scroll-left">
              {[...skillsRow3, ...skillsRow3, ...skillsRow3].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl whitespace-nowrap flex-shrink-0 theme-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 138, 76, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)'
                  }}
                >
                  <span className="text-2xl flex items-center">{skill.icon}</span>
                  <span className="text-base sm:text-lg font-semibold" style={{ color: '#FF8A4C' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
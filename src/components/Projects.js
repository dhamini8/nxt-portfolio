'use client';

import ElectricBorder from '../effects/ElectricBorder';

export default function Projects() {
  const projects = [
    {
      title: 'Certificate Registry',
      description: 'Blockchain-based certificate registry using Solidity, Hardhat, and Ethereum testnet.',
      tags: ['Solidity', 'Hardhat', 'Ethereum', 'Blockchain'],
      link: 'https://github.com/dhamini8/Certificate_Registry',
      highlights: [
        'Automated auditing with Slither and Etherscan verification',
        'Implemented role-based access control and event logging for transparency'
      ]
    },
    {
      title: 'Firewall Using Iptables',
      description: 'Web-based firewall manager built with Node.js, Bash, and iptables on Linux.',
      tags: ['Node.js', 'Bash', 'Linux', 'iptables'],
      link: 'https://github.com/sayandeepsinha/CyberCloak',
      highlights: [
        'Designed interactive UI with HTML, CSS, and JavaScript for live rule configuration',
        'Reduced firewall setup time by 30%'
      ]
    },
    {
      title: 'Movie Whiz',
      description: 'Personalized movie recommendation app using Python, Flask, and SQLite.',
      tags: ['Python', 'Flask', 'SQLite', 'Recommendation System'],
      link: 'https://github.com/sayandeepsinha/movie-whiz',
      highlights: [
        'Features include tailored recommendations and favorites list',
        'Increased engagement during testing by 40%'
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl text-center w-full pt-6 sm:pt-8 px-4">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <ElectricBorder
              key={index}
              color="#FF8A4C"
              speed={1}
              chaos={0.9}
              thickness={1}
              style={{ borderRadius: 25 }}
            >
              <div
                className="bg-white rounded-xl md:rounded-2xl p-6 sm:p-8 transition-all duration-400 text-center flex flex-col justify-between h-full min-h-[320px] sm:min-h-[380px] theme-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                }}
              >
                <div>
                  <h3 
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 theme-text-primary"
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base mb-4 sm:mb-6 px-2 theme-text-secondary"
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 138, 76, 0.15) 0%, rgba(255, 176, 136, 0.1) 100%)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 138, 76, 0.2)',
                          boxShadow: '0 4px 20px rgba(255, 138, 76, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                          color: '#E67744',
                          textShadow: '0 2px 12px rgba(255, 138, 76, 0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
                    boxShadow: '0 4px 20px rgba(255, 138, 76, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
                  }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Check Out
                </button>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}
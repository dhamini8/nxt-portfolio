'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'sdhamini10@gmail.com',
      link: 'mailto:sdhamini10@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhamini',
      link: 'https://linkedin.com/in/dhamini'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/dhamini',
      link: 'https://github.com/dhamini'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl w-full pt-6 sm:pt-8 px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
            style={{
              background: 'linear-gradient(135deg, #FF8A4C 0%, #FFB088 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Contact
          </h2>
          <p 
            className="text-xs sm:text-sm md:text-base px-4 theme-text-secondary"
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Contact Form */}
          <div
            className="p-4 sm:p-5 md:p-6 rounded-xl theme-card"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
            }}
          >
            <h3 
              className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
              style={{ color: '#FF8A4C' }}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                            <div>
                <label 
                  htmlFor="name" 
                  className="block mb-1.5 text-xs sm:text-sm font-medium theme-text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg transition-all duration-300 theme-input"
                  style={{
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 138, 76, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 138, 76, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-1.5 text-xs sm:text-sm font-medium theme-text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg transition-all duration-300 theme-input"
                  style={{
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 138, 76, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 138, 76, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-1.5 text-xs sm:text-sm font-medium theme-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 text-sm rounded-lg transition-all duration-300 resize-none theme-input"
                  style={{
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(255, 138, 76, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 138, 76, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 text-sm rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 138, 76, 0.15) 0%, rgba(255, 176, 136, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 138, 76, 0.3)',
                  boxShadow: '0 4px 20px rgba(255, 138, 76, 0.2)',
                  color: '#E67744'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 138, 76, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 138, 76, 0.25) 0%, rgba(255, 176, 136, 0.18) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 138, 76, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 138, 76, 0.15) 0%, rgba(255, 176, 136, 0.1) 100%)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <div
              className="p-4 sm:p-5 md:p-6 rounded-xl theme-card"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                style={{ color: '#FF8A4C' }}
              >
                Contact Information
              </h3>
              {/* Desktop: vertical layout, Mobile: horizontal icon-only layout */}
              <div className="flex sm:flex-col flex-row justify-center sm:justify-start gap-3 sm:gap-4 sm:space-y-0">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 group transition-all duration-300 theme-text-secondary"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#FF8A4C';
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      className="p-2.5 sm:p-3 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 138, 76, 0.1)',
                        border: '1px solid rgba(255, 138, 76, 0.2)',
                        width: '44px',
                        height: '44px'
                      }}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        {info.icon}
                      </div>
                    </div>
                    {/* Hide text on mobile, show on sm and above */}
                    <div className="min-w-0 flex-1 hidden sm:block">
                      <p className="text-xs opacity-60">{info.label}</p>
                      <p className="font-medium text-xs sm:text-sm break-words">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div
              className="p-4 sm:p-5 md:p-6 rounded-xl theme-card"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
              }}
            >
              <h3 
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                style={{ color: '#FF8A4C' }}
              >
                Let's Connect!
              </h3>
              <p className="text-xs sm:text-sm theme-text-secondary">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

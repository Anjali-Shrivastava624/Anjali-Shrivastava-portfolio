import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'Backend Developer',
    'Laravel Expert',
    'React Developer',
    'API Architect'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0">
          {/* Floating shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Profile Image */}
        <div className="mb-8">
         <div className="relative mx-auto mt-20 w-48 h-48 rounded-full p-1 bg-gradient-to-r from-blue-600 to-purple-600 animate-spin-slow">
            <img
              src="https://raw.githubusercontent.com/Anjali-Shrivastava624/portfolio-assets/main/anjali.png
"
              alt="Anjali Shrivastava"
              className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800 p-1"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Anjali
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-16 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent min-w-0">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer with 2+ years of experience crafting scalable web applications, 
            RESTful APIs, and modern digital experiences using Laravel, React, and cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-2"
            >
              <Send size={20} />
              Let's Work Together
              <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
            </a>
            <a
              href="https://raw.githubusercontent.com/Anjali-Shrivastava624/portfolio-assets/main/Anjali Shrivastava new resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
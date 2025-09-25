import React from 'react';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  link?: string;
  technologies: string[];
}

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  projects: Project[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Backend Developer',
      company: 'Quantum IT Innovation',
      location: 'Remote',
      duration: 'November 2024 – Present',
      type: 'Full-time',
      description: 'Contributing to multiple Laravel-based projects with a focus on backend development, API architecture, and admin functionalities.',
      achievements: [
        'Developed REST APIs for multi-panel applications',
        'Implemented dynamic modules with bulk filtering and advanced search',
        'Integrated chatbot functionality and payment gateways',
        'Built secure authentication systems using Laravel Fortify'
      ],
      projects: [
        {
          name: 'Meinhaus',
          description: 'Developed REST APIs for customer, professional, and admin panels using Laravel & Livewire. Implemented dynamic modules including bulk filtering, advanced search, and chatbot integration.',
          link: 'https://meinhaus.ca',
          technologies: ['Laravel', 'Livewire', 'MySQL', 'REST API']
        },
        {
          name: 'Procurement System',
          description: 'Worked on vendor-side functionality with Laravel Fortify integration for secure authentication and multi-step registration.',
          technologies: ['Laravel', 'Fortify', 'Multi-auth', 'MySQL']
        },
        {
          name: 'HDFC Payment Integration',
          description: 'Integrated HDFC payment gateway using API-based flow, handled token generation and secure transaction logging.',
          technologies: ['Payment Gateway', 'HDFC API', 'Laravel', 'Security']
        }
      ]
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'InfoSparkles IT Solution',
      location: 'Indore, India',
      duration: 'May 2024 – October 2024',
      type: 'Full-time',
      description: 'Contributed to numerous Laravel and React projects, developing and maintaining web applications with responsive, user-friendly interfaces.',
      achievements: [
        'Developed multiple full-stack applications',
        'Improved application performance by 30%',
        'Collaborated with cross-functional teams',
        'Mentored junior developers'
      ],
      projects: [
        {
          name: 'mytket',
          description: 'E-commerce platform with advanced booking and ticketing system built with Laravel and React.',
          link: 'https://mytket.infosparkles.com/',
          technologies: ['Laravel', 'React', 'MySQL', 'Bootstrap']
        },
        {
          name: 'SuppliArabia',
          description: 'Supply chain management system for Middle East market with multi-language support.',
          technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'i18n']
        },
        {
          name: 'RentalHive & Logistics System',
          description: 'Rental management platform with integrated logistics and tracking system.',
          technologies: ['Laravel', 'React', 'MySQL', 'Google Maps API']
        }
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Eway IT Solution',
      location: 'Ujjain, India',
      duration: 'July 2023 – May 2024',
      type: 'Full-time',
      description: 'Actively contributed to projects using Laravel and React, resolving technical issues and implementing new features based on client feedback.',
      achievements: [
        'Successfully delivered 10+ web applications',
        'Reduced bug reports by 40%',
        'Implemented responsive designs',
        'Enhanced user experience across platforms'
      ],
      projects: [
        {
          name: 'Lottosocial App',
          description: 'Social lottery platform with real-time notifications and secure payment processing.',
          link: 'https://lottosocial.com/',
          technologies: ['Laravel', 'React', 'WebSocket', 'Payment Gateway']
        },
        {
          name: 'Ghatnayak App',
          description: 'Event management platform for organizing and managing cultural events.',
          technologies: ['Laravel', 'PHP', 'MySQL', 'jQuery']
        },
        {
          name: 'Employee Attendance App',
          description: 'HR management system with biometric integration and reporting dashboard.',
          technologies: ['Laravel', 'Chart.js', 'MySQL', 'REST API']
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through various roles and the impactful projects I've contributed to
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <Building size={18} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Notable Projects:
                    </h4>
                    <div className="grid gap-4">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 border-l-4 border-blue-500">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {project.name}
                            </h5>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                                aria-label={`Visit ${project.name}`}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
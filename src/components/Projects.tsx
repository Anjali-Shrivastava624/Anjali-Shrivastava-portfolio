import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Search } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Meinhaus Platform',
      description: 'Multi-panel real estate platform with advanced search and chatbot integration',
      longDescription: 'A comprehensive real estate platform featuring customer, professional, and admin panels. Implemented dynamic modules with bulk filtering, advanced search capabilities, and integrated chatbot for enhanced user experience.',
      technologies: ['Laravel', 'Livewire', 'MySQL', 'REST API', 'Chatbot'],
      category: 'full-stack',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: 'https://meinhaus.ca',
      featured: true
    },
    {
      id: 2,
      title: 'mytket E-commerce',
      description: 'Advanced booking and ticketing e-commerce platform',
      longDescription: 'Full-featured e-commerce platform specializing in event ticketing and booking management. Built with Laravel backend and React frontend for optimal user experience.',
      technologies: ['Laravel', 'React', 'MySQL', 'Bootstrap', 'Payment Gateway'],
      category: 'full-stack',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: 'https://mytket.infosparkles.com/',
      featured: true
    },
    {
      id: 3,
      title: 'Lottosocial App',
      description: 'Social lottery platform with real-time features',
      longDescription: 'Interactive social lottery platform featuring real-time notifications, secure payment processing, and social engagement features for enhanced user participation.',
      technologies: ['Laravel', 'React', 'WebSocket', 'Payment Gateway'],
      category: 'full-stack',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      demoUrl: 'https://lottosocial.com/',
      featured: true
    },
    {
      id: 4,
      title: 'Procurement System',
      description: 'Vendor management system with secure authentication',
      longDescription: 'Enterprise-level procurement system focusing on vendor-side functionality with Laravel Fortify integration for secure multi-step authentication and registration processes.',
      technologies: ['Laravel', 'Fortify', 'Multi-auth', 'MySQL'],
      category: 'backend',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'SuppliArabia',
      description: 'Supply chain management with multi-language support',
      longDescription: 'Comprehensive supply chain management system designed for the Middle East market, featuring multi-language support and advanced inventory management.',
      technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'i18n'],
      category: 'full-stack',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Employee Attendance System',
      description: 'HR management with biometric integration',
      longDescription: 'Advanced HR management system featuring biometric integration, comprehensive reporting dashboard, and real-time attendance tracking for enterprise clients.',
      technologies: ['Laravel', 'Chart.js', 'MySQL', 'REST API'],
      category: 'backend',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 7,
      title: 'RentalHive Platform',
      description: 'Rental management with logistics integration',
      longDescription: 'Modern rental management platform with integrated logistics system, real-time tracking, and comprehensive dashboard for rental business management.',
      technologies: ['Laravel', 'React', 'MySQL', 'Google Maps API'],
      category: 'full-stack',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 8,
      title: 'HDFC Payment Gateway',
      description: 'Secure payment integration system',
      longDescription: 'Robust payment gateway integration with HDFC bank, featuring API-based flow, secure token generation, and comprehensive transaction logging system.',
      technologies: ['Payment Gateway', 'HDFC API', 'Laravel', 'Security'],
      category: 'backend',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'full-stack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've mastered
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                  }`}
                >
                  <Filter size={16} className="mr-2" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-64"
              />
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  featured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured }) => {
  return (
    <div className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
      featured ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''
    }`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
            >
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium"
            >
              <Github size={16} className="mr-2" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
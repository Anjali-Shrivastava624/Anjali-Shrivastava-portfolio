import React from 'react';
import { MapPin, Phone, Mail, Code, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, number: '10+', label: 'Projects Completed' },
    { icon: Award, number: '2+', label: 'Years Experience' },
    { icon: Users, number: '8+', label: 'Happy Clients' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Ujjain, India',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 888-900-1664',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'anjalishrivastava624@gmail.com',
      color: 'text-blue-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a dedicated Full Stack Developer from Ujjain, India, with expertise in 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> Laravel, PHP, React, Angular</span> 
                and modern web technologies. With over 2+ years of professional experience, I specialize in creating 
                robust, scalable backend systems and RESTful APIs.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in software development has involved working with diverse teams to deliver efficient, 
                secure, and maintainable code. I'm passionate about solving complex problems and continuously 
                learning new technologies to stay at the forefront of web development.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20`}>
                      <Icon className={info.color} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Additional Info Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl shadow-lg text-white">
              <h3 className="font-bold text-xl mb-2">Let's Build Something Amazing</h3>
              <p className="opacity-90">
                Ready to turn your ideas into reality? Let's discuss your next project and create 
                something extraordinary together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
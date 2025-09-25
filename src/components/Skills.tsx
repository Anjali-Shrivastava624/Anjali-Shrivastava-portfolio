import React, { useEffect, useRef, useState } from 'react';
import { Server, Monitor, Settings, Database, Globe, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  description: string;
}

const Skills: React.FC = () => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      icon: Server,
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Laravel', level: 90, color: 'from-red-500 to-red-600' },
        { name: 'PHP', level: 85, color: 'from-indigo-500 to-indigo-600' },
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'REST APIs', level: 90, color: 'from-green-500 to-green-600' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Monitor,
      description: 'Creating engaging and responsive user interfaces',
      skills: [
        { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-yellow-600' },
        { name: 'React', level: 70, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML & CSS', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      description: 'Essential development tools and technologies',
      skills: [
        { name: 'Git', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'Postman', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'Payment Integration', level: 75, color: 'from-emerald-500 to-emerald-600' },
        { name: 'Livewire', level: 80, color: 'from-pink-500 to-pink-600' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      description: 'Data management and cloud technologies',
      skills: [
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'PostgreSQL', level: 70, color: 'from-blue-600 to-blue-700' },
        { name: 'Redis', level: 65, color: 'from-red-500 to-red-600' },
        { name: 'AWS', level: 60, color: 'from-amber-500 to-amber-600' },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      description: 'Modern web development standards',
      skills: [
        { name: 'Responsive Design', level: 90, color: 'from-teal-500 to-teal-600' },
        { name: 'Web Performance', level: 75, color: 'from-lime-500 to-lime-600' },
        { name: 'SEO', level: 70, color: 'from-violet-500 to-violet-600' },
        { name: 'Accessibility', level: 65, color: 'from-rose-500 to-rose-600' },
      ]
    },
    {
      title: 'Development Practices',
      icon: Zap,
      description: 'Best practices and methodologies',
      skills: [
        { name: 'Agile/Scrum', level: 80, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Testing', level: 70, color: 'from-green-500 to-green-600' },
        { name: 'Code Review', level: 85, color: 'from-indigo-500 to-indigo-600' },
        { name: 'Documentation', level: 75, color: 'from-slate-500 to-slate-600' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleBars(prev => new Set([...prev, skillName]));
              }, 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-skill]');
    skillElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isVisible = visibleBars.has(skillKey);
                    
                    return (
                      <div key={skillIndex} data-skill={skillKey}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Docker', 'Composer', 'NPM', 'Webpack', 'Sass', 'jQuery',
              'Angular', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Firebase',
              'GraphQL', 'TypeScript', 'Tailwind CSS', 'Material UI'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/40 dark:hover:to-purple-800/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
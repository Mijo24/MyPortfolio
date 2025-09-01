import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  MessageSquare, 
  Users, 
  Lightbulb,
  Target,
  Zap,
  BookOpen
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const technicalSkills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Code className="w-6 h-6" />,
    skills: ["React.js", "Vue.js", "React Native", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    color: "blue"
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Laravel", "PHP"],
    color: "purple"
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "Supabase"],
    color: "indigo"
  },
  {
    title: "Tools & Languages",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "VSCode", "XAMPP", "Postman", "AI tools", "JavaScript", "PHP", "Python", "Java"],
    color: "emerald"
  }
];

const softSkills = [
  { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
  { name: "Communication", icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Adaptability", icon: <Zap className="w-5 h-5" /> },
  { name: "Teamwork", icon: <Users className="w-5 h-5" /> },
  { name: "Initiative", icon: <Target className="w-5 h-5" /> },
  { name: "Willingness to Learn", icon: <BookOpen className="w-5 h-5" /> }
];

const colorClasses = {
  blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
  indigo: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
  emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300"
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills acquired through hands-on experience
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-3 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex items-center space-x-4"
              >
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  {skill.icon}
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
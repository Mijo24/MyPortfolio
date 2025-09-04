import React from 'react';
import { ExternalLink, Database, Code, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "AgriTayo E-Commerce Web Application",
    role: "Full-Stack Developer",
    description: "A platform connecting farmers directly with buyers, eliminating middlemen and providing fair pricing for agricultural products.",
    technologies: ["React Native", "React.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    highlights: [
      "Built responsive web application with React.js",
      "Implemented secure authentication with Supabase",
      "Created direct farmer-to-buyer marketplace"
    ],
    icon: <Smartphone className="w-8 h-8" />,
    link: "https://agritayo-demo.onrender.com/"
  },
  {
    title: "AgriTayo E-Commerce Mobile",
    role: "Full-Stack Developer",
    description: "A platform connecting farmers directly with buyers, eliminating middlemen and providing fair pricing for agricultural products.",
    technologies: ["React Native", "React.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    highlights: [
      "Developed cross-platform mobile app with React Native",
      "Implemented secure authentication with Supabase",
      "Created direct farmer-to-buyer marketplace"
    ],
    icon: <Smartphone className="w-8 h-8" />,
    link: "https://drive.google.com/file/d/1vP5R97cfUEBRtP9adEWpdzUVj2DFvBXk/view"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my full-stack development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    {project.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.link ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 dark:text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    <span>
                      {project.title.includes("Mobile")
                        ? "View AgriTayo Mobile"
                        : "View AgriTayo Website"}
                    </span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
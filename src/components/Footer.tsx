import React from 'react';
import { Github, Linkedin} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/Mijo24',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/michael-joshua-calalo-941a2437a/',
      color: 'hover:text-blue-600'
    },

  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 dark:text-gray-400">
              © {currentYear} Michael Joshua R. Calalo. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-gray-400 ${link.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900`}
                aria-label={link.name}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

       
      </div>
    </footer>
  );
}
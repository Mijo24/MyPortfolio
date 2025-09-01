import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Hi, I'm{' '}
              <span className="text-green-600 dark:text-green-400">Michael</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A full-stack developer passionate about building efficient, user-friendly systems
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black transition-all duration-300 font-medium"
            >
              View My Work
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
}
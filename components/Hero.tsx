'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from 'react-icons/fi'
import { FaReact, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Dav50505', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/david-ginzburg-a453ba295/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/dginzburg_2005/?hl=en', label: 'Instagram' },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 mb-4">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                David Ginzburg
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Front-End Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Specializing in React, Next.js, and TypeScript to build modern, performant web
                applications with exceptional user experiences.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                aria-label="View Projects"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-colors"
                aria-label="Contact Me"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center space-x-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Gradient Blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-3xl" />
              
              {/* Grid Pattern with Tech Icons */}
              <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  {[
                    { icon: FaReact, color: 'text-blue-500', label: 'React' },
                    { icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', label: 'Next.js' },
                    { icon: SiTypescript, color: 'text-blue-600', label: 'TS' },
                    { icon: FaJs, color: 'text-yellow-500', label: 'JS' },
                    { icon: SiTailwindcss, color: 'text-cyan-500', label: 'Tailwind' },
                    { icon: FaReact, color: 'text-blue-500', label: 'React' },
                    { icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', label: 'Next.js' },
                    { icon: SiTypescript, color: 'text-blue-600', label: 'TS' },
                    { icon: FaJs, color: 'text-yellow-500', label: 'JS' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-4 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


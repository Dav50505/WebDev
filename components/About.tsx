'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCoffee, FiTrendingUp } from 'react-icons/fi'

const metrics = [
  { icon: FiCode, value: '50+', label: 'Projects Completed' },
  { icon: FiTrendingUp, value: '5+', label: 'Years Experience' },
  { icon: FiCoffee, value: '10+', label: 'Technologies Mastered' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I&apos;m a 20-year-old full stack developer with a passion for building modern,
                performant web applications. My journey in web development began in 2018, and since
                then, I&apos;ve dedicated myself to mastering the latest technologies and best
                practices across the entire development stack.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                I specialize in React, Next.js, and TypeScript, creating scalable full-stack applications with
                exceptional user experiences. My portfolio includes diverse projects such as content management systems, 
                e-commerce platforms with payment integration, real-time collaborative task management applications, 
                and responsive portfolio websites. My expertise spans from crafting pixel-perfect UIs to
                implementing complex state management, backend APIs, database design, and optimizing performance across the stack.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Currently, I&apos;m employed at <a href="https://eseospace.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Eseospace</a>, where I contribute to innovative 
                software solutions. I&apos;m also actively working on a project that requires strict HIPAA compliance, 
                developing secure healthcare applications that handle sensitive patient data while maintaining the highest 
                standards of privacy and security regulations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond full-stack development, I also work with Python for backend solutions and
                automation. I&apos;m committed to writing clean, maintainable code and staying
                current with industry trends and emerging technologies.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    <metric.icon size={24} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {['React', 'Next.js', 'TypeScript', 'Python'].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center border border-gray-200 dark:border-gray-700"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {tech}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Expert</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


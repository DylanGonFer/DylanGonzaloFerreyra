import React from "react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-4">
        <motion.h2
          className="text-2xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-muted/10 p-4 rounded-lg shadow-lg flex flex-col"
              variants={projectItemVariants}
            >
              {/* Imagen rectangular */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-md"
              >
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full object-cover aspect-video transition-transform duration-300 rounded-md hover:scale-105"
                />
              </a>

              {/* Título y descripción */}
              <div className="mt-4 flex-grow">
                <h3 className="text-lg font-semibold text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  {project.description}
                </p>
              </div>

              {/* Footer con enlace a GitHub */}
              <div className="mt-4 border-t border-border/30 pt-4 flex justify-center items-center">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-purple-500 flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.206 11.387.598.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.612-4.042-1.612-.544-1.379-1.33-1.747-1.33-1.747-1.086-.743.082-.727.082-.727 1.201.084 1.834 1.234 1.834 1.234 1.068 1.832 2.803 1.302 3.487.996.108-.774.417-1.302.761-1.601-2.665-.302-5.466-1.333-5.466-5.93 0-1.312.468-2.387 1.235-3.228-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.305 1.23.957-.266 1.984-.398 3.006-.402 1.021.004 2.048.136 3.006.402 2.296-1.553 3.302-1.23 3.302-1.23.653 1.653.242 2.873.118 3.176.768.841 1.233 1.916 1.233 3.228 0 4.609-2.803 5.624-5.473 5.921.43.372.814 1.104.814 2.223 0 1.606-.014 2.901-.014 3.293 0 .319.219.693.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
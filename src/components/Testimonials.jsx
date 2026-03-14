import { projects } from "../constants";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Testimonials = ({ id }) => {
  return (
    <div id={id} className="mt-24 border-b border-neutral-800 pb-24">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.span
          className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full px-4 py-1 text-sm font-medium uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.span>
       <div className="overflow-hidden">
  <motion.h2
    className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
    initial={{ x: -100 }}
    whileInView={{ x: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    Things I've{" "}
    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
      built
    </span>
  </motion.h2>
</div>
      </div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative flex flex-col rounded-xl border bg-neutral-900/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-900/20 ${
              project.featured
                ? "border-orange-500/40"
                : "border-neutral-800 hover:border-orange-500/30"
            }`}
          >
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs px-2 py-0.5 rounded-full font-medium">
                Featured
              </div>
            )}

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-neutral-100 mb-2 pr-16">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-medium"
                >
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
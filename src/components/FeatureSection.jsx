import { skills } from "../constants";
import { motion } from "framer-motion";

const SkillBar = ({ level }) => (
  <div className="mt-3 h-1 bg-neutral-800 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    />
  </div>
);

const FeatureSection = ({ id }) => {
  return (
    <div id={id} className="relative mt-24 border-b border-neutral-800 pb-24">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.span
          className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full px-4 py-1 text-sm font-medium uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.span>
        <div className="overflow-hidden">
                    <motion.h2
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
          Tools I work{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-600 text-transparent bg-clip-text">
            with
          </span>
        </motion.h2>
        </div>
      </div>

      {/* Skills grid  */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-orange-500/40 hover:bg-neutral-900 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex w-9 h-9 p-2 bg-neutral-800 text-orange-500 justify-center items-center rounded-lg group-hover:bg-orange-500/10 transition-colors">
                {skill.icon}
              </div>
              <h5 className="font-semibold text-neutral-100">{skill.text}</h5>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {skill.description}
            </p>
            <SkillBar level={skill.level} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeatureSection;
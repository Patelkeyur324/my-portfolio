import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

       {/* Profile Photo */}
      <motion.img
        src={profileImg}
        alt="profile"
        className="w-40 h-40 rounded-full object-cover border-2 border-orange-500/50 mb-6 shadow-lg shadow-orange-900/30"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      />

      {/* Badge */}
      <motion.div
        className="mb-6 inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 rounded-full px-4 py-1.5 text-sm text-orange-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
        Available for Freelance
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: false }}
      >
        Keyur Patel
      </motion.h1>

      {/* Title */}
      <motion.h2
        className="text-2xl sm:text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
          Frontend Developer
        </span>
      </motion.h2>

      {/* Bio */}
      <motion.p
        className="max-w-2xl text-lg text-neutral-400 leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        viewport={{ once: false }}
      >
        I craft fast, accessible, and delightful web experiences. Passionate
        about clean code, thoughtful UI, and turning ideas into pixel-perfect
        products.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        viewport={{ once: false }}
      >
        <a
          href="#projects"
          className="bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-7 rounded-md font-semibold text-white hover:opacity-90 transition-opacity"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="py-3 px-7 rounded-md border border-neutral-600 text-neutral-300 hover:border-orange-500 hover:text-orange-400 transition-all duration-200"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="mt-10 text-neutral-600 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
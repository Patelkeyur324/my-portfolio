import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Patelkeyur324", icon: <Github size={18} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/keyur-patel-185a3024b", icon: <Linkedin size={18} /> },
    { label: "Instagram", href: "https://www.instagram.com/keyur__patel_32", icon: <Instagram size={18} /> },
  ];

  return (
    <footer id="contact" className="mt-24 border-t border-neutral-800 pt-16 pb-10">
      {/* Contact CTA */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="inline-block bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-full px-4 py-1 text-sm font-medium uppercase tracking-widest mb-5">
          Contact
        </span>
        <div className="overflow-hidden">
          <motion.h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Let's build something{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
              together
            </span>
          </motion.h2>
        </div>
        <motion.p
          className="text-neutral-400 max-w-md mx-auto text-lg mb-8"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Open to freelance projects, full-time roles, and interesting
          collaborations. My inbox is always open.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.a
            href="mailto:keyurpatel322004@email.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-8 rounded-md font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(249, 115, 22, 0.6)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={16} />
          </motion.a>

          <motion.a
            href="tel:+917859892741"
            className="inline-flex items-center gap-2 border border-neutral-600 py-3 px-8 rounded-md font-semibold text-neutral-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Phone size={18} />
            Call Me
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mb-8" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Keyur Patel. Built with React & Tailwind.
        </span>

        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-neutral-500">
  <a href="mailto:keyurpatel322004@email.com" className="hover:text-orange-400 transition-colors duration-200 flex items-center gap-1">
    <Mail size={14} />
    keyurpatel322004@email.com
  </a>
  <span className="hidden sm:block">|</span>
  <a href="tel:+917859892741" className="hover:text-orange-400 transition-colors duration-200 flex items-center gap-1">
    <Phone size={14} />
    +91 78598 92741
  </a>
</div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              aria-label={link.label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400 transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
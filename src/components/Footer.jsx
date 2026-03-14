import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { label: "GitHub", href: "#", icon: <Github size={18} /> },
    { label: "LinkedIn", href: "#", icon: <Linkedin size={18} /> },
    { label: "Instagram", href: "#", icon: <Instagram size={18} /> },
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
        <motion.a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-700 py-3 px-8 rounded-md font-semibold hover:opacity-90 transition-opacity text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Mail size={18} />
          Say Hello
          <ArrowUpRight size={16} />
        </motion.a>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-neutral-800 mb-8" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
        </span>

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
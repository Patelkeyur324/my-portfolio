import { TableOfContents, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import profileImg from "../assets/profile.jpg";

const Navbar = ({ theme, toggleTheme }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  const DEFAULT_SCROLL_OFFSET = 84;

  const getScrollOffset = () => {
    try {
      const val = getComputedStyle(document.documentElement).getPropertyValue(
        "--nav-scroll-offset"
      );
      const parsed = parseInt(val, 10);
      return Number.isFinite(parsed) ? parsed : DEFAULT_SCROLL_OFFSET;
    } catch (e) {
      return DEFAULT_SCROLL_OFFSET;
    }
  };

  const handleNavClick = (e, href, closeDrawer = false) => {
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = getScrollOffset();
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    if (closeDrawer) setMobileDrawerOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`z-50 py-3 transition-all duration-300 border-b ${
        scrolled
          ? isDark
            ? "fixed top-0 w-full backdrop-blur-xl border-neutral-700/50 bg-neutral-950/40"
            : "fixed top-0 w-full backdrop-blur-xl border-neutral-300/50 bg-white/40"
          : "sticky top-0 border-transparent bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Brand / Name */}
          <div className="flex items-center flex-shrink-0">
            <img src={profileImg} className="w-9 h-9 rounded-full object-cover mr-3" alt="Keyur Patel" />
            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">{"<"}</span>
              Keyur Patel
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">{"/>"}</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-neutral-600 hover:text-orange-400 transition-colors duration-200 font-medium dark:text-neutral-300 dark:hover:text-orange-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-neutral-700 transition-colors hover:text-orange-400 dark:text-neutral-300 dark:hover:text-orange-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="mailto:keyurpatel322004@gmail.com"
              className="py-2 px-4 border border-neutral-400 rounded-md text-neutral-700 hover:border-orange-500 hover:text-orange-400 transition-all duration-200 dark:border-neutral-600 dark:text-neutral-300"
            >
              Say Hello 👋
            </a>
            <a
              href="https://drive.google.com/file/d/1SqqsMg5hXUjMIaNnsXii39h2vfXYPyKx/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-2 px-4 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-neutral-700 transition-colors hover:text-orange-400 dark:text-neutral-300 dark:hover:text-orange-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle navigation"
            >
              {mobileDrawerOpen ? <X /> : <TableOfContents />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-x-0 top-[53px] z-20 bg-white/95 border-t border-neutral-200 p-8 flex flex-col items-center gap-6 lg:hidden shadow-lg shadow-neutral-200/50 dark:bg-neutral-950 dark:border-neutral-800 dark:shadow-none">
            <ul className="flex flex-col items-center gap-4 w-full">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className="text-lg text-neutral-700 hover:text-orange-400 transition-colors dark:text-neutral-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="mailto:keyurpatel322004@gmail.com"
                className="py-2 px-4 border border-neutral-400 rounded-md text-neutral-700 dark:border-neutral-600 dark:text-neutral-300"
              >
                Say Hello 👋
              </a>
              <a
                href="https://drive.google.com/file/d/1SqqsMg5hXUjMIaNnsXii39h2vfXYPyKx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-md"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
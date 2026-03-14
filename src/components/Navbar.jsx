import { TableOfContents, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import profileImg from "../assets/profile.jpg";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-3 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-xl border-neutral-700/80 bg-neutral-950/70"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Brand / Name */}
          <div className="flex items-center flex-shrink-0">
  <img src={profileImg} className="w-9 h-9 rounded-full object-cover mr-3" />
  <span className="text-xl font-bold tracking-tight">
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
                  className="text-neutral-300 hover:text-orange-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:keyurpatel322004@email.com"
              className="py-2 px-4 border border-neutral-600 rounded-md text-neutral-300 hover:border-orange-500 hover:text-orange-400 transition-all duration-200"
            >
              Say Hello 👋
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-700 py-2 px-4 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}>
              {mobileDrawerOpen ? <X /> : <TableOfContents />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-x-0 top-[53px] z-20 bg-neutral-950 border-t border-neutral-800 p-8 flex flex-col items-center gap-6 lg:hidden">
            <ul className="flex flex-col items-center gap-4 w-full">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="text-lg text-neutral-300 hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="mailto:keyurpatel322004@email.com"
                className="py-2 px-4 border border-neutral-600 rounded-md"
              >
                Say Hello 👋
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-md"
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
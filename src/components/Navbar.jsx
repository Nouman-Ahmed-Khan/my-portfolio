import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Theme effect
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const links = [
    { name: "Home", href: "#Home" },
    { name: "About-me", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact-me", href: "#Contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-700/60 backdrop-blur bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <div className="font-mono text-lg font-semibold cursor-pointer">
            Nouman-Ahmed-Khan
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Mobile Burger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1">
  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${ menuOpen ? "rotate-45 translate-y-1.5" : ""
    }`}/>
  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${ menuOpen ? "opacity-0" : ""
    }`}/>
  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${ menuOpen ? "-rotate-45 -translate-y-1.5" : ""
    }`}/>
</button>


            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 font-mono text-sm">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative transition-colors ${
                    active === link.name
                      ? "text-cyan-400"
                      : "opacity-70 hover:opacity-100"
                  }`}>
                    
                  _{link.name}

                  {active === link.name && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  )}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded hover:text-cyan-400 transition"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
  className={`fixed top-[64px] left-0 w-full z-40 md:hidden
    border-b border-gray-700/50
    bg-black/95 px-6 py-4
    space-y-4 font-mono
    transform transition-all duration-300 ease-out
    ${
      menuOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
>
  {links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={() => {
        setActive(link.name);
        setMenuOpen(false);
      }}
      className={`block ${
        active === link.name ? "text-cyan-400" : "opacity-70"
      }`}
    >
      _{link.name}
    </a>
  ))}
</div>

      )}
    </>
  );
};

export default Navbar;

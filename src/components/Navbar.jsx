import { useEffect, useState } from "react";


const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  //responsive for mobile menu
  {/* Mobile Menu Button */}
  <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-xl">☰</button>
  {menuOpen && (
  <div className="md:hidden border-t border-gray-700/50 bg-black/90 px-6 py-4 space-y-4 font-mono">
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
        }`}>
        _{link.name}
      </a>
        ))}
    </div>
    )}


  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);

  const links = [
    { name: "Home", href: "#Home" },
    { name: "About-me", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact-me", href: "#Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700/60 backdrop-blur bg-black/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="font-mono text-lg font-semibold cursor-pointer">
          Nouman-Ahmed-Khan
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setActive(link.name)} className={`relative transition-colors ${
                    active === link.name ? "text-cyan-400": "opacity-70 hover:opacity-100" }`}>
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
            className="p-2 rounded text-gray-500 dark:text-gray-400 hover:text-cyan-400 cursor-pointer transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

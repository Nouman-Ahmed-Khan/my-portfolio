import { useEffect, useState } from "react";

const roles = [
  "Front-end Developer",
  "React Developer",
  "UI / UX Enthusiast",
];

const projects = [
  {
    title: "ToonSwap",
    role: "Frontend / UI Development",
    description:
      "Crypto wallet UI built from Figma with responsive design and dynamic charts",
    tech: ["React.js", "Tailwind CSS", "Chart.js"],
    live: "https://toon-swap.vercel.app/",
    code: "https://github.com/Nouman-Ahmed-Khan/Toon-Swap",
  },
  {
    title: "Tech Care",
    role: "Frontend / UI Development",
    description:
      "Modern healthcare UI with data visualization and clean interactions",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    title: "Proswebtech",
    role: "Frontend Development",
    description:
      "Software house website with responsive, user-friendly design",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://proswebtech.com/",
    code: "https://github.com/Nouman-Ahmed-Khan",
  },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const [projectIndex, setProjectIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");

  /* Typing */
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [projectIndex]);

  const handleNext = () => {
    setDirection("next");
    setPrevIndex(projectIndex);
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setPrevIndex(projectIndex);
    setProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}
        <div className="space-y-6 font-mono">
          <p className="text-gray-400">Hi all. I am</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            Nouman Ahmed Khan
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-400">
            &gt; {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* RIGHT FLOATING STACK */}
        <div className="relative w-full max-w-md mx-auto h-[500px] animate-[float_6s_ease-in-out_infinite]">

          {projects.map((project, index) => {
            const isActive = index === projectIndex;
            const isPrev = index === prevIndex;

            let position = "opacity-0 scale-95";

            if (isActive) {
              position =
                "z-30 translate-x-0 opacity-100 scale-100";
            } else if (isPrev) {
              position =
                direction === "next"
                  ? "z-20 -translate-x-full opacity-0 scale-95"
                  : "z-20 translate-x-full opacity-0 scale-95";
            }

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${position}`}
              >
                <div className="rounded-2xl p-6 h-full bg-gradient-to-br from-[#0f172a] to-[#0b1120] border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-xl">

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-gray-500 ml-2">
                      projects.showcase
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]">
                      {project.title}
                    </h3>
                    <span className="text-gray-600 text-sm">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500">// Role</p>
                    <p className="text-gray-300 text-sm mt-1">
                      {project.role}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500">// Description</p>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-500">// Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs border border-cyan-400/40 rounded-md text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() =>
                        window.open(project.live, "_blank")
                      }
                      className="flex-1 border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                    >
                      view-live
                    </button>

                    <button
                      onClick={() =>
                        window.open(project.code, "_blank")
                      }
                      className="flex-1 border border-gray-600 py-2 rounded-lg hover:border-cyan-400 transition"
                    >
                      view-code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
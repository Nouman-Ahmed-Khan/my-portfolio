const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT */}
<div className="space-y-6">
  <p className="font-mono text-gray-400">Hi all. I am</p>

  <h1 className="text-5xl lg:text-6xl font-bold">
    Nouman Ahmed <br /> Khan
  </h1>

  <div className="flex gap-2 text-purple-400 font-mono text-xl">
    <span>&gt;</span>
    <span className="text-cyan-400">Front-end developer</span>
  </div>

  {/* Code style line */}
  <div className="font-mono text-sm text-gray-400 mt-6">
    <span className="text-purple-400">const</span>{" "}
    <span className="text-cyan-400">githubLink</span>{" "}
    <span>=</span>{" "}
    <span className="text-yellow-400">
      "https://github.com/Nouman-Ahmed-Khan"
    </span>
  </div>
</div>


        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="glass-card rounded-xl p-6 w-full max-w-md">
            <h3 className="text-cyan-400 font-mono text-xl mb-4">
              projects.showcase
            </h3>
            <p className="text-gray-300 text-sm">
              Project carousel next step mein banayenge.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

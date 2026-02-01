import { useEffect } from "react";

const CosmicBackground = () => {
  useEffect(() => {
    const container = document.getElementById("starsContainer");
    const starCount = 120;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";

      star.style.cssText = `
        width:${Math.random()*2+1}px;
        height:${Math.random()*2+1}px;
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        --duration:${Math.random()*4+3}s;
        --min-opacity:0.2;
        --max-opacity:1;
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="cosmic-bg">
      <div className="cosmic-gradient"></div>
      <div className="milky-way"></div>
      <div id="starsContainer"></div>
    </div>
  );
};

export default CosmicBackground;

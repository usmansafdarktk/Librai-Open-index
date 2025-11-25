import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function Hero() {
  return (
    <section className="min-h-screen relative w-full bg-[#05050a] flex flex-col items-center justify-center overflow-hidden pt-64 pb-40 px-6">
      
      {/*  BACKGROUND LAYERS  */}
      <div className="absolute inset-0 z-0">
        <StarsBackground 
          starDensity={0.0002} 
          allStarsTwinkle={true} 
          twinkleProbability={0.7} 
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
        />
      </div>
      
      <div className="absolute inset-0 z-0">
        <ShootingStars 
          starColor="#5b62ff" 
          trailColor="#2eb9df" 
          minSpeed={15} 
          maxSpeed={35} 
          minDelay={2000} 
          maxDelay={4000}
        />
      </div>

      {/*  FOREGROUND CONTENT  */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl text-center">
        
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-tight text-white">
          The Open Index for AI Safety
        </h1>
        
        <p className="text-lg md:text-xl fond-medium text-slate-300 max-w-3xl leading-relaxed mb-10">
          The LibrAI Open Index is a living catalogue of public datasets designed to evaluate, red-team, and improve the safety of Large Language Models.
        </p>

        {/* Blue CTA Button */}
        <a 
          href="https://www.librai.tech/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#5b62ff] text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-[#4a50e0] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#5b62ff]/25"
        >
          Visit LibrAI Website
        </a>

      </div>
      
    </section>
  );
}

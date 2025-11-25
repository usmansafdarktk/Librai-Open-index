"use client"; // Required for mouse tracking
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  // State to manage the tooltip content and position
  const [tooltip, setTooltip] = useState({ opacity: 0, text: "", x: 0, y: 0 });

  // Update position and text when moving mouse over a feature
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, text: string) => {
    setTooltip({
      opacity: 1,
      text: text,
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Hide tooltip when leaving
  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <section id="about" className="bg-white py-24 px-6 relative">
      
      {/* FLOATING TOOLTIP */}
      <div 
        className="fixed z-[100] pointer-events-none transition-opacity duration-200 ease-out max-w-xs bg-white text-slate-900 text-sm p-4 rounded-3xl shadow-2xl border-r-2 border-b-2 border-[#5b62ff] leading-relaxed"
        style={{ 
          opacity: tooltip.opacity,
          left: tooltip.x, 
          top: tooltip.y, 
          transform: 'translate(-50%, -120%)' // shifts it above the cursor
        }}
      >
        {tooltip.text}
        {/* Little arrow pointing down */}
        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
      </div>


      <div className="max-w-6xl mx-auto">
        
        {/* Top Text Area - Centered */}
        <div className="mb-20 max-w-6xl mx-auto text-center">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-8">
            About the Project
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
            A Centralized Hub for <br /> 
            <span className="text-[#5b62ff]">
              AI Safety Research
            </span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            The LibrAI Open Index aggregates over 150 public datasets for Large Language Model (LLM) evaluation. We structure these resources with standardized metadata including licensing, task categories, and source provenance to streamline red-teaming and alignment research..
          </p>
        </div>

        {/* 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
          
          {/* Feature 1 */}
          <div 
            className="group text-center flex flex-col items-center cursor-help"
            onMouseMove={(e) => handleMouseMove(e, "Datasets are indexed with granular tags for license compatibility (MIT, Apache 2.0), release year, and specific safety vectors (e.g., PII leakage, toxicity).")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon-1.png`} 
                alt="Structured Metadata Icon" 
                width={172} 
                height={172}
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Structured Metadata</h4>
          </div>

          {/* Feature 2 */}
          <div 
            className="group text-center flex flex-col items-center cursor-help"
            onMouseMove={(e) => handleMouseMove(e, "Prioritizing datasets containing adversarial prompts, jailbreak attempts, and edge cases essential for rigorous stress-testing of model safeguards.")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon-2.png`}
                alt="Adversarial Focus Icon" 
                width={172} 
                height={172} 
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Adversarial Focus</h4>
          </div>

          {/* Feature 3 */}
          <div 
            className="group text-center flex flex-col items-center cursor-help"
            onMouseMove={(e) => handleMouseMove(e, "Continuously updated via community submissions to track the latest academic benchmarks and industry-standard evaluation suites.")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/icon-3.png`} 
                alt="Living Registry Icon" 
                width={172} 
                height={172} 
                className="object-contain"
              />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Living Registry</h4>
          </div>

        </div>
      </div>
    </section>
  );
}


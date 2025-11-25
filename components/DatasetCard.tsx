import React from 'react';

export interface DatasetLinks {
  github?: string;
  paper?: string;
  huggingface?: string;
  data?: string;
}

export interface DatasetCardProps {
  id: string;
  title: string;
  links?: DatasetLinks;
  description: string;
  notes?: string;
  publication: string;
  addedDate: string;
}

export default function DatasetCard({ 
  id,
  title, 
  links = {},
  description,
  notes,
  publication,
  addedDate
}: DatasetCardProps) {
  
  // Helper to determine if we should show the paper section
  const hasPaperInfo = (links.paper && links.paper !== '-') || (publication && publication !== "Citation pending");

  

  return (
    <div id={id} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 scroll-mt-32 overflow-hidden">
      
      {/*  CARD HEADER  */}
      <div className="px-8 pt-8 pb-2 flex justify-between items-start">
        
        {/* Title Area */}
        <div>
          <h3 className="text-2xl font-bold text-black tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-xs font-semibold text-slate-400 mt-2 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Added to Index: <span className="text-slate-600">{addedDate}</span>
          </p>
        </div>

        {/* Top Right Links (GitHub / HF) */}
        <div className="flex items-center gap-2">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View on GitHub"
              className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-800 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
          {links.huggingface && (
            <a 
              href={links.huggingface} 
              target="_blank" 
              rel="noopener noreferrer"
              title="View on HuggingFace" 
              className="p-2 rounded-full bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white transition-all"
            >
              <span className="text-lg leading-none block -mt-0.5">🤗</span>
            </a>
          )}
          {links.data && (
            <a 
              href={links.data} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Download Data"
              className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          )}
        </div>
      </div>

      {/*  CARD BODY  */}
      <div className="px-8 pb-8 pt-4 space-y-6">
        
        {/* 1. Description */}
        <p className="text-[16px] text-slate-700 leading-relaxed font-medium">
          {description}
        </p>

        {/* 2. Key Notes */}
        {notes && (
          <div className="bg-orange-50/50 p-4 border-l-4 border-orange-300">
            <p className="text-[15px] text-slate-700">
              <span className="font-bold text-orange-800 block mb-1 text-xs uppercase tracking-wider">Key Notes</span>
              {notes}
            </p>
          </div>
        )}

        {/* 3. Paper Info (Conditional Rendering) */}
        {hasPaperInfo && (
          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
            
            {/* Citation Icon */}
            <div className="shrink-0 text-[#5b62ff] pt-0.5">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            {/* Citation Text */}
            <div className="text-sm text-slate-600 italic font-medium flex-grow leading-snug">
              {(publication === '-' || !publication) ? "No associated paper found." : publication}
            </div>

            {/* Read Paper Icon Button */}
            {links.paper && (
              <a 
                href={links.paper} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Read Paper"
                className="shrink-0 p-2 rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
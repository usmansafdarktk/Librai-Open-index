"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import DatasetCard, { DatasetCardProps } from './DatasetCard';

//  CSV Data Interface 
interface CsvRow {
  "Dataset Name": string;
  "Type": string;
  "Language": string;
  "Scale": string;
  "Github Link": string;
  "Hugging Face Link": string;
  "Paper Link": string;
  "Paper Title": string;
  "Description": string;
}

interface DatasetData extends DatasetCardProps {
  category: string;
}

export default function Datasets() {
  const [datasets, setDatasets] = useState<DatasetData[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for Search
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const response = await fetch('/datasets.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedData: DatasetData[] = (results.data as CsvRow[]).map((row) => {
              
              const keyNote = `This ${row.Language} dataset focuses on ${row.Type} and contains ${row.Scale}.`;
              const description = row.Description || `${row.Scale} in ${row.Language}. A ${row.Type} dataset designed for safety evaluation.`;

              return {
                id: row["Dataset Name"]?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'unknown',
                title: row["Dataset Name"],
                category: row["Type"] || "Uncategorized",
                
                description: description,
                notes: keyNote, 
                
                publication: row["Paper Title"] || "Citation pending",
                addedDate: "2024",
                
                links: {
                  github: row["Github Link"] && row["Github Link"] !== '-' ? row["Github Link"] : undefined,
                  huggingface: row["Hugging Face Link"] && row["Hugging Face Link"] !== '-' ? row["Hugging Face Link"] : undefined,
                  paper: row["Paper Link"] && row["Paper Link"] !== '-' ? row["Paper Link"] : undefined,
                }
              };
            });

            setDatasets(parsedData);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error loading CSV:", error);
        setLoading(false);
      }
    };

    fetchDatasets();
  }, []);

  //  Filter Logic 
  const filteredDatasets = datasets.filter((d) => {
    const query = searchQuery.toLowerCase();
    return (
      d.title.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query)
    );
  });

  // Get unique categories from the FILTERED list
  const categories = Array.from(new Set(filteredDatasets.map((d) => d.category))).sort();

  return (
    <section id="datasets" className="py-20 px-6 bg-[#e1e7ff] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-3">
            The Catalogue
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Public Safety Datasets
          </h3>
          <p className="text-slate-600 text-lg">
            {loading 
              ? "Loading datasets..." 
              : `Showing ${filteredDatasets.length} verified datasets.`
            }
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/*  LEFT SIDEBAR: TOC + SEARCH  */}
          <aside className="hidden lg:block lg:w-1/4 h-fit sticky top-32">
            <div className="bg-white/60 backdrop-blur-md border border-blue-900/5 rounded-lg p-6 shadow-sm max-h-[76vh] overflow-y-auto">
              
              {/* Search Bar */}
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Filter datasets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 border border-slate-400 rounded-md leading-5 bg-white/50 placeholder-slate-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
                />
              </div>

              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                Table of Contents
              </h4>
              
              {loading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>
              ) : (
                <nav className="space-y-8">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <div key={cat}>
                        <h5 className="font-bold text-blue-900 text-lg mb-3 flex items-center gap-2">
                          {cat}
                        </h5>
                        <ul className="space-y-3 pl-1 border-l-2 border-slate-200/50 ml-1">
                          {filteredDatasets.filter(d => d.category === cat).map((dataset) => (
                            <li key={dataset.id}>
                              <a 
                                href={`#${dataset.id}`} 
                                className="text-base font-medium text-slate-600 hover:text-blue-700 hover:underline decoration-blue-400 underline-offset-4 pl-4 transition-all block"
                              >
                                {dataset.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400 italic">No matching datasets found.</p>
                  )}
                </nav>
              )}
            </div>
          </aside>

          {/*  RIGHT COLUMN: DATASET FEED  */}
          <div className="lg:w-3/4">
            
            {/* The 1-Column Grid */}
            <div className="flex flex-col gap-6">
              {loading ? (
                // Loading Skeletons
                [1, 2, 3].map((i) => (
                  <div key={i} className="h-64 bg-white/50 rounded-xl animate-pulse"></div>
                ))
              ) : (
                filteredDatasets.map((dataset) => (
                  <DatasetCard 
                    key={dataset.id}
                    {...dataset}
                  />
                ))
              )}
            </div>

            {/* Footer */}
            {!loading && (
              <div className="mt-16 text-center">
                <p className="text-slate-500 text-sm">End of list</p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

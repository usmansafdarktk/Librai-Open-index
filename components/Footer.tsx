import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#05050a] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* LEFT: Branding */}
        <div className="flex items-center gap-3">
          <Image 
            src="/librai-icon-light.png" 
            alt="LibrAI Logo" 
            width={100} 
            height={100} 
            className="object-contain opacity-90"
          />
          <div className="flex flex-col">
            <span className="text-white text-xl font-medium tracking-wide">
              | Open Index
            </span>
          </div>
        </div>

        {/* CENTER: Copyright */}
        <div className="text-slate-200 text-sm">
          &copy; {new Date().getFullYear()} LibrAI. All rights reserved.
        </div>

        {/* RIGHT: Simple Links */}

      </div>
    </footer>
  );
}

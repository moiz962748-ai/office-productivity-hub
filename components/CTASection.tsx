import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 border-t border-[#1E2536]/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-[#0A0E1A] to-[#0A3D33] border border-[#1E2536]/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 overflow-hidden relative shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Practice?</h2>
            <p className="text-justify text-gray-400 text-lg mb-8">Download the files, follow the tutorial, and build the skill yourself.</p>
            
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold">
                 .DOCX
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold">
                 .XLSX
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold">
                 .PPTX
              </span>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
            <button className="w-full md:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors">
              Browse Practice Files <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
             <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-orange-400">
               50,000+
             </div>
             <div>
               <h4 className="text-white font-bold text-base">Monthly Learners</h4>
               <p className="text-justify text-xs text-gray-400 mt-1">Learning Microsoft 365, data analysis, and AI-powered productivity workflows.</p>
             </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1E2536]/50 text-xs text-gray-400">
            <CheckCircle className="w-4 h-4 text-gray-500" /> Verified platform learning metric
          </div>
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import { Play } from 'lucide-react';

export default function VideoLearning() {
  const videos = [
    {
      id: 1,
      tags: ['WORD + EXCEL', 'AI & COPILOT', 'Practice File Available'],
      time: '14:20',
      title: 'How to Use Microsoft Copilot in Word & Excel — Step-by-Step',
      desc: 'Master automated document drafting, formula creation, and executive summary prompts in under 15 minutes.',
      thumbnailColor: 'from-blue-600/20 to-blue-900/20',
      playColor: 'bg-blue-600',
      textColor: 'text-blue-400',
      series: 'Microsoft Copilot Mastery',
      seriesDesc: 'Prompting for Word & Excel'
    },
    {
      id: 2,
      tags: ['PRACTICE FILE AVAILABLE', 'EXCEL FORMULAS', 'XLSX Included'],
      time: '18:45',
      title: 'XLOOKUP vs. VLOOKUP: Complete Hands-On Guide with Practice File',
      desc: 'Learn why XLOOKUP replaces VLOOKUP and INDEX/MATCH with practical datasets you can download and use.',
      thumbnailColor: 'from-green-600/20 to-green-900/20',
      playColor: 'bg-green-600',
      textColor: 'text-green-400',
      series: 'XLOOKUP vs. VLOOKUP',
      seriesDesc: 'Excel Data Matching Guide'
    },
    {
      id: 3,
      tags: ['EXCEL → POWERPOINT', 'CROSS-APP WORKFLOW', 'Dynamic Link'],
      time: '11:15',
      title: 'Automate Excel Data into PowerPoint Presentation Slides',
      desc: 'Dynamically link financial tables and charts from Excel into PowerPoint slides that auto-update on changes.',
      thumbnailColor: 'from-orange-600/20 to-orange-900/20',
      playColor: 'bg-orange-600',
      textColor: 'text-orange-400',
      series: 'Live Chart Link',
      seriesDesc: 'Excel to PowerPoint Deck'
    }
  ];

  return (
    <section className="py-24 border-t border-[#1E2536]/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left mb-16">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded bg-red-500/10 text-red-500 mb-4 border border-red-500/20">
             <Play className="w-3 h-3 fill-current" />
             <span className="text-[10px] font-bold tracking-widest uppercase">INTEGRATED VIDEO LEARNING</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Watch it. Follow it. Practice It.</h2>
          <p className="text-justify text-sm text-gray-400 max-w-2xl mx-auto">Learn visually through step-by-step YouTube tutorials, then use the written guide and practice files to apply what you learned.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#1E2536]/50 transition-colors flex flex-col shadow-xl">
              {/* Thumbnail Area */}
              <div className={`h-48 bg-gradient-to-br ${video.thumbnailColor} relative flex items-center justify-center`}>
                <div className="absolute top-3 left-3 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded px-2 py-0.5">
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${video.textColor}`}>
                    {video.tags[0]}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded px-2 py-0.5 flex items-center gap-1">
                  <span className="text-[9px] font-medium text-gray-300">{video.time}</span>
                </div>
                
                {/* Play Button */}
                <div className={`w-12 h-12 rounded-full ${video.playColor} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                  <Play className="w-5 h-5 text-white fill-current ml-1" />
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white leading-tight">{video.series}</h4>
                  <p className={`text-[10px] ${video.textColor} mt-0.5`}>{video.seriesDesc}</p>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] font-bold ${video.textColor} uppercase tracking-wider`}>{video.tags[1]}</span>
                  <span className={`text-[9px] font-medium text-white px-2 py-0.5 rounded ${video.tags[2] === 'Dynamic Link' ? 'bg-orange-500/20 border-orange-500/20 text-orange-400' : 'bg-green-500/20 border-green-500/20 text-green-400'} border`}>{video.tags[2]}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{video.title}</h3>
                <p className="text-justify text-xs text-gray-400 leading-relaxed mb-6 flex-1">{video.desc}</p>
                
                <button className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors mt-auto">
                  <Play className="w-4 h-4 fill-current" /> Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
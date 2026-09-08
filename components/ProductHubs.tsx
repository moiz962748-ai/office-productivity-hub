'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductHubs() {
  const router = useRouter();

  const hubs = [
    {
      id: 'word-hub',
      title: 'Microsoft Word',
      subtitle: 'Write. Format. Automate.',
      desc: 'Learn document formatting, professional layout design, mail merge automation, and AI-assisted drafting.',
      iconLetter: 'W',
      colorClasses: {
        borderTop: 'bg-blue-600',
        iconBg: 'bg-blue-600',
        iconShadow: '',
        subtitle: 'text-blue-400',
        featureIcon: 'text-blue-400',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
      },
      categories: [
        'Getting Started & Basics',
        'Formatting & Document Design',
        'AI Tools & Copilot in Word',
        'Integrations & Workflows',
        'Word Resources & Downloads'
      ],
      mockup: (
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-3 border border-[#1E2536]/50 h-32 flex flex-col justify-center">
          <div className="space-y-3">
            <div className="flex gap-2 items-center">
              <div className="w-full h-2.5 bg-blue-500/25 rounded"></div>
              <div className="text-[9px] bg-blue-600 px-2 py-0.5 rounded text-white font-medium whitespace-nowrap">Styles Gallery</div>
            </div>
            <div className="w-4/5 h-2 bg-white/10 rounded"></div>
            <div className="w-5/6 h-2 bg-white/10 rounded"></div>
            <div className="w-3/4 h-2 bg-white/10 rounded"></div>
          </div>
        </div>
      )
    },
    {
      id: 'excel-hub',
      title: 'Microsoft Excel',
      subtitle: 'Calculate. Analyze. Automate.',
      desc: 'Master cell data entry, formulas such as XLOOKUP and INDEX/MATCH, data visualization, Power Query, and Copilot-assisted formula generation.',
      iconLetter: 'X',
      colorClasses: {
        borderTop: 'bg-green-600',
        iconBg: 'bg-green-600',
        iconShadow: '',
        subtitle: 'text-green-400',
        featureIcon: 'text-green-400',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
      },
      categories: [
        'Excel Basics & Essentials',
        'Formulas, Functions & Lookup',
        'AI Tools & Copilot in Excel',
        'Integrations & Data Analytics',
        'Excel Resources & Practice Files'
      ],
      mockup: (
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-3 border border-[#1E2536]/50 h-32 flex flex-col justify-center gap-3">
          <div className="bg-white/[0.02] backdrop-blur-sm border border-green-500/30 rounded p-1.5 flex justify-between items-center text-[10px] font-mono">
            <span className="text-green-400">=XLOOKUP(lookup_val, array)</span>
            <span className="text-gray-500">A1:D10</span>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-white/[0.02] h-5 rounded flex items-center justify-center text-[8px] text-gray-400">ID</div>
            <div className="bg-white/[0.02] h-5 rounded flex items-center justify-center text-[8px] text-gray-400">Val</div>
            <div className="bg-white/[0.02] h-5 rounded flex items-center justify-center text-[8px] text-gray-400">Qty</div>
            <div className="bg-white/[0.02] h-5 rounded flex items-center justify-center text-[8px] text-gray-400">Total</div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-white/10 h-1.5 rounded w-1/2 mx-auto"></div>
            <div className="bg-white/10 h-1.5 rounded w-3/4 mx-auto"></div>
            <div className="bg-white/10 h-1.5 rounded w-1/2 mx-auto"></div>
            <div className="bg-green-500/50 h-1.5 rounded w-full mx-auto"></div>
          </div>
        </div>
      )
    },
    {
      id: 'powerpoint-hub',
      title: 'Microsoft PowerPoint',
      subtitle: 'Design. Present. Impress.',
      desc: 'Create dynamic presentation slide decks, master animations, integrate Excel charts, and generate slides using AI.',
      iconLetter: 'P',
      colorClasses: {
        borderTop: 'bg-orange-600',
        iconBg: 'bg-orange-600',
        iconShadow: '',
        subtitle: 'text-orange-400',
        featureIcon: 'text-orange-400',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700',
      },
      categories: [
        'Slide Basics & Presentation Setup',
        'Visual Design & Multimedia',
        'AI Tools & Copilot in PowerPoint',
        'Integrations & Data Linking',
        'PowerPoint Templates & Resources'
      ],
      mockup: (
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-3 border border-[#1E2536]/50 h-32 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] text-gray-400">Slide Master #01</span>
            <span className="text-[8px] bg-orange-500/20 text-orange-400 px-1.5 rounded border border-orange-500/20">16:9 HD Deck</span>
          </div>
          <div className="flex-1 border-2 border-dashed border-[#1E2536]/50 rounded flex items-center justify-center relative overflow-hidden">
            <div className="w-3/4 h-3/4 bg-white/[0.02] rounded border border-[#1E2536]/50 relative">
              <div className="absolute top-2 left-2 w-1/2 h-2 bg-orange-500 rounded"></div>
              <div className="absolute top-6 left-2 w-3/4 h-1 bg-white/20 rounded"></div>
              <div className="absolute top-8 left-2 w-1/2 h-1 bg-white/20 rounded"></div>
              <div className="absolute bottom-2 right-2 p-1 bg-orange-600 rounded">
                 <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left mb-16">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-3 block">CORE APPLICATION HUBS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Learn Microsoft Office Step by Step</h2>
          <p className="text-justify text-sm text-gray-400 max-w-2xl mx-auto">Choose a software and explore structured tutorials, practical exercises, resources, and modern workflows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {hubs.map((hub) => (
            <div key={hub.id} className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl overflow-hidden flex flex-col hover:border-[#1E2536]/50 transition-colors group cursor-pointer">
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${hub.colorClasses.iconBg} flex items-center justify-center flex-shrink-0 ${hub.colorClasses.iconShadow}`}>
                    <span className="text-white font-bold text-xl">{hub.iconLetter}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{hub.title}</h3>
                    <p className={`text-sm ${hub.colorClasses.subtitle} font-medium mt-0.5`}>{hub.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-justify text-sm text-gray-400 mb-6 flex-1">{hub.desc}</p>
                
                <div className="mb-8">
                  {hub.mockup}
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">FEATURED CATEGORIES</h4>
                  <ul className="space-y-2 mb-8">
                    {hub.categories.map((cat, idx) => (
                      <li key={idx}>
                        <Link href={`/${hub.id}`} className="flex items-center justify-between text-sm text-gray-300 hover:text-white group/link transition-colors py-1">
                          <span className={cat.includes('AI Tools & Copilot') ? `${hub.colorClasses.featureIcon} font-medium flex items-center gap-1.5` : ''}>
                            {cat.includes('AI Tools & Copilot') && <Sparkles className="w-3.5 h-3.5" />}
                            {cat}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-600 group-hover/link:text-white transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => router.push(`/${hub.id}`)}
                    className={`w-full ${hub.colorClasses.buttonBg} ${hub.colorClasses.buttonHover} text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg`}
                  >
                    Explore {hub.iconLetter === 'W' ? 'MS Word' : hub.iconLetter === 'X' ? 'MS Excel' : 'PowerPoint'} Tutorials <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
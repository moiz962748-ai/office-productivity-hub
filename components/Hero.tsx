'use client';

import React from 'react';
import { Download, Sparkles, Map, Globe, FileText, Table, Presentation, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-[#1E2536]/50 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              </div>
              <span className="text-xs font-medium text-gray-300">Free Hands-On Productivity Hub</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Master Microsoft 365: Step-by-Step Tutorials, Practice Files & AI Workflows
            </h1>
            
            <p className="text-justify text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
              Office Productivity Hub is a free, hands-on learning platform designed to help students, office professionals, and analysts master Microsoft Word, MS Excel, and PowerPoint through step-by-step tutorials, practical files, cheat sheets, and modern AI-powered workflows.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Download className="w-5 h-5" />
                Download Practice Files
              </button>
              <button className="bg-transparent border border-[#1E2536]/50 hover:border-white/40 hover:bg-white/[0.02] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                Explore All Tutorials <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Info Card */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500"></div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-white font-semibold">What You Will Learn Here</h3>
                    <div className="flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-medium border border-blue-500/20">Word</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-400 font-medium border border-green-500/20">Excel</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 font-medium border border-orange-500/20">PowerPoint</span>
                    </div>
                  </div>
                  <p className="text-justify text-sm text-gray-400 leading-relaxed">
                    Office Productivity Hub is a free, hands-on learning platform designed to help students, office professionals, and analysts master Microsoft Word, MS Excel, and PowerPoint. We provide comprehensive step-by-step guides, real-world downloadable practice datasets (.docx, .xlsx, .pptx), PDF cheat sheets, and modern workflow integration tutorials covering Microsoft Copilot and AI automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Floating Elements */}
          <div className="relative h-[500px] hidden lg:block perspective-1000">
            {/* Floating Word Card */}
            <div className="absolute top-10 right-20 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 w-64 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 border-b border-[#1E2536]/50 pb-3">
                <div className="bg-blue-600 p-1.5 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">W</span>
                </div>
                <span className="text-sm text-gray-200 font-medium">Executive Report.docx</span>
                <span className="ml-auto text-[10px] text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded">Word</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-full"></div>
                <div className="h-2 bg-white/10 rounded w-4/5"></div>
                <div className="h-2 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>
            
            {/* Floating Excel Card */}
            <div className="absolute top-40 right-0 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 w-72 transform rotate-[1deg] hover:rotate-0 transition-transform duration-500 z-20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 border-b border-[#1E2536]/50 pb-3">
                <div className="bg-green-600 p-1.5 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
                <span className="text-sm text-gray-200 font-medium">Financial Forecast.xlsx</span>
                <span className="ml-auto text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">Excel</span>
              </div>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded p-2 mb-3 font-mono text-[10px] text-green-400">
                fx =XLOOKUP(A2, Dataset!A:A, Dataset!C:C)
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/[0.02] rounded p-2 text-left">
                  <div className="text-[9px] text-gray-500 uppercase">Q3 Revenue</div>
                  <div className="text-xs text-white font-semibold">$142,500</div>
                </div>
                <div className="bg-white/[0.02] rounded p-2 text-left">
                  <div className="text-[9px] text-gray-500 uppercase">Growth %</div>
                  <div className="text-xs text-green-400 font-semibold">+24.8%</div>
                </div>
                <div className="bg-white/[0.02] rounded p-2 text-left">
                  <div className="text-[9px] text-gray-500 uppercase">Status</div>
                  <div className="text-xs text-blue-400 font-semibold">Verified</div>
                </div>
              </div>
            </div>
            
            {/* Floating PowerPoint Card */}
            <div className="absolute top-[280px] right-24 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 w-72 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 z-30 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 border-b border-[#1E2536]/50 pb-3">
                <div className="bg-orange-600 p-1.5 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">P</span>
                </div>
                <span className="text-sm text-gray-200 font-medium">Quarterly Deck.pptx</span>
                <span className="ml-auto text-[10px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded">PowerPoint</span>
              </div>
              <div className="mb-2">
                <span className="text-[10px] text-orange-500 font-bold tracking-wider">EXECUTIVE PRESENTATION</span>
                <h4 className="text-white text-sm font-semibold">Strategic 2026 Roadmap</h4>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="w-1/2 h-16 bg-white/[0.02] rounded border border-[#1E2536]/50 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-[3px] border-orange-500 border-t-transparent"></div>
                </div>
                <div className="w-1/2 h-16 bg-white/[0.02] rounded border border-[#1E2536]/50 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-[3px] border-blue-500 border-r-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Ecosystem Badge */}
            <div className="absolute bottom-10 right-20 bg-white/10 backdrop-blur-md border border-[#1E2536]/50 rounded-full px-4 py-2 flex items-center gap-2 z-40 shadow-xl">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></div>
              </div>
              <span className="text-xs text-white font-medium">365 Ecosystem Connected</span>
            </div>
          </div>
        </div>
        
        {/* Value Props Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-10 border-t border-[#1E2536]/50">
          {[
            { id: 1, icon: Download, title: "100% Free Practice Datasets & Templates", colorClass: "text-blue-400" },
            { id: 2, icon: Sparkles, title: "Updated for Microsoft Copilot & AI Workflows", colorClass: "text-purple-400" },
            { id: 3, icon: Map, title: "Clear 2-Click Navigation Architecture", colorClass: "text-green-400" },
            { id: 4, icon: Globe, title: "Built for Global Students & Office Professionals", colorClass: "text-orange-400" }
          ].map((item) => (
            <div key={item.id} className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 flex items-start gap-4 p-5 rounded-2xl hover:border-[#1E2536]/50 transition-colors group cursor-pointer">
              <div className={`p-2.5 rounded-lg border border-[#1E2536]/50 bg-white/[0.02] ${item.colorClass} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className={`text-[10px] ${item.colorClass} font-mono mb-1 font-bold`}>0{item.id}</div>
                <h4 className="text-sm font-semibold text-gray-200 leading-snug pr-2">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
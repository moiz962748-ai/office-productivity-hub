import React from 'react';
import { ChevronRight, Lightbulb, UserCircle, Play, FileText, Download, Plus, Clock, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ExcelFormulas() {
  return (
    <main className="flex-grow pb-24 bg-[#050B14]">
      {/* Breadcrumbs */}
      <div className="bg-[#050B14] pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs text-gray-400 gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/excel-sub-hub" className="hover:text-white transition-colors">Microsoft Excel Master Hub</Link>
            <span className="text-gray-600">/</span>
            <span className="text-green-400 bg-green-900/20 px-2 py-0.5 rounded">Formulas & Functions in Microsoft Excel</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#050B14] pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Software Sub-Hub Landing Page
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight max-w-4xl">
            Formulas & Functions in Microsoft Excel: Lookups, Logic & Financial Modeling
          </h1>

          {/* Master Hub Summary Card */}
          <div className="bg-[#0b1220] border border-green-500/20 rounded-2xl p-6 relative overflow-hidden mb-8 shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-green-400">
                <Lightbulb className="w-5 h-5" />
                <h4 className="text-[10px] font-bold tracking-widest uppercase">SUB-HUB OVERVIEW</h4>
              </div>
              <span className="px-3 py-1 rounded-full border border-[#1E2536]/50 text-[10px] text-gray-400 font-medium">Direct-Answer Summary</span>
            </div>
            <p className="text-justify text-sm md:text-base text-gray-300 leading-relaxed font-medium">
              &laquo;Master advanced formulas and analytical functions in Microsoft Excel. This specialized hub provides step-by-step guides on mastering XLOOKUP, INDEX/MATCH, nested IF statements, SUMIFS/COUNTIFS calculations, and error-handling techniques for robust financial models.&raquo;
            </p>
          </div>

          {/* Author Details Bar */}
          <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center border border-[#1E2536]/50">
                  <CheckCircle2 className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-0.5">CURATED BY</h4>
                  <span className="text-sm font-semibold text-white">Office Productivity Editorial Team</span>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden md:block"></div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-0.5">REVIEWED FOR</h4>
                <span className="text-sm font-semibold text-gray-300">Microsoft 365 & Advanced Excel Modeling Standards</span>
              </div>
            </div>
            <a href="#" className="text-xs font-semibold text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 shrink-0 border-b border-green-400/30 pb-0.5">
              Meet the Editorial Team & Testing Policy →
            </a>
          </div>
        </div>
      </section>

      {/* Cheat Sheet Banner */}
      <section className="py-8 bg-[#050B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1220] border border-green-500/20 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PDF</span>
                <span className="text-xs text-gray-400 font-medium">Free Downloadable Asset</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Free Advanced Formulas Reference Sheet</h2>
              <p className="text-justify text-sm text-gray-400 mb-8 max-w-md">
                Includes syntax breakdowns for XLOOKUP, INDEX/MATCH, dynamic arrays, logical statements, and auditing hotkeys.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors w-fit flex items-center gap-2 shadow-lg">
                <Download className="w-4 h-4" /> Download Formula Cheat Sheet →
              </button>
            </div>
            <div className="p-8 md:w-1/2 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center border-l border-[#1E2536]/50">
              <div className="bg-[#050B14] border border-[#1E2536]/50 rounded-xl p-5 w-full max-w-md font-mono text-xs shadow-xl">
                <div className="flex justify-between items-center mb-5 border-b border-[#1E2536]/50 pb-3">
                  <span className="text-gray-300 flex items-center gap-2"><FileText className="w-4 h-4 text-green-400"/> Excel_Formulas_CheatSheet_2026.pdf</span>
                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-[10px] font-bold">PDF 2.9 MB</span>
                </div>
                <div className="text-green-400 mb-2 font-semibold">1. XLOOKUP Syntax Structure:</div>
                <div className="bg-black/50 p-3 rounded text-gray-300 border border-[#1E2536]/50 mb-5 whitespace-pre-wrap">
                  &quot;=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])&quot;
                </div>
                <div className="text-green-400 mb-2 font-semibold">2. Formula Auditing Hotkey:</div>
                <div className="bg-black/50 p-3 rounded text-gray-300 border border-[#1E2536]/50 whitespace-pre-wrap">
                  &quot;Ctrl + ` (Toggle Show Formulas across all cells)&quot;
                </div>
                <div className="text-center text-gray-500 mt-6 text-[10px] italic">
                  + Complete master function library in full PDF download
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-12 bg-[#050B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Formulas & Functions Tutorials</h2>
                <span className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">3 Guides</span>
              </div>
              <p className="text-justify text-sm text-gray-400 max-w-2xl">Explore advanced function tutorials covering dynamic lookups, conditional aggregates, and complex calculations.</p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Filter articles..." className="w-full md:w-64 bg-[#0b1220] border border-[#1E2536]/50 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-green-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Intermediate</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 8 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10">Lookups</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-green-400 transition-colors cursor-pointer">Mastering XLOOKUP: Replacing VLOOKUP and HLOOKUP Forever</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Learn why XLOOKUP is more flexible, supports exact matching by default, and handles left-to-right lookups seamlessly.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><Play className="w-3 h-3 text-red-500 fill-current" /> Video</span>
                <Link href="/article-landing" className="text-xs font-bold text-green-400 hover:text-green-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-green-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Intermediate</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 10 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10">Conditional Math</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-green-400 transition-colors cursor-pointer">Advanced SUMIFS, COUNTIFS, and AVERAGEIFS Calculations</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Discover how to aggregate data across multiple criteria ranges and work with wildcard operators in modern Excel.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><FileText className="w-3 h-3 text-green-400" /> Practice File</span>
                <Link href="/article-landing" className="text-xs font-bold text-green-400 hover:text-green-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-green-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-orange-500/10 text-orange-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Advanced</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 12 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10">Nested Logic</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-green-400 transition-colors cursor-pointer">Combining INDEX/MATCH and IFS Functions for Complex Models</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Build resilient multi-column database lookups and clean conditional statement trees without messy nested IF blocks.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><Play className="w-3 h-3 text-red-500 fill-current" /> Video</span>
                <Link href="/article-landing" className="text-xs font-bold text-green-400 hover:text-green-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#050B14]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-justify text-sm text-gray-400 mb-8">Common technical questions regarding Formulas & Functions in Microsoft Excel.</p>
          
          <div className="space-y-4">
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-green-500/30 transition-colors">
              <span className="text-sm font-semibold text-white">Why is my formula returning a #N/A error value?</span>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-green-500/30 transition-colors">
              <span className="text-sm font-semibold text-white">Can XLOOKUP search values across entirely different workbook files?</span>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
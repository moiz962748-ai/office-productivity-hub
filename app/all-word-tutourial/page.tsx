import React from 'react';
import { ChevronRight, Lightbulb, UserCircle, Play, FileText, Download, Plus, Clock, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WordHub() {
  return (
    <main className="flex-grow pb-24 bg-[#050B14]">
      {/* Breadcrumbs */}
      <div className="bg-[#050B14] pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs text-gray-400 gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-blue-400 bg-blue-900/20 px-2 py-0.5 rounded">All MS Word Tutorials & Master Library</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#050B14] pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Comprehensive Resource Center
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight max-w-4xl">
            All Microsoft Word Tutorials: Master Guides, Step-by-Step Workflows & Resources
          </h1>

          {/* Master Hub Summary Card */}
          <div className="bg-[#0b1220] border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden mb-8 shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2 text-blue-400">
                <Lightbulb className="w-5 h-5" />
                <h4 className="text-[10px] font-bold tracking-widest uppercase">MASTER LIBRARY OVERVIEW</h4>
              </div>
              <span className="px-3 py-1 rounded-full border border-[#1E2536]/50 text-[10px] text-gray-400 font-medium">Complete Directory</span>
            </div>
            <p className="text-justify text-sm md:text-base text-gray-300 leading-relaxed font-medium">
              &laquo;Welcome to the comprehensive Microsoft Word tutorial library. Explore every structured guide covering document formatting, advanced typography, template design, AI Copilot integration, and downloadable practice files (.docx & PDF guides) designed for professionals and students.&raquo;
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
                <span className="text-sm font-semibold text-gray-300">Microsoft 365, Word 2026 & AI Toolsets</span>
              </div>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 shrink-0 border-b border-blue-400/30 pb-0.5">
              Meet the Editorial Team & Testing Policy →
            </a>
          </div>
        </div>
      </section>

      {/* Cheat Sheet Banner */}
      <section className="py-8 bg-[#050B14]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1220] border border-blue-500/20 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PDF</span>
                <span className="text-xs text-gray-400 font-medium">Master Reference Tool</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Complete Microsoft Word Cheat Sheet</h2>
              <p className="text-justify text-sm text-gray-400 mb-8 max-w-md">
                Master 50+ essential keyboard shortcuts, formatting layout rules, and advanced document styling tips in one handy reference sheet.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-colors w-fit flex items-center gap-2 shadow-lg">
                <Download className="w-4 h-4" /> Download Master Word Cheat Sheet →
              </button>
            </div>
            <div className="p-8 md:w-1/2 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center border-l border-[#1E2536]/50">
              <div className="bg-[#050B14] border border-[#1E2536]/50 rounded-xl p-5 w-full max-w-md font-mono text-xs shadow-xl">
                <div className="flex justify-between items-center mb-5 border-b border-[#1E2536]/50 pb-3">
                  <span className="text-gray-300 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-400"/> MS_Word_Master_Shortcuts_2026.pdf</span>
                  <span className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-[10px] font-bold">PDF 3.1 MB</span>
                </div>
                <div className="text-blue-400 mb-2 font-semibold">1. Quick Navigation Hotkeys:</div>
                <div className="bg-black/50 p-3 rounded text-gray-300 border border-[#1E2536]/50 mb-5 whitespace-pre-wrap">
                  &quot;Ctrl + Alt + 1 (Heading 1) | Ctrl + Shift + C (Format Painter)&quot;
                </div>
                <div className="text-blue-400 mb-2 font-semibold">2. Document Structuring:</div>
                <div className="bg-black/50 p-3 rounded text-gray-300 border border-[#1E2536]/50 whitespace-pre-wrap">
                  &quot;Auto-generate TOC, Section Break management, Styles Pane&quot;
                </div>
                <div className="text-center text-gray-500 mt-6 text-[10px] italic">
                  + Complete hotkey grid included in full PDF download
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
                <h2 className="text-2xl md:text-3xl font-bold text-white">All Word Tutorials & Guides</h2>
                <span className="bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-bold">All Categories</span>
              </div>
              <p className="text-justify text-sm text-gray-400 max-w-2xl">Browse through our complete library of tutorials spanning basic formatting to advanced AI document automation.</p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search all tutorials..." className="w-full md:w-64 bg-[#0b1220] border border-[#1E2536]/50 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-blue-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Beginner</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 5 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10">Getting Started</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-blue-400 transition-colors cursor-pointer">Understanding the MS Word Interface & Ribbon Tabs</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">A complete beginner walkthrough on navigating the Word ribbon, quick access toolbar, and page view options.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><Play className="w-3 h-3 text-red-500 fill-current" /> Video</span>
                <Link href="/article-landing" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-blue-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Intermediate</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 8 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10">Formatting</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-blue-400 transition-colors cursor-pointer">Mastering Styles, Headings, and Automatic Tables of Contents</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Learn how to use built-in styles to format long documents consistently and generate dynamic TOCs instantly.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><FileText className="w-3 h-3 text-green-400" /> Practice File</span>
                <Link href="/article-landing" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-blue-500/30 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-orange-500/10 text-orange-400 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Advanced</span>
                <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3"/> 10 min read</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10">AI & Copilot</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-blue-400 transition-colors cursor-pointer">How to Draft a 10-Page Report in 2 Minutes Using Copilot</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Leverage AI prompt workflows inside Microsoft Word to generate structure, headings, and body content rapidly.</p>
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <span className="flex items-center gap-1 text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/[0.02] px-2 py-1 rounded"><Play className="w-3 h-3 text-red-500 fill-current" /> Video</span>
                <Link href="/article-landing" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">Read Full Tutorial →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#050B14]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-justify text-sm text-gray-400 mb-8">General queries regarding Microsoft Word tutorials and learning resources.</p>
          
          <div className="space-y-4">
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-blue-500/30 transition-colors">
              <span className="text-sm font-semibold text-white">Are all practice files free to download?</span>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
            <div className="bg-[#0b1220] border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-blue-500/30 transition-colors">
              <span className="text-sm font-semibold text-white">Which version of Word is required for these tutorials?</span>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
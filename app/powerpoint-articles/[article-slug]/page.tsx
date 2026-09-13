'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  Play, 
  FileText, 
  CheckCircle2, 
  Info, 
  AlertTriangle, 
  Copy, 
  Layout, 
  Clock, 
  Check,
  ExternalLink,
  ChevronUp,
  Plus
} from 'lucide-react';

const powerpointArticlesData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  tldr: string;
  intro: string;
  stepsHeading: string;
  blueprintPrompt: string;
}> = {
  'how-to-convert-word-document-into-powerpoint-deck': {
    title: 'How to Convert a Word Document into a PowerPoint Deck using Copilot',
    category: 'Deck Generation',
    readTime: '5 min read',
    tldr: 'To convert a Word document into a PowerPoint presentation using Copilot, open PowerPoint, select the Copilot icon on the ribbon, and prompt Copilot with the path of your Word file to automatically generate slides with matching layouts.',
    intro: 'Transforming long-form text or reports into engaging slide decks traditionally requires manual copy-pasting. With PowerPoint Copilot integration, you can convert full Word documents into professional presentation slides in seconds.',
    stepsHeading: 'Step 1: Launching Copilot Deck Generation from Word Files',
    blueprintPrompt: 'Create a 10-slide presentation from project_report.docx. Include a title slide, executive summary, 3 core technical sections, and a conclusion slide matching professional corporate design guidelines.'
  },
  'mastering-powerpoint-designer-and-copilot-slide-layout-prompts': {
    title: 'Mastering PowerPoint Designer & Copilot Slide Layout Prompts',
    category: 'Slide Design',
    readTime: '8 min read',
    tldr: 'Use precise Copilot layout prompts alongside PowerPoint Designer to transform unstructured bullet points into visual 3-column feature cards, timeline graphics, and custom icon grids.',
    intro: 'Static bullet points make presentations boring and hard to follow. By combining Copilot prompt formulas with PowerPoint Designer suggestions, you can instantly turn plain text into modern visual structures.',
    stepsHeading: 'Step 1: Structuring Layout Modification Prompts',
    blueprintPrompt: 'Transform this plain bulleted text block into a modern 3-column visual feature card grid with clean spacing, accent highlights, and professional iconography placeholders.'
  }
};

export default function PowerPointArticleDynamicPage() {
  const params = useParams();
  const slug = params?.articleSlug as string || params?.slug as string;
  const [copied, setCopied] = useState(false);

  const article = powerpointArticlesData[slug] || {
    title: 'Microsoft PowerPoint AI & Presentation Master Guide',
    category: 'PowerPoint Guide',
    readTime: '6 min read',
    tldr: 'Explore advanced slide design, automated deck generation, and Copilot workflows designed to maximize productivity in Microsoft PowerPoint.',
    intro: 'Welcome to this comprehensive PowerPoint tutorial guide. Follow the step-by-step instructions below to optimize your presentation workflow.',
    stepsHeading: 'Step 1: Getting Started with Presentation Automation',
    blueprintPrompt: 'Provide a structured presentation outline and visual design layout for this deck.'
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex-grow pb-24">
      {/* Breadcrumbs */}
      <div className="bg-[#0A0E1A] pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-xs text-gray-400 gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link href="/powerpoint-sub-hub" className="hover:text-white transition-colors">AI Tools & Copilot in Microsoft PowerPoint</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column (Left) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">
            
            {/* Header Section */}
            <section className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-orange-900/40 border border-orange-500/25 text-orange-400 px-2 py-1 rounded text-xs font-semibold">{article.category}</span>
                <span className="flex items-center gap-1 text-xs text-gray-400 border border-[#1E2536]/50 px-2 py-1 rounded"><Clock className="w-3 h-3"/> {article.readTime}</span>
                <span className="flex items-center gap-1 text-xs text-red-500 font-semibold border border-red-500/20 bg-red-500/10 px-2 py-1 rounded"><Play className="w-3 h-3 fill-current"/> Video Guide</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs border-b border-[#1E2536]/50 pb-6">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Written By: <span className="font-semibold text-gray-300">Office Productivity Editorial Team</span></span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="text-gray-400">
                  Fact-Checked & Reviewed: <span className="font-semibold text-gray-300">July 2026</span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
                <a href="#" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors flex items-center gap-1">
                  View Author Credentials <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* TL;DR Box */}
            <section>
              <div className="bg-[#0b1524] border border-orange-500/20 border-l-4 border-l-orange-500 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-400 font-bold tracking-widest text-[10px] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    DIRECT ANSWER / TL;DR
                  </span>
                </div>
                <p className="text-justify text-gray-300 text-sm md:text-base leading-relaxed">
                  {article.tldr}
                </p>
              </div>
            </section>

            {/* In-page TOC */}
            <section className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 lg:hidden">
              <div className="flex items-center justify-between mb-4 border-b border-[#1E2536]/50 pb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layout className="w-4 h-4 text-orange-400" /> On This Page (Table of Contents)
                </h3>
                <ChevronUp className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-orange-400">
                <a href="#" className="hover:underline">1. Launching Copilot Deck Generation</a>
                <a href="#" className="hover:underline">2. Structuring Layout Prompts</a>
                <a href="#" className="hover:underline">3. Example Prompt Blueprint</a>
                <a href="#" className="hover:underline">4. Generic vs Optimized Layouts</a>
                <a href="#" className="hover:underline">5. Video Walkthrough</a>
                <a href="#" className="hover:underline">6. Core Benefits of AI Decks</a>
                <a href="#" className="hover:underline">7. Practice Files & Resources</a>
                <a href="#" className="hover:underline">8. Frequently Asked Questions</a>
              </div>
            </section>

            {/* Intro Text */}
            <p className="text-justify text-gray-300 text-sm md:text-base leading-relaxed">
              {article.intro}
            </p>

            {/* Step 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold tracking-widest text-[10px] uppercase">STEP 01</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{article.stepsHeading}</h2>
              <p className="text-justify text-gray-400 text-sm">
                Open PowerPoint, activate the Copilot feature pane from your ribbon tabs, and provide the specific reference file or outline text.
              </p>

              {/* Mockup UI */}
              <div className="mt-6 bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl overflow-hidden p-8 flex justify-center">
                <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg border border-[#1E2536]/50 overflow-hidden shadow-2xl">
                  {/* Fake Window Header */}
                  <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#1E2536]/50">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-orange-400" />
                      <span className="text-xs text-gray-300">Presentation1 - Microsoft PowerPoint (Copilot AI Enabled)</span>
                    </div>
                    <span className="bg-orange-600/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded">Design Panel Active</span>
                  </div>
                  {/* Fake Page Body */}
                  <div className="p-8 bg-white min-h-[200px] flex items-start">
                    {/* Copilot Draft Box */}
                    <div className="w-full bg-[#f3f4f6] rounded-xl border border-orange-500/30 p-4 relative ml-6">
                      <div className="flex items-center gap-2 mb-2 text-orange-700 font-bold text-sm">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-600 to-amber-600"></span>
                        Create Presentation with Copilot
                      </div>
                      <p className="text-justify text-xs text-gray-500 mb-4">
                        Describe the presentation you want to create or point to an existing document file...
                      </p>
                      <div className="flex justify-end">
                        <button className="bg-orange-600 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 font-semibold">
                          Generate Slides
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-justify text-center text-xs text-gray-500 mt-2 italic">Figure 1: Accessing the PowerPoint Copilot presentation generator pane.</p>
            </section>

            {/* Pro Tip Box */}
            <section>
              <div className="bg-yellow-900/10 border border-yellow-500/30 rounded-xl p-5 flex gap-4">
                <div className="shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Info className="w-3 h-3 text-yellow-500" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-yellow-500 mb-1">PRO TIP: Custom Templates</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">
                    Apply your corporate master template (<kbd className="bg-white/10 px-1 py-0.5 rounded text-white mx-1 font-mono">.potx</kbd>) before running Copilot to ensure generated slides inherit your brand colors and fonts automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-orange-500 font-bold tracking-widest text-[10px] uppercase">STEP 02</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Step 2: Structuring Slide Layout Prompts</h2>
              <p className="text-justify text-gray-400 text-sm mb-6">
                To build high-impact slides, structure your prompt using <span className="text-white font-bold">Source Material + Slide Count + Visual Arrangement Goal</span>.
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-orange-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-2 block">01. SOURCE</span>
                  <h4 className="text-sm font-bold text-white mb-2">File Reference</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;From file.docx...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-2 block">02. LENGTH</span>
                  <h4 className="text-sm font-bold text-white mb-2">Slide Count</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Create exactly 8 slides...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase mb-2 block">03. LAYOUT</span>
                  <h4 className="text-sm font-bold text-white mb-2">Visual Style</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Use 3-column cards...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-2 block">04. BRANDING</span>
                  <h4 className="text-sm font-bold text-white mb-2">Tone & Palette</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Professional executive theme...&quot;</p>
                </div>
              </div>
            </section>

            {/* Example Prompt Blueprint */}
            <section>
              <div className="bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl p-6 relative shadow-2xl">
                <div className="flex justify-between items-center mb-4 border-b border-[#1E2536]/50 pb-4">
                  <h4 className="text-xs font-bold text-gray-300 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> EXAMPLE POWERPOINT PROMPT BLUEPRINT
                  </h4>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white bg-white/[0.02] hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied' : 'Copy Prompt'}
                  </button>
                </div>
                <p className="text-justify text-sm text-gray-300 font-mono leading-relaxed bg-white/[0.02] backdrop-blur-sm p-4 rounded-xl border border-[#1E2536]/50">
                  &laquo;{article.blueprintPrompt}&raquo;
                </p>
              </div>
            </section>

            {/* Generic vs Optimized Table */}
            <section className="pt-6">
              <h3 className="text-xl font-bold text-white mb-2">Generic vs. Optimized PowerPoint Prompts</h3>
              <p className="text-justify text-sm text-gray-400 mb-6">Comparing input structure demonstrates why detailed layout prompts generate vastly superior slides.</p>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl overflow-hidden shadow-2xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.02] backdrop-blur-sm border-b border-[#1E2536]/50 text-xs font-bold text-gray-500 tracking-widest uppercase">
                    <tr>
                      <th className="p-4 w-1/4">PROMPT QUALITY</th>
                      <th className="p-4 w-1/2">EXAMPLE PROMPT INPUT</th>
                      <th className="p-4 w-1/4">EXPECTED COPILOT OUTPUT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 font-semibold text-red-400">Generic (Weak)</td>
                      <td className="p-4 text-gray-400 italic">&quot;make a presentation from this text.&quot;</td>
                      <td className="p-4 text-gray-400">Basic slides with overcrowded bullet points and uniform layouts.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 font-semibold text-green-400">Optimized (Strong)</td>
                      <td className="p-4 text-gray-300">&quot;Create an 8-slide pitch deck from file.docx. Convert key bulleted sections into 3-column visual cards with matching brand accents.&quot;</td>
                      <td className="p-4 text-gray-300">Professionally structured slides with varied visual containers and icons.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Warning & Note Side-by-Side */}
            <section className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-900/10 border border-yellow-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <h4 className="text-xs font-bold text-yellow-500 tracking-widest uppercase">WARNING: Font Compatibility</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Verify that custom typography used in generated decks is installed locally or embedded to prevent font substitution.</p>
              </div>
              <div className="bg-orange-900/10 border border-orange-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-orange-500" />
                  <h4 className="text-xs font-bold text-orange-500 tracking-widest uppercase">NOTE: Designer Pane</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Use the PowerPoint Designer task pane anytime after AI generation to instantly swap individual slide layouts.</p>
              </div>
            </section>

            {/* Benefits Block */}
            <section className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">Core Benefits of AI Presentation Workflows</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Rapid Prototyping</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Turn comprehensive written proposals into visual pitch decks in minutes.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Layout className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Visual Diversity</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Break away from boring bullet lists with automated card grids and timelines.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-4">
                    <FileText className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Brand Harmony</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Maintain consistent corporate color schemes and typography across all slides.</p>
                </div>
              </div>
            </section>

            {/* Video Walkthrough Section */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-3 h-3 text-red-500 fill-current" />
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">WATCH THE WALKTHROUGH</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Visual Demonstration: PowerPoint AI Deck Masterclass</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Prefer to follow visually? Watch the complete step-by-step demonstration and then return to practice building decks yourself.</p>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-2 pb-0 overflow-hidden relative shadow-2xl">
                <div className="aspect-video bg-[#0A0E1A] rounded-xl border border-[#1E2536]/50 relative flex flex-col items-center justify-center cursor-pointer group">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 backdrop-blur-md">
                      <Clock className="w-3 h-3"/> 16m 20s Walkthrough
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">HD Video</span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-4 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                  <div className="text-center">
                    <p className="text-justify text-white font-bold text-sm mb-1">Click to play: Complete PowerPoint Copilot Deck Masterclass</p>
                  </div>
                </div>
                <div className="py-3 text-center">
                  <p className="text-justify text-xs text-gray-600 font-mono">No autoplay • Lightweight Facade Player</p>
                </div>
              </div>
            </section>

            {/* Hub Banner */}
            <section className="pt-6">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#111827] to-orange-900/10">
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="w-4 h-4 text-orange-400" />
                  <span className="text-[10px] font-bold text-orange-400 tracking-widest uppercase">PART OF THIS LEARNING HUB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Tools & Copilot in Microsoft PowerPoint</h3>
                <p className="text-justify text-sm text-gray-400 mb-6 max-w-2xl">
                  This tutorial is part of our comprehensive AI Tools & Copilot in Microsoft PowerPoint Sub-Hub. Explore more layout prompts, templates, and downloadable assets.
                </p>
                <Link href="/powerpoint-sub-hub" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2 shadow-lg">
                  Explore AI Tools & Copilot in PowerPoint Sub-Hub →
                </Link>
              </div>
            </section>

            {/* Practice Files */}
            <section className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-2">Practice Files & Resources</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Download these sample presentation decks and reference cheat sheets to practice the design workflows demonstrated in this guide.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PPTX</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PowerPoint Practice File</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Sample Copilot Presentation Deck</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">Pre-structured slide template with unformatted text placeholders for prompt testing.</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto shadow-lg">
                    <Download className="w-4 h-4" /> Download Practice File →
                  </button>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PDF</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PDF Reference</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">PowerPoint Design & Copilot Cheat Sheet</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">25+ tested prompts for deck generation, layout changes, and script automation.</p>
                  <button className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                    <Download className="w-4 h-4" /> Download Prompt Sheet →
                  </button>
                </div>
              </div>
            </section>

            {/* Pagination Controls */}
            <section className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/powerpoint-sub-hub" className="flex-1 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 flex items-center gap-4 hover:border-[#1E2536]/50 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">← BACK TO HUB</div>
                    <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">Microsoft PowerPoint Master Hub</div>
                  </div>
                </Link>
              </div>
            </section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8 space-y-6">
              
              {/* On This Page Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2 mb-4 border-b border-[#1E2536]/50 pb-3">
                  <Layout className="w-4 h-4 text-orange-400" /> On This Page
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors block">1. Launching Deck Generation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">2. Structuring Layout Prompts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">3. Example Prompt Blueprint</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">4. Generic vs. Optimized Layouts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">5. Video Walkthrough</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">6. Core Benefits</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">7. Practice Files & Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">8. Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Download Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-orange-500/20 rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                    <Download className="w-4 h-4 text-orange-400" /> Download Practice File
                  </h4>
                  <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">.PPTX</span>
                </div>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Practice presentation layout design inside PowerPoint with our downloadable template.</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <Download className="w-3 h-3" /> Download File (.pptx)
                </button>
              </div>

              {/* Parent Hub Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1 block">PARENT LEARNING HUB</span>
                <h4 className="text-sm font-bold text-white mb-2">AI Tools & Copilot in Microsoft PowerPoint</h4>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Access layout prompts, video courses, and cheat sheets for Microsoft PowerPoint.</p>
                <Link href="/powerpoint-sub-hub" className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors block text-center">
                  Return to Sub-Hub →
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
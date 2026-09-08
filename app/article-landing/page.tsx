'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Plus, 
  Check,
  ExternalLink,
  ChevronUp
} from 'lucide-react';

export default function ArticleLanding() {
  const [copied, setCopied] = useState(false);

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
            <Link href="/word-hub" className="hover:text-white transition-colors">Microsoft Word Master Hub</Link>
            <span className="text-gray-600">/</span>
            <Link href="/word-hub" className="hover:text-white transition-colors">AI Tools & Copilot in Microsoft Word</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">How to Draft a 10-Page Report in 2 Minutes Using Copilot</span>
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
                <span className="bg-blue-900/40 border border-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">Copilot Drafting</span>
                <span className="flex items-center gap-1 text-xs text-gray-400 border border-[#1E2536]/50 px-2 py-1 rounded"><Clock className="w-3 h-3"/> 5 min read</span>
                <span className="flex items-center gap-1 text-xs text-red-500 font-semibold border border-red-500/20 bg-red-500/10 px-2 py-1 rounded"><Play className="w-3 h-3 fill-current"/> Video Guide</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                How to Draft a 10-Page Report in 2 Minutes Using Copilot
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs border-b border-[#1E2536]/50 pb-6">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Written By: <span className="font-semibold text-gray-300">Office Productivity Editorial Team</span></span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="text-gray-400">
                  Fact-Checked & Reviewed: <span className="font-semibold text-gray-300">July 2026</span>
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>
                <a href="#" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-1">
                  View Author Credentials <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* TL;DR Box */}
            <section>
              <div className="bg-[#0b1524] border border-blue-500/20 border-l-4 border-l-blue-500 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 font-bold tracking-widest text-[10px] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    DIRECT ANSWER / TL;DR
                  </span>
                </div>
                <p className="text-justify text-gray-300 text-sm md:text-base leading-relaxed">
                  To draft a report using Microsoft Copilot in Word, open a blank document, select the Copilot icon in the margin (or press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white text-xs mx-1">Alt + i</kbd>), and enter a structured prompt specifying the topic, target audience, format, and key sections. Copilot can generate an initial report outline and draft that you can refine, expand, or reformat.
                </p>
              </div>
            </section>

            {/* In-page TOC */}
            <section className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 lg:hidden">
              <div className="flex items-center justify-between mb-4 border-b border-[#1E2536]/50 pb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layout className="w-4 h-4 text-blue-400" /> On This Page (Table of Contents)
                </h3>
                <ChevronUp className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-blue-400">
                <a href="#" className="hover:underline">1. Accessing Copilot Draft Window</a>
                <a href="#" className="hover:underline">2. Inputting a Structured Prompt</a>
                <a href="#" className="hover:underline">3. Example Prompt Blueprint</a>
                <a href="#" className="hover:underline">4. Generic vs Optimized Prompts</a>
                <a href="#" className="hover:underline">5. Video Walkthrough</a>
                <a href="#" className="hover:underline">6. Core Benefits of AI Drafting</a>
                <a href="#" className="hover:underline">7. Practice Files & Resources</a>
                <a href="#" className="hover:underline">8. Frequently Asked Questions</a>
              </div>
            </section>

            {/* Intro Text */}
            <p className="text-justify text-gray-300 text-sm md:text-base leading-relaxed">
              Drafting reports from scratch can take hours. With Microsoft Copilot integrated directly into Microsoft Word, you can turn a brief outline or plain-text prompt into a fully formatted document in seconds. In this tutorial, you will learn how to open the inline Copilot prompt box (<kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white text-xs mx-1 font-mono">Alt + i</kbd>), structure your request using tone and heading constraints, and refine the generated text.
            </p>

            {/* Step 1 */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">STEP 01</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Step 1: Accessing the Copilot Draft Window</h2>
              <p className="text-justify text-gray-400 text-sm">
                Click the draft icon near your cursor or use the available Copilot interface to open the Copilot prompt input area. You can trigger Copilot anytime on a blank page or beside existing text.
              </p>

              {/* Mockup UI */}
              <div className="mt-6 bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl overflow-hidden p-8 flex justify-center">
                <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg border border-[#1E2536]/50 overflow-hidden shadow-2xl">
                  {/* Fake Window Header */}
                  <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#1E2536]/50">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-gray-300">Document1 - Microsoft Word (Copilot Enabled)</span>
                    </div>
                    <span className="bg-blue-600/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded">Alt + i Trigger</span>
                  </div>
                  {/* Fake Page Body */}
                  <div className="p-8 bg-white min-h-[200px] flex items-start">
                    {/* Copilot Draft Box */}
                    <div className="w-full bg-[#f3f4f6] rounded-xl border border-blue-500/30 p-4 relative ml-6">
                      <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                        Draft with Copilot
                      </div>
                      <p className="text-justify text-xs text-gray-500 mb-4">
                        Describe what you want to write, including outline, tone, and page constraints...
                      </p>
                      <div className="flex justify-end">
                        <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 font-semibold">
                          Generate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-justify text-center text-xs text-gray-500 mt-2 italic">Figure 1: Accessing the inline Copilot draft window in Microsoft Word.</p>
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
                  <h4 className="text-sm font-bold text-yellow-500 mb-1">PRO TIP: Keyboard Shortcut</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">
                    Press <kbd className="bg-white/10 px-1 py-0.5 rounded text-white mx-1 font-mono">Alt + i</kbd> anywhere on a blank line in Microsoft Word to instantly open the inline Copilot prompt box without taking your hands off the keyboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">STEP 02</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Step 2: Inputting a Structured Prompt</h2>
              <p className="text-justify text-gray-400 text-sm mb-6">
                To get more useful report outputs, structure your prompt using four essential elements: <span className="text-white font-bold">Context + Task + Constraints + Output Format</span>.
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-2 block">01. CONTEXT</span>
                  <h4 className="text-sm font-bold text-white mb-2">Role & Background</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Act as a senior business research analyst...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase mb-2 block">02. TASK</span>
                  <h4 className="text-sm font-bold text-white mb-2">Core Objective</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Draft a 4-page formal market analysis report...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase mb-2 block">03. CONSTRAINTS</span>
                  <h4 className="text-sm font-bold text-white mb-2">Tone & Bounds</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Use professional tone, include 3 bullet points...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-2 block">04. OUTPUT FORMAT</span>
                  <h4 className="text-sm font-bold text-white mb-2">Structure</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Include Executive Summary & Metrics Table...&quot;</p>
                </div>
              </div>
            </section>

            {/* Example Prompt Blueprint */}
            <section>
              <div className="bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl p-6 relative shadow-2xl">
                <div className="flex justify-between items-center mb-4 border-b border-[#1E2536]/50 pb-4">
                  <h4 className="text-xs font-bold text-gray-300 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> EXAMPLE COPILOT PROMPT BLUEPRINT
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
                  &laquo;Draft a 10-page market analysis report on renewable energy adoption. Include executive summary, 5 key growth drivers, financial projections table, and risk mitigation strategies. Tone: Professional Executive.&raquo;
                </p>
              </div>
            </section>

            {/* Generic vs Optimized Table */}
            <section className="pt-6">
              <h3 className="text-xl font-bold text-white mb-2">Generic vs. Optimized Copilot Prompts</h3>
              <p className="text-justify text-sm text-gray-400 mb-6">Comparing prompt inputs demonstrates why structured requests produce significantly better document drafts.</p>
              
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
                      <td className="p-4 text-gray-400 italic">&quot;write a report on office productivity.&quot;</td>
                      <td className="p-4 text-gray-400">Short, vague, generic text without clear heading structure.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 font-semibold text-green-400">Optimized (Strong)</td>
                      <td className="p-4 text-gray-300">&quot;Draft a 4-page formal report on hybrid office productivity trends. Include an Executive Summary, Key Metrics Table, and 3 Recommendations.&quot;</td>
                      <td className="p-4 text-gray-300">Fully structured document with headings, bullet points, and actionable sections.</td>
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
                  <h4 className="text-xs font-bold text-yellow-500 tracking-widest uppercase">WARNING: Verify Numerical Claims</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Always review numerical claims and data figures generated by Copilot before publishing official client reports.</p>
              </div>
              <div className="bg-blue-900/10 border border-blue-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-blue-500" />
                  <h4 className="text-xs font-bold text-blue-500 tracking-widest uppercase">NOTE: Source Linking</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Type <kbd className="bg-white/10 px-1 py-0.5 rounded mx-1">/</kbd> in the Copilot prompt bar to reference existing Word or SharePoint files as direct context.</p>
              </div>
            </section>

            {/* Benefits Block */}
            <section className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">Core Benefits of AI-Assisted Document Drafting</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Time Savings</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Reduces initial document drafting effort from hours to minutes.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-4">
                    <Layout className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Structural Consistency</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Helps organize documents into a consistent heading hierarchy automatically.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-4">
                    <FileText className="w-4 h-4 text-orange-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Source Integration</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Synthesizes relevant files and company context directly into generated text.</p>
                </div>
              </div>
            </section>

            {/* Video Walkthrough Section */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-3 h-3 text-red-500 fill-current" />
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">WATCH THE WALKTHROUGH</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Visual Demonstration: Drafting Reports with Copilot in MS Word</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Prefer to follow visually? Watch the complete step-by-step demonstration and then return to the guide to practice the workflow yourself.</p>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-2 pb-0 overflow-hidden relative shadow-2xl">
                <div className="aspect-video bg-[#0A0E1A] rounded-xl border border-[#1E2536]/50 relative flex flex-col items-center justify-center cursor-pointer group">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 backdrop-blur-md">
                      <Clock className="w-3 h-3"/> 18m 30s Walkthrough
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">HD Video</span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-4 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                  <div className="text-center">
                    <p className="text-justify text-white font-bold text-sm mb-1">Click to play: Complete Copilot Report Drafting Masterclass</p>
                  </div>
                </div>
                <div className="py-3 text-center">
                  <p className="text-justify text-xs text-gray-600 font-mono">No autoplay • Lightweight Facade Player</p>
                </div>
              </div>
            </section>

            {/* Hub Banner */}
            <section className="pt-6">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#111827] to-blue-900/10">
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">PART OF THIS LEARNING HUB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Tools & Copilot in Microsoft Word</h3>
                <p className="text-justify text-sm text-gray-400 mb-6 max-w-2xl">
                  This tutorial is part of our comprehensive AI Tools & Copilot in Microsoft Word Sub-Hub. Explore more prompts, workflows, and downloadable resources.
                </p>
                <Link href="/word-hub" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2 shadow-lg">
                  Explore AI Tools & Copilot in Word Sub-Hub →
                </Link>
              </div>
            </section>

            {/* Practice Files */}
            <section className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-2">Practice Files & Resources</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Download these sample workbooks and reference cheat sheets to practice the workflow demonstrated in this guide.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.DOCX</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Word Practice File</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Sample Copilot Report Template</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">Pre-formatted Word document with heading styles and prompt placeholders.</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto shadow-lg">
                    <Download className="w-4 h-4" /> Download Practice File →
                  </button>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PDF</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PDF Reference</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Copilot Prompt Reference Sheet</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">25+ tested prompts for report drafting, editing, and summarization.</p>
                  <button className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                    <Download className="w-4 h-4" /> Download Prompt Sheet →
                  </button>
                </div>
              </div>
            </section>

            {/* Pagination Controls */}
            <section className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/word-hub" className="flex-1 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 flex items-center gap-4 hover:border-[#1E2536]/50 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">← PREVIOUS TUTORIAL</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Understanding Copilot Interface & Capabilities in Word</div>
                  </div>
                </Link>
                <Link href="/word-hub" className="flex-1 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 flex flex-row-reverse items-center gap-4 hover:border-[#1E2536]/50 transition-colors group text-right">
                  <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">NEXT TUTORIAL →</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">How to Summarize a 50-Page Contract with Copilot in Word</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Tutorials */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <h2 className="text-2xl font-bold text-white mb-6">Related Microsoft Word Tutorials</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10 mb-3 inline-block">Prompt Engineering</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">Master Prompt Engineering for Microsoft Word Copilot</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 8 min read
                  </div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10 mb-3 inline-block">AI Add-ins</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">Best AI Add-ins for Microsoft Word: Copilot vs. Third-Party</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 6 min read
                  </div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-blue-900/20 text-blue-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-blue-500/10 mb-3 inline-block">Document Summarization</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-blue-400 transition-colors line-clamp-2">How to Summarize a 50-Page Contract with Copilot in Word</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 10 min read
                  </div>
                </div>
              </div>
            </section>

            {/* Official Docs */}
            <section>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Official Documentation Reference</h4>
                  <p className="text-justify text-xs text-gray-500">For current Microsoft 365 licensing, enterprise data security, and system requirements, consult official Microsoft support documentation.</p>
                </div>
                <a href="#" className="shrink-0 flex items-center gap-2 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.02] border border-[#1E2536]/50 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                  View Microsoft Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* FAQs */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">Can Copilot create a complete report in Word from a single prompt?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">What makes a good Copilot prompt for report writing?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">Can I edit the report after Copilot generates it?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">Can Copilot use information from other documents?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </section>

            {/* End Block CTA */}
            <section className="pt-10 pb-4">
              <div className="bg-gradient-to-br from-[#0A0E1A] to-[#0A3D33] border border-[#1E2536]/50 rounded-2xl p-10 text-center flex flex-col items-center shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">You&apos;ve Reached the End of This Guide</h2>
                <p className="text-justify text-sm text-gray-400 mb-8 max-w-md">Ready to dive deeper into Microsoft Word, Excel, or PowerPoint automation? Explore related guides or download practice workbooks.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/word-hub" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors w-full sm:w-auto shadow-lg">
                    Explore AI Tools & Copilot in Microsoft Word →
                  </Link>
                  <Link href="/word-hub" className="bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors w-full sm:w-auto">
                    Browse Microsoft Word Master Hub
                  </Link>
                </div>
                <button className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-6">
                  Download Practice Files
                </button>
              </div>
            </section>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-8 space-y-6">
              
              {/* On This Page Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2 mb-4 border-b border-[#1E2536]/50 pb-3">
                  <Layout className="w-4 h-4 text-blue-400" /> On This Page
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors block">1. Accessing Copilot Window</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">2. Inputting Structured Prompts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">3. Example Prompt Blueprint</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">4. Generic vs. Optimized Prompts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">5. Video Walkthrough</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">6. Core Benefits</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">7. Practice Files & Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">8. Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Download Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                    <Download className="w-4 h-4 text-blue-400" /> Download Practice File
                  </h4>
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">.DOCX</span>
                </div>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Practice report drafting inside Microsoft Word with our downloadable pre-loaded template.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <Download className="w-3 h-3" /> Download File (.docx)
                </button>
              </div>

              {/* Parent Hub Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1 block">PARENT LEARNING HUB</span>
                <h4 className="text-sm font-bold text-white mb-2">AI Tools & Copilot in Microsoft Word</h4>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Access 15+ prompts, video courses, and cheat sheets for Microsoft Word.</p>
                <Link href="/word-hub" className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors block text-center">
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
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

const excelArticlesData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  tldr: string;
  intro: string;
  stepsHeading: string;
  blueprintPrompt: string;
}> = {
  'how-to-write-nested-excel-formulas': {
    title: 'How to Write Nested Excel Formulas in Plain English Using Copilot',
    category: 'Formula Prompts',
    readTime: '6 min read',
    tldr: 'To write complex nested formulas in Excel using Copilot, open the Copilot pane, describe your conditional logic in plain English (e.g., combining XLOOKUP, IF/AND, and SUMIFS), and insert the generated formula directly into your grid cells.',
    intro: 'Writing nested logical formulas like multiple IF statements combined with XLOOKUP can be frustrating and prone to syntax errors. With Copilot in Excel, you can translate plain conversational text into clean, error-free formula expressions instantly.',
    stepsHeading: 'Step 1: Invoking the Excel Copilot Formula Assistant',
    blueprintPrompt: 'Write an Excel formula that checks if Column A equals "Active" and Column B is greater than 5000, then returns the corresponding value from Column C using XLOOKUP, otherwise returns "Pending".'
  },
  'automating-pivottables-and-insights': {
    title: 'Automating PivotTables and Insights with Copilot in Excel',
    category: 'Data Analysis',
    readTime: '9 min read',
    tldr: 'Use Excel Copilot to automatically generate summary PivotTables, cross-tabulations, and key trend insights from raw sales logs and financial tables with a single conversational prompt.',
    intro: 'Manually organizing raw data sets, selecting rows and columns, and building PivotTables takes valuable time. Copilot analyzes your spreadsheet structures and builds multi-dimensional summary reports automatically.',
    stepsHeading: 'Step 1: Selecting Data Ranges & Launching Copilot Analysis',
    blueprintPrompt: 'Create a PivotTable summarizing total revenue by region and product category from the current table, and highlight the top 3 performing quarters.'
  },
  'python-in-excel-copilot': {
    title: 'Python in Excel + Copilot: Running Machine Learning in Grid Cells',
    category: 'Advanced Analytics',
    readTime: '11 min read',
    tldr: 'Combine native Python execution inside Excel grid cells with Copilot AI prompts to run predictive modeling, data cleansing, and sentiment classification without writing code manually.',
    intro: 'Bridging data science and spreadsheet analysis has never been easier. By integrating native Python formulas with Copilot, financial analysts and data engineers can execute complex machine learning algorithms directly inside Microsoft Excel.',
    stepsHeading: 'Step 1: Enabling Python Environment and Copilot Integration',
    blueprintPrompt: 'Write a Python script using pandas and scikit-learn inside Excel to run a linear regression forecasting future monthly sales based on historical columns A through D.'
  }
};

export default function ExcelArticleDynamicPage() {
  const params = useParams();
  const slug = params?.articleSlug as string || params?.slug as string;
  const [copied, setCopied] = useState(false);

  const article = excelArticlesData[slug] || {
    title: 'Microsoft Excel AI Analytics & Master Guide',
    category: 'Excel Guide',
    readTime: '7 min read',
    tldr: 'Explore advanced data analysis, formula automation, and Copilot workflows designed to maximize productivity in Microsoft Excel.',
    intro: 'Welcome to this comprehensive Excel tutorial guide. Follow the step-by-step instructions below to optimize your data workflow.',
    stepsHeading: 'Step 1: Getting Started with Spreadsheet Automation',
    blueprintPrompt: 'Provide a structured formula expression and data analysis workflow for this dataset.'
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
            <Link href="/excel-sub-hub" className="hover:text-white transition-colors">AI Tools & Copilot in Microsoft Excel</Link>
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
                <span className="bg-green-900/40 border border-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-semibold">{article.category}</span>
                <span className="flex items-center gap-1 text-xs text-gray-400 border border-[#1E2536]/50 px-2 py-1 rounded"><Clock className="w-3 h-3"/> {article.readTime}</span>
                <span className="flex items-center gap-1 text-xs text-red-500 font-semibold border border-red-500/20 bg-red-500/10 px-2 py-1 rounded"><Play className="w-3 h-3 fill-current"/> Video Guide</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {article.title}
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
                <a href="#" className="text-green-400 font-semibold hover:text-green-300 transition-colors flex items-center gap-1">
                  View Author Credentials <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </section>

            {/* TL;DR Box */}
            <section>
              <div className="bg-[#0b1524] border border-green-500/20 border-l-4 border-l-green-500 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-400 font-bold tracking-widest text-[10px] uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
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
                  <Layout className="w-4 h-4 text-green-400" /> On This Page (Table of Contents)
                </h3>
                <ChevronUp className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-y-3 gap-x-8 text-sm text-green-400">
                <a href="#" className="hover:underline">1. Invoking Excel Formula Assistant</a>
                <a href="#" className="hover:underline">2. Inputting Structured Prompts</a>
                <a href="#" className="hover:underline">3. Example Prompt Blueprint</a>
                <a href="#" className="hover:underline">4. Generic vs Optimized Formulas</a>
                <a href="#" className="hover:underline">5. Video Walkthrough</a>
                <a href="#" className="hover:underline">6. Core Benefits of AI Analysis</a>
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
                <span className="text-green-500 font-bold tracking-widest text-[10px] uppercase">STEP 01</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{article.stepsHeading}</h2>
              <p className="text-justify text-gray-400 text-sm">
                Open your spreadsheet workbook, navigate to the Copilot pane, and enter your logical requirements to build automated calculation structures.
              </p>

              {/* Mockup UI */}
              <div className="mt-6 bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl overflow-hidden p-8 flex justify-center">
                <div className="w-full max-w-2xl bg-[#1e1e1e] rounded-lg border border-[#1E2536]/50 overflow-hidden shadow-2xl">
                  {/* Fake Window Header */}
                  <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-[#1E2536]/50">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-gray-300">Book1 - Microsoft Excel (Copilot Assistant Enabled)</span>
                    </div>
                    <span className="bg-green-600/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded">Grid Pane Active</span>
                  </div>
                  {/* Fake Page Body */}
                  <div className="p-8 bg-white min-h-[200px] flex items-start">
                    {/* Copilot Draft Box */}
                    <div className="w-full bg-[#f3f4f6] rounded-xl border border-green-500/30 p-4 relative ml-6">
                      <div className="flex items-center gap-2 mb-2 text-green-700 font-bold text-sm">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600"></span>
                        Ask Copilot in Excel
                      </div>
                      <p className="text-justify text-xs text-gray-500 mb-4">
                        Ask questions or request formula calculations based on your data tables...
                      </p>
                      <div className="flex justify-end">
                        <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 font-semibold">
                          Generate Formula
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-justify text-center text-xs text-gray-500 mt-2 italic">Figure 1: Accessing the Excel Copilot analysis pane.</p>
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
                  <h4 className="text-sm font-bold text-yellow-500 mb-1">PRO TIP: Table Formatting</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">
                    Always format your data range as an official Excel Table (<kbd className="bg-white/10 px-1 py-0.5 rounded text-white mx-1 font-mono">Ctrl + T</kbd>) before launching Copilot to ensure accurate column range references.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 2 */}
            <section className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold tracking-widest text-[10px] uppercase">STEP 02</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Step 2: Structuring Conversational Prompts</h2>
              <p className="text-justify text-gray-400 text-sm mb-6">
                To build dependable calculations, structure your prompt using <span className="text-white font-bold">Data Range + Condition Logic + Output Goal</span>.
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-green-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase mb-2 block">01. RANGE</span>
                  <h4 className="text-sm font-bold text-white mb-2">Table Context</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Using the sales log table...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-2 block">02. CRITERIA</span>
                  <h4 className="text-sm font-bold text-white mb-2">Filters & Logic</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Where region is North and status is Paid...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-yellow-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-yellow-400 tracking-widest uppercase mb-2 block">03. OPERATION</span>
                  <h4 className="text-sm font-bold text-white mb-2">Math / Lookup</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Sum total revenue or find matching ID...&quot;</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-purple-500/20 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-purple-400 tracking-widest uppercase mb-2 block">04. OUTPUT</span>
                  <h4 className="text-sm font-bold text-white mb-2">Cell Format</h4>
                  <p className="text-justify text-xs text-gray-500">e.g. &quot;Insert formula into column D...&quot;</p>
                </div>
              </div>
            </section>

            {/* Example Prompt Blueprint */}
            <section>
              <div className="bg-[#0A0E1A] border border-[#1E2536]/50 rounded-2xl p-6 relative shadow-2xl">
                <div className="flex justify-between items-center mb-4 border-b border-[#1E2536]/50 pb-4">
                  <h4 className="text-xs font-bold text-gray-300 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> EXAMPLE EXCEL PROMPT BLUEPRINT
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
              <h3 className="text-xl font-bold text-white mb-2">Generic vs. Optimized Excel Prompts</h3>
              <p className="text-justify text-sm text-gray-400 mb-6">Comparing conversational inputs shows why specifying clear ranges yields accurate spreadsheet results.</p>
              
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
                      <td className="p-4 text-gray-400 italic">&quot;calculate total sales.&quot;</td>
                      <td className="p-4 text-gray-400">Ambiguous results due to missing table range and criteria.</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="p-4 font-semibold text-green-400">Optimized (Strong)</td>
                      <td className="p-4 text-gray-300">&quot;Calculate total sales from the Orders table where region equals 'West' using SUMIFS.&quot;</td>
                      <td className="p-4 text-gray-300">Clean, accurate formula (=SUMIFS(Orders[Sales], Orders[Region], "West")).</td>
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
                  <h4 className="text-xs font-bold text-yellow-500 tracking-widest uppercase">WARNING: Circular References</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Ensure generated formulas do not reference their own destination cells to avoid cascading calculation errors.</p>
              </div>
              <div className="bg-green-900/10 border border-green-500/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-green-500" />
                  <h4 className="text-xs font-bold text-green-500 tracking-widest uppercase">NOTE: Dynamic Arrays</h4>
                </div>
                <p className="text-justify text-xs text-gray-400">Modern Excel dynamic array functions automatically spill results across adjacent cells without needing manual drag-downs.</p>
              </div>
            </section>

            {/* Benefits Block */}
            <section className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">Core Benefits of AI-Assisted Spreadsheet Workflows</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-4 h-4 text-green-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Syntax Elimination</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">No need to memorize complex comma placements or nested parentheses.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Layout className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Instant Visualization</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Quickly turn raw data arrays into clean summary tables and pivot charts.</p>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-4">
                    <FileText className="w-4 h-4 text-orange-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Python Scalability</h4>
                  <p className="text-justify text-xs text-gray-400 leading-relaxed">Execute advanced data science algorithms directly within grid cells.</p>
                </div>
              </div>
            </section>

            {/* Video Walkthrough Section */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-3 h-3 text-red-500 fill-current" />
                <span className="text-[10px] font-bold text-red-500 tracking-widest uppercase">WATCH THE WALKTHROUGH</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Visual Demonstration: Excel Copilot Masterclass</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Prefer to follow visually? Watch the complete step-by-step demonstration and then return to practice the calculations yourself.</p>
              
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-2 pb-0 overflow-hidden relative shadow-2xl">
                <div className="aspect-video bg-[#0A0E1A] rounded-xl border border-[#1E2536]/50 relative flex flex-col items-center justify-center cursor-pointer group">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-black/60 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 backdrop-blur-md">
                      <Clock className="w-3 h-3"/> 15m 45s Walkthrough
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase">HD Video</span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform mb-4 shadow-xl">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                  <div className="text-center">
                    <p className="text-justify text-white font-bold text-sm mb-1">Click to play: Complete Excel Copilot & Python Masterclass</p>
                  </div>
                </div>
                <div className="py-3 text-center">
                  <p className="text-justify text-xs text-gray-600 font-mono">No autoplay • Lightweight Facade Player</p>
                </div>
              </div>
            </section>

            {/* Hub Banner */}
            <section className="pt-6">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-[#111827] to-green-900/10">
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="w-4 h-4 text-green-400" />
                  <span className="text-[10px] font-bold text-green-400 tracking-widest uppercase">PART OF THIS LEARNING HUB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Tools & Copilot in Microsoft Excel</h3>
                <p className="text-justify text-sm text-gray-400 mb-6 max-w-2xl">
                  This tutorial is part of our comprehensive AI Tools & Copilot in Microsoft Excel Sub-Hub. Explore more formulas, worksheets, and downloadable resources.
                </p>
                <Link href="/excel-sub-hub" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2 shadow-lg">
                  Explore AI Tools & Copilot in Excel Sub-Hub →
                </Link>
              </div>
            </section>

            {/* Practice Files */}
            <section className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-2">Practice Files & Resources</h2>
              <p className="text-justify text-sm text-gray-400 mb-6">Download these sample spreadsheets and reference cheat sheets to practice the formulas demonstrated in this guide.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.XLSX</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Excel Practice Workbook</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Sample Copilot Formula Workbook</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">Pre-formatted Excel sheet with messy sales records and prompt testing cells.</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto shadow-lg">
                    <Download className="w-4 h-4" /> Download Practice File →
                  </button>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase">.PDF</span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PDF Reference</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Excel Copilot Prompt Reference Sheet</h4>
                  <p className="text-justify text-xs text-gray-400 mb-6 flex-grow">30+ tested prompts for financial modeling, lookups, and Python automation.</p>
                  <button className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                    <Download className="w-4 h-4" /> Download Prompt Sheet →
                  </button>
                </div>
              </div>
            </section>

            {/* Pagination Controls */}
            <section className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Link href="/excel-sub-hub" className="flex-1 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 flex items-center gap-4 hover:border-[#1E2536]/50 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">← PREVIOUS TUTORIAL</div>
                    <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">Understanding Excel Copilot Interface & Tables</div>
                  </div>
                </Link>
                <Link href="/excel-sub-hub" className="flex-1 bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-4 flex flex-row-reverse items-center gap-4 hover:border-[#1E2536]/50 transition-colors group text-right">
                  <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">NEXT TUTORIAL →</div>
                    <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">Automating PivotTables and Insights in Excel</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Tutorials */}
            <section className="pt-10 border-t border-[#1E2536]/50">
              <h2 className="text-2xl font-bold text-white mb-6">Related Microsoft Excel Tutorials</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10 mb-3 inline-block">Formula Prompts</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-green-400 transition-colors line-clamp-2">How to Write Nested Excel Formulas in Plain English Using Copilot</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 6 min read
                  </div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10 mb-3 inline-block">Data Analysis</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-green-400 transition-colors line-clamp-2">Automating PivotTables and Insights with Copilot in Excel</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 9 min read
                  </div>
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 hover:border-[#1E2536]/50 transition-colors cursor-pointer group">
                  <span className="bg-green-900/20 text-green-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-green-500/10 mb-3 inline-block">Advanced Analytics</span>
                  <h3 className="text-sm font-bold text-white mb-4 group-hover:text-green-400 transition-colors line-clamp-2">Python in Excel + Copilot: Running Machine Learning in Grid Cells</h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 11 min read
                  </div>
                </div>
              </div>
            </section>

            {/* Official Docs */}
            <section>
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Official Documentation Reference</h4>
                  <p className="text-justify text-xs text-gray-500">For current Microsoft 365 licensing, data privacy terms, and Python runtime requirements, consult official Microsoft support documentation.</p>
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
                  <span className="text-sm font-semibold text-white">Can Copilot generate formulas for non-formatted tables in Excel?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">Does Excel Copilot support VBA macro generation?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">How do I enable Python features inside Excel grid cells?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
                <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
                  <span className="text-sm font-semibold text-white">Are my spreadsheet computations saved securely on cloud servers?</span>
                  <Plus className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </section>

            {/* End Block CTA */}
            <section className="pt-10 pb-4">
              <div className="bg-gradient-to-br from-[#0A0E1A] to-[#0A2E1A] border border-[#1E2536]/50 rounded-2xl p-10 text-center flex flex-col items-center shadow-2xl">
                <div className="w-12 h-12 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">You&apos;ve Reached the End of This Guide</h2>
                <p className="text-justify text-sm text-gray-400 mb-8 max-w-md">Ready to dive deeper into Microsoft Excel, Word, or PowerPoint automation? Explore related guides or download practice workbooks.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/excel-sub-hub" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors w-full sm:w-auto shadow-lg">
                    Explore AI Tools & Copilot in Microsoft Excel →
                  </Link>
                  <Link href="/excel-hub" className="bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors w-full sm:w-auto">
                    Browse Microsoft Excel Master Hub
                  </Link>
                </div>
                <button className="text-xs font-semibold text-green-400 hover:text-green-300 transition-colors mt-6">
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
                  <Layout className="w-4 h-4 text-green-400" /> On This Page
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors block">1. Invoking Formula Assistant</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">2. Structuring Prompts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">3. Example Prompt Blueprint</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">4. Generic vs. Optimized Formulas</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">5. Video Walkthrough</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">6. Core Benefits</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">7. Practice Files & Resources</a></li>
                  <li><a href="#" className="hover:text-white transition-colors block">8. Frequently Asked Questions</a></li>
                </ul>
              </div>

              {/* Download Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-green-500/20 rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-400" /> Download Practice File
                  </h4>
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase">.XLSX</span>
                </div>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Practice formula building inside Excel with our downloadable workbook template.</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <Download className="w-3 h-3" /> Download File (.xlsx)
                </button>
              </div>

              {/* Parent Hub Sidebar Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1 block">PARENT LEARNING HUB</span>
                <h4 className="text-sm font-bold text-white mb-2">AI Tools & Copilot in Microsoft Excel</h4>
                <p className="text-justify text-xs text-gray-400 mb-4 leading-relaxed">Access formulas, video courses, and cheat sheets for Microsoft Excel.</p>
                <Link href="/excel-sub-hub" className="w-full bg-white/[0.02] hover:bg-white/10 border border-[#1E2536]/50 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors block text-center">
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
import React from 'react';
import { ChevronRight, Lightbulb, UserCircle, Play, FileText, Download, Plus } from 'lucide-react';
import Link from 'next/link';

export default function WordHub() {
  return (
    <main className="flex-grow pb-24">
      {/* Breadcrumbs */}
      <div className="bg-[#0A0E1A] pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs text-gray-400 gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-blue-400">Microsoft Word</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-300">Master Learning Hub</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#0A0E1A] pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight max-w-4xl">
            Microsoft Word Master Learning Hub:<br/>
            Step-by-Step Tutorials, AI Copilot &<br/>
            Workflows
          </h1>

          {/* Master Hub Summary Card */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden mb-8 shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-1 shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">MASTER HUB SUMMARY</h4>
                <p className="text-justify text-sm text-gray-300 leading-relaxed max-w-5xl">
                  Welcome to the definitive Microsoft Word resource center designed for students, office professionals, and automated content workflows. Explore step-by-step guides covering document formatting, advanced page setup, AI-assisted drafting with Microsoft Copilot, inter-app data integrations, and downloadable practice files (.docx & PDF cheat sheets).
                </p>
              </div>
            </div>
          </div>

          {/* Author Details Bar */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">WRITTEN & VERIFIED BY</h4>
                <div className="flex items-center gap-2">
                  <UserCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-semibold text-white">Office Productivity Editorial Team</span>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">LAST UPDATED</h4>
                <span className="text-sm font-medium text-gray-300">July 2026</span>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1">REVIEWED FOR</h4>
                <span className="text-sm font-medium text-gray-300">Microsoft 365, Word 2026 & AI Copilot Integration</span>
              </div>
            </div>
            <a href="#" className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 shrink-0">
              View Author Bio & Credentials <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-16 border-t border-[#1E2536]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Start Here</h2>
            <p className="text-justify text-sm text-gray-400">New to Microsoft Word? Follow this recommended learning path before exploring advanced workflows.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-5 left-0 w-full h-[1px] bg-white/10 z-0"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-900 border border-blue-500 text-blue-400 flex items-center justify-center font-bold text-sm mb-6">01</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">01 — BEGINNER</div>
                <h3 className="text-lg font-bold text-white mb-4 pr-4">Understanding the Word Interface & Ribbon Layout</h3>
                <a href="#" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Start Lesson →
                </a>
              </div>
              
              {/* Step 2 */}
              <div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 text-gray-300 flex items-center justify-center font-bold text-sm mb-6">02</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">02 — FOUNDATIONS</div>
                <h3 className="text-lg font-bold text-white mb-4 pr-4">Creating, Saving, and Formatting Your First Document</h3>
                <a href="#" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Start Lesson →
                </a>
              </div>

              {/* Step 3 */}
              <div>
                <div className="w-10 h-10 rounded-full bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 text-gray-300 flex items-center justify-center font-bold text-sm mb-6">03</div>
                <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">03 — CORE SKILLS</div>
                <h3 className="text-lg font-bold text-white mb-4 pr-4">Mastering Paragraph Alignment, Line Spacing, and Fonts</h3>
                <a href="#" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Start Lesson →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Microsoft Word */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Explore Microsoft Word</h2>
            <p className="text-justify text-sm text-gray-400">Choose a learning area to find structured tutorials, practical guides, workflows, and resources.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <Link href="/article-landing" className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[#1E2536]/50 text-gray-300 flex items-center justify-center text-xs font-bold">01</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">24 TUTORIALS</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Getting Started & Basics</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Build a strong foundation with Word&apos;s interface, essential tools, file formats, and everyday document tasks.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Interface, Ribbon & Quick Access</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Creating & Saving File Formats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Basic Text Editing & Alignment</span>
                </li>
              </ul>
              
              <span className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-auto">
                View All Basic Tutorials →
              </span>
            </Link>

            {/* Card 2 */}
            <Link href="/article-landing" className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[#1E2536]/50 text-gray-300 flex items-center justify-center text-xs font-bold">02</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">38 GUIDES</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Formatting & Document Design</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Learn how to create polished, professional documents using advanced formatting and layout techniques.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Custom Styles, Headings & Themes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Page Setup, Margins & Break Types</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Tables, Images & Graphic Elements</span>
                </li>
              </ul>
              
              <span className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-auto">
                View All Formatting Guides →
              </span>
            </Link>

            {/* Card 3 */}
            <Link href="/article-landing" className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[#1E2536]/50 text-gray-300 flex items-center justify-center text-xs font-bold">03</div>
                <div className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-widest uppercase">16 AI GUIDES</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Tools & Copilot in Word</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Use Microsoft Copilot and AI-assisted workflows to draft, summarize, edit, and improve documents.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">MS Copilot Prompting Strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Automated Document Summarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">AI-Powered Drafting & Editing</span>
                </li>
              </ul>
              
              <span className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-auto">
                View All AI & Copilot Guides →
              </span>
            </Link>

            {/* Card 4 */}
            <Link href="/article-landing" className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[#1E2536]/50 text-gray-300 flex items-center justify-center text-xs font-bold">04</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">19 WORKFLOWS</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrations & Workflows</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Connect Word with Excel, Outlook, PDFs, and other workflows to automate repetitive tasks.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Excel-to-Word Data Linking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Advanced Mail Merge with Outlook</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Form Automation & PDF Export</span>
                </li>
              </ul>
              
              <span className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-auto">
                View All Integration Tutorials →
              </span>
            </Link>

            {/* Card 5 */}
            <Link href="/article-landing" className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-[#1E2536]/50 text-gray-300 flex items-center justify-center text-xs font-bold">05</div>
                <div className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">42 DOWNLOADS</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Word Resources & Downloads</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Find practice documents, templates, shortcut sheets, downloadable examples, and supporting resources.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Word Practice Files (.DOCX)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Keyboard Shortcut PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-300">Professional Templates</span>
                </li>
              </ul>
              
              <span className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 mt-auto">
                Explore Word Resources →
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Microsoft Word Video Guides</h2>
            <p className="text-justify text-sm text-gray-400">Watch the walkthrough, follow the written guide, and practice the workflow yourself.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Video 1 */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="relative aspect-video bg-white/[0.02] backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-[#1E2536]/50">WORD MASTERCLASS</div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white border border-[#1E2536]/50">1h 45m</div>
                <div className="w-16 h-16 rounded-full bg-white/10 border border-[#1E2536]/50 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-md shadow-xl">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Microsoft Word Complete Beginner to Advanced Course (2026)</h3>
                <p className="text-justify text-sm text-gray-400 mb-6">Watch the full step-by-step walkthrough covering interface setup, custom styles, page layout rules, and document automation.</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                  <Play className="w-4 h-4 text-red-500 fill-current" /> Watch on YouTube
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="relative aspect-video bg-white/[0.02] backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-purple-500/20 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-purple-300 uppercase tracking-widest border border-purple-500/20">AI & COPILOT</div>
                <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold text-white border border-[#1E2536]/50">18m 30s</div>
                <div className="w-16 h-16 rounded-full bg-white/10 border border-[#1E2536]/50 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-md shadow-xl">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">How to Use Copilot in Word to Draft Reports in Seconds</h3>
                <p className="text-justify text-sm text-gray-400 mb-6">Learn prompt engineering inside Microsoft Copilot for Word to generate executive summaries, rewrite tone, and format tables.</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                  <Play className="w-4 h-4 text-red-500 fill-current" /> Watch on YouTube
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Files & Resources */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Practice Files & Resources</h2>
            <p className="text-justify text-sm text-gray-400">Download the files and reference materials you need to follow along with Microsoft Word tutorials.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Resource 1 */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase">.DOCX</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Word Practice Sample Document</h3>
              <p className="text-justify text-sm text-gray-400 mb-8 flex-grow">Follow along with selected tutorials using a downloadable Microsoft Word practice document pre-loaded with formatting exercises.</p>
              
              <div className="text-sm font-semibold text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                <Download className="w-4 h-4" /> Download Practice Document →
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase">.PDF</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Microsoft Word Keyboard Shortcuts</h3>
              <p className="text-justify text-sm text-gray-400 mb-8 flex-grow">Print or save this quick-reference PDF cheat sheet containing 50+ essential Word hotkeys and navigation shortcuts.</p>
              
              <div className="text-sm font-semibold text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
                <Download className="w-4 h-4" /> Download Shortcut Sheet →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue Learning Banner */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Continue Learning</h3>
              <p className="text-justify text-sm text-gray-400">Explore other sections of the Microsoft Word Hub.</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1.5 rounded-lg border border-[#1E2536]/50 text-xs text-gray-300 bg-white/[0.02] hover:bg-white/10 cursor-pointer transition-colors">Getting Started & Basics</span>
              <span className="px-3 py-1.5 rounded-lg border border-[#1E2536]/50 text-xs text-gray-300 bg-white/[0.02] hover:bg-white/10 cursor-pointer transition-colors">Formatting & Document Design</span>
              <span className="px-3 py-1.5 rounded-lg border border-[#1E2536]/50 text-xs text-gray-300 bg-white/[0.02] hover:bg-white/10 cursor-pointer transition-colors">AI Tools & Copilot in Word</span>
              <button className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-colors flex items-center gap-1 shadow-md">
                Browse All →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:border-[#1E2536]/50 transition-colors">
              <span className="text-sm font-semibold text-white">Is Microsoft Copilot available in all versions of MS Word?</span>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* More Tutorials */}
      <section className="py-16 border-t border-[#1E2536]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">More Microsoft Word Tutorials</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-[#1E2536]/50 transition-colors shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">FORMATTING & DOCUMENT DESIGN</span>
                <span className="text-gray-600 text-xs">•</span>
                <span className="text-xs text-gray-500 font-medium">8 MIN READ</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">How to Change Page Margins in Microsoft Word</h3>
              <p className="text-justify text-sm text-gray-400 mb-6 flex-grow">Learn how to set custom margins, adjust gutter spacing for binding, and apply different margins ...</p>
              
              <div className="flex items-center justify-between border-t border-[#1E2536]/50 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-3 h-3 text-gray-400" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <FileText className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-400">Read Tutorial →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
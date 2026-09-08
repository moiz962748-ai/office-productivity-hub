import React from 'react';
import { Folder, Sparkles, Layers, BookOpen, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 border-t border-[#1E2536]/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left mb-16">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-3 block">PRACTICAL LEARNING ENGINE</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Everything You Need to Learn by Doing</h2>
          <p className="text-justify text-sm text-gray-400 max-w-2xl mx-auto">Go beyond watching tutorials with practical files, AI workflows, integrations, and quick-reference resources.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 p-8 rounded-2xl flex flex-col group hover:border-blue-500/30 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Folder className="w-6 h-6" />
              </div>
              <div className="flex gap-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">.DOCX</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400">.XLSX</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">.PPTX</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Downloadable Exercise Files</h3>
            <p className="text-justify text-gray-400 text-sm leading-relaxed mb-8 flex-1">
              Raw datasets, .docx drafts, and presentation slide templates are attached to major guides so you can follow along and practice the exact workflow.
            </p>
            <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
              Browse File Repository <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 p-8 rounded-2xl flex flex-col group hover:border-purple-500/30 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 uppercase tracking-wider">AI AUTOMATION</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI & Copilot Workflows</h3>
            <p className="text-justify text-gray-400 text-sm leading-relaxed mb-6">
              Learn practical prompt techniques and use Microsoft Copilot to automate routine office tasks and improve productivity.
            </p>
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-lg p-3 mb-6 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <code className="text-xs text-gray-300 font-mono">Prompt: &quot;Summarize Q3 revenue and draft 3 bullet points&quot;</code>
            </div>
            <div className="flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
              See AI Prompt Workflows <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 p-8 rounded-2xl flex flex-col group hover:border-green-500/30 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 uppercase tracking-wider">DYNAMIC LINK</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cross-App Data Integrations</h3>
            <p className="text-justify text-gray-400 text-sm leading-relaxed mb-6 flex-1">
              Learn how to connect Excel data dynamically into Word documents and PowerPoint presentations.
            </p>
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-lg p-3 mb-6 flex items-center justify-between">
              <span className="text-[10px] font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded">X Excel</span>
              <ArrowRight className="w-3 h-3 text-gray-500" />
              <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded">W Word</span>
              <ArrowRight className="w-3 h-3 text-gray-500" />
              <span className="text-[10px] font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded">P PowerPoint</span>
            </div>
            <div className="flex items-center text-sm font-medium text-green-400 group-hover:text-green-300 transition-colors">
              View Integration Guides <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 p-8 rounded-2xl flex flex-col group hover:border-orange-500/30 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 uppercase tracking-wider">PDF QUICK REFERENCE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">PDF Shortcut Cheat Sheets</h3>
            <p className="text-justify text-gray-400 text-sm leading-relaxed mb-6 flex-1">
              High-resolution printable quick-reference guides for fast keyboard shortcut mastery.
            </p>
            <div className="bg-white/[0.02] backdrop-blur-sm border border-[#1E2536]/50 rounded-lg p-3 mb-6 space-y-2">
              <div className="flex justify-between items-center">
                <code className="text-[10px] text-gray-300 font-mono bg-white/[0.02] px-1.5 py-0.5 rounded">Ctrl + Shift + L</code>
                <span className="text-[10px] text-gray-500">Toggle Excel Filter</span>
              </div>
              <div className="flex justify-between items-center">
                <code className="text-[10px] text-gray-300 font-mono bg-white/[0.02] px-1.5 py-0.5 rounded">Alt + F1</code>
                <span className="text-[10px] text-gray-500">Insert Quick Chart</span>
              </div>
            </div>
            <div className="flex items-center text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">
              Download PDF Cards <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
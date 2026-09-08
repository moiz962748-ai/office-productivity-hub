'use client';

import React, { useState } from 'react';
import { X, Download, FileText, ChevronLeft, ChevronRight, File, FolderDown } from 'lucide-react';

interface PracticeFileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const files = [
  {
    id: 1,
    name: 'XLOOKUP_vs_VLOOKUP_Sample.xlsx',
    desc: 'Complete raw lookup datasets with solution tabs.',
    type: 'excel',
    ext: '.XLSX',
    size: '1.2 MB',
    extColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    iconColor: 'bg-green-500 hover:bg-green-400',
  },
  {
    id: 2,
    name: 'Executive_Report_Template.docx',
    desc: 'Pre-styled document layout with custom headers.',
    type: 'word',
    ext: '.DOCX',
    size: '850 KB',
    extColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    iconColor: 'bg-blue-500 hover:bg-blue-400',
  },
  {
    id: 3,
    name: 'Strategic_2026_Slide_Deck.pptx',
    desc: '16:9 widescreen master template with vector graphics.',
    type: 'powerpoint',
    ext: '.PPTX',
    size: '4.5 MB',
    extColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    iconColor: 'bg-orange-500 hover:bg-orange-400',
  },
  {
    id: 4,
    name: 'PowerQuery_Cleanup_Dataset.xlsx',
    desc: 'Messy sales records for automated transformation.',
    type: 'excel',
    ext: '.XLSX',
    size: '2.1 MB',
    extColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    iconColor: 'bg-green-500 hover:bg-green-400',
  },
  {
    id: 5,
    name: 'Excel_Keyboard_Shortcuts_CheatSheet.pdf',
    desc: 'High-resolution printable quick-reference sheet.',
    type: 'all',
    ext: '.PDF',
    size: '1.8 MB',
    extColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    iconColor: 'bg-purple-500 hover:bg-purple-400',
  },
];

const tabs = [
  { id: 'all', label: 'All (6)' },
  { id: 'word', label: 'Word' },
  { id: 'excel', label: 'Excel' },
  { id: 'powerpoint', label: 'PowerPoint' },
];

export default function PracticeFileSidebar({ isOpen, setIsOpen }: PracticeFileSidebarProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredFiles = activeTab === 'all' 
    ? files 
    : files.filter(f => f.type === activeTab);

  return (
    <>
      {/* Floating Toggle Button (Little Slider) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 -translate-y-1/2 right-0 z-50 bg-orange-600 hover:bg-orange-500 text-white py-4 px-1.5 rounded-l-md shadow-lg border border-r-0 border-orange-400/30 transition-transform flex flex-col items-center justify-center group ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
      >
        <span 
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} 
          className="text-[10px] font-bold tracking-widest uppercase opacity-90 group-hover:scale-105 transition-transform"
        >
          Download
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#050B14]/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-[#0A0F1C] border-l border-white/5 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
              <FolderDown className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Practice File Repository</h2>
              <p className="text-justify text-gray-400 text-xs mt-1">Download datasets, templates & cheat sheets</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 py-4">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-[#1E3A8A] text-white shadow-sm border border-blue-500' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* File List */}
        <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-3">
          {filteredFiles.map((file) => (
            <div key={file.id} className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl p-4 transition-colors group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${file.extColor}`}>
                      {file.ext}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono tracking-wider">{file.size}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-200 mb-1 leading-tight group-hover:text-white transition-colors">{file.name}</h3>
                  <p className="text-justify text-xs text-gray-500">{file.desc}</p>
                </div>
                <button className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white shadow-lg transition-colors ${file.iconColor}`}>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          
          {filteredFiles.length === 0 && (
            <div className="text-center py-10">
              <p className="text-justify text-gray-500 text-sm">No practice files available for this category.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 text-center">
          <p className="text-center text-xs text-gray-500">All exercise files are 100% free for educational use.</p>
        </div>
      </div>
    </>
  );
}
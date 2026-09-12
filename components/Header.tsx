'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const wordLinks = [
    { name: 'All MS Word Tutorials', href: '/all-word-tutourial' },
    { name: 'Getting Started & Basics', href: '/word-getting-started' },
    { name: 'Formatting & Design', href: '/word-formatting' },
    { name: 'AI Tools & Copilot', href: '/word-ai-tools' },
    { name: 'Integrations & Workflows', href: '/word-integrations' },
    { name: 'Word Resources', href: '/word-sub-hub' }
  ];

  const excelLinks = [
    { name: 'All MS Excel Tutorials', href: '/excel-hub' },
    { name: 'Excel Basics & Essentials', href: '/excel-getting-started' },
    { name: 'Formulas & Functions', href: '/excel-formulas' },
    { name: 'AI Tools & Copilot', href: '/excel-ai-tools' },
    { name: 'Integrations & Analytics', href: '/excel-integrations' },
    { name: 'Excel Resources', href: '/excel-sub-hub' }
  ];

  const powerPointLinks = [
    { name: 'All PowerPoint Tutorials', href: '/all-powerpoint-tutourial' },
    { name: 'Slide Basics & Setup', href: '/powerpoint-getting-started' },
    { name: 'Visual Design & Media', href: '/powerpoint-visual-design' },
    { name: 'AI Tools & Copilot', href: '/powerpoint-ai-tools' },
    { name: 'Integrations & Data Linking', href: '/powerpoint-integrations' },
    { name: 'PowerPoint Templates', href: '/powerpoint-sub-hub' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0E1A]/95 backdrop-blur-md shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-sm"></div>
              <div className="w-2.5 h-2.5 bg-purple-500 rounded-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm leading-tight">Office Productivity</span>
              <span className="text-white font-bold text-sm leading-tight">Hub</span>
              <span className="text-gray-400 text-[10px] uppercase tracking-wider leading-none mt-0.5">Word • Excel • PowerPoint</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            
            {/* Word Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${activeDropdown === 'word' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setActiveDropdown('word')}
                onClick={() => router.push('/word-sub-hub')}
              >
                MS Word <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'word' && (
                <div 
                  className="absolute left-0 top-full w-64 pt-2"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#0A0E1A]/95 backdrop-blur-2xl border border-blue-500/20 rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-1 bg-blue-600 w-full"></div>
                    <ul className="p-2">
                      {wordLinks.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} onClick={() => setActiveDropdown(null)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Excel Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${activeDropdown === 'excel' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setActiveDropdown('excel')}
                onClick={() => router.push('/excel-sub-hub')}
              >
                MS Excel <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'excel' && (
                <div 
                  className="absolute left-0 top-full w-64 pt-2"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#0A0E1A]/95 backdrop-blur-2xl border border-green-500/20 rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-1 bg-green-600 w-full"></div>
                    <ul className="p-2">
                      {excelLinks.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} onClick={() => setActiveDropdown(null)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* PowerPoint Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${activeDropdown === 'powerpoint' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setActiveDropdown('powerpoint')}
                onClick={() => router.push('/powerpoint-sub-hub')}
              >
                MS PowerPoint <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'powerpoint' && (
                <div 
                  className="absolute left-0 top-full w-64 pt-2"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="bg-[#0A0E1A]/95 backdrop-blur-2xl border border-orange-500/20 rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-1 bg-orange-600 w-full"></div>
                    <ul className="p-2">
                      {powerPointLinks.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.href} onClick={() => setActiveDropdown(null)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">About</Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-gray-300" />
              <input 
                type="text" 
                placeholder="Search tutorials, formulas..." 
                className="bg-[#050B14]/95 backdrop-blur-2xl border border-[#1E2536]/50 rounded-full py-1.5 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all w-48 xl:w-64"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <button className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[calc(100%+1rem)] left-0 w-full lg:hidden bg-[#0A0E1A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 overflow-y-auto shadow-2xl max-h-[calc(100vh-100px)]">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-[#0A0E1A]/95 backdrop-blur-2xl border border-[#1E2536]/50 rounded-lg w-full py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/50"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white px-3 py-2 rounded-md font-medium bg-white/[0.02]">Home</Link>
              
              <div 
                className="px-3 py-2 font-medium text-blue-400 cursor-pointer"
                onClick={() => { router.push('/word-sub-hub'); setMobileMenuOpen(false); }}
              >
                MS Word
              </div>
              <div className="pl-6 flex flex-col space-y-1 border-l border-blue-500/20 ml-4 mb-2">
                {wordLinks.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400 hover:text-white py-1">{item.name}</Link>
                ))}
              </div>

              <div 
                className="px-3 py-2 font-medium text-green-400 cursor-pointer"
                onClick={() => { router.push('/excel-sub-hub'); setMobileMenuOpen(false); }}
              >
                MS Excel
              </div>
              <div className="pl-6 flex flex-col space-y-1 border-l border-green-500/20 ml-4 mb-2">
                {excelLinks.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400 hover:text-white py-1">{item.name}</Link>
                ))}
              </div>

              <div 
                className="px-3 py-2 font-medium text-orange-400 cursor-pointer"
                onClick={() => { router.push('/powerpoint-sub-hub'); setMobileMenuOpen(false); }}
              >
                MS PowerPoint
              </div>
              <div className="pl-6 flex flex-col space-y-1 border-l border-orange-500/20 ml-4 mb-2">
                {powerPointLinks.map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400 hover:text-white py-1">{item.name}</Link>
                ))}
              </div>

              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
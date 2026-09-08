import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-[#1E2536]/50 pt-16 pb-8 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">CORE PILLAR HUBS</h4>
            <ul className="space-y-3">
              <li><Link href="/word-hub" className="text-xs text-gray-400 hover:text-white transition-colors">MS Word Hub</Link></li>
              <li><Link href="/excel-hub" className="text-xs text-gray-400 hover:text-white transition-colors">MS Excel Hub</Link></li>
              <li><Link href="/powerpoint-hub" className="text-xs text-gray-400 hover:text-white transition-colors">PowerPoint Hub</Link></li>
              <li><Link href="/article-landing" className="text-xs text-gray-400 hover:text-white transition-colors">Browse All Tutorials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">FREE ASSETS & PRACTICE</h4>
            <ul className="space-y-3">
              <li><Link href="/word-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Word Cheat Sheets & PDFs</Link></li>
              <li><Link href="/excel-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Excel Practice Datasets</Link></li>
              <li><Link href="/powerpoint-hub" className="text-xs text-gray-400 hover:text-white transition-colors">PowerPoint Slide Templates</Link></li>
              <li><Link href="/excel-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Shortcut Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">AI & MODERN WORKFLOWS</h4>
            <ul className="space-y-3">
              <li><Link href="/word-hub" className="text-xs text-gray-400 hover:text-white transition-colors">MS Copilot Mastery</Link></li>
              <li><Link href="/excel-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Office AI Prompts</Link></li>
              <li><Link href="/word-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Excel-to-Word Automation</Link></li>
              <li><Link href="/excel-hub" className="text-xs text-gray-400 hover:text-white transition-colors">Power Query</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">BRAND TRUST & CONNECT</h4>
            <ul className="space-y-3">
              <li><Link href="/article-landing" className="text-xs text-gray-400 hover:text-white transition-colors">Brand Mission</Link></li>
              <li><Link href="/article-landing" className="text-xs text-gray-400 hover:text-white transition-colors">About Us & Authors</Link></li>
              <li><Link href="/article-landing" className="text-xs text-gray-400 hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link href="/article-landing" className="text-xs text-gray-400 hover:text-white transition-colors">Contact & Support</Link></li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              {/* Social placeholders */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-gray-400 text-xs">YT</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-gray-400 text-xs">TW</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-gray-400 text-xs">LI</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#1E2536]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center text-[10px] text-black font-bold">N</div>
            <p className="text-justify text-xs text-gray-500">Copyright &copy; 2026 Office Productivity Hub</p>
          </div>
          
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/article-landing" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/article-landing" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <Link href="/article-landing" className="hover:text-gray-300 transition-colors">Accessibility</Link>
            <span>&bull;</span>
            <Link href="/article-landing" className="hover:text-gray-300 transition-colors">HTML Sitemap</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Office Productivity Hub provides educational content and practice datasets. Custom automation services are fulfilled by our dedicated agency team under professional service agreements.
        </div>

      </div>
    </footer>
  );
}
'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductHubs from '@/components/ProductHubs';
import VideoLearning from '@/components/VideoLearning';
import CTASection from '@/components/CTASection';
import PracticeFileSidebar from '@/components/PracticeFileSidebar';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Main Content Sections */}
      <Hero />
      <ProductHubs />
      <Features />
      <VideoLearning />
      <CTASection />

      {/* Practice File Sliding Drawer */}
      <PracticeFileSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
}
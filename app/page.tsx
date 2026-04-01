'use client';

import { useState } from 'react';
import TopBar from '@/components/TopBar';
import SideMenu from '@/components/SideMenu';
import HeroSlider from '@/components/HeroSlider';
import CategoriesGrid from '@/components/CategoriesGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhySection from '@/components/WhySection';
import AppFooter from '@/components/AppFooter';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <TopBar onMenuOpen={() => setMenuOpen(true)} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <HeroSlider />
      <CategoriesGrid />
      <FeaturedProducts />
      <WhySection />
      <AppFooter />
    </div>
  );
}

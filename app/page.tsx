'use client';

import { useState, useEffect } from 'react';
import TopBar from '@/components/TopBar';
import SideMenu from '@/components/SideMenu';
import HeroSlider from '@/components/HeroSlider';
import CategoriesGrid from '@/components/CategoriesGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhySection from '@/components/WhySection';
import AppFooter from '@/components/AppFooter';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen show={loading} />
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

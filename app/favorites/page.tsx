'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import AppFooter from '@/components/AppFooter';
import { motion } from 'framer-motion';

export default function FavoritesPage() {
  const { favorites, products } = useStore();
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="sticky top-0 z-50 glass-card px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link href="/" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowRight className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-bold text-foreground font-arabic">المفضلة</h1>
        </div>
      </header>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 py-6 max-w-lg mx-auto">
        {favoriteProducts.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-4xl">❤️</p>
            <p className="text-muted-foreground font-arabic">لا توجد منتجات في المفضلة</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {favoriteProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </motion.div>
      <AppFooter />
    </div>
  );
}

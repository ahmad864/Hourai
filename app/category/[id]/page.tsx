'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { products } = useStore();
  const category = categories.find(c => c.id === id);
  const categoryProducts = products.filter(p => p.category === id);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background font-arabic" dir="rtl">
        <p className="text-muted-foreground">الفئة غير موجودة</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="sticky top-0 z-50 glass-card px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link href="/" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowRight className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-bold text-foreground font-arabic">{category.name}</h1>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-6 max-w-lg mx-auto"
      >
        <div className="grid grid-cols-2 gap-3">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {categoryProducts.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="text-4xl">🛍️</p>
            <p className="text-muted-foreground font-arabic">لا توجد منتجات في هذه الفئة</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

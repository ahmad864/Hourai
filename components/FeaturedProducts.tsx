'use client';

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { products } = useStore();
  const [showAll, setShowAll] = useState(false);
  const featuredProducts = products.filter(p => p.featured);
  const visibleProducts = showAll ? featuredProducts : featuredProducts.slice(0, 8);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-lg font-bold text-primary-foreground font-arabic px-6 py-2 bg-primary rounded-full">
            منتجات مميزة
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {!showAll && featuredProducts.length > 8 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-arabic font-medium hover:opacity-90 transition-opacity"
            >
              عرض المزيد
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

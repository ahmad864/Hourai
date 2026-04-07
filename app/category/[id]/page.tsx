'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { categories } from '@/data/products';
import { useStore } from '@/context/StoreContext';
import ProductCard from '@/components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { products, cartCount, loading } = useStore();
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

      {/* شاشة التحميل — خلفية زهرية شفافة فوق الصفحة */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: 'rgba(181, 103, 138, 0.45)', backdropFilter: 'blur(2px)' }}
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/logo1.png"
                alt="Europe Chic"
                width={200}
                height={100}
                className="w-48 h-auto"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-white font-arabic text-sm font-medium drop-shadow"
            >
              انتظر، جاري تحميل المنتجات...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-4 py-6 max-w-lg mx-auto pb-24"
      >
        {!loading && categoryProducts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-4xl">🛍️</p>
            <p className="text-muted-foreground font-arabic">لا توجد منتجات في هذه الفئة</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </motion.div>

      {/* زر السلة العائم */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50"
          >
            <Link
              href="/cart"
              className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 active:scale-95 transition-transform"
            >
              <ShoppingBag className="w-7 h-7 text-primary-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-primary text-primary text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

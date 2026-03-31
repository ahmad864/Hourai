'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="sticky top-0 z-50 glass-card px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link href="/" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowRight className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-bold text-foreground font-arabic">سلة التسوق</h1>
        </div>
      </header>

      <div className="px-4 py-6 max-w-lg mx-auto">
        {cart.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-4xl">🛒</p>
            <p className="text-muted-foreground font-arabic">سلة التسوق فارغة</p>
            <Link href="/" className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-arabic">
              تسوقي الآن
            </Link>
          </div>
        ) : (
          <>
            <AnimatePresence>
              {cart.map(item => {
                const isExternal = item.image.startsWith('http');
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-3 p-3 mb-3 rounded-2xl bg-card border border-border/30"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      {isExternal ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground truncate font-arabic">{item.name}</h3>
                      <p className="text-sm font-bold text-primary mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3 text-foreground" />
                        </button>
                        <span className="text-sm font-bold text-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-primary flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3 text-primary-foreground" />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="self-start p-2">
                      <Trash2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className="mt-6 p-4 rounded-2xl bg-secondary">
              <div className="flex justify-between mb-4">
                <span className="font-arabic text-foreground">المجموع</span>
                <span className="font-bold text-primary text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full py-3 rounded-full bg-primary text-primary-foreground text-center font-medium font-arabic transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                إتمام الطلب
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

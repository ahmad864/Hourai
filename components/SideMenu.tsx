'use client';

import { X, Home, Info, Phone, Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/context/StoreContext';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'الصفحة الرئيسية', to: '/' },
  { icon: Info, label: 'من نحن', to: '/about' },
  { icon: Phone, label: 'اتصل بنا', to: '/contact' },
];

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const { cartCount, favorites } = useStore();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* خلفية شفافة */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* القائمة */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-background flex flex-col rounded-l-3xl shadow-2xl overflow-hidden"
          >
            {/* الهيدر */}
            <div className="flex items-center justify-between px-5 py-4 bg-primary">
              <button onClick={onClose} className="p-2 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-colors">
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
              <Image src="/images/logo.png" alt="Europe Chic" width={100} height={36} className="h-9 w-auto" />
            </div>

            {/* السلة والمفضلة */}
            <div className="flex gap-3 px-5 py-4 border-b border-border">
              <Link
                href="/cart"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/10 text-primary font-arabic text-sm font-medium"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>السلة</span>
              </Link>
              <Link
                href="/favorites"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/10 text-primary font-arabic text-sm font-medium"
              >
                <div className="relative">
                  <Heart className="w-4 h-4" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                      {favorites.length}
                    </span>
                  )}
                </div>
                <span>المفضلة</span>
              </Link>
            </div>

            {/* الروابط */}
            <nav className="flex-1 px-4 py-4 space-y-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={item.to}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-foreground hover:bg-primary/8 active:bg-primary/15 transition-colors font-arabic"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-base">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* الفوتر */}
            <div className="px-5 py-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-arabic text-center">
                © 2026 Europe Chic
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

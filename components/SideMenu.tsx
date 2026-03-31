'use client';

import { X, Home, Info, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

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
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-64 bg-background shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Image src="/images/logo.png" alt="Europe Chic" width={80} height={32} className="h-8 w-auto" />
              <button onClick={onClose} className="p-2 rounded-full hover:bg-secondary transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.to}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground hover:bg-secondary transition-colors font-arabic"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

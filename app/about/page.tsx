'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AppFooter from '@/components/AppFooter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <header className="sticky top-0 z-50 glass-card px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link href="/" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowRight className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-bold text-foreground font-arabic">من نحن</h1>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-8 max-w-lg mx-auto space-y-6"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground font-heading">Europe Chic</h2>
          <p className="text-primary font-arabic">أناقة أوروبية بلمسة شرقية</p>
        </div>

        <div className="space-y-4 text-muted-foreground font-arabic leading-relaxed">
          <p>
            نحن في Europe Chic نؤمن بأن الأناقة حق لكل امرأة. نختار لكِ بعناية أفضل التصاميم والموديلات من أشهر بيوت الأزياء الأوروبية.
          </p>
          <p>
            تأسست علامتنا التجارية بهدف تقديم أزياء عالية الجودة بأسعار مناسبة، مع الحفاظ على أحدث صيحات الموضة العالمية.
          </p>
          <p>
            نلتزم بتوفير تجربة تسوق مميزة ومريحة لكل عملائنا، مع خدمة توصيل سريعة وسياسة استبدال مرنة.
          </p>
        </div>
      </motion.div>
      <AppFooter />
    </div>
  );
}

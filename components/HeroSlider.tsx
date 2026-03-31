'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
  { image: '/images/hero/hero1.jpg', text: 'أناقة أوروبية بلمسة شرقية' },
  { image: '/images/hero/hero2.jpg', text: 'تشكيلة الموسم الجديدة' },
  { image: '/images/hero/hero3.jpg', text: 'اكتشفي أحدث صيحات الموضة' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].text}
            fill
            className="object-cover"
            priority={current === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-6 left-0 right-0 text-center px-6"
          >
            <h2 className="text-xl font-bold text-primary-foreground font-arabic leading-relaxed drop-shadow-lg">
              {slides[current].text}
            </h2>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-primary-foreground w-5' : 'bg-primary-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

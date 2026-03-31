'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/products';
import { motion } from 'framer-motion';

export default function StoriesSection() {
  return (
    <div className="py-4 px-4">
      <div className="flex gap-4 overflow-x-auto hide-scrollbar max-w-lg mx-auto">
        {categories.slice(0, 8).map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link href={`/category/${cat.id}`} className="flex flex-col items-center gap-1.5 min-w-[70px]">
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-primary to-primary/50">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-background relative">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              </div>
              <span className="text-[11px] font-medium text-foreground text-center leading-tight font-arabic">
                {cat.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

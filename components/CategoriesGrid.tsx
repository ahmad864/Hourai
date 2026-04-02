'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/products';
import { motion } from 'framer-motion';

export default function CategoriesGrid() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-lg font-bold text-primary-foreground font-arabic px-6 py-2 bg-primary rounded-full">
            الأقسام
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={`/category/${cat.id}`}
                className="block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.13)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-50">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2.5 text-center bg-primary">
                  <span className="text-sm font-semibold text-primary-foreground font-arabic">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

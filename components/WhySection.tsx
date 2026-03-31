'use client';

import { motion } from 'framer-motion';

export default function WhySection() {
  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="flex justify-center mb-4">
            <h2 className="text-lg font-bold text-primary-foreground font-arabic px-6 py-2 bg-primary rounded-full">
              لماذا Europe Chic
            </h2>
          </div>
          <p className="text-base font-semibold text-foreground font-arabic leading-relaxed">
            &quot;الأناقة ليست مجرد مظهر، بل هي تفاصيل تكتمل بكِ&quot;
          </p>
          <p className="text-sm text-muted-foreground font-arabic leading-7">
            في Europe Chic، نؤمن أن كل قطعة تختارينها هي تعبير عن شخصيتكِ.
            انطلقنا بشغف لنجمع لكِ أرقى صيحات الموضة من ألبسة، حقائب،
            وإكسسوارات، بتصاميم تجمع بين الرقي الأوروبي واللمسة العصرية التي
            تناسب يومكِ.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="relative z-10 flex min-h-[60vh] items-center justify-center bg-white text-black">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-6 text-4xl font-bold">
          個性を解き放つ、デジタルキャラクターの世界へ
        </h2>
        <p className="text-lg leading-relaxed">
          NOSENOSORAは、唯一無二の魂を宿したデジタルキャラクターたちが集う場所。
          <br />
          ここでは、アートとテクノロジーが融合し、新たな物語が生まれます。
          <br />
          あなたの心に響く、運命の出会いを見つけてください。
        </p>
      </motion.div>
    </section>
  );
}

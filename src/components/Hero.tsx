
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* 背景ビデオ */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/blue-flame.mp4" type="video/mp4" />
      </video>

      {/* ロゴ（スクリーンブレンドを適用するレイヤー） */}
      <div className="relative z-10 flex h-full w-full items-center justify-center bg-white mix-blend-screen">
        <motion.a
          href="#"
          className="text-8xl font-extrabold text-black no-underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NOSENOSORA
        </motion.a>
      </div>

      {/* スクロールダウン・インジケーター */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
      >
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

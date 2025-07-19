
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

// パーティクルコンポーネントをクライアント側でのみ動的に読み込む
const ParticlesComponent = dynamic(() => import('./ParticlesComponent'), {
  ssr: false,
});

// --- キャラクターデータ ---
const characters = [
  { id: 1, name: 'Benten', imageSrc: '/BTC_benten_toumei.png', description: 'ここにBentenの説明文が入ります。ダミーテキストです。' },
  { id: 2, name: 'Hina', imageSrc: '/BTC_hina_toumei.png', description: 'ここにHinaの説明文が入ります。ダミーテキストです。' },
  { id: 3, name: 'Huta', imageSrc: '/BTC_huta_toumei.png', description: 'ここにHutaの説明文が入ります。ダミーテキストです。' },
  { id: 4, name: 'Nagisa', imageSrc: '/BTC_nagisa_toumei.png', description: 'ここにNagisaの説明文が入ります。ダミーテキストです。' },
  { id: 5, name: 'IChiya', imageSrc: '/BTC_IChiya_toumei.png', description: 'ここにIChiyaの説明文が入ります。ダミーテキストです。' },
  { id: 6, name: 'Nekomata', imageSrc: '/BTC_nekomata_toumei.png', description: 'ここにNekomataの説明文が入ります。ダミーテキストです。' },
  { id: 7, name: 'Oen', imageSrc: '/BTC_oen_toumei.png', description: 'ここにOenの説明文が入ります。ダミーテキストです。' },
  { id: 8, name: 'Ganzy', imageSrc: '/BTC_ganzy_toumei.png', description: 'ここにGanzyの説明文が入ります。ダミーテキストです。' },
  { id: 9, name: 'Jin', imageSrc: '/BTC_Jin_toumei.png', description: 'ここにJinの説明文が入ります。ダミーテキストです。' },
  { id: 10, name: 'Konga', imageSrc: '/BTC_konga_toumei.png', description: 'ここにKongaの説明文が入ります。ダミーテキストです。' },
  { id: 11, name: 'Nem', imageSrc: '/BTC_Nem_toumei.png', description: 'ここにNemの説明文が入ります。ダミーテキストです。' },
  { id: 12, name: 'Oto', imageSrc: '/BTC_Oto_toumei.png', description: 'ここにOtoの説明文が入ります。ダミーテキストです。' },
  { id: 13, name: 'Xiaolan', imageSrc: '/BTC_Xiaolan_toumei.png', description: 'ここにXiaolanの説明文が入ります。ダミーテキストです。' },
  { id: 14, name: 'Uka', imageSrc: '/BTC_Uka_toumei.png', description: 'ここにUkaの説明文が入ります。ダミーテキストです。' },
  { id: 15, name: 'Sakuya', imageSrc: '/BTC_Sakuya_toumei.png', description: 'ここにSakuyaの説明文が入ります。ダミーテキストです。' },
];

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 500 : -500, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 500 : -500, opacity: 0 }),
};

export default function Portfolio() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const characterIndex = (page % characters.length + characters.length) % characters.length;
  const character = characters[characterIndex];

  return (
    <section id="portfolio-section" className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white text-black">
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="tsparticles-portfolio" />
      </div>

      <motion.h2
        className="mb-16 text-4xl font-bold z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        作品一覧
      </motion.h2>

      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* --- 画像表示エリア --- */}
        <div className="relative flex h-[60vh] items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={character.imageSrc}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute h-full w-full object-contain"
            />
          </AnimatePresence>
        </div>

        {/* --- テキスト情報エリア --- */}
        <div className="relative flex h-full flex-col justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={page} // 画像と同じキーでアニメーションを連動
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 text-5xl font-bold">{character.name}</h3>
              <p className="text-lg leading-relaxed">{character.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- 操作ボタン --- */}
      <div className="absolute bottom-10 z-20 flex space-x-4">
        <motion.button 
          onClick={() => paginate(-1)} 
          className="rounded-full bg-black/5 p-3 text-black transition-colors hover:bg-black/10"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </motion.button>
        <motion.button 
          onClick={() => paginate(1)} 
          className="rounded-full bg-black/5 p-3 text-black transition-colors hover:bg-black/10"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </motion.button>
      </div>
    </section>
  );
}


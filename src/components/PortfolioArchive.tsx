'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default function PortfolioArchive() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative z-10 flex h-[50vh] flex-col items-center justify-center bg-white text-black">
      <motion.h2
        className="mb-8 text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        作品アーカイブ
      </motion.h2>
      <Link href="/portfolio" passHref>
        <motion.div
          className="relative flex items-center justify-center"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full w-full rounded-full border-2 border-black bg-white"
            animate={{
              scale: isHovered ? 1.05 : 1,
              backgroundColor: isHovered ? '#000' : '#fff',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.span
            className="relative z-10 px-8 py-3 text-lg font-bold"
            animate={{ color: isHovered ? '#fff' : '#000' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            見る
          </motion.span>
          <motion.div
            className="relative z-10 ml-2"
            initial={{ x: -10, opacity: 0 }}
            animate={{ 
              x: isHovered ? 0 : -10, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <FaArrowRight color={isHovered ? '#fff' : '#000'} />
          </motion.div>
        </motion.div>
      </Link>
    </section>
  );
}
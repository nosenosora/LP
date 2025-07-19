
'use client';

import { motion } from 'framer-motion';
import { FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center bg-white text-black py-20">
      <motion.h2
        className="mb-12 text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        CONTACT
      </motion.h2>
      <motion.div
        className="flex space-x-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" className="text-black transition-transform duration-300 hover:text-blue-400 hover:scale-110">
          <FaXTwitter size={48} />
        </a>
        <a href="mailto:your_email@example.com" className="text-black transition-transform duration-300 hover:text-gray-600 hover:scale-110">
          <FaEnvelope size={48} />
        </a>
      </motion.div>
    </section>
  );
}


'use client';

import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="bg-white text-black">
      <header className="fixed top-0 left-0 z-50 w-full p-4 bg-white/80 backdrop-blur-sm">
        <Link href="/" className="text-2xl font-bold text-black transition-opacity hover:opacity-80">
          NOSENOSORA
        </Link>
      </header>
      <main>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}


'use client';

import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import PortfolioArchive from '../components/PortfolioArchive';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Introduction />
      <PortfolioArchive />
      <Contact />
      <Footer />
    </main>
  );
}

import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';

export default function HeroSection() {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const updateBackground = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setBgImage(
        isDark
        ? "url('https://img.freepik.com/free-vector/wave-background-abstract-gradient-design_483537-3688.jpg')"
        : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUVQTw1dDz_yag0F9mbmMS1ACFA5n_h4OsA&s')"
      );
    };

    updateBackground(); // initial
    const observer = new MutationObserver(updateBackground);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='home'
      className="h-screen relative grid place-items-center bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: bgImage }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/40 z-0" />

      <div className="relative z-10 max-w-3xl w-full px-6 md:px-12 text-center animate-fade-in-up">
        <p className="uppercase text-sm tracking-widest text-blue-400 font-semibold mb-4 backdrop-blur-sm bg-white/10 inline-block px-4 py-1 rounded-full shadow-md">
          Agence digitale créative
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-lg">
          Boostez votre <br className="hidden md:block" />
          <span className="text-blue-400 animate-pulse">présence digitale</span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 drop-shadow-md">
          <span className="font-medium text-white">Nous aidons les entreprises</span> à réussir leur <span className="text-blue-300 font-medium">transition numérique</span> en créant des <span className="font-semibold text-white">solutions digitales innovantes</span>, performantes et sur mesure.
        </p>
        <a href="#services">
          <button
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full px-8 py-3 shadow-xl ring-2 ring-blue-500/20 hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Discuter de votre projet"
          >
            Explorer nos services <Send size={20} />
          </button>
        </a>
      </div>
    </section>
  );
}

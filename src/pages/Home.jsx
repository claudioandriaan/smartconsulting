import React from 'react'
import Header from '../components/Header'
import { Send } from 'lucide-react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import TestimonialsAndPortfolio from './TestimonialsAndPortfolio';
import Services from './Services';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="relative font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Header />

      <Hero/>
      {/* À propos */}
      <section id="about" className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12" data-aos="fade-up">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="uppercase text-sm tracking-widest text-blue-600 font-semibold mb-3">À propos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Qui sommes-nous ?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Nous sommes une équipe de passionnés par la <span className="text-blue-600 font-medium">technologie</span>, le <span className="text-blue-600 font-medium">design</span> et l’<span className="text-blue-600 font-medium">automatisation</span>. Notre mission est claire : <strong>créer des solutions digitales utiles, humaines et durables</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Du développement web aux outils data en passant par les apps mobiles, nous mettons l’innovation au service des entreprises ambitieuses.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-bold shadow-md">
                  3+
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">années d’expérience</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg font-bold shadow-md">
                  20+
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">projets livrés</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <img
                src="https://teamdev.tn/wp-content/uploads/2022/09/309381257_595197429013415_7432911934225816506_n-1024x683.png"
                alt="Équipe tech"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <span className="text-sm text-gray-800 dark:text-white font-semibold">Une équipe créative à votre écoute</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Services />

      {/* Pourquoi Nous Choisir */}
      <section id="why-us" className="bg-white dark:bg-gray-900 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Une équipe passionnée et expérimentée, au service de votre succès digital.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
  ['Expertise', 'blue', '3+ ans d’expérience en développement web, mobile et extraction des données.'],
  ['Qualité', 'green', 'Du code propre, des interfaces modernes, des performances optimales.'],
  ['Proximité', 'purple', 'Une collaboration humaine, fluide et transparente.'],
  ['Résultats', 'yellow', 'Des solutions concrètes qui répondent à vos vrais besoins.'],
].map(([title, color, text], i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={`${(i + 1) * 100}`}>
                <h3 className={`text-${color}-600 text-xl font-semibold mb-2`}>{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsAndPortfolio />

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-up">

          {/* Text */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Travaillons ensemble
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Une idée en tête ? Un besoin digital ? Contactez-nous et discutons de votre projet !
            </p>

            <ul className="text-gray-700 dark:text-gray-300 space-y-4 text-base">
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-500"></i>
                <span>support@claudio.dev</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-green-500"></i>
                <span>+261 34 55 504 44</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-red-500"></i>
                <span>Antsirabe, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100 dark:border-gray-700" data-aos="fade-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input type="text" placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" placeholder="Votre email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sujet</label>
              <input type="text" placeholder="Sujet du message"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea rows="5" placeholder="Expliquez votre besoin..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" required />
            </div>

            <button type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-3">Claudio.dev</h3>
            <p className="text-gray-400">Votre partenaire digital pour créer, automatiser et innover.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Navigation</h4>
            <ul className="text-gray-300 space-y-1">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#why-us" className="hover:underline">Pourquoi nous choisir</a></li>
              <li><a href="#testimonials" className="hover:underline">Avis Clients</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-github text-xl"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Claudio dev — Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}

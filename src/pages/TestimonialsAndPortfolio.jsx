import React, { useState } from 'react';
import projet1 from '../assets/projet_1.png'
import projet2 from '../assets/projet_2.png'
export default function TestimonialsAndPortfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
  {
    title: 'Scraping Annonces Légales',
    description: 'Extraction automatisée des données légales d’entreprises françaises.',
    image: projet1,
    category: 'scraping',
  },
  {
    title: 'Dashboard KPI',
    description: 'Suivi en temps réel des indicateurs pour une startup e-commerce.',
    image: projet2,
    category: 'dev',
  },
  {
    title: 'Extraction Données Produits',
    description: 'Scraping de 10.000 fiches produits pour une refonte SEO.',
    image: projet1,
    category: 'scraping',
  },
  {
    title: 'Site Vitrine pour Agence',
    description: 'Développement d’un site WordPress moderne pour une agence locale.',
    image: projet2,
    category: 'dev',
  },
];


  const testimonials = [
    {
      name: 'Alice R.',
      title: 'Fondatrice - GreenStyle',
      letter: 'A',
      comment: 'Un travail remarquable sur notre site e-commerce. Claudio a su comprendre nos besoins et livrer rapidement.',
      color: 'blue',
    },
    {
      name: 'Marc L.',
      title: 'CTO - DataNova',
      letter: 'M',
      comment: 'Service rapide, professionnel et super efficace pour l’automatisation de nos rapports hebdos.',
      color: 'green',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-100 py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">Votre satisfaction est notre plus belle réussite.</p>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map(({ name, letter, title, comment, color }, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-blue-500 rounded-xl shadow-lg p-6 text-left relative"
                data-aos="fade-up"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                <p className="text-gray-700 italic mb-4">“{comment}”</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${color}-200 flex items-center justify-center font-bold text-${color}-900`}>
                    {letter}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{name}</h4>
                    <p className="text-sm text-gray-500">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">Découvrez nos projets en développement web et data scraping.</p>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-10">
            {['all', 'scraping', 'dev'].map(cat => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'Tous' : cat === 'scraping' ? 'Data Scraping' : 'Développement Web'}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

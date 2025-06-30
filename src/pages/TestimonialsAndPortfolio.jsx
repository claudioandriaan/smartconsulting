import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import projet1 from '../assets/projet_1.png';
import projet5 from '../assets/projet5.png';
import projet2 from '../assets/projet_2.png';
import projet3 from '../assets/projet3.png';
import projet4 from '../assets/projet4.png';
import projet7 from '../assets/deepseek.png';
import projet6 from '../assets/qwen.png';
import projet8 from '../assets/data.png';

export default function TestimonialsAndPortfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Portfolio website pour l\'un de nos client',
      description: 'Développement d’un site web moderne pour l\'un de nos client.',
      image: projet3,
      category: 'dev',
      github: 'https://github.com/claudio/portfolio-client',
      website: 'https://claudio-andriniaina.netlify.app/',
    },
    {
      title: 'Qwen, Agent AI website',
      description: 'Développement et implementation de l\'API Qwen.',
      image: projet6,
      category: 'dev',
      github: 'https://github.com/claudioandriaan/qwen-ai',
      website: 'https://qwen-ai-indol.vercel.app/',
    },
    {
      title: 'DeepSeek, Agent AI website',
      description: 'Développement et implementation de l\'API DeepSeek.',
      image: projet7,
      category: 'dev',
      github: 'https://github.com/claudioandriaan/deepseek-ai',
      website: 'https://deepseek-ai-gilt.vercel.app/',
    },
    {
      title: 'Site Vitrine pour Agence',
      description: 'Développement d’un site web moderne pour une agence locale.',
      image: projet5,
      category: 'dev',
      github: 'https://github.com/claudioandriaan/nature-zen',
      website: 'https://nature-zen.vercel.app/'
    },
    {
      title: 'Site de rechercher d\'emploi à Madagascar',
      description: 'Développement d’un site web moderne pour trouver des job.',
      image: projet1,
      category: 'dev',
      github: 'https://github.com/claudio/portfolio-client',
    },
    {
      title: 'Scraping Annonces Légales',
      description: 'Extraction automatisée des données légales d’entreprises françaises.',
      image: projet4,
      category: 'scraping',
      github: 'https://github.com/claudio/annonces-legales',
      badge: { text: 'Nouveau', color: 'blue' },
    },
    {
      title: 'Site de reservation',
      description: 'Site  de résérvation.',
      image: projet2,
      category: 'dev',
      github: 'https://github.com/claudio/dashboard-kpi',
    },
    {
      title: 'Extraction Données Produits',
      description: 'Scraping de 10.000 fiches produits pour une refonte SEO.',
      image: projet8,
      category: 'scraping',
      github: 'https://github.com/claudioandriaan/Python_web_scraping_test',
    },
    
  ];

  const testimonials = [
    {
      name: 'Alice R.',
      title: 'Fondatrice - GreenStyle',
      letter: 'A',
      comment: 'Un travail remarquable sur notre site e-commerce. Claudio a su comprendre nos besoins et livrer rapidement.',
      colorClass: 'bg-blue-200 text-blue-900',
    },
    {
      name: 'Marc L.',
      title: 'CTO - DataNova',
      letter: 'M',
      comment: 'Service rapide, professionnel et super efficace pour l’automatisation de nos rapports hebdos.',
      colorClass: 'bg-green-200 text-green-900',
    },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-100 dark:bg-gray-900 py-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">Votre satisfaction est notre plus belle réussite.</p>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map(({ name, letter, title, comment, colorClass }, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-xl shadow-lg p-6 text-left relative"
                data-aos="fade-up"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                <p className="text-gray-700 dark:text-gray-200 italic mb-4">“{comment}”</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center font-bold`}>
                    {letter}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white dark:bg-gray-950 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Découvrez nos projets en développement web et data scraping.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {['all', 'scraping', 'dev'].map(cat => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
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
                className="relative bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                {/* Badge */}
                {project.badge && (
                  <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-${project.badge.color}-100 text-${project.badge.color}-800`}>
                    {project.badge.text}
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>

                  <div className="flex gap-4 mt-2 items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                      >
                        <Github size={18} /> GitHub
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all"
                      >
                        <ExternalLink size={18} /> Site web
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import React from 'react';
import { Laptop, Smartphone, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Développement Web',
      color: 'blue',
      text: 'Sites vitrines, e-commerce, plateformes sur mesure — rapides, sécurisés et responsives.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Applications Mobiles',
      color: 'green',
      text: 'Apps hybrides ou natives pour Android & iOS, adaptées à vos besoins métier.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Automatisation & Data',
      color: 'purple',
      text: 'Scraping, automatisation, ETL, tableaux de bord — optimisez votre productivité.',
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Nos Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-14">
          Nous vous accompagnons à chaque étape de votre transformation numérique
          avec des solutions sur mesure et performantes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ icon, title, color, text }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition hover:shadow-xl hover:-translate-y-1 duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-${color}-100 text-${color}-600 dark:bg-${color}-800/30 dark:text-${color}-400 mb-5`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

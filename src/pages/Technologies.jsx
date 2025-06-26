import React from 'react';
import { Code, Database, Server, Zap, Globe, Terminal } from 'lucide-react';

export default function Technologies() {
  const techs = [
    {
      title: 'Développement Web',
      color: 'blue',
      icon: <Globe className="w-8 h-8" />,
      items: ['React (MERN Stack)', 'Node.js & Express', 'MongoDB', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Automatisation & Scraping',
      color: 'purple',
      icon: <Zap className="w-8 h-8" />,
      items: ['Python (BeautifulSoup, Requests)', 'Shell Bash', 'awk & sed', 'Crontab'],
    },
    {
      title: 'DevOps & Outils',
      color: 'green',
      icon: <Server className="w-8 h-8" />,
      items: ['Git & GitHub', 'Vercel & Netlify', 'Linux CLI', 'Postman', 'Docker (débutant)'],
    },
  ];

  return (
    <section
      id="technologies"
      className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Technologies utilisées
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Nous utilisons des outils modernes et performants pour répondre à tous vos besoins digitaux.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {techs.map(({ title, color, icon, items }, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl p-8 text-left transition-transform hover:-translate-y-1 duration-300 border border-gray-100 dark:border-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`w-14 h-14 mb-5 rounded-full flex items-center justify-center bg-${color}-100 text-${color}-600 dark:bg-${color}-900 dark:text-${color}-300`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
                {items.map((tech, i) => (
                  <li key={i} className="transition group-hover:translate-x-1">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
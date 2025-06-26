import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, email, message } = formData;
    if (!nom || !email || !message) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }

    // Simuler l'envoi
    setSubmitted(true);
    setFormData({ nom: '', email: '', sujet: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
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
              <Mail className="text-blue-500 w-5 h-5" />
              <span>support@claudio.dev</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-500 w-5 h-5" />
              <span>+261 34 55 504 44</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-red-500 w-5 h-5" />
              <span>Antsirabe, Madagascar</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100 dark:border-gray-700"
          data-aos="fade-left"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom *</label>
              <input
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                type="text"
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Votre email"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sujet</label>
            <input
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              type="text"
              placeholder="Sujet du message"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Expliquez votre besoin..."
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          {submitted && <p className="text-green-600 text-sm font-medium">Message envoyé avec succès !</p>}

          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Envoyer le message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}

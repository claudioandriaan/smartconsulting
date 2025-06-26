import React, { useState, useEffect } from 'react'
import { AlignJustify, Code, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Handle theme change
  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] px-5 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center md:px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className={`font-extrabold text-3xl ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            Claudio
          </h1>
          <Code size={30} className={`${scrolled ? 'text-blue-600' : 'text-blue-400'}`} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-6">
            {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
              <li key={item}>
                <a
                  className={`text-lg transition ${
                    scrolled ? 'text-gray-800 dark:text-white hover:text-blue-600' : 'text-white hover:text-blue-300'
                  }`}
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`px-4 py-2 rounded-full font-medium transition ${
                  scrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 p-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white' : 'bg-white/20 text-white'
            } hover:scale-105`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-300" />}
          </button>
        </nav>

        {/* Mobile menu icon */}
        <button
          onClick={toggleMenu}
          className={`md:hidden z-[1100] transition ${
            scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <AlignJustify size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 z-[1000] shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Dark mode toggle (mobile) */}
        <div className="flex items-center justify-start mb-6">
          {/* <span className="text-sm font-medium">Thème</span>*/}
          <button
            onClick={() => {
              setDarkMode(!darkMode)
              toggleMenu()
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-500" />}
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg mt-8">
          {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={toggleMenu} className="hover:text-blue-600">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

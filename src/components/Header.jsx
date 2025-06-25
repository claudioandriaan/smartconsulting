import { AlignJustify, Code } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent p-5">
      <div className="flex justify-between items-center md:px-6 py-4">
        <div className='flex md:items-center gap-2'>
          <h1 className='font-extrabold text-white text-3xl'>Claudio</h1>
          <span className='text-blue-400'><Code size={35} /></span>
        </div>
        <nav className='md:flex hidden'>
          <ul className='flex items-center gap-4'>
            <li><a className="text-white text-lg hover:text-blue-400" href="/">Home</a></li>
            <li><a className="text-white text-lg hover:text-blue-400" href="#about">About</a></li>
            <li><a className="text-white text-lg hover:text-blue-400" href="#services">Services</a></li>
            <li><a className="text-white text-lg hover:text-blue-400" href="#portfolio">Portfolio</a></li>
            <li><a className="px-3 py-2 bg-blue-600 rounded text-white hover:bg-blue-800" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <AlignJustify size={30} className='text-white cursor-pointer' />
      </div>
    </header>
  )
}

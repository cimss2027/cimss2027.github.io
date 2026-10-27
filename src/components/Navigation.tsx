'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: Array<{ name: string; href: string; external?: boolean }> = [
    // { name: 'Keynote', href: '/keynote' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    // { name: 'Registration', href: 'https://acns2027.isg.rhul.ac.uk/registration/', external: true },
    { name: 'Past Events', href: '/past-events' },
  ];

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="site-container">
        <div className="flex items-center py-3 md:justify-start">
          {/* Logo/Title */}
          <Link href="/" className="relative mr-2 whitespace-nowrap text-lg font-bold transition-colors hover:text-primary-200 md:-left-12">
            CIMSS 2027
          </Link>

          {/* Desktop Menu */}
          <div className="hidden text-sm md:flex md:flex-1">
            <Link href="/" className="relative -left-8 px-2 py-1.5 rounded hover:bg-white/10 transition-colors">
              Home
            </Link>
            {/*
              Program dropdown (hidden until the program is confirmed)

              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                  Program
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full z-20 hidden min-w-44 rounded-md bg-white py-2 text-primary-900 shadow-lg group-hover:block group-focus-within:block">
                  <Link href="/program" className="block px-4 py-2 hover:bg-primary-50 transition-colors">
                    Program
                  </Link>
                  <a
                    href="https://acns2027.isg.rhul.ac.uk/info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-primary-50 transition-colors"
                  >
                    Venue
                  </a>
                </div>
              </div>
            */}
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative -left-8 px-2 py-1.5 rounded hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative -left-8 px-2 py-1.5 rounded hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://easychair.org/conferences/?conf=cimss2027"
              target="_blank"
              rel="noopener noreferrer"
              className="relative left-8 ml-auto rounded-md border border-amber-300 bg-amber-400 px-4 py-1.5 font-semibold text-slate-950 shadow-sm transition-colors hover:bg-amber-300"
            >
              Submit ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto p-2 rounded hover:bg-white/10 md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block px-4 py-2 rounded hover:bg-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {/*
              Mobile Program menu (hidden until the program is confirmed)

              <div className="px-4 py-2 font-medium">Program</div>
              <Link
                href="/program"
                className="block px-8 py-2 rounded hover:bg-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Program
              </Link>
              <a
                href="https://acns2027.isg.rhul.ac.uk/info/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-8 py-2 rounded hover:bg-primary-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Venue
              </a>
            */}
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://easychair.org/conferences/?conf=cimss2027"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-md border border-amber-300 bg-amber-400 px-4 py-2 font-semibold text-slate-950 shadow-sm transition-colors hover:bg-amber-300"
              onClick={() => setIsOpen(false)}
            >
              Submit ↗
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

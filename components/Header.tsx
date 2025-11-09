'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl font-light tracking-wide text-gray-900">CreateX</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/#services" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
              {t('nav.services')}
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#FF6B35] text-white text-sm font-medium hover:bg-[#E55A2B] transition-colors"
            >
              {t('nav.bookNow')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/#services"
                className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#FF6B35] text-white text-sm font-medium hover:bg-[#E55A2B] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.bookNow')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


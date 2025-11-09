'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import UserMenu from './UserMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-900">CreateX</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors">
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
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <LanguageSwitcher />
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#FF6B35] transition-colors"
                >
                  {t('auth.login')}
                </Link>
                <Link
                  href="/register"
                  className="px-4 lg:px-6 py-2 bg-[#FF6B35] text-white text-sm font-medium hover:bg-[#E55A2B] transition-colors rounded-sm"
                >
                  {t('auth.register')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-[#FF6B35] transition-colors py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-700 hover:text-[#FF6B35] transition-colors py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-[#FF6B35] transition-colors py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-700 hover:text-[#FF6B35] transition-colors py-2 px-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="pt-2 pb-2 px-2">
                <LanguageSwitcher />
              </div>
              {user ? (
                <>
                  <div className="px-2 py-3 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-lg font-semibold">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors rounded-md"
                    >
                      {t('auth.logout')}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-6 py-3 bg-white border border-[#FF6B35] text-[#FF6B35] text-base font-medium hover:bg-orange-50 transition-colors text-center rounded-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('auth.login')}
                  </Link>
                  <Link
                    href="/register"
                    className="px-6 py-3 bg-[#FF6B35] text-white text-base font-medium hover:bg-[#E55A2B] transition-colors text-center rounded-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('auth.register')}
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


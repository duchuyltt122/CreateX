'use client';

import { useState } from 'react';
import Link from 'next/link';
import WorkshopCard from '@/components/WorkshopCard';
import { workshops, featuredWorkshops, categories, categoryTranslations } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight whitespace-pre-line">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              {t('hero.subtitle')}
            </p>
            <Link
              href="/#all-workshops"
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#FF6B35] text-white text-base sm:text-lg font-medium hover:bg-[#E55A2B] transition-colors rounded-sm"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges/Programs Section */}
      <section id="challenges" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 px-4">{t('challenges.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">{t('challenges.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Challenge 1 */}
            <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 rounded-sm">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                  alt="Art Challenge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">{t('challenges.program1.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {t('challenges.program1.description')}
                </p>
                <div className="text-[#FF6B35] font-medium text-sm sm:text-base">{t('challenges.program1.duration')}</div>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 rounded-sm">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
                  alt="Artisan Program"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">{t('challenges.program2.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {t('challenges.program2.description')}
                </p>
                <div className="text-[#FF6B35] font-medium text-sm sm:text-base">{t('challenges.program2.duration')}</div>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 rounded-sm">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80"
                  alt="Weekend Workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">{t('challenges.program3.title')}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  {t('challenges.program3.description')}
                </p>
                <div className="text-[#FF6B35] font-medium text-sm sm:text-base">{t('challenges.program3.duration')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={t('search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-5 py-2.5 sm:py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent text-sm sm:text-base"
                />
                <svg
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent bg-white text-sm sm:text-base"
              >
                <option value="all">{t('search.allCategories')}</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {categoryTranslations[category]?.[language] || category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Workshops Section */}
      <section id="all-workshops" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 px-4">{t('workshops.title')}</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">{t('workshops.subtitle')}</p>
          </div>

          {/* Filtered Workshops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {workshops
              .filter(workshop => {
                const matchesSearch =
                  workshop.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                  workshop.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                  workshop.location[language].toLowerCase().includes(searchQuery.toLowerCase());

                const matchesCategory = selectedCategory === 'all' || workshop.category === selectedCategory;

                return matchesSearch && matchesCategory;
              })
              .map(workshop => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))
            }
          </div>

          {/* No Results Message */}
          {workshops.filter(workshop => {
            const matchesSearch =
              workshop.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
              workshop.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
              workshop.location[language].toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === 'all' || workshop.category === selectedCategory;

            return matchesSearch && matchesCategory;
          }).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('search.noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-[#FF6B35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">{t('stats.workshops')}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2">100+</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">{t('stats.artisans')}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2">10,000+</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">{t('stats.students')}</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2">50+</div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">{t('stats.locations')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


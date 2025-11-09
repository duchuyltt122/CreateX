'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF6B35]/10 to-[#004E89]/10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80"
                alt={t('about.imageCaption')}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.description2')}
              </p>
              <Link
                href="/services"
                className="inline-block px-8 py-3 bg-[#FF6B35] text-white font-medium hover:bg-[#E55A2B] transition-colors"
              >
                {t('about.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              {t('about.valuesTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Authenticity */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('about.authenticityTitle')}
              </h3>
              <p className="text-gray-600">
                {t('about.authenticityDesc')}
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#004E89]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#004E89]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('about.communityTitle')}
              </h3>
              <p className="text-gray-600">
                {t('about.communityDesc')}
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('about.qualityTitle')}
              </h3>
              <p className="text-gray-600">
                {t('about.qualityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#004E89]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">{t('stats.workshops')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">{t('stats.artisans')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">{t('stats.students')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">{t('stats.locations')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              {t('about.storyTitle')}
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>{t('about.story1')}</p>
            <p>{t('about.story2')}</p>
            <p>{t('about.story3')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B35] to-[#E55A2B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            {t('about.ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('about.ctaSubtitle')}
          </p>
          <Link
            href="/#all-workshops"
            className="inline-block px-10 py-4 bg-white text-[#FF6B35] text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {t('about.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
}


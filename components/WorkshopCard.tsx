'use client';

import Link from 'next/link';
import { Workshop } from '@/lib/data';
import { useLanguage } from '@/contexts/LanguageContext';

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const { t, language } = useLanguage();
  return (
    <Link href={`/workshop/${workshop.id}`}>
      <div className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full flex flex-col">
        {/* Workshop Image */}
        <div className="h-48 sm:h-52 md:h-56 bg-gray-200 overflow-hidden">
          <img
            src={workshop.image}
            alt={workshop.title[language]}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3 line-clamp-2">
            {workshop.title[language]}
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed flex-1">
            {workshop.description[language]}
          </p>

          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="text-xs sm:text-sm text-gray-500">
              <span>{workshop.duration} {t('workshop.hours')}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs sm:text-sm text-gray-600">{workshop.rating}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-3 sm:pt-4 flex items-center justify-between">
            <div>
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
                {workshop.price.toLocaleString('vi-VN')}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 ml-1">₫</span>
            </div>
            <div className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-[#FF6B35] text-white text-xs sm:text-sm font-medium hover:bg-[#E55A2B] transition-colors rounded-sm">
              {t('workshop.book')}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}


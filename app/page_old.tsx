'use client';

import Link from 'next/link';
import WorkshopCard from '@/components/WorkshopCard';
import { workshops, featuredWorkshops } from '@/lib/data';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Khám Phá Nghệ Thuật<br />Truyền Thống Việt Nam
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trải nghiệm các workshop độc đáo cùng nghệ nhân lành nghề
            </p>
            <Link
              href="/#services"
              className="inline-block px-10 py-4 bg-[#FF6B35] text-white text-lg font-medium hover:bg-[#E55A2B] transition-colors"
            >
              Khám Phá Ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by Location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <svg
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Workshops Carousel */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.filter(w => w.featured).slice(0, 3).map((workshop) => (
              <div key={workshop.id} className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg h-64 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏮</div>
                    <h3 className="text-xl font-bold px-4">{workshop.title}</h3>
                    <button className="mt-4 px-6 py-2 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Workshops */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Workshop</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No workshops found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Crafts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Pottery', icon: '🏺', color: 'from-blue-400 to-blue-600' },
              { name: 'Seed Envelope', icon: '✉️', color: 'from-green-400 to-green-600' },
              { name: 'Painting', icon: '🎨', color: 'from-purple-400 to-purple-600' },
              { name: 'Lantern Making', icon: '🏮', color: 'from-orange-400 to-orange-600' },
              { name: 'Silk Embroidery', icon: '🧵', color: 'from-pink-400 to-pink-600' },
            ].map((craft) => (
              <div
                key={craft.name}
                className={`bg-gradient-to-br ${craft.color} rounded-lg p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-2">{craft.icon}</div>
                <h3 className="font-semibold">{craft.name}</h3>
                <p className="text-sm mt-1 opacity-90">Good 60-30min</p>
                <button className="mt-3 px-4 py-1 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

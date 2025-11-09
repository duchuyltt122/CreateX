export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CreateX</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people with traditional Vietnamese crafts and master artisans
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg mb-4">
            CreateX is dedicated to preserving and promoting traditional Vietnamese crafts by 
            connecting enthusiasts with skilled artisans. We believe in the power of hands-on 
            learning and cultural exchange.
          </p>
          <p className="text-gray-700 text-lg">
            Through our platform, we make it easy for anyone to discover, book, and participate 
            in authentic workshop experiences led by master craftspeople across Vietnam.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h3>
            <p className="text-gray-600">
              We work only with genuine artisans who have mastered their craft through years of dedication.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Building connections between learners and artisans to preserve cultural heritage.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">
              Every workshop is carefully curated to ensure an exceptional learning experience.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg p-8 text-white mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Workshops</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm">Artisans</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-sm">Happy Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm">Locations</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-gray-700 text-lg mb-4">
            CreateX was founded in 2020 with a simple vision: to make traditional Vietnamese 
            crafts accessible to everyone. What started as a small initiative to connect a 
            handful of artisans with eager learners has grown into Vietnam's leading workshop 
            booking platform.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Today, we partner with master artisans across the country, from the lantern makers 
            of Hoi An to the pottery masters of Bat Trang, offering unique opportunities to 
            learn time-honored techniques in authentic settings.
          </p>
          <p className="text-gray-700 text-lg">
            Join us in celebrating and preserving Vietnam's rich cultural heritage, one workshop 
            at a time.
          </p>
        </div>
      </div>
    </div>
  );
}


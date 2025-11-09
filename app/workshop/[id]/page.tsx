'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { getWorkshopById } from '@/lib/data';
import Link from 'next/link';

export default function WorkshopDetail() {
  const params = useParams();
  const workshop = getWorkshopById(params.id as string);
  
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activeTab, setActiveTab] = useState<'about' | 'artisan' | 'reviews'>('about');

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Workshop not found</h1>
          <Link href="/" className="text-orange-500 hover:text-orange-600">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }
    alert(`Booking confirmed for ${workshop.title} on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{workshop.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg h-96 mb-6 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">🏮</div>
                <h2 className="text-2xl font-bold">{workshop.title}</h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`px-6 py-4 font-medium ${
                      activeTab === 'about'
                        ? 'border-b-2 border-orange-500 text-orange-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    About the Workshop
                  </button>
                  <button
                    onClick={() => setActiveTab('artisan')}
                    className={`px-6 py-4 font-medium ${
                      activeTab === 'artisan'
                        ? 'border-b-2 border-orange-500 text-orange-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Meet the Artisan
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-6 py-4 font-medium ${
                      activeTab === 'reviews'
                        ? 'border-b-2 border-orange-500 text-orange-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Reviews ({workshop.reviewCount})
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'about' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">About the Workshop</h3>
                    <p className="text-gray-700 mb-4">{workshop.description}</p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Duration: {workshop.duration} hours</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{workshop.location}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'artisan' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Meet the Artisan</h3>
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
                        👤
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{workshop.artisan.name}</h4>
                        <p className="text-gray-600 mt-2">{workshop.artisan.bio}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Reviews ({workshop.rating})</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">Example use rechersiur ptisint</p>
                        <p className="text-sm text-gray-500 mt-1">- Anonymous User</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Booking Panel</h3>
              
              <div className="mb-4">
                <p className="text-3xl font-bold text-orange-500">
                  Price: {workshop.price.toLocaleString('vi-VN')} VND
                </p>
                <p className="text-gray-600">Duration: {workshop.duration} hours</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a date</option>
                    {workshop.availableDates.map((date) => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <div className="space-y-2">
                    {workshop.availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                          selectedTime === time
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                >
                  Book Now
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(workshop.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {workshop.rating} ({workshop.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


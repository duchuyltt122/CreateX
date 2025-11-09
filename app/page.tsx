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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-lg text-gray-600">Trải nghiệm các workshop độc đáo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/#all-workshops"
              className="inline-block px-8 py-3 border-2 border-[#FF6B35] text-[#FF6B35] font-medium hover:bg-[#FF6B35] hover:text-white transition-colors"
            >
              Xem Tất Cả Workshop
            </Link>
          </div>
        </div>
      </section>

      {/* All Workshops Section */}
      <section id="all-workshops" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Tất Cả Workshop</h2>
            <p className="text-lg text-gray-600">Khám phá đa dạng các lớp học nghệ thuật truyền thống</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">Về CreateX</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                CreateX là nền tảng kết nối người học với các nghệ nhân truyền thống Việt Nam. 
                Chúng tôi mang đến những trải nghiệm workshop độc đáo, giúp bạn khám phá và 
                học hỏi các nghệ thuật truyền thống từ những bậc thầy lành nghề.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Với hơn 100 nghệ nhân và 500+ workshop khác nhau, CreateX cam kết bảo tồn 
                và phát triển các giá trị văn hóa truyền thống Việt Nam.
              </p>
              <Link 
                href="/about"
                className="inline-block px-8 py-3 bg-[#FF6B35] text-white font-medium hover:bg-[#E55A2B] transition-colors"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🎨</div>
                <p className="text-gray-600">Nghệ thuật truyền thống</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#FF6B35] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-light mb-2">500+</div>
              <div className="text-lg opacity-90">Workshop</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-2">100+</div>
              <div className="text-lg opacity-90">Nghệ Nhân</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-2">10,000+</div>
              <div className="text-lg opacity-90">Học Viên</div>
            </div>
            <div>
              <div className="text-5xl font-light mb-2">50+</div>
              <div className="text-lg opacity-90">Địa Điểm</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


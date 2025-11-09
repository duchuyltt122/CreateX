'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Header
    'nav.home': 'Trang Chủ',
    'nav.services': 'Dịch Vụ',
    'nav.about': 'Về Chúng Tôi',
    'nav.contact': 'Liên Hệ',
    'nav.bookNow': 'Đặt Ngay',
    
    // Hero
    'hero.title': 'KHÁM PHÁ Nghệ Thuật\nTruyền Thống Việt Nam',
    'hero.subtitle': 'Trải nghiệm các workshop độc đáo cùng nghệ nhân lành nghề',
    'hero.cta': 'Khám Phá Ngay',
    
    // Challenges/Programs
    'challenges.title': 'Chương Trình',
    'challenges.subtitle': 'Tham gia các chương trình đặc biệt của chúng tôi để nâng cao kỹ năng và khám phá nghệ thuật truyền thống',
    'challenges.program1.title': 'Thử Thách Nghệ Thuật',
    'challenges.program1.description': 'Tham gia thử thách 30 ngày để học và thực hành các kỹ thuật nghệ thuật truyền thống. Hoàn thành để nhận chứng chỉ.',
    'challenges.program1.duration': '30 ngày',
    'challenges.program2.title': 'Chương Trình Nghệ Nhân',
    'challenges.program2.description': 'Chương trình đào tạo chuyên sâu 3 tháng với nghệ nhân để trở thành chuyên gia trong lĩnh vực bạn chọn.',
    'challenges.program2.duration': '3 tháng',
    'challenges.program3.title': 'Workshop Cuối Tuần',
    'challenges.program3.description': 'Các workshop ngắn hạn vào cuối tuần để trải nghiệm nhanh các nghệ thuật truyền thống khác nhau.',
    'challenges.program3.duration': '2-3 giờ',

    // Services
    'services.title': 'Dịch Vụ Của Chúng Tôi',
    'services.subtitle': 'Trải nghiệm các workshop độc đáo',
    'services.viewAll': 'Xem Tất Cả Workshop',
    'services.featured': 'Workshop Nổi Bật',
    'services.featuredSubtitle': 'Những workshop được yêu thích nhất',
    'services.whyChooseUs': 'Tại Sao Chọn CreateX?',
    'services.expertArtisans': 'Nghệ Nhân Chuyên Nghiệp',
    'services.expertArtisansDesc': 'Học từ những nghệ nhân lành nghề với nhiều năm kinh nghiệm',
    'services.authenticExperience': 'Trải Nghiệm Chính Thống',
    'services.authenticExperienceDesc': 'Khám phá nghệ thuật truyền thống Việt Nam một cách đích thực',
    'services.smallGroups': 'Nhóm Nhỏ',
    'services.smallGroupsDesc': 'Lớp học nhỏ để đảm bảo chất lượng và sự chú ý cá nhân',
    'services.ctaTitle': 'Sẵn Sàng Bắt Đầu Hành Trình Nghệ Thuật?',
    'services.ctaSubtitle': 'Đặt workshop ngay hôm nay và khám phá tài năng của bạn',
    'services.ctaButton': 'Khám Phá Workshop',
    
    // All Workshops
    'workshops.title': 'Tất Cả Workshop',
    'workshops.subtitle': 'Khám phá đa dạng các lớp học nghệ thuật truyền thống',

    // Search
    'search.placeholder': 'Tìm kiếm workshop theo tên, mô tả, địa điểm...',
    'search.allCategories': 'Tất cả danh mục',
    'search.noResults': 'Không tìm thấy workshop nào phù hợp',

    // About
    'about.title': 'Về CreateX',
    'about.heroSubtitle': 'Kết nối người học với các nghệ nhân truyền thống Việt Nam',
    'about.description1': 'CreateX là nền tảng kết nối người học với các nghệ nhân truyền thống Việt Nam. Chúng tôi mang đến những trải nghiệm workshop độc đáo, giúp bạn khám phá và học hỏi các nghệ thuật truyền thống từ những bậc thầy lành nghề.',
    'about.description2': 'Với hơn 100 nghệ nhân và 500+ workshop khác nhau, CreateX cam kết bảo tồn và phát triển các giá trị văn hóa truyền thống Việt Nam.',
    'about.learnMore': 'Khám Phá Dịch Vụ',
    'about.imageCaption': 'Nghệ thuật truyền thống',
    'about.valuesTitle': 'Giá Trị Cốt Lõi',
    'about.valuesSubtitle': 'Những gì chúng tôi tin tưởng và cam kết',
    'about.authenticityTitle': 'Chính Thống',
    'about.authenticityDesc': 'Chỉ làm việc với những nghệ nhân chính gốc đã thành thạo nghề qua nhiều năm cống hiến',
    'about.communityTitle': 'Cộng Đồng',
    'about.communityDesc': 'Xây dựng kết nối giữa người học và nghệ nhân để bảo tồn di sản văn hóa',
    'about.qualityTitle': 'Chất Lượng',
    'about.qualityDesc': 'Mỗi workshop được tuyển chọn kỹ lưỡng để đảm bảo trải nghiệm học tập xuất sắc',
    'about.storyTitle': 'Câu Chuyện Của Chúng Tôi',
    'about.story1': 'CreateX được thành lập vào năm 2025 với tầm nhìn đơn giản: làm cho các nghề thủ công truyền thống Việt Nam trở nên dễ tiếp cận với mọi người. Những gì bắt đầu như một sáng kiến nhỏ để kết nối một số nghệ nhân với những người học háo hức đã phát triển thành nền tảng đặt workshop hàng đầu Việt Nam.',
    'about.story2': 'Ngày nay, chúng tôi hợp tác với các nghệ nhân bậc thầy trên khắp đất nước, từ những người làm đèn lồng ở Hội An đến những bậc thầy gốm ở Bát Tràng, mang đến cơ hội độc đáo để học các kỹ thuật lâu đời trong môi trường chính thống.',
    'about.story3': 'Hãy cùng chúng tôi tôn vinh và bảo tồn di sản văn hóa phong phú của Việt Nam, từng workshop một.',
    'about.ctaTitle': 'Bắt Đầu Hành Trình Của Bạn',
    'about.ctaSubtitle': 'Khám phá hơn 500 workshop và tìm niềm đam mê của bạn',
    'about.ctaButton': 'Xem Tất Cả Workshop',
    
    // Stats
    'stats.workshops': 'Workshop',
    'stats.artisans': 'Nghệ Nhân',
    'stats.students': 'Học Viên',
    'stats.locations': 'Địa Điểm',
    
    // Workshop Card
    'workshop.hours': 'giờ',
    'workshop.book': 'Đặt Ngay',

    // Booking Form
    'booking.title': 'Đặt Lịch Workshop',
    'booking.customerInfo': 'Thông Tin Khách Hàng',
    'booking.fullName': 'Họ và Tên',
    'booking.phone': 'Số Điện Thoại',
    'booking.numberOfPeople': 'Số Người Tham Gia',
    'booking.specialRequests': 'Yêu Cầu Đặc Biệt',
    'booking.total': 'Tổng Cộng',
    'booking.cancel': 'Hủy',
    'booking.confirm': 'Xác Nhận Đặt Lịch',
    'booking.submitting': 'Đang Xử Lý...',

    // Footer
    'footer.description': 'Nền tảng kết nối người học với các nghệ nhân truyền thống Việt Nam',
    'footer.links': 'Liên Kết',
    'footer.contact': 'Liên Hệ',
    'footer.copyright': 'Tất cả quyền được bảo lưu.',
    
    // Contact Page
    'contact.title': 'Liên Hệ Với Chúng Tôi',
    'contact.subtitle': 'Gửi tin nhắn để được tư vấn và hỗ trợ',
    'contact.firstName': 'Tên',
    'contact.lastName': 'Họ',
    'contact.email': 'Email',
    'contact.message': 'Tin nhắn',
    'contact.send': 'Gửi Tin Nhắn',
    'contact.info': 'Thông Tin Liên Hệ',
    'contact.hours': 'Giờ Làm Việc',
    'contact.weekdays': 'Thứ 2 - Thứ 6: 9:00 - 18:00',
    'contact.weekend': 'Thứ 7 - CN: 10:00 - 17:00',
    'contact.social': 'Mạng Xã Hội',
    'contact.success': 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.',
    
    // About Page
    'aboutPage.title': 'Về CreateX',
    'aboutPage.mission': 'Sứ Mệnh',
    'aboutPage.missionText': 'Bảo tồn và phát triển các nghệ thuật truyền thống Việt Nam thông qua việc kết nối người học với các nghệ nhân lành nghề.',
    'aboutPage.values': 'Giá Trị Cốt Lõi',
    'aboutPage.authenticity': 'Chân Thực',
    'aboutPage.authenticityText': 'Cam kết mang đến trải nghiệm học tập chân thực với các nghệ nhân truyền thống.',
    'aboutPage.community': 'Cộng Đồng',
    'aboutPage.communityText': 'Xây dựng cộng đồng yêu thích và gìn giữ văn hóa truyền thống.',
    'aboutPage.quality': 'Chất Lượng',
    'aboutPage.qualityText': 'Đảm bảo chất lượng cao trong mọi workshop và dịch vụ.',
    'aboutPage.story': 'Câu Chuyện Của Chúng Tôi',
    'aboutPage.storyText': 'CreateX được thành lập với mục tiêu bảo tồn và phát triển các nghệ thuật truyền thống Việt Nam. Chúng tôi tin rằng mỗi nghệ thuật đều mang trong mình câu chuyện và giá trị văn hóa độc đáo cần được truyền tải cho thế hệ sau.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero
    'hero.title': 'Discover Vietnamese\nTraditional Arts',
    'hero.subtitle': 'Experience unique workshops with skilled artisans',
    'hero.cta': 'EXPLORE NOW',
    
    // Challenges/Programs
    'challenges.title': 'Programs',
    'challenges.subtitle': 'Join our special programs to enhance your skills and discover traditional arts',
    'challenges.program1.title': 'Art Challenge',
    'challenges.program1.description': 'Join the 30-day challenge to learn and practice traditional art techniques. Complete to receive a certificate.',
    'challenges.program1.duration': '30 days',
    'challenges.program2.title': 'Artisan Program',
    'challenges.program2.description': 'Intensive 3-month training program with artisans to become an expert in your chosen field.',
    'challenges.program2.duration': '3 months',
    'challenges.program3.title': 'Weekend Workshop',
    'challenges.program3.description': 'Short weekend workshops to quickly experience different traditional arts.',
    'challenges.program3.duration': '2-3 hours',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Experience unique workshops',
    'services.viewAll': 'View All Workshops',
    'services.featured': 'Featured Workshops',
    'services.featuredSubtitle': 'Most popular workshops',
    'services.whyChooseUs': 'Why Choose CreateX?',
    'services.expertArtisans': 'Expert Artisans',
    'services.expertArtisansDesc': 'Learn from skilled artisans with years of experience',
    'services.authenticExperience': 'Authentic Experience',
    'services.authenticExperienceDesc': 'Discover Vietnamese traditional arts in an authentic way',
    'services.smallGroups': 'Small Groups',
    'services.smallGroupsDesc': 'Small classes to ensure quality and personal attention',
    'services.ctaTitle': 'Ready to Start Your Art Journey?',
    'services.ctaSubtitle': 'Book a workshop today and discover your talent',
    'services.ctaButton': 'Explore Workshops',

    // All Workshops
    'workshops.title': 'All Workshops',
    'workshops.subtitle': 'Explore diverse traditional art classes',

    // Search
    'search.placeholder': 'Search workshops by name, description, location...',
    'search.allCategories': 'All categories',
    'search.noResults': 'No workshops found',

    // About
    'about.title': 'About CreateX',
    'about.heroSubtitle': 'Connecting people with traditional Vietnamese artisans',
    'about.description1': 'CreateX is a platform connecting learners with traditional Vietnamese artisans. We bring unique workshop experiences, helping you discover and learn traditional arts from master craftsmen.',
    'about.description2': 'With over 100 artisans and 500+ different workshops, CreateX is committed to preserving and developing traditional Vietnamese cultural values.',
    'about.learnMore': 'Explore Services',
    'about.imageCaption': 'Traditional arts',
    'about.valuesTitle': 'Core Values',
    'about.valuesSubtitle': 'What we believe in and commit to',
    'about.authenticityTitle': 'Authenticity',
    'about.authenticityDesc': 'We work only with genuine artisans who have mastered their craft through years of dedication',
    'about.communityTitle': 'Community',
    'about.communityDesc': 'Building connections between learners and artisans to preserve cultural heritage',
    'about.qualityTitle': 'Quality',
    'about.qualityDesc': 'Every workshop is carefully curated to ensure an exceptional learning experience',
    'about.storyTitle': 'Our Story',
    'about.story1': 'CreateX was founded in 2020 with a simple vision: to make traditional Vietnamese crafts accessible to everyone. What started as a small initiative to connect a handful of artisans with eager learners has grown into Vietnam\'s leading workshop booking platform.',
    'about.story2': 'Today, we partner with master artisans across the country, from the lantern makers of Hoi An to the pottery masters of Bat Trang, offering unique opportunities to learn time-honored techniques in authentic settings.',
    'about.story3': 'Join us in celebrating and preserving Vietnam\'s rich cultural heritage, one workshop at a time.',
    'about.ctaTitle': 'Start Your Journey',
    'about.ctaSubtitle': 'Explore over 500 workshops and find your passion',
    'about.ctaButton': 'View All Workshops',
    
    // Stats
    'stats.workshops': 'Workshops',
    'stats.artisans': 'Artisans',
    'stats.students': 'Students',
    'stats.locations': 'Locations',
    
    // Workshop Card
    'workshop.hours': 'hours',
    'workshop.book': 'Book Now',

    // Booking Form
    'booking.title': 'Book Workshop',
    'booking.customerInfo': 'Customer Information',
    'booking.fullName': 'Full Name',
    'booking.phone': 'Phone Number',
    'booking.numberOfPeople': 'Number of People',
    'booking.specialRequests': 'Special Requests',
    'booking.total': 'Total',
    'booking.cancel': 'Cancel',
    'booking.confirm': 'Confirm Booking',
    'booking.submitting': 'Processing...',

    // Footer
    'footer.description': 'Platform connecting learners with traditional Vietnamese artisans',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Send us a message for consultation and support',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    'contact.hours': 'Business Hours',
    'contact.weekdays': 'Mon - Fri: 9:00 AM - 6:00 PM',
    'contact.weekend': 'Sat - Sun: 10:00 AM - 5:00 PM',
    'contact.social': 'Social Media',
    'contact.success': 'Thank you for contacting us! We will respond as soon as possible.',
    
    // About Page
    'aboutPage.title': 'About CreateX',
    'aboutPage.mission': 'Our Mission',
    'aboutPage.missionText': 'Preserve and develop Vietnamese traditional arts by connecting learners with skilled artisans.',
    'aboutPage.values': 'Core Values',
    'aboutPage.authenticity': 'Authenticity',
    'aboutPage.authenticityText': 'Committed to providing authentic learning experiences with traditional artisans.',
    'aboutPage.community': 'Community',
    'aboutPage.communityText': 'Building a community that loves and preserves traditional culture.',
    'aboutPage.quality': 'Quality',
    'aboutPage.qualityText': 'Ensuring high quality in all workshops and services.',
    'aboutPage.story': 'Our Story',
    'aboutPage.storyText': 'CreateX was founded with the goal of preserving and developing Vietnamese traditional arts. We believe that each art form carries unique stories and cultural values that need to be passed on to future generations.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'vi' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


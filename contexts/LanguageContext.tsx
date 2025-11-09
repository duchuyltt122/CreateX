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
    'hero.title': 'Khám Phá Nghệ Thuật\nTruyền Thống Việt Nam',
    'hero.subtitle': 'Trải nghiệm các workshop độc đáo cùng nghệ nhân lành nghề',
    'hero.cta': 'Khám Phá Ngay',
    
    // Services
    'services.title': 'Dịch Vụ Của Chúng Tôi',
    'services.subtitle': 'Trải nghiệm các workshop độc đáo',
    'services.viewAll': 'Xem Tất Cả Workshop',
    
    // All Workshops
    'workshops.title': 'Tất Cả Workshop',
    'workshops.subtitle': 'Khám phá đa dạng các lớp học nghệ thuật truyền thống',
    
    // About
    'about.title': 'Về CreateX',
    'about.description1': 'CreateX là nền tảng kết nối người học với các nghệ nhân truyền thống Việt Nam. Chúng tôi mang đến những trải nghiệm workshop độc đáo, giúp bạn khám phá và học hỏi các nghệ thuật truyền thống từ những bậc thầy lành nghề.',
    'about.description2': 'Với hơn 100 nghệ nhân và 500+ workshop khác nhau, CreateX cam kết bảo tồn và phát triển các giá trị văn hóa truyền thống Việt Nam.',
    'about.learnMore': 'Tìm Hiểu Thêm',
    'about.imageCaption': 'Nghệ thuật truyền thống',
    
    // Stats
    'stats.workshops': 'Workshop',
    'stats.artisans': 'Nghệ Nhân',
    'stats.students': 'Học Viên',
    'stats.locations': 'Địa Điểm',
    
    // Workshop Card
    'workshop.hours': 'giờ',
    'workshop.book': 'Đặt Ngay',
    
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
    'hero.cta': 'Explore Now',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Experience unique workshops',
    'services.viewAll': 'View All Workshops',
    
    // All Workshops
    'workshops.title': 'All Workshops',
    'workshops.subtitle': 'Explore diverse traditional art classes',
    
    // About
    'about.title': 'About CreateX',
    'about.description1': 'CreateX is a platform connecting learners with traditional Vietnamese artisans. We bring unique workshop experiences, helping you discover and learn traditional arts from master craftsmen.',
    'about.description2': 'With over 100 artisans and 500+ different workshops, CreateX is committed to preserving and developing traditional Vietnamese cultural values.',
    'about.learnMore': 'Learn More',
    'about.imageCaption': 'Traditional arts',
    
    // Stats
    'stats.workshops': 'Workshops',
    'stats.artisans': 'Artisans',
    'stats.students': 'Students',
    'stats.locations': 'Locations',
    
    // Workshop Card
    'workshop.hours': 'hours',
    'workshop.book': 'Book Now',
    
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


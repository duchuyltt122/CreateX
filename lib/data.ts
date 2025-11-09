// Workshop data types
export interface Workshop {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  price: number;
  duration: number;
  location: {
    vi: string;
    en: string;
  };
  category: string;
  image: string;
  images: string[];
  artisan: {
    name: string;
    bio: {
      vi: string;
      en: string;
    };
    avatar: string;
  };
  rating: number;
  reviewCount: number;
  availableDates: string[];
  availableTimes: string[];
  featured: boolean;
}

// Sample workshop data
export const workshops: Workshop[] = [
  {
    id: '1',
    title: {
      vi: 'Dệt Lụa Hội An',
      en: 'Hoi An Silk Weaving'
    },
    description: {
      vi: 'Trải nghiệm nghệ thuật dệt lụa truyền thống tại Hội An. Tìm hiểu quy trình từ nuôi tằm đến dệt vải. Bạn sẽ được hướng dẫn bởi các nghệ nhân lành nghề và tự tay tạo ra sản phẩm lụa của riêng mình.',
      en: 'Experience the traditional art of silk weaving in Hoi An. Learn the process from silkworm cultivation to fabric weaving. You will be guided by skilled artisans and create your own silk product.'
    },
    price: 500000,
    duration: 3,
    location: {
      vi: 'Hội An, Quảng Nam',
      en: 'Hoi An, Quang Nam'
    },
    category: 'Weaving',
    image: 'https://static.vinwonders.com/2022/03/lang-lua-hoi-an-11.jpg',
    images: [
      'https://static.vinwonders.com/2022/03/lang-lua-hoi-an-11.jpg',
      'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?w=800&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80'
    ],
    artisan: {
      name: 'Võ Thị Lan',
      bio: {
        vi: 'Nghệ nhân dệt lụa đời thứ 5 tại Hội An với hơn 25 năm kinh nghiệm',
        en: '5th generation silk weaving artisan in Hoi An with over 25 years of experience'
      },
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    },
    rating: 4.9,
    reviewCount: 142,
    availableDates: ['2025-11-10', '2025-11-12', '2025-11-15', '2025-11-18'],
    availableTimes: ['9:00 AM', '2:00 PM'],
    featured: true
  },
  {
    id: '2',
    title: {
      vi: 'Gốm Thanh Hà',
      en: 'Thanh Ha Pottery'
    },
    description: {
      vi: 'Khám phá nghệ thuật làm gốm truyền thống Thanh Hà. Tự tay nặn và trang trí sản phẩm gốm của riêng bạn dưới sự hướng dẫn của nghệ nhân. Tìm hiểu về lịch sử và kỹ thuật làm gốm độc đáo của vùng đất này.',
      en: 'Discover the traditional pottery art of Thanh Ha. Hand-mold and decorate your own ceramic product under the guidance of artisans. Learn about the history and unique pottery techniques of this region.'
    },
    price: 50000,
    duration: 2.5,
    location: {
      vi: 'Hội An, Quảng Nam',
      en: 'Hoi An, Quang Nam'
    },
    category: 'Pottery',
    image: 'https://dulichconvoi.com/wp-content/uploads/2023/03/gom-thanh-ha-1.jpg',
    images: [
      'https://dulichconvoi.com/wp-content/uploads/2023/03/gom-thanh-ha-1.jpg',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=80',
      'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=800&q=80'
    ],
    artisan: {
      name: 'Nguyễn Văn Minh',
      bio: {
        vi: 'Nghệ nhân gốm sứ với 18 năm kinh nghiệm tại Thanh Hà',
        en: 'Pottery artisan with 18 years of experience in Thanh Ha'
      },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    },
    rating: 4.8,
    reviewCount: 98,
    availableDates: ['2025-11-11', '2025-11-13', '2025-11-16', '2025-11-19'],
    availableTimes: ['10:00 AM', '2:00 PM'],
    featured: true
  },
  {
    id: '3',
    title: {
      vi: 'Tranh Đông Hồ',
      en: 'Dong Ho Folk Painting'
    },
    description: {
      vi: 'Học vẽ tranh dân gian Đông Hồ với nghệ nhân. Tìm hiểu về lịch sử, ý nghĩa và kỹ thuật vẽ tranh truyền thống. Tạo ra tác phẩm tranh Đông Hồ độc đáo mang đậm bản sắc văn hóa Việt Nam.',
      en: 'Learn to paint Dong Ho folk paintings with artisans. Discover the history, meaning, and traditional painting techniques. Create your own unique Dong Ho painting rich in Vietnamese cultural identity.'
    },
    price: 250000,
    duration: 2,
    location: {
      vi: 'Bắc Ninh',
      en: 'Bac Ninh'
    },
    category: 'Painting',
    image: 'https://mythuatms.com/image/data/HUONG%20LY/MY%20THUAT%20CN/nghe%20thuat%20va%20triet%20ly%20cua%20tranh%20Dong%20Ho/tranh-dong-ho-2.webp',
    images: [
      'https://mythuatms.com/image/data/HUONG%20LY/MY%20THUAT%20CN/nghe%20thuat%20va%20triet%20ly%20cua%20tranh%20Dong%20Ho/tranh-dong-ho-2.webp',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
      'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=800&q=80'
    ],
    artisan: {
      name: 'Nguyễn Đăng Chế',
      bio: {
        vi: 'Nghệ nhân tranh Đông Hồ đời thứ 4, giữ gìn nghề truyền thống',
        en: '4th generation Dong Ho painting artisan, preserving traditional craft'
      },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    },
    rating: 4.7,
    reviewCount: 76,
    availableDates: ['2025-11-10', '2025-11-14', '2025-11-17', '2025-11-20'],
    availableTimes: ['9:00 AM', '1:00 PM'],
    featured: true
  },
  {
    id: '4',
    title: {
      vi: 'Làm Đèn Lồng Hội An',
      en: 'Hoi An Lantern Making'
    },
    description: {
      vi: 'Học cách làm đèn lồng Hội An truyền thống với nghệ nhân lành nghề. Bạn sẽ được hướng dẫn từng bước để tạo ra chiếc đèn lồng độc đáo của riêng mình và mang về nhà.',
      en: 'Learn how to make traditional Hoi An lanterns with skilled artisans. You will be guided step-by-step to create your own unique lantern and take it home.'
    },
    price: 150000,
    duration: 2,
    location: {
      vi: 'Hội An, Quảng Nam',
      en: 'Hoi An, Quang Nam'
    },
    category: 'Lantern Making',
    image: 'https://suoiluong.com.vn/wp-content/uploads/2024/08/lang-nghe-lam-den-long-pho-co-hoi-an.jpg',
    images: [
      'https://suoiluong.com.vn/wp-content/uploads/2024/08/lang-nghe-lam-den-long-pho-co-hoi-an.jpg',
      'https://images.unsplash.com/photo-1583470790878-4a0b42c62cbd?w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80'
    ],
    artisan: {
      name: 'Trần Thị Hoa',
      bio: {
        vi: 'Nghệ nhân làm đèn lồng với hơn 20 năm kinh nghiệm',
        en: 'Lantern making artisan with over 20 years of experience'
      },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
    },
    rating: 4.9,
    reviewCount: 187,
    availableDates: ['2025-11-12', '2025-11-15', '2025-11-18', '2025-11-21'],
    availableTimes: ['2:00 PM', '4:00 PM'],
    featured: false
  },
  {
    id: '5',
    title: {
      vi: 'Nấu Ăn Món Việt',
      en: 'Vietnamese Cooking'
    },
    description: {
      vi: 'Học nấu các món ăn Việt Nam truyền thống với đầu bếp chuyên nghiệp. Khám phá hương vị ẩm thực Việt và bí quyết nấu nướng.',
      en: 'Learn to cook traditional Vietnamese dishes with professional chefs. Discover Vietnamese culinary flavors and cooking secrets.'
    },
    price: 250000,
    duration: 3,
    location: {
      vi: 'Hà Nội',
      en: 'Hanoi'
    },
    category: 'Culinary',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80',
      'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80',
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
    ],
    artisan: {
      name: 'Phạm Thị Mai',
      bio: {
        vi: 'Đầu bếp với 25 năm kinh nghiệm ẩm thực Việt',
        en: 'Chef with 25 years of Vietnamese culinary experience'
      },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
    },
    rating: 4.9,
    reviewCount: 203,
    availableDates: ['2025-11-10', '2025-11-13', '2025-11-16', '2025-11-19'],
    availableTimes: ['9:00 AM', '2:00 PM'],
    featured: false
  },
  {
    id: '6',
    title: {
      vi: 'Thư Pháp Việt Nam',
      en: 'Vietnamese Calligraphy'
    },
    description: {
      vi: 'Khám phá nghệ thuật thư pháp Việt Nam. Học viết chữ Hán và chữ Nôm với nghệ nhân.',
      en: 'Discover the art of Vietnamese calligraphy. Learn to write Chinese characters and Nom script with artisans.'
    },
    price: 100000,
    duration: 2,
    location: {
      vi: 'Huế',
      en: 'Hue'
    },
    category: 'Calligraphy',
    image: 'https://anh.24h.com.vn/upload/news/2013-01-31/1359601491-hot-girl-nhat-19.jpg',
    images: [
      'https://anh.24h.com.vn/upload/news/2013-01-31/1359601491-hot-girl-nhat-19.jpg',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
      'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&q=80',
      'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80'
    ],
    artisan: {
      name: 'Võ Minh Đức',
      bio: {
        vi: 'Nghệ nhân thư pháp với 30 năm kinh nghiệm',
        en: 'Calligraphy artisan with 30 years of experience'
      },
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80'
    },
    rating: 4.8,
    reviewCount: 78,
    availableDates: ['2025-11-11', '2025-11-14', '2025-11-17', '2025-11-20'],
    availableTimes: ['10:00 AM', '3:00 PM'],
    featured: false
  },
  {
    id: '7',
    title: {
      vi: 'Thêu Tay Truyền Thống',
      en: 'Traditional Hand Embroidery'
    },
    description: {
      vi: 'Khám phá nghệ thuật thêu tay Việt Nam với các họa tiết truyền thống. Tạo ra tác phẩm thêu độc đáo của riêng bạn.',
      en: 'Discover Vietnamese hand embroidery art with traditional patterns. Create your own unique embroidered masterpiece.'
    },
    price: 150000,
    duration: 2.5,
    location: {
      vi: 'Huế',
      en: 'Hue'
    },
    category: 'Embroidery',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80'
    ],
    artisan: {
      name: 'Lê Thị Hương',
      bio: {
        vi: 'Chuyên gia thêu tay với 15 năm kinh nghiệm',
        en: 'Hand embroidery expert with 15 years of experience'
      },
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80'
    },
    rating: 4.7,
    reviewCount: 91,
    availableDates: ['2025-11-12', '2025-11-15', '2025-11-18', '2025-11-21'],
    availableTimes: ['9:00 AM', '1:00 PM'],
    featured: false
  },
  {
    id: '8',
    title: {
      vi: 'Sơn Mài Truyền Thống',
      en: 'Traditional Lacquerware'
    },
    description: {
      vi: 'Học nghệ thuật sơn mài Việt Nam. Tạo ra tác phẩm sơn mài độc đáo với kỹ thuật truyền thống.',
      en: 'Learn Vietnamese lacquerware art. Create unique lacquer pieces with traditional techniques.'
    },
    price: 175000,
    duration: 3,
    location: {
      vi: 'Hà Nội',
      en: 'Hanoi'
    },
    category: 'Lacquerware',
    image: 'https://langngheviet.com.vn/stores/news_dataimages/2023/112023/22/09/2520231122094041.jpg?rt=20231122094044',
    images: [
      'https://langngheviet.com.vn/stores/news_dataimages/2023/112023/22/09/2520231122094041.jpg?rt=20231122094044',
      'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
      'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80'
    ],
    artisan: {
      name: 'Đặng Văn Hùng',
      bio: {
        vi: 'Nghệ nhân sơn mài với 20 năm kinh nghiệm',
        en: 'Lacquerware artisan with 20 years of experience'
      },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    },
    rating: 4.8,
    reviewCount: 124,
    availableDates: ['2025-11-13', '2025-11-16', '2025-11-19', '2025-11-22'],
    availableTimes: ['10:00 AM', '2:00 PM'],
    featured: false
  }
];

// Get all unique categories
export const categories = Array.from(new Set(workshops.map(w => w.category)));

// Category translations
export const categoryTranslations: Record<string, { vi: string; en: string }> = {
  'Weaving': { vi: 'Dệt Lụa', en: 'Silk Weaving' },
  'Pottery': { vi: 'Gốm Sứ', en: 'Pottery' },
  'Painting': { vi: 'Hội Họa', en: 'Painting' },
  'Lantern Making': { vi: 'Làm Đèn Lồng', en: 'Lantern Making' },
  'Cooking': { vi: 'Nấu Ăn', en: 'Cooking' },
  'Calligraphy': { vi: 'Thư Pháp', en: 'Calligraphy' },
  'Embroidery': { vi: 'Thêu Tay', en: 'Embroidery' },
  'Lacquerware': { vi: 'Sơn Mài', en: 'Lacquerware' }
};

// Get featured workshops
export const featuredWorkshops = workshops.filter(w => w.featured);

// Get workshop by ID
export function getWorkshopById(id: string): Workshop | undefined {
  return workshops.find(w => w.id === id);
}

// Filter workshops by category
export function getWorkshopsByCategory(category: string): Workshop[] {
  return workshops.filter(w => w.category === category);
}


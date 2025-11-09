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
    price: 700000,
    duration: 3,
    location: {
      vi: 'Hội An, Quảng Nam',
      en: 'Hoi An, Quang Nam'
    },
    category: 'Weaving',
    image: '/workshops/weaving.jpg',
    artisan: {
      name: 'Võ Thị Lan',
      bio: {
        vi: 'Nghệ nhân dệt lụa đời thứ 5 tại Hội An với hơn 25 năm kinh nghiệm',
        en: '5th generation silk weaving artisan in Hoi An with over 25 years of experience'
      },
      avatar: '/artisans/vo-thi-lan.jpg'
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
      vi: 'Gốm Đà Nẵng',
      en: 'Da Nang Pottery'
    },
    description: {
      vi: 'Khám phá nghệ thuật làm gốm truyền thống Đà Nẵng. Tự tay nặn và trang trí sản phẩm gốm của riêng bạn dưới sự hướng dẫn của nghệ nhân. Tìm hiểu về lịch sử và kỹ thuật làm gốm độc đáo của vùng đất này.',
      en: 'Discover the traditional pottery art of Da Nang. Hand-mold and decorate your own ceramic product under the guidance of artisans. Learn about the history and unique pottery techniques of this region.'
    },
    price: 500000,
    duration: 2.5,
    location: {
      vi: 'Đà Nẵng',
      en: 'Da Nang'
    },
    category: 'Pottery',
    image: '/workshops/pottery.jpg',
    artisan: {
      name: 'Nguyễn Văn Minh',
      bio: {
        vi: 'Nghệ nhân gốm sứ với 18 năm kinh nghiệm tại Đà Nẵng',
        en: 'Pottery artisan with 18 years of experience in Da Nang'
      },
      avatar: '/artisans/nguyen-van-minh.jpg'
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
    price: 450000,
    duration: 2,
    location: {
      vi: 'Bắc Ninh',
      en: 'Bac Ninh'
    },
    category: 'Painting',
    image: '/workshops/painting.jpg',
    artisan: {
      name: 'Nguyễn Đăng Chế',
      bio: {
        vi: 'Nghệ nhân tranh Đông Hồ đời thứ 4, giữ gìn nghề truyền thống',
        en: '4th generation Dong Ho painting artisan, preserving traditional craft'
      },
      avatar: '/artisans/nguyen-dang-che.jpg'
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
    price: 400000,
    duration: 2,
    location: {
      vi: 'Hội An, Quảng Nam',
      en: 'Hoi An, Quang Nam'
    },
    category: 'Lantern Making',
    image: '/workshops/lantern-making.jpg',
    artisan: {
      name: 'Trần Thị Hoa',
      bio: {
        vi: 'Nghệ nhân làm đèn lồng với hơn 20 năm kinh nghiệm',
        en: 'Lantern making artisan with over 20 years of experience'
      },
      avatar: '/artisans/tran-thi-hoa.jpg'
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
    price: 600000,
    duration: 3,
    location: {
      vi: 'Hà Nội',
      en: 'Hanoi'
    },
    category: 'Culinary',
    image: '/workshops/cooking.jpg',
    artisan: {
      name: 'Phạm Thị Mai',
      bio: {
        vi: 'Đầu bếp với 25 năm kinh nghiệm ẩm thực Việt',
        en: 'Chef with 25 years of Vietnamese culinary experience'
      },
      avatar: '/artisans/pham-thu-ha.jpg'
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
    price: 350000,
    duration: 2,
    location: {
      vi: 'Huế',
      en: 'Hue'
    },
    category: 'Calligraphy',
    image: '/workshops/calligraphy.jpg',
    artisan: {
      name: 'Võ Minh Đức',
      bio: {
        vi: 'Nghệ nhân thư pháp với 30 năm kinh nghiệm',
        en: 'Calligraphy artisan with 30 years of experience'
      },
      avatar: '/artisans/vo-minh-duc.jpg'
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
    price: 480000,
    duration: 2.5,
    location: {
      vi: 'Huế',
      en: 'Hue'
    },
    category: 'Embroidery',
    image: '/workshops/embroidery.jpg',
    artisan: {
      name: 'Lê Thị Hương',
      bio: {
        vi: 'Chuyên gia thêu tay với 15 năm kinh nghiệm',
        en: 'Hand embroidery expert with 15 years of experience'
      },
      avatar: '/artisans/le-thi-huong.jpg'
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
    price: 550000,
    duration: 3,
    location: {
      vi: 'Hà Nội',
      en: 'Hanoi'
    },
    category: 'Lacquerware',
    image: '/workshops/lacquerware.jpg',
    artisan: {
      name: 'Đặng Văn Hùng',
      bio: {
        vi: 'Nghệ nhân sơn mài với 20 năm kinh nghiệm',
        en: 'Lacquerware artisan with 20 years of experience'
      },
      avatar: '/artisans/bui-van-thanh.jpg'
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


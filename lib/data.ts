// Workshop data types
export interface Workshop {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  location: string;
  category: string;
  image: string;
  artisan: {
    name: string;
    bio: string;
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
    title: 'Dệt Lụa Hội An',
    description: 'Trải nghiệm nghệ thuật dệt lụa truyền thống tại Hội An. Tìm hiểu quy trình từ nuôi tằm đến dệt vải. Bạn sẽ được hướng dẫn bởi các nghệ nhân lành nghề và tự tay tạo ra sản phẩm lụa của riêng mình.',
    price: 700000,
    duration: 3,
    location: 'Hội An, Quảng Nam',
    category: 'Weaving',
    image: '/workshops/weaving.jpg',
    artisan: {
      name: 'Võ Thị Lan',
      bio: 'Nghệ nhân dệt lụa đời thứ 5 tại Hội An với hơn 25 năm kinh nghiệm',
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
    title: 'Gốm Đà Nẵng',
    description: 'Khám phá nghệ thuật làm gốm truyền thống Đà Nẵng. Tự tay nặn và trang trí sản phẩm gốm của riêng bạn dưới sự hướng dẫn của nghệ nhân. Tìm hiểu về lịch sử và kỹ thuật làm gốm độc đáo của vùng đất này.',
    price: 500000,
    duration: 2.5,
    location: 'Đà Nẵng',
    category: 'Pottery',
    image: '/workshops/pottery.jpg',
    artisan: {
      name: 'Nguyễn Văn Minh',
      bio: 'Nghệ nhân gốm sứ với 18 năm kinh nghiệm tại Đà Nẵng',
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
    title: 'Tranh Đông Hồ',
    description: 'Học vẽ tranh dân gian Đông Hồ với nghệ nhân. Tìm hiểu về lịch sử, ý nghĩa và kỹ thuật vẽ tranh truyền thống. Tạo ra tác phẩm tranh Đông Hồ độc đáo mang đậm bản sắc văn hóa Việt Nam.',
    price: 450000,
    duration: 2,
    location: 'Bắc Ninh',
    category: 'Painting',
    image: '/workshops/painting.jpg',
    artisan: {
      name: 'Nguyễn Đăng Chế',
      bio: 'Nghệ nhân tranh Đông Hồ đời thứ 4, giữ gìn nghề truyền thống',
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
    title: 'Làm Đèn Lồng Hội An',
    description: 'Học cách làm đèn lồng Hội An truyền thống với nghệ nhân lành nghề. Bạn sẽ được hướng dẫn từng bước để tạo ra chiếc đèn lồng độc đáo của riêng mình và mang về nhà.',
    price: 400000,
    duration: 2,
    location: 'Hội An, Quảng Nam',
    category: 'Lantern Making',
    image: '/workshops/lantern-making.jpg',
    artisan: {
      name: 'Trần Thị Hoa',
      bio: 'Nghệ nhân làm đèn lồng với hơn 20 năm kinh nghiệm',
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
    title: 'Nấu Ăn Món Việt',
    description: 'Học nấu các món ăn Việt Nam truyền thống với đầu bếp chuyên nghiệp. Khám phá hương vị ẩm thực Việt và bí quyết nấu nướng.',
    price: 600000,
    duration: 3,
    location: 'Hà Nội',
    category: 'Culinary',
    image: '/workshops/cooking.jpg',
    artisan: {
      name: 'Phạm Thị Mai',
      bio: 'Đầu bếp với 25 năm kinh nghiệm ẩm thực Việt',
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
    title: 'Thư Pháp Việt Nam',
    description: 'Khám phá nghệ thuật thư pháp Việt Nam. Học viết chữ Hán và chữ Nôm với nghệ nhân.',
    price: 350000,
    duration: 2,
    location: 'Huế',
    category: 'Calligraphy',
    image: '/workshops/calligraphy.jpg',
    artisan: {
      name: 'Võ Minh Đức',
      bio: 'Nghệ nhân thư pháp với 30 năm kinh nghiệm',
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
    title: 'Thêu Tay Truyền Thống',
    description: 'Khám phá nghệ thuật thêu tay Việt Nam với các họa tiết truyền thống. Tạo ra tác phẩm thêu độc đáo của riêng bạn.',
    price: 480000,
    duration: 2.5,
    location: 'Huế',
    category: 'Embroidery',
    image: '/workshops/embroidery.jpg',
    artisan: {
      name: 'Lê Thị Hương',
      bio: 'Chuyên gia thêu tay với 15 năm kinh nghiệm',
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
    title: 'Sơn Mài Truyền Thống',
    description: 'Học nghệ thuật sơn mài Việt Nam. Tạo ra tác phẩm sơn mài độc đáo với kỹ thuật truyền thống.',
    price: 550000,
    duration: 3,
    location: 'Hà Nội',
    category: 'Lacquerware',
    image: '/workshops/lacquerware.jpg',
    artisan: {
      name: 'Đặng Văn Hùng',
      bio: 'Nghệ nhân sơn mài với 20 năm kinh nghiệm',
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


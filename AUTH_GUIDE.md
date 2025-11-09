# 🔐 Hướng Dẫn Sử Dụng Chức Năng Đăng Ký/Đăng Nhập

## 📋 Tổng Quan

Hệ thống authentication đã được tích hợp vào ứng dụng CreateX với các tính năng:
- ✅ Đăng ký tài khoản mới
- ✅ Đăng nhập
- ✅ Đăng xuất
- ✅ Lưu trữ thông tin người dùng (localStorage)
- ✅ Hiển thị thông tin user trong header
- ✅ Responsive design (mobile & desktop)
- ✅ Đa ngôn ngữ (Tiếng Việt & English)

---

## 🚀 Cách Sử Dụng

### 1️⃣ **Đăng Ký Tài Khoản Mới**

**Bước 1:** Truy cập trang đăng ký
- Click vào nút **"Đăng Ký"** trên header
- Hoặc truy cập trực tiếp: `http://localhost:3000/register`

**Bước 2:** Điền thông tin
- **Họ và Tên**: Tên đầy đủ của bạn
- **Email**: Email hợp lệ (sẽ dùng để đăng nhập)
- **Mật Khẩu**: Tối thiểu 6 ký tự
- **Xác Nhận Mật Khẩu**: Nhập lại mật khẩu

**Bước 3:** Click **"Đăng Ký"**
- Hệ thống sẽ kiểm tra:
  - Email đã tồn tại chưa
  - Mật khẩu có khớp không
  - Mật khẩu có đủ 6 ký tự không
- Nếu thành công → Tự động đăng nhập và chuyển về trang chủ

---

### 2️⃣ **Đăng Nhập**

**Bước 1:** Truy cập trang đăng nhập
- Click vào nút **"Đăng Nhập"** trên header
- Hoặc truy cập trực tiếp: `http://localhost:3000/login`

**Bước 2:** Điền thông tin
- **Email**: Email đã đăng ký
- **Mật Khẩu**: Mật khẩu của bạn
- (Tùy chọn) Tick **"Ghi nhớ đăng nhập"**

**Bước 3:** Click **"Đăng Nhập"**
- Nếu thành công → Chuyển về trang chủ
- Nếu sai → Hiển thị lỗi "Email hoặc mật khẩu không đúng"

---

### 3️⃣ **Đăng Xuất**

**Desktop:**
- Click vào avatar/tên của bạn trên header
- Click **"Đăng Xuất"** trong dropdown menu

**Mobile:**
- Mở menu hamburger
- Scroll xuống phần thông tin user
- Click nút **"Đăng Xuất"**

---

## 🎨 Giao Diện

### **Header - Chưa Đăng Nhập**
```
[Logo] [Home] [Services] [About] [Contact]  [🌐 VI/EN] [Đăng Nhập] [Đăng Ký]
```

### **Header - Đã Đăng Nhập**
```
[Logo] [Home] [Services] [About] [Contact]  [🌐 VI/EN] [👤 Tên User ▼]
                                                          └─ Đăng Xuất
```

### **Mobile Menu - Đã Đăng Nhập**
```
┌─────────────────────┐
│ Home                │
│ Services            │
│ About               │
│ Contact             │
│ ─────────────────── │
│ 🌐 Language         │
│ ─────────────────── │
│ 👤 Nguyễn Văn A     │
│    user@email.com   │
│ [Đăng Xuất]         │
└─────────────────────┘
```

---

## 💾 Lưu Trữ Dữ Liệu

### **LocalStorage Keys:**

1. **`users`** - Danh sách tất cả users đã đăng ký
```json
[
  {
    "id": "1699999999999",
    "name": "Nguyễn Văn A",
    "email": "user@example.com",
    "password": "123456"
  }
]
```

2. **`user`** - Thông tin user hiện tại (đã đăng nhập)
```json
{
  "id": "1699999999999",
  "name": "Nguyễn Văn A",
  "email": "user@example.com"
}
```

3. **`language`** - Ngôn ngữ hiện tại (`vi` hoặc `en`)

---

## 🔧 Cấu Trúc Code

### **Files Đã Tạo/Cập Nhật:**

```
createx-app/
├── contexts/
│   ├── AuthContext.tsx          ✨ MỚI - Context quản lý auth
│   └── LanguageContext.tsx      ✅ CẬP NHẬT - Thêm translations
├── app/
│   ├── login/
│   │   └── page.tsx             ✨ MỚI - Trang đăng nhập
│   ├── register/
│   │   └── page.tsx             ✨ MỚI - Trang đăng ký
│   └── layout.tsx               ✅ CẬP NHẬT - Thêm AuthProvider
├── components/
│   ├── Header.tsx               ✅ CẬP NHẬT - Thêm auth UI
│   └── UserMenu.tsx             ✨ MỚI - Component menu user
└── AUTH_GUIDE.md                ✨ MỚI - File này
```

---

## 🌍 Đa Ngôn Ngữ

### **Tiếng Việt:**
- Đăng Nhập / Đăng Ký / Đăng Xuất
- Email hoặc mật khẩu không đúng
- Mật khẩu xác nhận không khớp
- Mật khẩu phải có ít nhất 6 ký tự

### **English:**
- Login / Register / Logout
- Invalid email or password
- Passwords do not match
- Password must be at least 6 characters

---

## 🔒 Bảo Mật

### **⚠️ LƯU Ý QUAN TRỌNG:**

Đây là **demo authentication** sử dụng localStorage:
- ❌ **KHÔNG** sử dụng trong production
- ❌ Mật khẩu **KHÔNG** được mã hóa
- ❌ Dữ liệu lưu trên client (không an toàn)

### **✅ Để Production:**
Cần thay thế bằng:
1. **Backend API** (Node.js, Django, Laravel, etc.)
2. **Database** (PostgreSQL, MongoDB, etc.)
3. **JWT/Session** cho authentication
4. **Bcrypt** để hash mật khẩu
5. **HTTPS** cho bảo mật
6. **OAuth** (Google, Facebook login)

---

## 🧪 Test Thử

### **Tạo Tài Khoản Test:**
1. Truy cập `/register`
2. Điền:
   - Tên: `Test User`
   - Email: `test@example.com`
   - Mật khẩu: `123456`
   - Xác nhận: `123456`
3. Click "Đăng Ký"

### **Đăng Nhập:**
1. Truy cập `/login`
2. Điền:
   - Email: `test@example.com`
   - Mật khẩu: `123456`
3. Click "Đăng Nhập"

### **Kiểm Tra:**
- ✅ Header hiển thị tên user
- ✅ Click vào tên → Hiện menu
- ✅ Click "Đăng Xuất" → Về trạng thái chưa đăng nhập

---

## 🎯 Tính Năng Nâng Cao (Có Thể Thêm)

- [ ] Quên mật khẩu / Reset password
- [ ] Xác thực email
- [ ] Trang profile user
- [ ] Đổi mật khẩu
- [ ] Upload avatar
- [ ] Lịch sử đặt workshop
- [ ] Social login (Google, Facebook)
- [ ] Two-factor authentication (2FA)

---

## 📞 Hỗ Trợ

Nếu có vấn đề:
1. Xóa localStorage: `localStorage.clear()` trong Console
2. Refresh trang
3. Thử đăng ký lại

---

**🎉 Chúc bạn sử dụng vui vẻ!**


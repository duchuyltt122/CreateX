'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SuccessModal from './SuccessModal';

interface BookingFormProps {
  workshopTitle: string;
  workshopPrice: number;
  selectedDate: string;
  selectedTime: string;
  onClose: () => void;
}

export default function BookingForm({
  workshopTitle,
  workshopPrice,
  selectedDate,
  selectedTime,
  onClose
}: BookingFormProps) {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = language === 'vi' ? 'Vui lòng nhập họ tên' : 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'vi' ? 'Vui lòng nhập email' : 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'vi' ? 'Email không hợp lệ' : 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = language === 'vi' ? 'Vui lòng nhập số điện thoại' : 'Please enter your phone number';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = language === 'vi' ? 'Số điện thoại không hợp lệ' : 'Invalid phone number';
    }

    if (formData.numberOfPeople < 1 || formData.numberOfPeople > 10) {
      newErrors.numberOfPeople = language === 'vi' ? 'Số người từ 1-10' : 'Number of people must be 1-10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const totalPrice = workshopPrice * formData.numberOfPeople;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            {t('booking.title')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          {/* Workshop Info */}
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{workshopTitle}</h3>
            <div className="text-xs sm:text-sm text-gray-600 space-y-1">
              <p>📅 {selectedDate}</p>
              <p>🕐 {selectedTime}</p>
              <p className="text-[#FF6B35] font-semibold">
                💰 {workshopPrice.toLocaleString('vi-VN')}₫ / {language === 'vi' ? 'người' : 'person'}
              </p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">{t('booking.customerInfo')}</h3>

            {/* Full Name */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {t('booking.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm sm:text-base ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
              />
              {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm sm:text-base ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {t('booking.phone')} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm sm:text-base ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0912345678"
              />
              {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {t('booking.numberOfPeople')} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                min="1"
                max="10"
                className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm sm:text-base ${
                  errors.numberOfPeople ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.numberOfPeople && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.numberOfPeople}</p>}
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                {t('booking.specialRequests')}
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] text-sm sm:text-base"
                placeholder={language === 'vi' ? 'Yêu cầu đặc biệt (nếu có)...' : 'Special requests (if any)...'}
              />
            </div>
          </div>

          {/* Total Price */}
          <div className="mt-4 sm:mt-6 bg-[#FF6B35]/10 rounded-lg p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium text-sm sm:text-base">{t('booking.total')}:</span>
              <span className="text-xl sm:text-2xl font-bold text-[#FF6B35]">
                {totalPrice.toLocaleString('vi-VN')}₫
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {formData.numberOfPeople} × {workshopPrice.toLocaleString('vi-VN')}₫
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium"
            >
              {t('booking.cancel')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E55A2B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
            >
              {isSubmitting ? t('booking.submitting') : t('booking.confirm')}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          workshopTitle={workshopTitle}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          customerName={formData.fullName}
          email={formData.email}
          numberOfPeople={formData.numberOfPeople}
          totalPrice={totalPrice}
          onClose={handleSuccessClose}
        />
      )}
    </div>
  );
}


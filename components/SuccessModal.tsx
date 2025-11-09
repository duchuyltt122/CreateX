'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface SuccessModalProps {
  workshopTitle: string;
  selectedDate: string;
  selectedTime: string;
  customerName: string;
  email: string;
  numberOfPeople: number;
  totalPrice: number;
  onClose: () => void;
}

export default function SuccessModal({
  workshopTitle,
  selectedDate,
  selectedTime,
  customerName,
  email,
  numberOfPeople,
  totalPrice,
  onClose
}: SuccessModalProps) {
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3 sm:p-4 animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-md w-full shadow-2xl animate-slideUp my-4 sm:my-8">
        {/* Success Icon */}
        <div className="flex flex-col items-center pt-6 sm:pt-8 pb-4 sm:pb-6 px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-scaleIn">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
            {language === 'vi' ? '🎉 Đặt Lịch Thành Công!' : '🎉 Booking Successful!'}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 text-center px-4 sm:px-6">
            {language === 'vi'
              ? 'Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ sớm nhất!'
              : 'Thank you for your booking. We will contact you soon!'}
          </p>
        </div>

        {/* Booking Details */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-5 mb-3 sm:mb-4 border border-orange-200">
            <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#FF6B35] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {language === 'vi' ? 'Thông Tin Đặt Lịch' : 'Booking Details'}
            </h3>

            <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start">
                <span className="text-gray-600 w-20 sm:w-24 flex-shrink-0">
                  {language === 'vi' ? 'Workshop:' : 'Workshop:'}
                </span>
                <span className="font-medium text-gray-900 flex-1 break-words">{workshopTitle}</span>
              </div>

              <div className="flex items-start">
                <span className="text-gray-600 w-20 sm:w-24 flex-shrink-0">
                  {language === 'vi' ? 'Ngày:' : 'Date:'}
                </span>
                <span className="font-medium text-gray-900">{selectedDate}</span>
              </div>

              <div className="flex items-start">
                <span className="text-gray-600 w-20 sm:w-24 flex-shrink-0">
                  {language === 'vi' ? 'Giờ:' : 'Time:'}
                </span>
                <span className="font-medium text-gray-900">{selectedTime}</span>
              </div>

              <div className="flex items-start">
                <span className="text-gray-600 w-20 sm:w-24 flex-shrink-0">
                  {language === 'vi' ? 'Khách hàng:' : 'Customer:'}
                </span>
                <span className="font-medium text-gray-900 break-words">{customerName}</span>
              </div>

              <div className="flex items-start">
                <span className="text-gray-600 w-20 sm:w-24 flex-shrink-0">
                  {language === 'vi' ? 'Số người:' : 'People:'}
                </span>
                <span className="font-medium text-gray-900">{numberOfPeople}</span>
              </div>

              <div className="pt-2 mt-2 border-t border-orange-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm">
                    {language === 'vi' ? 'Tổng tiền:' : 'Total:'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold text-[#FF6B35]">
                    {totalPrice.toLocaleString('vi-VN')}₫
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Confirmation Notice */}
          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 border border-blue-200">
            <div className="flex items-start">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-blue-900 font-medium mb-1">
                  {language === 'vi' ? 'Email xác nhận đã được gửi' : 'Confirmation email sent'}
                </p>
                <p className="text-xs text-blue-700 break-all">
                  {language === 'vi'
                    ? `Vui lòng kiểm tra hộp thư ${email}`
                    : `Please check your inbox at ${email}`}
                </p>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base"
          >
            {language === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from { 
            transform: scale(0);
          }
          to { 
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}


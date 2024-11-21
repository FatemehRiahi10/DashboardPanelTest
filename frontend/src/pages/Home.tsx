import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
        به پنل مدیریت هوشمند حریق خوش آمدید 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800">وضعیت سیستم</h2>
            <p className="text-gray-500">سیستم فعال است</p>
          </div>
          <div className="text-blue-500 text-4xl">
            <i className="fas fa-check-circle"></i>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800">تعداد هشدارها</h2>
            <p className="text-gray-500">2 هشدار فعال</p>
          </div>
          <div className="text-red-500 text-4xl">
            <i className="fas fa-exclamation-circle"></i>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div className="text-left">
            <h2 className="text-xl font-semibold text-gray-800">آخرین بررسی</h2>
            <p className="text-gray-500">یک ساعت پیش</p>
          </div>
          <div className="text-green-500 text-4xl">
            <i className="fas fa-clock"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

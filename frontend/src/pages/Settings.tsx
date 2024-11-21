import React, { useState } from 'react';

const Settings = () => {
  const [sensitivity, setSensitivity] = useState<number>(3);
  const [alertsEnabled, setAlertsEnabled] = useState<boolean>(true);

  const handleSensitivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSensitivity(Number(e.target.value));
  }; 

  const handleToggle = () => {
    setAlertsEnabled((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">تنظیمات سیستم</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">سطح حساسیت</h2>
        <input
          type="range"
          min="1"
          max="5"
          value={sensitivity}
          onChange={handleSensitivityChange}
          className="w-full h-2 bg-gray-200 rounded-lg"
        />
        <div className="flex justify-between mt-2">
          <span>کم</span>
          <span>{sensitivity}</span>
          <span>زیاد</span>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">فعال/غیرفعال کردن هشدارها</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-800">هشدارها</span>
          <div
            className="relative inline-block w-20 h-8"
            onClick={handleToggle}
          >
            
            <div
              className={`${
                alertsEnabled ? "bg-green-500" : "bg-red-500"
              } absolute inset-0 rounded-full transition-all duration-300 ease-in-out`}
            ></div>
            
            <div
              className={`${
                alertsEnabled ? "translate-x-12" : "translate-x-0"
              } absolute top-0 left-0 w-8 h-8 bg-white rounded-full shadow transition-all duration-300 ease-in-out`}
            ></div>

            <span
              className={`absolute left-0 top-0 right-0 bottom-0 flex justify-between items-center px-2 text-xs font-medium text-white ${
                alertsEnabled ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300 ease-in-out`}
            >
              غیرفعال
            </span>
            <span
              className={`absolute left-0 top-0 right-0 bottom-0 flex justify-between items-center px-2 text-xs font-medium text-black ${
                alertsEnabled ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 ease-in-out`}
            >
              فعال
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;

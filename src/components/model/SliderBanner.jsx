import React, { useState, useEffect } from 'react';

const SliderBanner = () => {
  const messages = [
    { text: "Shop All new Arrivals", link: "Shop"  },
    { text: "Introducing After Pay, Shop now, Pay later", link: null }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 h-[50px] overflow-hidden relative  border-b  ">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex flex-col items-center justify-center transition-transform duration-500 ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <p className='text-xs'>{message.text}</p>
          {message.link && (
            <a className="underline text-xs" href="#">
              {message.link}
            </a>
          )}
        </div>
      ))}
    </div>
    
  );
};

export default SliderBanner;
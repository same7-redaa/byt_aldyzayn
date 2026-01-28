import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      <a
        href="https://wa.me/971566636483"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-none flex items-center justify-center text-3xl shadow-2xl z-[100] hover:scale-110 transition-transform animate-bounce-slow"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#B89564] text-white rounded-none text-[10px] flex items-center justify-center font-bold border-2 border-white shadow-sm">1</span>
      </a>
      <a
        href="tel:+971566636483"
        className="fixed bottom-6 left-6 w-16 h-16 bg-[#25D366] text-white rounded-none flex items-center justify-center text-2xl shadow-2xl z-[100] hover:scale-110 transition-transform animate-bounce-slow"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </>
  );
};

export default FloatingWhatsApp;
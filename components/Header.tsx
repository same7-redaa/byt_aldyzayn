import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../App';

interface HeaderProps {
  scrolled: boolean;
  onHomeClick: () => void;
  lang: Language;
  onLangToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onHomeClick, lang, onLangToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const t = {
    ar: { home: 'الرئيسية', services: 'خدماتنا', projects: 'أعمالنا', contact: 'اتصل بنا', cta: 'اطلب عرض سعر', langName: 'English' },
    en: { home: 'Home', services: 'Services', projects: 'Projects', contact: 'Contact', cta: 'Get Quote', langName: 'العربية' }
  }[lang];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavClick = (section?: string) => {
    closeSidebar();
    if (section) {
      if (location.pathname !== '/') {
        navigate('/' + section);
      } else {
        const element = document.getElementById(section.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Just home
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1C1C1C]/95 backdrop-blur-lg border-b border-[#B89564]/20 py-3 shadow-2xl' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick()}
          >
            <img
              src="/logooo.jpeg"
              alt="Bayt Al Design Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-transform rounded"
            />
            <div>
              <h1 className="text-xl font-extrabold leading-none text-white tracking-wide">
                {lang === 'ar' ? 'بيت الديزاين' : 'Bayt Al Design'}
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => handleNavClick()} className="text-white font-semibold hover:text-[#B89564] transition-colors">{t.home}</button>
            <button onClick={() => handleNavClick('#services')} className="text-gray-300 font-semibold hover:text-[#B89564] transition-colors">{t.services}</button>
            <Link to="/projects" className="text-gray-300 font-semibold hover:text-[#B89564] transition-colors">{t.projects}</Link>
            <button onClick={() => handleNavClick('#contact')} className="text-gray-300 font-semibold hover:text-[#B89564] transition-colors">{t.contact}</button>
          </nav>

          {/* CTA & Language */}
          <div className="flex items-center gap-4">
            <button
              onClick={onLangToggle}
              className="text-[#B89564] font-bold text-sm px-3 py-1 border border-[#B89564]/30 hover:bg-[#B89564]/10 transition-all"
            >
              {t.langName}
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:block px-6 py-2.5 maroon-gradient text-white rounded-none font-bold text-sm maroon-glow-hover transition-all border border-white/10"
            >
              {t.cta}
            </button>
            <button onClick={toggleSidebar} className="lg:hidden text-2xl text-white hover:text-[#B89564] transition-colors">
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeSidebar}
      >
        <div
          className={`fixed top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} h-full w-80 bg-[#1C1C1C] border-${lang === 'ar' ? 'l' : 'r'} border-[#B89564]/30 shadow-2xl transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : lang === 'ar' ? 'translate-x-full' : '-translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#B89564]/20">
            <div className="flex items-center gap-3">
              <img src="/logooo.jpeg" alt="Logo" className="h-14 w-auto rounded" />
              <div>
                <h2 className="text-lg font-bold text-white">
                  {lang === 'ar' ? 'بيت الديزاين' : 'Bayt Al Design'}
                </h2>
              </div>
            </div>
            <button
              onClick={closeSidebar}
              className="text-2xl text-white hover:text-[#B89564] transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col p-6 gap-2">
            <button
              onClick={() => handleNavClick()}
              className="text-right px-4 py-3 text-white font-semibold hover:bg-[#B89564]/10 hover:text-[#B89564] transition-all border-b border-[#B89564]/10"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('#services')}
              className="text-right px-4 py-3 text-gray-300 font-semibold hover:bg-[#B89564]/10 hover:text-[#B89564] transition-all border-b border-[#B89564]/10"
            >
              {t.services}
            </button>
            <Link
              to="/projects"
              onClick={() => closeSidebar()}
              className="text-right px-4 py-3 text-gray-300 font-semibold hover:bg-[#B89564]/10 hover:text-[#B89564] transition-all border-b border-[#B89564]/10"
            >
              {t.projects}
            </Link>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-right px-4 py-3 text-gray-300 font-semibold hover:bg-[#B89564]/10 hover:text-[#B89564] transition-all border-b border-[#B89564]/10"
            >
              {t.contact}
            </button>
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#B89564]/20">
            <button
              onClick={() => handleNavClick('#contact')}
              className="block w-full text-center px-6 py-3 maroon-gradient text-white font-bold maroon-glow-hover transition-all border border-white/10"
            >
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

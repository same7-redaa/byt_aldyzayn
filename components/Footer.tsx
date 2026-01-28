
import React from 'react';
import { Language } from '../App';

interface FooterProps {
  onServiceClick: (slug: string) => void;
  onHomeClick: () => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onServiceClick, onHomeClick, lang }) => {
  const t = {
    ar: {
      desc: 'بيت الديزاين هي الشركة الرائدة في حلول الصيانة المتكاملة والتشطيبات الفاخرة في دبي والشارقة، الإمارات. جودة واتقان في كل تفصيلة.',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      newsletter: 'النشرة البريدية',
      newsDesc: 'اشترك لتصلك أحدث العروض والمشاريع.',
      rights: '© 2026 بيت الديزاين. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    },
    en: {
      desc: 'Bayt Al Design is the leading company in integrated maintenance solutions and luxury finishes in Dubai & Sharjah, UAE. Quality and perfection in every detail.',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      sub: 'Subscribe',
      rights: '© 2026 Bayt Al Design. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    }
  }[lang];

  return (
    <footer className="bg-[#120c08] pt-20 pb-10 text-white border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={onHomeClick}
            >
              <img
                src="/logo.png"
                alt="Bayt Al Design Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h1 className="text-lg font-extrabold leading-none text-white">
                  {lang === 'ar' ? 'بيت الديزاين' : 'Bayt Al Design'}
                </h1>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.desc}
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <i className="fa-solid fa-envelope text-[#B89564]"></i>
              <a href="mailto:help@bayt-eldesign.com" className="hover:text-white transition-colors">help@bayt-eldesign.com</a>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-6 border-${lang === 'ar' ? 'r' : 'l'}-4 border-[#B89564] ${lang === 'ar' ? 'pr' : 'pl'}-3`}>{t.quickLinks}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={onHomeClick} className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'عن الشركة' : 'About Us'}</button></li>
              <li><a href="#services" className="hover:text-[#B89564] transition-colors">{t.services}</a></li>
              <li><a href="#projects" className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'أعمالنا' : 'Projects'}</a></li>
              <li><a href="#contact" className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-6 border-${lang === 'ar' ? 'r' : 'l'}-4 border-[#B89564] ${lang === 'ar' ? 'pr' : 'pl'}-3`}>{t.services}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onServiceClick('water-leak-detection')} className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'كشف تسربات المياه' : 'Leak Detection'}</button></li>
              <li><button onClick={() => onServiceClick('roof-tank-insulation')} className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'عزل الأسطح' : 'Insulation'}</button></li>
              <li><button onClick={() => onServiceClick('painting-and-decor')} className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'أصباغ وديكورات' : 'Paints & Decor'}</button></li>
              <li><button onClick={() => onServiceClick('gypsum-board-installation')} className="hover:text-[#B89564] transition-colors">{lang === 'ar' ? 'أعمال الجبس بورد' : 'Gypsum Board'}</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B89564] transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-[#B89564] transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

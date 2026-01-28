
import React from 'react';
import { Language } from '../App';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = {
    ar: {
      badge: 'نخبة التشطيبات الفاخرة',
      title1: 'أهلاً وسهلاً بكم في',
      title2: 'شركة بيت الديزاين',
      title3: '',
      desc: `نقدم خدمات متكاملة في مجال التشطيب الداخلي والترميم والصيانة العامة.
نلتزم بأدق التفاصيل في تنفيذ الديكور المودرن والكلاسيك والنيو كلاسيك.
✨ فنيون محترفون على أعلى مستوى
✨ أسعار تنافسية تناسب الجميع`,
      cta1: 'اطلب معاينة مجانية',
      cta2: 'استعرض خدماتنا',
      happyClients: '+500 عميل سعيد',
      scroll: 'مرر للاستكشاف'
    },
    en: {
      badge: 'Elite Luxury Finishes',
      title1: 'Welcome to',
      title2: 'Bayt Al Design',
      title3: 'Company',
      desc: `We provide integrated services in interior finishing, renovation, and general maintenance.
We master the finest details in Modern, Classic, and Neo-Classic decor.
✨ Top-Level Professional Technicians
✨ Competitive Prices for Everyone`,
      cta1: 'Request Free Inspection',
      cta2: 'View Our Services',
      happyClients: '+500 Happy Clients',
      scroll: 'SCROLL TO EXPLORE'
    }
  }[lang];

  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Charcoal overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-${lang === 'ar' ? 'l' : 'r'} from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-white uppercase maroon-gradient rounded-none shadow-lg border border-white/10">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            <div className="mb-6">{t.title1}</div>
            <div className="whitespace-nowrap"><span className="text-[#B89564]">{t.title2}</span> {t.title3}</div>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 whitespace-pre-line">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 maroon-gradient text-white rounded-none font-bold text-lg text-center maroon-glow-hover transition-all flex items-center justify-center gap-3 border border-white/10"
            >
              {t.cta1}
              <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'} mt-1`}></i>
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border-2 border-white/10 rounded-none font-bold text-lg text-center hover:border-[#B89564] transition-all"
            >
              {t.cta2}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className={`flex ${lang === 'ar' ? '-space-x-3 space-x-reverse' : '-space-x-3'}`}>
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-12 h-12 rounded-full border-2 border-[#1C1C1C] object-cover ring-2 ring-[#B89564]/30"
                  alt="Client"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{t.happyClients}</p>
              <div className="flex text-[#B89564] text-xs">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Decoration */}
      <div className={`absolute bottom-24 ${lang === 'ar' ? 'left-10' : 'right-10'} hidden lg:block`}>
        <div className="flex flex-col gap-4">
          <div className="w-1 h-20 bg-[#B89564]/30 rounded-none mx-auto"></div>
          <span className="[writing-mode:vertical-rl] text-[#B89564] font-bold tracking-widest text-xs opacity-50 uppercase">
            {t.scroll}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

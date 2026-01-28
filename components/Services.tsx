
import React from 'react';
import { Language } from '../App';

export const getServicesData = (lang: Language) => [
  {
    id: 0,
    slug: "water-leak-detection",
    title: lang === 'ar' ? "كشف تسربات المياه" : "Water Leak Detection",
    desc: lang === 'ar' ? "أحدث التقنيات الإلكترونية للكشف عن التسربات دون تكسير." : "Latest electronic technologies for leak detection without demolition.",
    icon: "fa-solid fa-droplet-slash",
    fullDesc: lang === 'ar'
      ? "نحن نوفر خدمة كشف تسربات المياه باستخدام أجهزة متطورة تعمل بالموجات الصوتية والترددات، مما يتيح لنا تحديد مكان التسريب بدقة متناهية دون الحاجة لتكسير الجدران أو الأرضيات."
      : "We provide water leak detection services using advanced devices that operate with acoustic waves and frequencies, allowing us to pinpoint the leak location with extreme precision.",
    features: lang === 'ar'
      ? ["كشف إلكتروني دقيق", "تقارير معتمدة", "إصلاح فوري للكسور", "ضمان على الإصلاح"]
      : ["Precise Electronic Detection", "Certified Reports", "Immediate Repair", "Repair Warranty"],
    image: "https://i.pinimg.com/1200x/55/15/fc/5515fc95db430782cce00caba0fd6849.jpg"
  },
  {
    id: 1,
    slug: "roof-tank-insulation",
    title: lang === 'ar' ? "عزل الأسطح والخزانات" : "Roof & Tank Insulation",
    desc: lang === 'ar' ? "حلول عزل مائي وحراري متكاملة للأسطح والخزانات." : "Integrated water and thermal insulation solutions for roofs and tanks.",
    icon: "fa-solid fa-shield-halved",
    fullDesc: lang === 'ar'
      ? "نقدم حلول عزل متكاملة تشمل العزل المائي والعزل الحراري، لحماية مبناكم من الرطوبة والحرارة العالية."
      : "We offer complete insulation solutions including waterproofing and thermal insulation to protect your building from humidity and high temperatures.",
    features: lang === 'ar'
      ? ["عزل مائي وحراري", "مواد أمريكية وألمانية", "ضمان 10 سنوات", "حماية من الرطوبة"]
      : ["Water & Thermal Insulation", "US & German Materials", "10-Year Warranty", "Humidity Protection"],
    image: "https://i.pinimg.com/736x/e7/47/ff/e747ff2bba25f5c37cbbb4bfcec56091.jpg"
  },
  {
    id: 2,
    slug: "painting-and-decor",
    title: lang === 'ar' ? "أعمال الدهانات والأصباغ" : "Painting & Decor",
    desc: lang === 'ar' ? "لمسات فنية راقية وتصاميم ألوان عصرية تناسب ذوقكم." : "Elegant artistic touches and modern color designs for your taste.",
    icon: "fa-solid fa-paint-roller",
    fullDesc: lang === 'ar'
      ? "نحن متخصصون في تنفيذ أرقى أنواع الدهانات الداخلية والخارجية مع اهتمام فائق بتجهيز الجدران."
      : "We specialize in the finest interior and exterior painting types with superior attention to wall preparation.",
    features: lang === 'ar'
      ? ["دهانات جوتن وسيجما", "تنسيق ألوان احترافي", "دهانات ديكورية", "جودة تدوم طويلاً"]
      : ["Jotun & Sigma Paints", "Pro Color Matching", "Decorative Finishes", "Long-lasting Quality"],
    image: "https://i.pinimg.com/736x/f2/41/da/f241daa5b116f9ae0cc28ea8cc25eb47.jpg"
  },
  {
    id: 3,
    slug: "gypsum-board-installation",
    title: lang === 'ar' ? "تركيب الجبس بورد" : "Gypsum Board Installation",
    desc: lang === 'ar' ? "تنفيذ ديكورات جبسية وأسقف مستعارة بتصاميم هندسية." : "Executing gypsum decorations and suspended ceilings with geometric designs.",
    icon: "fa-solid fa-border-all",
    fullDesc: lang === 'ar'
      ? "نقوم بتنفيذ أحدث تصاميم الأسقف المستعارة والجبس بورد للمجالس والغرف والمكاتب."
      : "We execute the latest suspended ceiling and gypsum board designs for salons, rooms, and offices.",
    features: lang === 'ar'
      ? ["تصاميم مودرن وكلاسيك", "إضاءة مخفية مدمجة", "سرعة في التنفيذ", "متانة وجودة عالية"]
      : ["Modern & Classic Designs", "Integrated LED Lighting", "Speedy Execution", "High Durability"],
    image: "https://i.pinimg.com/1200x/94/76/45/947645087f69f557b8690484ae0b93ba.jpg"
  },
  {
    id: 4,
    slug: "general-maintenance",
    title: lang === 'ar' ? "الصيانة العامة" : "General Maintenance",
    desc: lang === 'ar' ? "خدمات صيانة شاملة للمباني تضمن استدامة كافة المرافق." : "Comprehensive building maintenance services ensuring facility sustainability.",
    icon: "fa-solid fa-hammer",
    fullDesc: lang === 'ar'
      ? "خدمة الصيانة العامة لدينا تغطي كافة احتياجات السباكة والكهرباء والنجارة والترميم."
      : "Our general maintenance service covers all plumbing, electrical, carpentry, and renovation needs.",
    features: lang === 'ar'
      ? ["سباكة وكهرباء", "عقود صيانة دورية", "فنيون متخصصون", "سرعة استجابة"]
      : ["Plumbing & Electrical", "Periodic Contracts", "Specialized Technicians", "Rapid Response"],
    image: "https://i.pinimg.com/736x/93/5b/94/935b946385c8d4a87cb76dcf3ea1b001.jpg"
  },
  {
    id: 5,
    slug: "interior-design",
    title: lang === 'ar' ? "أعمال الديكور الداخلي" : "Interior Design",
    desc: lang === 'ar' ? "نحول مساحتكم إلى تحف فنية تجمع بين الفخامة والعملية." : "Transforming your space into masterpieces of luxury and functionality.",
    icon: "fa-solid fa-couch",
    fullDesc: lang === 'ar'
      ? "نقدم خدمة التصميم الداخلي الشاملة التي تبدأ من رفع المقاسات وتصميم المخططات."
      : "We offer a comprehensive interior design service starting from measurements to full 3D layout design.",
    features: lang === 'ar'
      ? ["تصاميم 3D احترافية", "توزيع فراغات ذكي", "اختيار خامات فاخرة", "إشراف هندسي متكامل"]
      : ["Pro 3D Designs", "Smart Space Usage", "Luxury Material Selection", "Full Engineering Oversight"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
  },
];

interface ServicesProps {
  onServiceClick: (slug: string) => void;
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick, lang }) => {
  const data = getServicesData(lang);
  const t = {
    ar: { tag: 'خدماتنا المتكاملة', title1: 'حلول هندسية وفنية', title2: 'مبتكرة', desc: 'نحن نؤمن بأن كل مساحة تستحق اهتماماً خاصاً، لذا نوفر حزمة من الخدمات التي تغطي كافة احتياجات البناء والتشطيب.', more: 'اكتشف المزيد' },
    en: { tag: 'Integrated Services', title1: 'Innovative Engineering', title2: 'Solutions', desc: 'We believe every space deserves special attention, so we offer a package of services covering all construction and finishing needs.', more: 'Explore More' }
  }[lang];

  return (
    <section id="services" className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#B89564] font-extrabold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {t.title1} <span className="text-[#B89564]">{t.title2}</span>
        </h2>
        <p className="text-gray-400">{t.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service) => (
          <div
            key={service.id}
            onClick={() => onServiceClick(service.slug)}
            className="group relative p-0 bg-[#1C1C1C] rounded-none shadow-lg border border-[#B89564]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Service Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent"></div>

              {/* Icon on Image */}
              <div className="absolute top-4 right-4 w-14 h-14 bg-[#B89564] rounded-none flex items-center justify-center text-white text-xl shadow-xl border border-white/20 group-hover:scale-110 transition-transform">
                <i className={service.icon}></i>
              </div>

              {/* Service Number */}
              <div className="absolute bottom-4 left-4 text-white/20 text-5xl font-black">0{service.id + 1}</div>
            </div>

            {/* Service Content */}
            <div className="p-6 bg-[#D8C3A0]">
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{service.title}</h3>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-4 font-semibold line-clamp-2">{service.desc}</p>

              <div className={`flex items-center gap-2 text-[#8A6F4D] font-bold text-sm cursor-pointer group/link`}>
                <span>{t.more}</span>
                <i className={`fa-solid fa-chevron-${lang === 'ar' ? 'left' : 'right'} text-[10px] group-hover/link:${lang === 'ar' ? '-translate-x-1' : 'translate-x-1'} transition-transform`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

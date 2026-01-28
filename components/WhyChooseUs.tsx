
import React from 'react';
import { Language } from '../App';

interface WhyChooseUsProps {
  lang: Language;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const t = {
    ar: {
      tag: 'لماذا تختارنا؟',
      title1: 'نحن نضع معايير جديدة',
      title2: 'للتميز في سوق الإمارات',
      desc: 'في بيت الديزاين، لا نكتفي بتقديم الخدمة فحسب، بل نبني علاقة ثقة مستدامة مع عملائنا في دبي والشارقة من خلال الشفافية والاحترافية والنتائج الملموسة التي تدوم.',
      exp: 'عاماً من الخبرة في سوق الإمارات',
      values: [
        { title: "ضمان شامل", desc: "نقدم ضمانات حقيقية تصل لسنوات على كافة أعمالنا المنفذة.", icon: "fa-solid fa-award" },
        { title: "فريق فني محترف", desc: "كوادر مدربة بخبرات طويلة تضمن الدقة في التنفيذ.", icon: "fa-solid fa-user-gear" },
        { title: "مواد عالية الجودة", desc: "لا نساوم أبداً على جودة المواد المستخدمة في مشاريعنا.", icon: "fa-solid fa-gem" },
        { title: "التزام بالمواعيد", desc: "نحترم وقتكم ونلتزم بتسليم المشاريع في الموعد المحدد.", icon: "fa-solid fa-calendar-check" },
      ]
    },
    en: {
      tag: 'Why Choose Us?',
      title1: 'Setting New Standards of Excellence',
      title2: 'in the UAE Market',
      desc: 'At Bayt Al Design, we don\'t just provide a service; we build a sustainable trust relationship with our clients in Dubai & Sharjah through transparency, professionalism, and lasting tangible results.',
      exp: 'Years of Experience in UAE Market',
      values: [
        { title: "Full Warranty", desc: "We provide genuine multi-year warranties on all implemented works.", icon: "fa-solid fa-award" },
        { title: "Pro Technical Team", desc: "Trained staff with long experience ensuring execution precision.", icon: "fa-solid fa-user-gear" },
        { title: "Premium Materials", desc: "We never compromise on the quality of materials used in our projects.", icon: "fa-solid fa-gem" },
        { title: "On-Time Delivery", desc: "We respect your time and commit to project delivery deadlines.", icon: "fa-solid fa-calendar-check" },
      ]
    }
  }[lang];

  return (
    <section className="container mx-auto px-6 relative z-10">
      {/* Background patterns and decorative elements omitted for brevity, keeping existing structure */}
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-[#B89564] font-extrabold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">
            <div className="mb-4">{t.title1}</div>
            <div className="text-[#B89564]">{t.title2}</div>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            {t.desc}
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {t.values.map((v, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-none bg-[#B89564]/10 border border-[#B89564]/30 flex items-center justify-center text-[#B89564]">
                  <i className={`${v.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{v.title}</h4>
                  <p className="text-sm text-gray-400">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B89564] opacity-20 rounded-none blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
              alt="Professional team"
              className="rounded-none shadow-2xl border border-[#B89564]/20 relative z-10"
            />
            <div className={`absolute -bottom-8 ${lang === 'ar' ? '-left-8' : '-right-8'} bg-[#EFE9E1] p-6 rounded-none shadow-xl z-20 hidden sm:block`}>
              <div className="flex items-center gap-4 text-[#1C1C1C]">
                <div className="text-4xl font-black text-[#B89564]">15+</div>
                <div className="text-sm font-bold uppercase tracking-tight">{t.exp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

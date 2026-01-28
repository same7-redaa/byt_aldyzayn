
import React from 'react';
import { Language } from '../App';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = {
    ar: {
      title: 'معلومات التواصل',
      call: 'اتصل بنا',
      whatsapp: 'واتساب',
      location: 'الموقع',
      locDesc: 'الشارقة ودبي، الإمارات',
      follow: 'تابعنا على:',
      formTitle: 'احصل على استشارة مجانية',
      formDesc: 'سيسعد خبراؤنا بالرد على جميع استفساراتكم في أقرب وقت.',
      name: 'الاسم بالكامل',
      phone: 'رقم الجوال',
      service: 'الخدمة المطلوبة',
      details: 'تفاصيل الطلب',
      submit: 'إرسال الطلب الآن'
    },
    en: {
      title: 'Contact Information',
      call: 'Call Us',
      whatsapp: 'WhatsApp',
      location: 'Location',
      locDesc: 'Sharjah & Dubai, UAE',
      follow: 'Follow Us:',
      formTitle: 'Get Free Consultation',
      formDesc: 'Our experts will be happy to answer all your inquiries as soon as possible.',
      name: 'Full Name',
      phone: 'Phone Number',
      service: 'Required Service',
      details: 'Request Details',
      submit: 'Send Request Now'
    }
  }[lang];

  return (
    <section id="contact" className="container mx-auto px-6 relative z-10 pb-24">
      <div className="bg-[#2A2422] rounded-none overflow-hidden shadow-2xl border border-white/5 flex flex-col">

        {/* Info Side */}
        <div className="w-full p-8 lg:p-16 relative overflow-hidden maroon-gradient">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

          <div className="relative z-10 text-white flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-extrabold mb-8">{t.title}</h2>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-[#B89564] transition-all duration-300">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-[#EFE9E1]/70 text-sm mb-1 uppercase tracking-widest font-bold">{t.call}</p>
                    <a href="tel:+971566636483" className="text-white text-xl font-bold dir-ltr hover:text-[#B89564] transition-colors">+971 56 663 6483</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-[#B89564] transition-all duration-300">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-[#EFE9E1]/70 text-sm mb-1 uppercase tracking-widest font-bold">Email</p>
                    <a href="mailto:help@bayt-eldesign.com" className="text-white text-xl font-bold dir-ltr hover:text-[#B89564] transition-colors">help@bayt-eldesign.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-[#B89564] transition-all duration-300">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="text-[#EFE9E1]/70 text-sm mb-1 uppercase tracking-widest font-bold">{t.whatsapp}</p>
                    <a href="https://wa.me/971566636483" target="_blank" rel="noreferrer" className="text-white text-xl font-bold dir-ltr hover:text-[#B89564] transition-colors">+971 56 663 6483</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl group-hover:bg-white group-hover:text-[#B89564] transition-all duration-300">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-[#EFE9E1]/70 text-sm mb-1 uppercase tracking-widest font-bold">{t.location}</p>
                    <p className="text-white text-lg font-bold">{t.locDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0 border-t md:border-t-0 md:border-r border-white/20 pt-8 md:pt-0 md:pr-12">
              <div className='h-full flex flex-col justify-center'>
                <p className="text-white font-bold mb-6 text-xl">{t.follow}</p>
                <div className="flex gap-4">
                  {[
                    { icon: 'instagram', link: 'https://instagram.com/byt_aldyzayn' }
                  ].map(social => (
                    <a key={social.icon} href={social.link} target="_blank" rel="noreferrer" className="w-16 h-16 rounded-none border border-white/30 flex items-center justify-center text-white hover:bg-[#EFE9E1] hover:text-[#B89564] transition-all text-2xl">
                      <i className={`fa-brands fa-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const LeakDetectionService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'كشف تسربات المياه في دبي والشارقة' : 'Water Leak Detection in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'حلول نهائية لمشاكل التسربات بأحدث الأجهزة في الإمارات' : 'Permanent solutions for leaks using latest tech in UAE',
        detectTitle: lang === 'ar' ? 'طرق كشف التسربات' : 'Detection Methods',
        riskTitle: lang === 'ar' ? 'مخاطر التسرب' : 'Leak Risks',
        cta: lang === 'ar' ? 'اطلب فحص للكشف عن التسربات' : 'Request Leak Inspection',
    };

    return (
        <div className="animate-fade-in text-white">
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/1200x/55/15/fc/5515fc95db430782cce00caba0fd6849.jpg"
                    alt="Leak Detection"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent flex flex-col justify-end p-8 md:p-16">
                    <button onClick={onBack} className="absolute top-8 left-8 text-[#B89564] flex items-center gap-2 hover:gap-4 transition-all font-bold bg-black/30 p-2 rounded-lg backdrop-blur-sm">
                        <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'right' : 'left'}`}></i> {t.back}
                    </button>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">{t.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">{t.subtitle}</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://wa.me/971566636483" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128c7e] text-white px-8 py-3 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl">
                            <i className="fa-brands fa-whatsapp text-2xl"></i>
                            {lang === 'ar' ? 'تواصل واتساب' : 'WhatsApp'}
                        </a>
                        <a href="tel:+971566636483" className="inline-flex items-center gap-3 bg-[#B89564] hover:bg-[#8A6F4D] text-white px-8 py-3 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl">
                            <i className="fa-solid fa-phone text-2xl"></i>
                            {lang === 'ar' ? 'اتصال مباشر' : 'Call Now'}
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 space-y-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.detectTitle}</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            {lang === 'ar'
                                ? 'نستخدم أحدث جهاز كشف تسرب المياه للوصول إلى مصدر المشكلة بدقة متناهية دون الحاجة للتكسير العشوائي. خدماتنا تغطي كشف تسربات المياه في الشارقة ودبي، وتشمل فحص تسرب المواسير الداخلية والخزانات. نقدم تقرير كشف تسربات المياه معتمد لإصلاح الخلل بفاعلية.'
                                : 'We use the latest water leak detection devices to pinpoint the problem source without random demolition. Our services cover Sharjah and Dubai, including internal pipe and tank leaks. We provide certified leak detection reports.'}
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-[#B89564]/10 p-4 rounded-xl border border-[#B89564]/20">
                                <i className="fa-solid fa-microchip text-2xl text-[#B89564]"></i>
                                <div>
                                    <h4 className="font-bold">{lang === 'ar' ? 'جهاز فحص تحت البلاط' : 'Under-tile Scanner'}</h4>
                                    <p className="text-xs text-gray-400">{lang === 'ar' ? 'تقنية الموجات الصوتية لتحديد مكان الكسر مخفي.' : 'Acoustic wave tech to locate hidden breaks.'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-[#B89564]/10 p-4 rounded-xl border border-[#B89564]/20">
                                <i className="fa-solid fa-file-contract text-2xl text-[#B89564]"></i>
                                <div>
                                    <h4 className="font-bold">{lang === 'ar' ? 'تقارير معتمدة' : 'Certified Reports'}</h4>
                                    <p className="text-xs text-gray-400">{lang === 'ar' ? 'تقارير فنية دقيقة تساعد في الصيانة ومطالبات التأمين.' : 'Precise technical reports for maintenance and insurance claims.'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#2A2422] p-8 rounded-3xl">
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{lang === 'ar' ? 'علامات وجود تسرب' : 'Signs of Leakage'}</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex gap-3"><i className="fa-solid fa-circle-exclamation text-red-500 mt-1"></i> {lang === 'ar' ? 'ارتفاع مفاجئ في فاتورة المياه' : 'Sudden rise in water bill'}</li>
                            <li className="flex gap-3"><i className="fa-solid fa-circle-exclamation text-red-500 mt-1"></i> {lang === 'ar' ? 'ظهور بقع رطوبة أو عفن على الجدران' : 'Damp spots or mold on walls'}</li>
                            <li className="flex gap-3"><i className="fa-solid fa-circle-exclamation text-red-500 mt-1"></i> {lang === 'ar' ? 'سماع صوت خرير مياه غير مبرر' : 'Hearing unexplained running water'}</li>
                            <li className="flex gap-3"><i className="fa-solid fa-circle-exclamation text-red-500 mt-1"></i> {lang === 'ar' ? 'تفكك البلاط أو السيراميك' : 'Loose tiles or ceramics'}</li>
                        </ul>
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'كشف تسربات المياه إلكترونياً بدون تكسير' : 'Electronic Leak Detection Without Demolition'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'تعتبر مشكلة تسرب المياه من أخطر المشاكل التي تواجه المباني. نحن نقدم خدمة "كشف تسربات المياه" باستخدام أحدث التقنيات. لا داعي للقلق وتكسير الجدران والأرضيات عشوائياً، فنحن نمتلك "جهاز كشف تسرب المياه" المتطور الذي يحدد مكان الخلل بدقة السنتيمتر. نغطي بخدماتنا كافة المناطق بما فيها "كشف تسربات المياة في الشارقة" ودبي.'
                                    : 'Water leakage is dangerous. We offer leak detection using latest tech without random demolition. Our advanced devices pinpoint leaks precisely. We cover Sharjah and Dubai.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'أنواع التسربات التي نكتشفها' : 'Leak Types We Detect'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'نعالج كافة أنواع التسرب، بدءاً من "تسرب المواسير الداخلية" المخفية داخل الجدران، وصولاً إلى تسريبات تحت الأرضيات باستخدام "جهاز فحص تسريب المياه تحت البلاط". هذه التقنية توفر عليك تكاليف إعادة الترميم الباهظة. كما نقوم بفحص تسربات الخزانات والمسابح التي قد تؤدي لارتفاع فاتورة المياه بشكل كبير.'
                                    : 'We handle all leaks, from internal pipes in walls to under-tile leaks using scanners, saving renovation costs. We also check tanks and pools.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'التقارير والإصلاح' : 'Reports & Repair'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'بعد الكشف، نقدم للمالك "تقرير كشف تسربات المياه" فني ومفصل، يمكن استخدامه لدى الجهات المختصة لخفض فاتورة المياه أو لمطالبات التأمين. فريقنا لا يكتفي بالكشف فقط، بل يقوم بالإصلاح الفوري، وعزل المنطقة المتضررة لضمان عدم عودة المشكلة مرة أخرى.'
                                    : 'We provide a detailed technical report for bill reduction/insurance. We also perform immediate repair and insulation ensuring the problem does not recur.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن كشف التسربات' : 'Leak Detection FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كيف يعمل جهاز كشف تسرب المياه؟' : 'How does the leak detector work?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'يعمل الجهاز عن طريق استشعار الذبذبات الصوتية الناتجة عن خروج المياه من الأنابيب تحت الضغط. يقوم الجهاز بتحديد مكان الصوت بدقة عالية حتى تحت البلاط أو الخرسانة.'
                                    : 'The device detects acoustic vibrations from water escaping pipes under pressure. It pinpoints the sound location precisely even under tiles or concrete.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل التقرير معتمد لدى شركة المياه؟' : 'Is the report certified?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، نقدم تقارير تخصصية معتمدة توضح سبب المشكلة وموقعها، مما يساعدك في تقديم اعتراض على فواتير المياه المرتفعة لدى الجهات المختصة.'
                                    : 'Yes, we provide certified technical reports explaining the cause and location, helping you contest high water bills with authorities.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل يتم تكسير الحمام بالكامل للإصلاح؟' : 'Do you demolish the whole bathroom?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'لا، بفضل تقنيات تحديد الموقع بدقة، نقوم بتكسير بلاطة واحدة أو اثنتين فقط في مكان العطل للإصلاح، ثم نعيد المكان كما كان.'
                                    : 'No, thanks to precise location tech, we break only one or two tiles at the fault spot for repair, then restore it.'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="https://wa.me/971566636483" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128c7e] text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl">
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        {t.cta}
                    </a>
                    <a href="tel:+971566636483" className="inline-flex items-center gap-3 bg-[#B89564] hover:bg-[#8A6F4D] text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl mt-4 md:mt-0 md:mx-4">
                        <i className="fa-solid fa-phone text-2xl"></i>
                        {lang === 'ar' ? 'اتصال مباشر' : 'Call Now'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeakDetectionService;

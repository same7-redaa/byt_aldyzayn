import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const MaintenanceService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'الصيانة العامة والترميم في دبي والشارقة' : 'General Maintenance in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'حلول صيانة شاملة في الإمارات تضمن راحة بالك' : 'Comprehensive maintenance solutions in UAE ensuring your peace of mind',
        servicesTitle: lang === 'ar' ? 'خدمات الصيانة المنزلية' : 'Home Maintenance Services',
        appliancesTitle: lang === 'ar' ? 'صيانة الأجهزة' : 'Appliance Repair',
        contractTitle: lang === 'ar' ? 'عقود الصيانة' : 'Maintenance Contracts',
        cta: lang === 'ar' ? 'اطلب فني صيانة الآن' : 'Request Technician Now',
    };

    return (
        <div className="animate-fade-in text-white">
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/93/5b/94/935b946385c8d4a87cb76dcf3ea1b001.jpg"
                    alt="Maintenance Services"
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

                {/* Main Services */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.servicesTitle}</h2>
                        <p className="text-gray-300 leading-8 mb-8">
                            {lang === 'ar'
                                ? 'نقدم خدمة صيانة عامة متكاملة في دبي والشارقة. تشمل خدماتنا ترميم الحمامات، علاج الرطوبة، وصيانة التمديدات الكهربائية والصحية. لدينا فريق فني محترف جاهز للتعامل مع كافة الأعطال الطارئة.'
                                : 'We provide integrated general maintenance in Dubai and Sharjah. Our services include bathroom renovation, humidity treatment, and electrical/plumbing maintenance. Our pro team is ready for emergencies.'}
                        </p>
                        <div className="space-y-4">
                            {[
                                { icon: 'fa-bolt', text: 'صيانة كهرباء وإضاءة' },
                                { icon: 'fa-faucet', text: 'سباكة (تكسير وتركيب)' },
                                { icon: 'fa-screwdriver-wrench', text: 'ترميم وتجديد حمامات' },
                                { icon: 'fa-house-chimney-crack', text: 'علاج الشروخ والرطوبة' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-[#1C1C1C] p-4 rounded-xl border border-white/5">
                                    <div className="w-10 h-10 bg-[#B89564]/20 rounded-full flex items-center justify-center text-[#B89564]">
                                        <i className={`fa-solid ${item.icon}`}></i>
                                    </div>
                                    <span className="font-bold text-gray-200">{lang === 'ar' ? item.text : 'Maintenance Service'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#2A2422] p-8 rounded-3xl border border-[#B89564]/20">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <i className="fa-solid fa-plug text-[#B89564]"></i> {t.appliancesTitle}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-[#1C1C1C] rounded-xl hover:bg-[#B89564] hover:text-[#1C1C1C] transition-colors group cursor-pointer">
                                <i className="fa-solid fa-snowflake text-3xl mb-3 text-blue-400 group-hover:text-white"></i>
                                <h4 className="font-bold">{lang === 'ar' ? 'صيانة مكيفات' : 'AC Repair'}</h4>
                            </div>
                            <div className="text-center p-4 bg-[#1C1C1C] rounded-xl hover:bg-[#B89564] hover:text-[#1C1C1C] transition-colors group cursor-pointer">
                                <i className="fa-solid fa-shirt text-3xl mb-3 text-blue-400 group-hover:text-white"></i>
                                <h4 className="font-bold">{lang === 'ar' ? 'تصليح غسالات' : 'Washing Machines'}</h4>
                            </div>
                            <div className="text-center p-4 bg-[#1C1C1C] rounded-xl hover:bg-[#B89564] hover:text-[#1C1C1C] transition-colors group cursor-pointer">
                                <i className="fa-solid fa-temperature-arrow-down text-3xl mb-3 text-blue-400 group-hover:text-white"></i>
                                <h4 className="font-bold">{lang === 'ar' ? 'تصليح ثلاجات' : 'Refrigerators'}</h4>
                            </div>
                            <div className="text-center p-4 bg-[#1C1C1C] rounded-xl hover:bg-[#B89564] hover:text-[#1C1C1C] transition-colors group cursor-pointer">
                                <i className="fa-solid fa-fire-burner text-3xl mb-3 text-orange-400 group-hover:text-white"></i>
                                <h4 className="font-bold">{lang === 'ar' ? 'أفران وبوتوجاز' : 'Ovens'}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Competitor Brands / SEO Tags */}
                <div className="py-8 border-t border-b border-white/10 text-center">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">{lang === 'ar' ? 'العلامات التجارية والشركاء' : 'Brands & Partners'}</p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {['Jotun', 'Danube', 'IKEA', 'Al Gedra', 'Kayan Decor', 'National Paints'].map((brand, i) => (
                            <span key={i} className="text-xl font-black text-gray-400">{brand}</span>
                        ))}
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'خدمات الصيانة العامة الشاملة للمنازل' : 'Comprehensive Home Maintenance Services'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'الحفاظ على منزلك يتطلب "صيانة عامة" دورية ومحترفة. نحن "شركة صيانة في دبي" تقدم لك كافة الحلول تحت سقف واحد. من السباكة والكهرباء إلى الترميم الكامل، فريقنا جاهز للتعامل مع أي طارئ. نهدف لتوفير راحة البال لك ولعائلتك من خلال خدمات سريعة وموثوقة.'
                                    : 'Home upkeep needs periodic professional maintenance. We are a maintenance company in Dubai offering all solutions: plumbing, electrical, renovation. We aim for your peace of mind.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'صيانة الأجهزة المنزلية والتكييف' : 'Appliance & AC Maintenance'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'لا داعي للبحث عن فنيين متعددين، فنحن نقدم خدمات متخصصة تشمل "صيانة مكيفات" (سبليت ومركزي) لضمان كفائتها في الصيف، و"تصليح غسالات" و"تصليح ثلاجات" من كافة الماركات. فنيونا مدربون على تشخيص الأعطال بدقة وإصلاحها باستخدام قطع غيار أصلية لضمان عمل الجهاز كأنه جديد.'
                                    : 'No need for multiple technicians. We offer specialized AC maintenance, washing machine repair, and refrigerator repair. Our techs use genuine parts.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'الترميم وعلاج مشاكل البناء' : 'Renovation & Building Fixes'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'إذا كان منزلك يعاني من القدم، فنحن نقوم بأعمال "ترميم حمامات" وتجديدها بالكامل، بما في ذلك تغيير السيراميك والمواسير. كما نعالج المشاكل المزمنة مثل "علاج الرطوبة" في الجدران والأسقف التي تؤثر على صحة السكان وجودة الدهان. خدماتنا تشمل أيضاً أعمال النجارة، تركيب الأقفال، وكل ما يحتاجه بيتك ليعود في أفضل حالاته.'
                                    : 'If your home is old, we renovate bathrooms completely. We also treat chronic issues like humidity affecting health and paint. Services include carpentry and locks.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن الصيانة العامة' : 'Maintenance FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل تقدمون عقود صيانة سنوية؟' : 'Do you offer annual contracts?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، نوفر عقود صيانة سنوية للمنازل والفلل والمباني التجارية تشمل زيارات دورية لفحص التكييف، السباكة، والكهرباء لتجنب الأعطال المفاجئة.'
                                    : 'Yes, we offer annual maintenance contracts for homes, villas, and commercial buildings including periodic checks for AC, plumping, electrical.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'ما هي ضمانتكم على قطع الغيار؟' : 'Warranty on spare parts?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نحن نستخدم قطع غيار أصلية فقط، ونقدم ضماناً عليها وعلى التركيب يتراوح من 6 أشهر إلى سنة حسب نوع القطعة.'
                                    : 'We use only genuine parts, offering warranty on parts and labor ranging from 6 months to a year depending on the part.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل تعملون في حالات الطوارئ؟' : 'Do you work in emergencies?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، لدينا فريق طوارئ جاهز 24/7 للتعامل مع مشاكل انقطاع الكهرباء، تسربات المياه الخطيرة، وتوقف المكيفات.'
                                    : 'Yes, we have a 24/7 emergency team for power outages, serious leaks, and AC failures.'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="https://wa.me/971566636483" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128c7e] text-white px-10 py-5 rounded-full text-xl font-bold transition-all hover:scale-105 shadow-2xl">
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        {t.cta}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceService;

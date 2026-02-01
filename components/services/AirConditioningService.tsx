import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const AirConditioningService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'صيانة التكييفات في دبي والشارقة' : 'Air Conditioning Maintenance in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'خدمات صيانة وتركيب شاملة لجميع أنواع أجهزة التكييف' : 'Comprehensive maintenance and installation services for all AC types',
        servicesTitle: lang === 'ar' ? 'خدمات صيانة التكييفات' : 'AC Maintenance Services',
        productsTitle: lang === 'ar' ? 'أنواع التكييفات التي نخدمها' : 'AC Types We Service',
        qualityTitle: lang === 'ar' ? 'جودة وضمان' : 'Quality & Warranty',
        cta: lang === 'ar' ? 'احجز موعد صيانة' : 'Book Maintenance',
    };

    return (
        <div className="animate-fade-in text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/2b/01/52/2b0152d7b395941c41a5b2547876f240.jpg"
                    alt="Air Conditioning Services"
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

            {/* Content */}
            <div className="container mx-auto px-6 py-16 space-y-20">

                {/* Services Grid */}
                <div className="grid lg:grid-cols-1 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.servicesTitle}</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            {lang === 'ar'
                                ? 'نقدم خدمات صيانة تكييفات احترافية في دبي والشارقة تشمل جميع أنواع المكيفات. لدينا فريق من الفنيين المتخصصين في صيانة التكييف المركزي، صيانة مكيفات سبليت، وتركيب أجهزة تكييف جديدة. نوفر خدمة صيانة دورية وصيانة طارئة على مدار الساعة لضمان عمل أجهزتكم بكفاءة عالية طوال العام.'
                                : 'We offer professional AC maintenance services in Dubai and Sharjah for all types of air conditioners. Our specialized technicians handle central AC, split units, and new installations. We provide scheduled and emergency 24/7 maintenance ensuring efficient operation year-round.'}
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            {[
                                lang === 'ar' ? 'صيانة تكييف مركزي' : 'Central AC Maintenance',
                                lang === 'ar' ? 'صيانة مكيفات سبليت' : 'Split AC Maintenance',
                                lang === 'ar' ? 'تنظيف وتعقيم المكيفات' : 'AC Cleaning & Sterilization',
                                lang === 'ar' ? 'تعبئة غاز الفريون' : 'Freon Gas Refill',
                                lang === 'ar' ? 'إصلاح الأعطال' : 'Fault Repair',
                                lang === 'ar' ? 'تركيب مكيفات جديدة' : 'New AC Installation'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 bg-[#B89564] rounded-full"></span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* AC Types Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89564]/5 rounded-full filter blur-3xl"></div>

                    <h2 className="text-3xl font-bold text-white mb-8 relative z-10">{t.productsTitle}</h2>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {/* Card 1 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                <i className="fa-solid fa-building"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'تكييف مركزي' : 'Central AC'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'صيانة وإصلاح أنظمة التكييف المركزي للمباني والفلل الكبيرة مع ضمان الكفاءة العالية.' : 'Maintenance and repair of central AC systems for large buildings and villas with high efficiency guarantee.'}</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                <i className="fa-solid fa-fan"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'مكيفات سبليت' : 'Split Units'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'تركيب وصيانة مكيفات سبليت من جميع الماركات العالمية مثل سامسونج، إل جي، وجنرال إلكتريك.' : 'Installation and maintenance of split AC units from all major brands like Samsung, LG, and GE.'}</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                <i className="fa-solid fa-wind"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'مكيفات شباك' : 'Window AC'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'خدمات صيانة وتركيب مكيفات الشباك بأسعار تنافسية وجودة عالية.' : 'Window AC maintenance and installation services at competitive prices and high quality.'}</p>
                        </div>
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'صيانة التكييفات في دبي والشارقة: دليلك الشامل' : 'AC Maintenance in Dubai & Sharjah: Complete Guide'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'تعتبر صيانة التكييفات من أهم الخدمات الضرورية في دبي والشارقة نظراً للمناخ الحار. نحن نقدم أفضل خدمات صيانة تكييف مركزي وصيانة مكيفات سبليت على يد فنيين معتمدين. سواء كنت بحاجة إلى فني تكييف للصيانة الدورية، أو تبحث عن شركة صيانة تكييف موثوقة لإصلاح الأعطال، فنحن الخيار الأمثل لك.'
                                    : 'AC maintenance is essential in Dubai and Sharjah due to the hot climate. We offer the best central AC and split unit maintenance by certified technicians. Whether you need routine maintenance or emergency repairs, we are your trusted choice.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'أهمية الصيانة الدورية للتكييف' : 'Importance of Regular AC Maintenance'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'الصيانة الدورية تضمن عمل المكيف بكفاءة عالية وتقلل من استهلاك الكهرباء. نوفر عقود صيانة تكييف شاملة تتضمن تنظيف الفلاتر، فحص غاز الفريون، تنظيف المبخر والمكثف، وفحص الدوائر الكهربائية. فني تركيب وصيانة تكييف لدينا مدرب على أحدث التقنيات لضمان أطول عمر افتراضي لجهازك.'
                                    : 'Regular maintenance ensures high AC efficiency and reduces electricity consumption. Our comprehensive maintenance contracts include filter cleaning, freon checks, evaporator and condenser cleaning, and electrical circuit inspection. Our technicians are trained on the latest technologies.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'خدمات تنظيف وتعقيم المكيفات' : 'AC Cleaning & Sterilization Services'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'التنظيف العميق للمكيفات ضروري للحفاظ على جودة الهواء الداخلي وصحة العائلة. نستخدم مواد تعقيم معتمدة ومعدات متخصصة لتنظيف الوحدات الداخلية والخارجية. خدماتنا تشمل إزالة الأتربة والبكتيريا من الفلاتر والمروحة، مما يضمن هواء نقي ومنعش في منزلك أو مكتبك.'
                                    : 'Deep AC cleaning is essential for indoor air quality and family health. We use certified sterilization materials and specialized equipment for internal and external unit cleaning, ensuring fresh and clean air.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'إصلاح أعطال التكييف الشائعة' : 'Common AC Fault Repairs'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'نتعامل مع جميع أنواع أعطال المكيفات من عدم التبريد، تسرب المياه، الأصوات الغريبة، وتوقف الجهاز عن العمل. فريقنا مجهز بقطع الغيار الأصلية ويقدم خدمة سريعة في نفس اليوم. كما نوفر خدمة تعبئة غاز فريون للمكيفات التي تعاني من ضعف التبريد مع ضمان عدم التسريب.'
                                    : 'We handle all AC faults including no cooling, water leakage, strange noises, and complete breakdowns. Our team uses original spare parts and offers same-day service. We also provide freon gas refill with leak-proof guarantee.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'تركيب أجهزة تكييف جديدة' : 'New AC Installation'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'إذا كنت تبحث عن تركيب مكيف جديد، فنحن نقدم استشارات مجانية لاختيار النوع والسعة المناسبة لمساحتك. نتعامل مع جميع الماركات العالمية ونضمن تركيب احترافي يتوافق مع معايير السلامة. كما نوفر خيارات تكييف طاقة شمسية للتوفير في فاتورة الكهرباء.'
                                    : 'For new AC installation, we offer free consultation to choose the right type and capacity. We work with all major brands and guarantee professional installation meeting safety standards, including solar-powered AC options.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن صيانة التكييفات' : 'AC Maintenance FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كم مرة يحتاج المكيف للصيانة؟' : 'How often does AC need maintenance?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'ننصح بإجراء صيانة دورية كل 3-4 أشهر في الإمارات نظراً للاستخدام المكثف. الصيانة المنتظمة تحافظ على كفاءة التكييف وتقلل من الأعطال المفاجئة.'
                                    : 'We recommend maintenance every 3-4 months in the UAE due to intensive use. Regular maintenance maintains AC efficiency and reduces sudden breakdowns.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'ما هي علامات احتياج المكيف للصيانة؟' : 'What are signs AC needs maintenance?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'العلامات تشمل: ضعف التبريد، ارتفاع فاتورة الكهرباء، أصوات غريبة، تسرب مياه، رائحة كريهة، أو توقف الجهاز بشكل متكرر. عند ملاحظة أي منها اتصل بنا فوراً.'
                                    : 'Signs include: weak cooling, high electricity bills, strange noises, water leaks, bad odors, or frequent shutdowns. Contact us immediately if you notice any of these.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل توفرون ضمان على الصيانة؟' : 'Do you provide maintenance warranty?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، نقدم ضمان على جميع أعمال الصيانة والقطع المستبدلة. كما نوفر عقود صيانة سنوية تشمل زيارات دورية وأولوية في الخدمة الطارئة.'
                                    : 'Yes, we provide warranty on all maintenance work and replaced parts. We also offer annual contracts including regular visits and priority emergency service.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كم تستغرق عملية الصيانة؟' : 'How long does maintenance take?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'الصيانة العادية تستغرق من 30-60 دقيقة لكل وحدة. في حال وجود أعطال قد تستغرق وقتاً أطول حسب نوع المشكلة. نلتزم بإنجاز العمل بسرعة دون التأثير على الجودة.'
                                    : 'Regular maintenance takes 30-60 minutes per unit. For repairs it may take longer depending on the issue. We commit to quick completion without compromising quality.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#B89564] p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-black text-[#1C1C1C] mb-2">{lang === 'ar' ? 'هل تحتاج لصيانة تكييف في دبي أو الشارقة؟' : 'Need AC maintenance in Dubai or Sharjah?'}</h3>
                        <p className="text-[#1C1C1C]/80 font-semibold">{lang === 'ar' ? 'تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر خاص' : 'Contact us now for free inspection and special quote'}</p>
                    </div>
                    <a href="https://wa.me/971566636483" className="whitespace-nowrap bg-[#1C1C1C] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                        <i className="fa-brands fa-whatsapp"></i> {lang === 'ar' ? 'واتساب مباشر' : 'WhatsApp'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AirConditioningService;

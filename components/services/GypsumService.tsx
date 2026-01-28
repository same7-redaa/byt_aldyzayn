import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const GypsumService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'تركيب الجبس بورد في دبي والشارقة' : 'Gypsum Board in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'لمسات عصرية وأسقف فخمة تناسب جميع الأذواق في الإمارات' : 'Modern touches and luxurious ceilings in UAE for all tastes',
        typesTitle: lang === 'ar' ? 'أنواع الجبس والخدمات' : 'Gypsum Types & Services',
        placesTitle: lang === 'ar' ? 'أماكن التركيب والتطبيقات' : 'Installation Locations & Applications',
        techTitle: lang === 'ar' ? 'المواصفات الفنية والأسعار' : 'Technical Specs & Pricing',
        cta: lang === 'ar' ? 'اطلب عرض سعر للجبس' : 'Get a Gypsum Quote',
    };

    return (
        <div className="animate-fade-in text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/1200x/94/76/45/947645087f69f557b8690484ae0b93ba.jpg"
                    alt="Gypsum Board Designs"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent flex flex-col justify-end p-8 md:p-16">
                    <button onClick={onBack} className="absolute top-8 left-8 text-[#B89564] flex items-center gap-2 hover:gap-4 transition-all font-bold bg-black/30 p-2 rounded-lg backdrop-blur-sm">
                        <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'right' : 'left'}`}></i> {t.back}
                    </button>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">{t.title}</h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">{t.subtitle}</p>
                    <a href="https://wa.me/971566636483" className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128c7e] text-white px-8 py-3 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl">
                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                        {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                    </a>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 py-16 space-y-20">

                {/* SEO - Types */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.typesTitle}</h2>
                        <p className="text-gray-300 leading-8 text-lg mb-6">
                            {lang === 'ar'
                                ? 'نوفر كافة أنواع الجبس بورد والأسقف المستعارة بأعلى معايير الجودة. تشمل خدماتنا تركيب الجبس بورد العادي والمقاوم للرطوبة، والجبس البلدي للحليات الكلاسيكية، والجبس الفرنسي الفاخر. نقوم بتنفيذ الكرانيش الجبسية والقواطع (البارتيشن) لفصل المساحات بأناقة.'
                                : 'We provide all types of gypsum board and suspended ceilings with the highest quality standards. Our services include standard and moisture-resistant gypsum board, Baladi gypsum for classic ornaments, and luxury French gypsum. We execute gypsum cornices and partitions to separate spaces elegantly.'}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['جبس بورد', 'جبس بلدي', 'جبس فرنسي', 'أسقف مستعارة', 'كرانيش جبس', 'قواطع جبسية'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-[#B89564]/10 border border-[#B89564]/30 rounded-full text-sm text-[#B89564] font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SEO - Places */}
                <div className="grid md:grid-cols-1 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.placesTitle}</h2>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check-circle text-[#B89564] mt-1"></i>
                                <span><strong>{lang === 'ar' ? 'جبس بورد غرف نوم ومجالس:' : 'Bedroom & Majlis Gypsum:'}</strong> {lang === 'ar' ? 'تصاميم هادئة ورومانسية لغرف النوم، وفخمة للمجالس والصالات.' : 'Quiet romantic designs for bedrooms, and luxurious ones for salons.'}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check-circle text-[#B89564] mt-1"></i>
                                <span><strong>{lang === 'ar' ? 'ديكورات شاشات وممرات:' : 'TV Units & Corridors:'}</strong> {lang === 'ar' ? 'مكتبات تلفزيون عصرية مدمجة بالجدار، وسقوف ممرات انسيابية.' : 'Modern built-in TV units and streamlined corridor ceilings.'}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-check-circle text-[#B89564] mt-1"></i>
                                <span><strong>{lang === 'ar' ? 'ديكورات مطابخ وفواصل:' : 'Kitchens & Dividers:'}</strong> {lang === 'ar' ? 'جبس مقاوم للرطوبة والحرارة للمطابخ، وفواصل ذكية بين الصالتين.' : 'Moisture/heat resistant gypsum for kitchens, and smart dividers between halls.'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEO - Technical/Prices */}
                <div className="bg-[#2A2422] p-8 rounded-3xl border border-[#B89564]/20">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">{t.techTitle}</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-[#1C1C1C] rounded-2xl">
                            <i className="fa-solid fa-ruler-combined text-4xl text-[#B89564] mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'حساب الكميات' : 'Quantity Surveying'}</h3>
                            <p className="text-gray-400 text-sm">{lang === 'ar' ? 'نحسب سعر متر الجبس بورد بدقة مع التركيب، ونوفر أفضل الأسعار للألواح.' : 'We calculate per-meter pricing accurately including installation.'}</p>
                        </div>
                        <div className="p-6 bg-[#1C1C1C] rounded-2xl">
                            <i className="fa-solid fa-weight-hanging text-4xl text-[#B89564] mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'مواصفات التحمل' : 'Load Specs'}</h3>
                            <p className="text-gray-400 text-sm">{lang === 'ar' ? 'نراعي وزن لوح الجبس وطريقة تركيب الحديد لضمان الأمان التام وعدم التقوس.' : 'We consider board weight and iron structure for safety.'}</p>
                        </div>
                        <div className="p-6 bg-[#1C1C1C] rounded-2xl">
                            <i className="fa-solid fa-location-dot text-4xl text-[#B89564] mb-4"></i>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'التغطية الجغرافية' : 'Coverage'}</h3>
                            <p className="text-gray-400 text-sm">{lang === 'ar' ? 'خدمات تركيب جبس بورد في دبي، الشارقة، وكافة الإمارات بفريق محترف.' : 'Gypsum installation services in Dubai, Sharjah, and all UAE.'}</p>
                        </div>
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'دليلك الشامل لتركيب الجبس بورد في دبي والشارقة' : 'Comprehensive Guide to Gypsum Board in Dubai & Sharjah'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'يعتبر الجبس بورد من أهم عناصر الديكور الحديث التي تضفي لمسة جمالية وفخامة على المنازل والمكاتب. نحن في بيت التصميم نقدم خدمات تركيب جبس بورد في دبي والشارقة بأعلى مستويات الاحترافية. يتساءل الكثيرون عن سعر متر الجبس بورد مع التركيب، ونحن نضمن تقديم أسعار تنافسية مع الحفاظ على الجودة العالية.'
                                    : 'Gypsum board is a key element of modern decor, adding aesthetic touch and luxury. We provide gypsum board installation in Dubai and Sharjah with high professionalism. Many ask about the price per meter, and we ensure competitive rates with high quality.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'أفضل أنواع الجبس بورد واستخداماته' : 'Best Gypsum Types & Uses'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'تتنوع الخدمات التي نقدمها لتشمل كافة احتياجاتك. إذا كنت تبحث عن جبس بورد غرف نوم بتصاميم رومانسية وهادئة، أو جبس بورد شاشات (مكتبات تلفزيون) عصرية توفر مساحة وتعطي مظهراً أنيقاً، فنحن نمتلك كتالوجاً واسعاً من التصاميم. نقوم أيضاً بتركيب أسقف مستعارة للممرات والمطابخ باستخدام جبس مقاوم للرطوبة، مما يضمن عمراً افتراضياً طويلاً.'
                                    : 'We offer diverse services. Whether looking for romantic bedroom gypsum, modern TV units, or suspended ceilings for corridors and kitchens using moisture-resistant gypsum.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'الجودة الفنية والتركيب' : 'Technical Quality & Installation'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'نهتم بأدق التفاصيل الفنية، بدءاً من طريقة تركيب حديد سقف جبس بورد لضمان التثبيت الآمن، وحتى حساب وزن لوح الجبس بورد لتوزيع الأحمال بشكل صحيح. نستخدم أفضل أنواع الجبس سواء كان "جبس بورد عادي" للأسقف الجافة، أو "جبس بلدي" و"جبس فرنسي" للأعمال الزخرفية والكرانيش المعقدة. كما نقوم بتنفيذ قواطع جبسية (بارتيشن) وفواصل بين الصالتين جبس لاستغلال المساحات بذكاء دون الحاجة لبناء جدران إسمنتية مكلفة.'
                                    : 'We focus on technical details, from iron structure installation to load distribution. We use standard gypsum for dry ceilings, and Baladi/French gypsum for decorative cornices. We also execute gypsum partitions to divide spaces smartly.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن الجبس بورد' : 'Gypsum Board FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'ما الفرق بين الجبس بورد العادي والمقاوم للرطوبة؟' : 'Difference between Standard and Moisture-Resistant Gypsum?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'الجبس بورد العادي (الأبيض) يستخدم في الغرف والصالات، بينما المقاوم للرطوبة (الأخضر) يحتوي على مواد سيليكونية ومادة فايبر جلاس تجعله مثالياً للمطابخ والحمامات والمناطق الرطبة.'
                                    : 'Standard (White) gypsum is for rooms/halls. Moisture-resistant (Green) contains silicone and fiberglass, perfect for kitchens, bathrooms, and humid areas.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل الجبس بورد يتحمل أوزان الثريات الثقيلة؟' : 'Does Gypsum Board support heavy chandeliers?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'الجبس بورد بحد ذاته لا يتحمل أوزان ثقيلة مباشرة، ولكننا نقوم بتركيب دعامات حديدية خاصة (جسور) مثبتة في السقف الخرساني لتعليق الثريات والمكيفات بأمان تام.'
                                    : 'Gypsum board itself cannot hold heavy weights. We install special iron supports (bridges) fixed to the concrete ceiling to hang chandeliers and ACs safely.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كم يستغرق تركيب سقف جبس بورد لغرفة؟' : 'How long does room gypsum installation take?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'عادة ما يستغرق تركيب سقف غرفة مساحتها 4x5 متر من يوم إلى يومين شامل المعجون والصنفرة، ويعتمد ذلك على تعقيد التصميم المختار.'
                                    : 'Usually, a 4x5m room takes 1-2 days including putty and sanding, depending on the design complexity.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
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

export default GypsumService;

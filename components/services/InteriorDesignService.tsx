import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const InteriorDesignService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'التصميم الداخلي في دبي والشارقة' : 'Interior Design in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'نحول مساحتك إلى تحفة فنية في الإمارات' : 'Turning your space into a masterpiece in UAE',
        designTitle: lang === 'ar' ? 'خدمات التصميم والديكور' : 'Design & Decor Services',
        claddingTitle: lang === 'ar' ? 'بديل الخشب والرخام (التكسيات الحديثة)' : 'Wood & Marble Alternative (Cladding)',
        stylesTitle: lang === 'ar' ? 'أنماط التصميم' : 'Design Styles',
        cta: lang === 'ar' ? 'استشر مصمم ديكور الآن' : 'Consult a Designer Now',
    };

    return (
        <div className="animate-fade-in text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920"
                    alt="Luxury Interior Design"
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

            {/* Content */}
            <div className="container mx-auto px-6 py-16 space-y-24">

                {/* Design Section */}
                <div className="grid lg:grid-cols-1 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.designTitle}</h2>
                        <p className="text-gray-300 leading-8 text-lg mb-8">
                            {lang === 'ar'
                                ? 'فريقنا من مهندسي التصميم الداخلي يقدم حلولاً إبداعية لكافة المساحات. سواء كنت تبحث عن شركات تصميم داخلي، أو مصمم ديكور محترف لمكتبك أو منزلك، نحن هنا لتحقيق رؤيتك. نغطي كافة مراحل العمل من التخطيط وتوزيع الأثاث إلى اختيار المواد والألوان.'
                                : 'Our interior design engineering team offers creative solutions for all spaces. Whether you look for interior design companies or a pro decorator, we are here to realize your vision.'}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2"><i className="fa-solid fa-couch text-[#B89564]"></i> {lang === 'ar' ? 'ديكورات صالات ومجالس' : 'Living Rooms & Majlis'}</div>
                            <div className="flex items-center gap-2"><i className="fa-solid fa-utensils text-[#B89564]"></i> {lang === 'ar' ? 'تصميم مطبخ أمريكي' : 'American Kitchens'}</div>
                            <div className="flex items-center gap-2"><i className="fa-solid fa-door-open text-[#B89564]"></i> {lang === 'ar' ? 'ديكور مدخل البيت' : 'Entrance Decor'}</div>
                            <div className="flex items-center gap-2"><i className="fa-solid fa-building text-[#B89564]"></i> {lang === 'ar' ? 'واجهات محلات ومكاتب' : 'Shop Facades & Offices'}</div>
                        </div>
                    </div>
                </div>

                {/* Cladding Section (WPC/Marble) */}
                <div className="bg-[#B89564]/5 p-10 rounded-3xl border border-[#B89564]/10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-4">{t.claddingTitle}</h2>
                        <p className="text-gray-300">
                            {lang === 'ar'
                                ? 'أحدث صيحات الديكور الحديث: بديل الخشب (WPC) وبديل الرخام. خامات عصرية، مقاومة للماء، وسهلة التركيب تعطي مظهر الفخامة بتكلفة مدروسة.'
                                : 'The latest decor trends: WPC (Wood Composite) and Marble Alternatives. Modern materials, waterproof, easy to install giving a luxury look at a reasonable cost.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* WPC */}
                        <div className="bg-[#1C1C1C] p-6 rounded-2xl group hover:-translate-y-2 transition-transform">
                            <div className="h-48 mb-6 rounded-xl bg-[#2A2422] flex items-center justify-center border border-white/5">
                                <i className="fa-solid fa-layer-group text-6xl text-[#B89564]"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#B89564]">{lang === 'ar' ? 'بديل الخشب' : 'Wood Alternative'}</h3>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• {lang === 'ar' ? 'بديل الخشب للجدران وخارجي' : 'Wall & Exterior WPC'}</li>
                                <li>• {lang === 'ar' ? 'مقاوم للرطوبة والحشرات' : 'Moisture & Insect Resistant'}</li>
                                <li>• {lang === 'ar' ? 'تصاميم شرائح عصرية' : 'Modern Slat Designs'}</li>
                            </ul>
                        </div>

                        {/* Marble Alt */}
                        <div className="bg-[#1C1C1C] p-6 rounded-2xl group hover:-translate-y-2 transition-transform">
                            <div className="h-48 mb-6 rounded-xl bg-[#2A2422] flex items-center justify-center border border-white/5">
                                <i className="fa-solid fa-gem text-6xl text-[#B89564]"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#B89564]">{lang === 'ar' ? 'بديل الرخام' : 'Marble Alternative'}</h3>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• {lang === 'ar' ? 'ألواح بديل الرخام اللامعة' : 'Glossy Marble Sheets'}</li>
                                <li>• {lang === 'ar' ? 'بديل الجرانيت للمطابخ' : 'Granite Alt for Kitchens'}</li>
                                <li>• {lang === 'ar' ? 'تركيب سريع وفواصل معدنية' : 'Fast Install & Metal Trims'}</li>
                            </ul>
                        </div>

                        {/* Other */}
                        <div className="bg-[#1C1C1C] p-6 rounded-2xl group hover:-translate-y-2 transition-transform">
                            <div className="h-48 mb-6 rounded-xl bg-[#2A2422] flex items-center justify-center border border-white/5">
                                <i className="fa-solid fa-cubes text-6xl text-[#B89564]"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#B89564]">{lang === 'ar' ? 'تكسيات أخرى' : 'Other Cladding'}</h3>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>• {lang === 'ar' ? 'فوم جدران وبانوهات' : 'Wall Foam & Panels'}</li>
                                <li>• {lang === 'ar' ? 'شرائح ألمنيوم وستيل' : 'Aluminum & Steel Slats'}</li>
                                <li>• {lang === 'ar' ? 'ورق حائط 3D' : '3D Wallpaper'}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Styles Keywords */}
                <div className="border-t border-white/10 pt-10">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">{t.stylesTitle}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['ديكور مودرن', 'ديكور كلاسيك', 'نيوكلاسيك', 'تنسيق ألوان', 'بارتيشن خشب', 'ديكور بلكونات'].map((tag, i) => (
                            <span key={i} className="px-6 py-3 bg-[#1C1C1C] text-gray-300 rounded-lg hover:text-[#B89564] cursor-default transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'رحلتك في عالم الديكور والتصميم الداخلي' : 'Your Journey in Interior Design'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'نحن لسنا مجرد شركة تنفيذ، بل نعتبر من أفضل مكاتب تصميم داخلي في المنطقة. يقدم لك مهندسون ومصمم ديكور محترف رؤية متكاملة لتحويل منزلك إلى واحة من الجمال. تشمل خدماتنا تصميم ديكورات صالات فخمة، وديكورات مجالس عربية وكلاسيكية تليق بضيوفك. كما نتميز في تصميم مطبخ أمريكي مفتوح يجمع بين العملية والأناقة.'
                                    : 'We are more than an execution company; we are top interior designers. We transform your home into an oasis. Services include luxury living rooms, Arab majlis, and functional American open kitchens.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'حلول التكسيات الحديثة: بديل الخشب والرخام' : 'Modern Cladding: Wood & Marble Alternatives'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'لم تعد مضطراً لدفع تكاليف باهظة للحصول على مظهر الخشب أو الرخام الطبيعي. نوفر لك "بديل الخشب" للجدران بأشكال عصرية ومقاومة تامة للماء والحشرات، وهو خيار مثالي للواجهات الخارجية وتلبيس خشب المداخل. أيضاً، "بديل الرخام" يعطي لمعان وفخامة الجرانيت بتكلفة أقل ووزن أخف، مما يجعله مثالياً للمطابخ والحمامات. يتوفر لدينا أيضاً فوم جدران وبانوهات كلاسيك، وشرائح ألمنيوم للديكورات "المودرن".'
                                    : 'No need for high costs for natural wood/marble. We offer WPC (Wood Alt) for walls, waterproof and insect-proof. Marble alternative gives granite luxury at lower cost. We also have wall foam, panels, and aluminum slats.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'لمسات خارجية وتنسيق' : 'Exterior Touches & Coordination'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'لا يقتصر عملنا على الداخل، بل نبدع في ديكور مدخل البيت من الخارج ليعطي انطباعاً أولياً مذهلاً، وتصميم واجهات محلات ديكور تجذب العملاء. حتى المساحات الصغيرة لها نصيب، حيث نصمم ديكور بلكونات خارجية صغيرة تحولها لمكان استرخاء مميز. نهتم جداً بتنسيق الألوان في الديكور واستخدام ورق حائط 3D لإضافة عمق للمكان.'
                                    : 'We also excel in exterior entrances and shop facades. Even small balconies get special designs. We focus on color coordination and 3D wallpapers.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن التصميم الداخلي' : 'Interior Design FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'ما هو بديل الرخام وهل هو عملي؟' : 'Is marble alternative practical?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'بديل الرخام (PVC Marble) هو ألواح بلاستيكية صلبة تشبه الرخام تماماً. هو عملي جداً، مقاوم للماء، لا يتكسر، وسعره أقل بكثير من الرخام الطبيعي.'
                                    : 'PVC Marble resembles natural marble. It is very practical, waterproof, unbreakable, and much cheaper than natural marble.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل تقومون بالتصميم والتنفيذ معاً؟' : 'Do you design and execute?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، نقدم خدمة "تسليم مفتاح". نبدأ بتصميم 3D للمساحة، وبعد موافقتكم نقوم بالتنفيذ والتركيب والإشراف حتى التسليم النهائي.'
                                    : 'Yes, we offer turn-key service. We start with 3D design, and after approval, we execute, install, and supervise until handover.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل بديل الخشب يصلح للواجهات الخارجية؟' : 'Is WPC good for exteriors?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، يوجد نوع خاص من بديل الخشب (WPC خارجي) معالج ليتحمل الشمس والأمطار والرطوبة دون أن يتقشر أو يتغير لونه لسنوات.'
                                    : 'Yes, there is special exterior WPC treated to withstand sun, rain, and humidity without peeling or discoloring for years.'}
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

export default InteriorDesignService;

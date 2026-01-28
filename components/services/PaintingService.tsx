import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const PaintingService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'أصباغ وديكورات في دبي والشارقة' : 'Painting & Decor in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'لمسات فنية تحول منزلك إلى تحفة في الإمارات' : 'Artistic touches turning your home into a masterpiece in UAE',
        servicesTitle: lang === 'ar' ? 'خدمات الصبغ والدهان' : 'Painting Services',
        productsTitle: lang === 'ar' ? 'المنتجات والألوان المميزة' : 'Featured Products & Colors',
        qualityTitle: lang === 'ar' ? 'جودة وضمان' : 'Quality & Warranty',
        cta: lang === 'ar' ? 'احجز موعد مع صباغ' : 'Book a Painter',
    };

    return (
        <div className="animate-fade-in text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/f2/41/da/f241daa5b116f9ae0cc28ea8cc25eb47.jpg"
                    alt="Painting Services"
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
            <div className="container mx-auto px-6 py-16 space-y-20">

                {/* Services Grid */}
                <div className="grid lg:grid-cols-1 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{t.servicesTitle}</h2>
                        <p className="text-gray-300 leading-8 mb-6">
                            {lang === 'ar'
                                ? 'نقدم خدمات صبغ احترافية تغطي الشارقة ودبي. لدينا أفضل معلم جبس وصباغ لتنفيذ كافة أعمال الصبغ الداخلي والخارجي. سواء كنت تبحث عن صباغ رخيص في دبي بجودة مقبولة، أو صباغ شاطر للأعمال الفنية، نحن الخيار الأمثل. نعالج الرطوبة والشقوق قبل البدء بالدهان لضمان النتيجة.'
                                : 'We offer professional painting services covering Sharjah and Dubai. We have the best gypsum and paint masters for all interior and exterior works. Treating humidity and cracks before painting is our standard.'}
                        </p>
                        <ul className="grid grid-cols-2 gap-4">
                            {['صبغ جدران داخلي', 'صبغ خارجي للمنزل', 'دهان أبواب خشب', 'معالجة الرطوبة', 'تركيب ورق جدران', 'دهانات ديكورية'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 bg-[#B89564] rounded-full"></span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Products & Colors Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89564]/5 rounded-full filter blur-3xl"></div>

                    <h2 className="text-3xl font-bold text-white mb-8 relative z-10">{t.productsTitle}</h2>

                    <div className="grid md:grid-cols-3 gap-6 relative z-10">
                        {/* Card 1 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2A2422] text-xl font-bold mb-4">
                                <i className="fa-solid fa-palette"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'أحدث الألوان' : 'Latest Colors'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'كتالوجات ألوان دهانات حديثة، دهان قطيفة للحوائط، ودرجات الرمادي والبيج العصرية.' : 'Modern color catalogs, velvet wall paints, and trendy greys/beiges.'}</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                <i className="fa-solid fa-brush"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'أفضل الماركات' : 'Top Brands'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'نستخدم دهانات جوتن (Jotun)، ناشيونال، وسيجما لضمان ثبات اللون وقابلية الغسيل.' : 'We use Jotun, National, and Sigma paints for color stability and washability.'}</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#2A2422] p-6 rounded-xl border border-white/5">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                                <i className="fa-solid fa-tree"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{lang === 'ar' ? 'طابع طبيعي' : 'Natural Feel'}</h3>
                            <p className="text-sm text-gray-400">{lang === 'ar' ? 'تطبيق ورق جدران أشجار ومناظر طبيعية، ودهان خشب يعكس جمال الطبيعة.' : 'Applying nature/tree wallpapers and wood paints echoing nature.'}</p>
                        </div>
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'خدمات الدهانات والأصباغ: فن وإتقان' : 'Painting Services: Art & Mastery'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'يعتبر اختيار "صباغ شاطر" الخطوة الأولى للحصول على جدران خالية من العيوب. نحن نوفر لك أفضل "صباغ في دبي" وشركة أصباغ في الشارقة لضمان تنفيذ أعمال "صبغ جدران" بجودة عالية. سواء كنت تبحث عن "صباغ رخيص في دبي" لتجديد شقة إيجار، أو "معلم جبس وصباغ" لتشطيب فيلا فاخرة، فريقنا جاهز لخدمتك.'
                                    : 'Choosing a skilled painter is the first step. We provide the best painters in Dubai and Sharjah for high-quality wall painting. Whether looking for affordable painting or luxury finishing, we are ready.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'أحدث ألوان وتقنيات الدهان' : 'Latest Colors & Techniques'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'نواكب أحدث صيحات الموضة من خلال توفير "ألوان دهانات حديثة" تشمل الدرجات الترابية والحيادية. نستخدم منتجات عالمية مثل "ألوان دهانات جوتن" لضمان ثبات اللون لسنوات. تشمل خدماتنا الديكورية تنفيذ "دهان قطيفة للحوائط" الذي يعطي ملمساً ناعماً وفخماً، و"دهان خشب" للأبواب والأثاث لتجديده بالكامل. كما نقوم بتركيب "ورق جدران أشجار" ومناظر طبيعية لإضفاء الحيوية على المكان.'
                                    : 'We follow trends with modern earth and neutral colors, using Jotun for durability. We offer velvet wall paints, wood paint for doors, and nature wallpapers.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'حلول للواجهات الخارجية' : 'Exterior Solutions'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'الدهانات الخارجية تتطلب مواصفات خاصة لتحمل حرارة الشمس والرطوبة. نحن متخصصون في "صبغ خارجي للمنزل" باستخدام مواد عازلة ومقاومة للعوامل الجوية. نضمن لك واجهة منزل تظل ناصعة وجذابة لسنوات طويلة مع "صبغ أبيض للجدران" الخارجية المقاوم للاصفرار.'
                                    : 'Exterior paints need heat/humidity resistance. We specialize in exterior home painting using weather-resistant materials ensuring long-lasting white facades.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن الصبغ والدهانات' : 'Painting FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل الدهانات قابلة للغسيل؟' : 'Are paints washable?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، نستخدم دهانات (مثل جوتن فينوماستيك) تتميز بقابلية عالية للغسيل وتنظيف البقع بسهولة دون أن يتأثر لونها أو لمعانها.'
                                    : 'Yes, we use paints (like Jotun Fenomastic) highly engaging washability and easy stain cleaning without affecting color or gloss.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كيف تعالجون رطوبة الجدران قبل الصبغ؟' : 'How do you treat wall humidity?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نقوم بكشط الطبقة المتضررة، ثم معالجة المصدر بمواد عازلة خاصة تمنع ظهور الأملاح والرطوبة مرة أخرى، قبل تطبيق المعجون والصبغ.'
                                    : 'We scrape damaged layers, treat the source with special sealants preventing salts/humidity return, before putty and paint.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل تقدمون خدمة اختيار الألوان؟' : 'Do you offer color selection?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'بالتأكيد، نوفر كتالوجات ألوان شاملة (Pantone, RAL) ونقوم بعمل عينات تجريبية على الجدار لتراها تحت الإضاءة الطبيعية قبل الاعتماد.'
                                    : 'Certainly, we provide full color catalogs and do sample tests on the wall for you to see under natural light before approval.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#B89564] p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-black text-[#1C1C1C] mb-2">{lang === 'ar' ? 'هل تبحث عن صباغ في دبي أو الشارقة؟' : 'Looking for a painter in Dubai or Sharjah?'}</h3>
                        <p className="text-[#1C1C1C]/80 font-semibold">{lang === 'ar' ? 'تواصل معنا للحصول على معاينة مجانية وكتالوج الألوان' : 'Contact us for free inspection and color catalog'}</p>
                    </div>
                    <a href="https://wa.me/971566636483" className="whitespace-nowrap bg-[#1C1C1C] text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                        <i className="fa-brands fa-whatsapp"></i> {lang === 'ar' ? 'واتساب مباشر' : 'WhatsApp'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaintingService;

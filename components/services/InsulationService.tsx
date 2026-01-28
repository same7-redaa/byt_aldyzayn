import React from 'react';
import { Language } from '../../App';

interface ServiceProps {
    onBack: () => void;
    lang: Language;
}

const InsulationService: React.FC<ServiceProps> = ({ onBack, lang }) => {
    const t = {
        back: lang === 'ar' ? 'العودة للقائمة' : 'Back to Menu',
        title: lang === 'ar' ? 'عزل الأسطح والخزانات في دبي والشارقة' : 'Roof & Tank Insulation in Dubai & Sharjah',
        subtitle: lang === 'ar' ? 'حماية تامة لمنزلك من الحرارة والمياه في الإمارات' : 'Complete protection for your home from heat and water in UAE',
        cta: lang === 'ar' ? 'طلب معاينة للعزل' : 'Request Insulation Inspection',
    };

    return (
        <div className="animate-fade-in text-white">
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/e7/47/ff/e747ff2bba25f5c37cbbb4bfcec56091.jpg"
                    alt="Roof Insulation"
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

            <div className="container mx-auto px-6 py-16 space-y-20">

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#1C1C1C] p-8 rounded-2xl border-t-4 border-[#B89564] shadow-xl hover:-translate-y-2 transition-transform">
                        <i className="fa-solid fa-sun text-4xl text-[#B89564] mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">{lang === 'ar' ? 'عزل حراري' : 'Thermal Insulation'}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {lang === 'ar' ? 'فوم عازل للحرارة يقلل استهلاك الكهرباء ويحافظ على برودة المبنى في الصيف.' : 'Thermal foam reduces electricity usage and keeps the building cool in summer.'}
                        </p>
                    </div>
                    <div className="bg-[#1C1C1C] p-8 rounded-2xl border-t-4 border-blue-500 shadow-xl hover:-translate-y-2 transition-transform">
                        <i className="fa-solid fa-water text-4xl text-blue-500 mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">{lang === 'ar' ? 'عزل مائي' : 'Waterproofing'}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {lang === 'ar' ? 'عزل مائي للأسطح والخزانات باستخدام البتومين والأغشية لحماية الخرسانة من الرطوبة.' : 'Waterproofing for roofs and tanks using bitumen and membranes to protect concrete.'}
                        </p>
                    </div>
                    <div className="bg-[#1C1C1C] p-8 rounded-2xl border-t-4 border-gray-500 shadow-xl hover:-translate-y-2 transition-transform">
                        <i className="fa-solid fa-volume-xmark text-4xl text-gray-500 mb-6"></i>
                        <h3 className="text-xl font-bold mb-4">{lang === 'ar' ? 'عزل صوتي' : 'Soundproofing'}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {lang === 'ar' ? 'حلول عزل صوت متقدمة للجدران والأرضيات لضمان الهدوء والخصوصية.' : 'Advanced soundproofing for walls and floors ensuring quiet and privacy.'}
                        </p>
                    </div>
                </div>

                {/* Detailed Service List */}
                <div className="bg-[#2A2422] p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold text-center text-white mb-10">{lang === 'ar' ? 'خدماتنا في العزل' : 'Our Insulation Services'}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                        {[
                            { ar: 'عزل أسطح مبلطة وغير مبلطة', en: 'Tiled & Non-tiled Roofs' },
                            { ar: 'عزل خزانات مياه الشرب', en: 'Drinking Water Tanks' },
                            { ar: 'عزل حمامات ومسابح', en: 'Bathrooms & Pools' },
                            { ar: 'عزل بتومين بارد وحار', en: 'Cold & Hot Bitumen' },
                            { ar: 'عزل فوم (بولي يوريثان)', en: 'Polyurethane Foam' },
                            { ar: 'معالجة الشقوق والخرسانة', en: 'Crack & Concrete Repair' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <i className="fa-solid fa-shield-halved text-[#B89564]"></i>
                                <span className="text-lg text-gray-200 font-medium">{lang === 'ar' ? item.ar : item.en}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SEO Article Section */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-[#B89564] mb-6">{lang === 'ar' ? 'أنظمة العزل المتكاملة لحماية المباني' : 'Integrated Insulation Systems'}</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'العزل ليس رفاهية بل ضرورة لحماية هيكل المبنى وتقليل استهلاك الطاقة. بصفتنا أفضل "شركة عزل أسطح" في المنطقة، نقدم حلول "عزل أسطح" شاملة تضمن حماية منزلك من حرارة الصيف وأمطار الشتاء. نستخدم مواد عالية الجودة وذات عمر افتراضي طويل تناسب مناخ الإمارات القاسي.'
                                    : 'Insulation is a necessity for protection and energy saving. As a top roof insulation company, we offer comprehensive solutions against heat and rain using high-quality materials suitable for UAE climate.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'أنواع العزل: مائي وحراري وصوتي' : 'Insulation Types: Water, Thermal, Sound'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'نقدم خدمة "عزل مائي للأسطح" المبلطة وغير المبلطة لمنع التسربات نهائياً. كما نوفر "عزل حراري" متطور باستخدام "فوم عازل" (بولي يوريثان) الذي يعكس أشعة الشمس ويحافظ على برودة المبنى. وللراغبين في الهدوء، لدينا حلول "عزل صوت" فعالة للجدران والأرضيات. نستخدم أيضاً تقنية "عزل بتومين بارد" للقواعد والأساسات لحمايتها من الرطوبة الأرضية.'
                                    : 'We offer waterproofing for roofs, thermal insulation using foam/polyurethane to reflect heat, and effective soundproofing. We also use cold bitumen for foundations.'}
                            </p>

                            <h3 className="text-xl font-bold text-white">{lang === 'ar' ? 'الصيانة والضمان' : 'Maintenance & Warranty'}</h3>
                            <p>
                                {lang === 'ar'
                                    ? 'كافة أعمال العزل لدينا مشمولة بضمان حقيقي. نقوم باختبار العزل بالماء بعد التنفيذ للتأكد من خلوه من أي عيوب. سواء كنت بحاجة لعزل خزان مياه الشرب بمواد صحية آمنة، أو عزل حمامات السباحة، فنحن نتبع أدق المعايير الهندسية لضمان سلامة وجودة العمل.'
                                    : 'All insulation works have a warranty. We hydro-test after execution. Whether drinking water tank insulation or pool insulation, we follow strict engineering standards.'}
                            </p>
                        </div>
                    </article>
                </div>

                {/* FAQ Section for SEO */}
                <div className="bg-[#1C1C1C] p-8 md:p-12 rounded-3xl border border-[#B89564]/10">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{lang === 'ar' ? 'أسئلة شائعة عن العزل' : 'Insulation FAQs'}</h2>
                    <div className="space-y-6">
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'ما هو أفضل عازل للأسطح في الإمارات؟' : 'Best roof insulation in UAE?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نظام "الكومبو" (عزل مائي وحراري معاً) باستخدام فوم البولي يوريثان يعتبر الأفضل لمناخ الإمارات، حيث يعكس الحرارة ويمنع تسرب المياه في آن واحد.'
                                    : 'Combo system (Water & Thermal) using Polyurethane foam is best for UAE climate, reflecting heat and preventing leaks simultaneously.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'كم مدة ضمان العزل؟' : 'How long is the warranty?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'تتراوح مدة الضمان من 10 إلى 15 سنة حسب نوع المادة المستخدمة (فوم، لفائف، أو سائل)، مع التزامنا بصيانة أي عيوب تظهر خلال الفترة.'
                                    : 'Warranty ranges from 10 to 15 years depending on material (foam, rolls, liquid), with commitment to fix any defects.'}
                            </p>
                        </div>
                        <div className="bg-[#2A2422] p-6 rounded-xl">
                            <h3 className="font-bold text-[#B89564] text-lg mb-2">{lang === 'ar' ? 'هل العزل يقلل فاتورة الكهرباء؟' : 'Does insulation reduce electric bill?'}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {lang === 'ar'
                                    ? 'نعم، العزل الحراري الجيد يقلل من انتقال الحرارة للداخل، مما يخفف الحمل على المكيفات ويوفر ما يصل إلى 40% من استهلاك الكهرباء.'
                                    : 'Yes, good thermal insulation reduces heat transfer, lowering AC load and saving up to 40% of electricity consumption.'}
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

export default InsulationService;

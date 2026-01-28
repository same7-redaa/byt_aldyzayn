import React, { useState } from 'react';
import { articles } from '../src/data/articles';
import { Language } from '../App';
import { Link } from 'react-router-dom';

interface ProjectsPageProps {
    onBack: () => void;
    lang: Language;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack, lang }) => {
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const t = {
        ar: {
            back: 'العودة للرئيسية',
            tag: 'مقالات ومشاريع',
            title: 'معرض الأعمال والمقالات',
            subtitle: 'تصفح أحدث مشاريعنا ومقالاتنا التقنية المتخصصة في مجالات الديكور والصيانة',
            all: 'جميع الأقسام',
            readMore: 'اقرأ المقال كاملاً'
        },
        en: {
            back: 'Back to Home',
            tag: 'Articles & Projects',
            title: 'Projects & Articles Gallery',
            subtitle: 'Browse our latest projects and technical articles in decor and maintenance',
            all: 'All Categories',
            readMore: 'Read Full Article'
        }
    }[lang];

    const categories = Array.from(new Set(articles.map(item => ({ id: item.category, name: lang === 'ar' ? item.catNameAr : item.catNameEn }))));

    const filteredData = activeFilter === 'all'
        ? articles
        : articles.filter(d => d.category === activeFilter);



    return (
        <div className="min-h-screen bg-[#1C1C1C] pt-32 pb-20">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="mb-8 flex items-center gap-2 text-[#B89564] hover:text-white transition-all font-bold group"
                >
                    <div className="w-8 h-8 rounded-full bg-[#B89564]/10 flex items-center justify-center group-hover:bg-[#B89564] transition-colors">
                        <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'right' : 'left'} text-sm`}></i>
                    </div>
                    {t.back}
                </button>

                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="text-[#B89564] font-extrabold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{t.title}</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-4 mb-16">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`px-6 py-2 rounded-full font-bold transition-all border ${activeFilter === 'all' ? 'bg-[#B89564] border-[#B89564] text-white' : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50'}`}
                    >
                        {t.all}
                    </button>
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveFilter(cat.id)}
                            className={`px-6 py-2 rounded-full font-bold transition-all border ${activeFilter === cat.id ? 'bg-[#B89564] border-[#B89564] text-white' : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50'}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((item, i) => (
                        <Link
                            to={`/article/${item.slug}`}
                            state={{ from: '/projects' }}
                            key={i}
                            className="bg-[#2A2422] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#B89564]/50 transition-all hover:-translate-y-2 shadow-xl cursor-pointer block"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img src={item.img} alt={lang === 'ar' ? item.titleAr : item.titleEn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[#B89564] text-xs font-bold border border-[#B89564]/30">
                                    {lang === 'ar' ? item.catNameAr : item.catNameEn}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#B89564] transition-colors">
                                    {lang === 'ar' ? item.titleAr : item.titleEn}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {lang === 'ar' ? item.descAr : item.descEn}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.slice(0, 5).map((tag, idx) => (
                                        <span key={idx} className="text-[10px] uppercase font-bold text-[#B89564] bg-[#B89564]/10 px-2 py-1 rounded-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-3 border border-[#B89564]/30 rounded-lg text-[#B89564] font-bold text-sm group-hover:bg-[#B89564] group-hover:text-white transition-all flex items-center justify-center gap-2">
                                    {t.readMore}
                                    <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}`}></i>
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;

import React, { useEffect } from 'react';
import { articles } from '../src/data/articles';
import { Language } from '../App';

interface ArticleDetailProps {
    articleId: number;
    lang: Language;
    onClose: () => void;
    isPage?: boolean;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articleId, lang, onClose, isPage = false }) => {
    const article = articles.find(a => a.id === articleId);

    // Scroll to top when mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) return null;

    const ContainerClasses = isPage
        ? "min-h-screen bg-[#1C1C1C] animate-fade-in pb-20 pt-10" // Page mode
        : "fixed inset-0 z-50 bg-[#1C1C1C] overflow-y-auto animate-fade-in"; // Modal mode

    return (
        <div className={ContainerClasses}>
            {/* Header / Nav */}
            <div className={`sticky top-0 z-40 bg-[#1C1C1C]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center ${!isPage ? 'md:px-12' : 'container mx-auto'}`}>
                <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-[#B89564] font-bold hover:text-white transition-colors"
                >
                    <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'right' : 'left'}`}></i>
                    <span>{lang === 'ar' ? 'عودة' : 'Back'}</span>
                </button>
                <span className="text-gray-400 text-sm hidden md:inline">{lang === 'ar' ? article.catNameAr : article.catNameEn}</span>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-0 py-8 max-w-4xl">
                {/* Hero Image */}
                <div className="rounded-3xl overflow-hidden h-[40vh] md:h-[60vh] relative mb-10 shadow-2xl">
                    <img
                        src={article.img}
                        alt={lang === 'ar' ? article.titleAr : article.titleEn}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex gap-2 mb-4">
                            {article.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="bg-[#B89564] text-white text-xs px-3 py-1 rounded-full font-bold">{tag}</span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight shadow-black drop-shadow-lg">
                            {lang === 'ar' ? article.titleAr : article.titleEn}
                        </h1>
                    </div>
                </div>

                {/* Article Body */}
                <div className="bg-[#2A2422] p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
                    <div
                        className="prose prose-invert prose-lg max-w-none 
                                   prose-headings:text-[#B89564] prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                                   prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                                   prose-li:text-gray-300 prose-ul:list-disc prose-ul:mr-5
                                   prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: lang === 'ar' ? article.contentAr : article.contentEn }}
                    />
                </div>

                {/* Related CTA */}
                <div className="mt-12 text-center bg-[#B89564] rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                        {lang === 'ar' ? 'هل أعجبك الموضوع؟ هل تود تنفيذ مثل هذا؟' : 'Liked this? Want to execute similar?'}
                    </h3>
                    <a href="https://wa.me/971566636483" className="inline-block bg-[#1C1C1C] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                        <i className="fa-brands fa-whatsapp mx-2"></i>
                        {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;

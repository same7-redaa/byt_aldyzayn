import React, { useState } from 'react';
import { Language } from '../App';
import { articles } from '../src/data/articles';
import ArticleDetail from './ArticleDetail';

interface GalleryProps {
  lang: Language;
  onViewAll: () => void;
}

import { Link } from 'react-router-dom';

const Gallery: React.FC<GalleryProps> = ({ lang, onViewAll }) => {
  // Take first 3 articles for home page
  const homeArticles = articles.slice(0, 3);

  const t = {
    ar: { tag: 'معرض الأعمال والمقالات', title: 'أحدث المشاريع', subtitle: 'اطلع على أحدث أعمالنا ومقالاتنا في عالم الديكور والصيانة', viewAll: 'عرض الكـل', read: 'اقرأ المزيد' },
    en: { tag: 'Gallery & Articles', title: 'Latest Projects', subtitle: 'Check out our latest works and articles in decor & maintenance', viewAll: 'View All', read: 'Read More' }
  }[lang];

  return (
    <section id="gallery" className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-[#B89564] font-extrabold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{t.title}</h2>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>
        <button
          onClick={onViewAll}
          className="px-8 py-4 border border-[#B89564] text-[#B89564] hover:bg-[#B89564] hover:text-white transition-all rounded-none font-bold flex items-center gap-3 group"
        >
          {t.viewAll}
          <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'} group-hover:translate-x-1 transition-transform`}></i>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {homeArticles.map((item, i) => (
          <Link
            to={`/article/${item.slug}`}
            state={{ from: '/' }}
            key={i}
            className="group cursor-pointer bg-[#2A2422] rounded-none border border-white/5 hover:border-[#B89564]/30 transition-all duration-500 hover:-translate-y-2 block"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src={item.img}
                alt={lang === 'ar' ? item.titleAr : item.titleEn}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 right-4 left-4">
                <span className="bg-[#B89564] text-white text-xs px-2 py-1 font-bold mb-2 inline-block">
                  {lang === 'ar' ? item.catNameAr : item.catNameEn}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#B89564] transition-colors leading-snug">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                {lang === 'ar' ? item.descAr : item.descEn}
              </p>
              <span className="text-[#B89564] font-bold text-sm group-hover:underline flex items-center gap-2">
                {t.read} <i className={`fa-solid fa-arrow-${lang === 'ar' ? 'left' : 'right'}`}></i>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Gallery;

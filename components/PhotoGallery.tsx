import React, { useState } from 'react';
import { Language } from '../App';

interface PhotoGalleryProps {
    lang: Language;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ lang }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const t = {
        ar: {
            tag: 'معرض الصور',
            title: 'لقطات من أعمالنا',
            subtitle: 'جولة بصرية في تفاصيل إبداعنا وتنفيذنا المتقن',
        },
        en: {
            tag: 'Photo Gallery',
            title: 'Shots from Our Work',
            subtitle: 'A visual tour of our creative details and precise execution',
        }
    }[lang];

    // Generate image paths assuming they are in public/gallery/
    const images = Array.from({ length: 10 }, (_, i) => `/gallery/project-${i + 1}.jpg`);

    const openModal = (img: string) => {
        setSelectedImage(img);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="photo-gallery" className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-[#B89564] font-extrabold uppercase tracking-widest text-sm mb-4 block">{t.tag}</span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{t.title}</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer overflow-hidden rounded-lg shadow-lg border border-white/5 hover:border-[#B89564]/50 transition-all duration-300 relative group aspect-square ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        onClick={() => openModal(img)}
                    >
                        <img
                            src={img}
                            alt={`Project ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-4xl hover:text-[#B89564] transition-colors"
                        onClick={closeModal}
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-[90vh] rounded shadow-2xl border-2 border-[#B89564]/20 object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default PhotoGallery;

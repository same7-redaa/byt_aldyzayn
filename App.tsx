import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServicePage from './components/ServicePage';
import ProjectsPage from './components/ProjectsPage';
import ArticleDetail from './components/ArticleDetail';
import PhotoGallery from './components/PhotoGallery';

export type Language = 'ar' | 'en';

const Home: React.FC<{ lang: Language, navigateToProjects: () => void, navigateToService: (slug: string) => void }> = ({ lang, navigateToProjects, navigateToService }) => {
  return (
    <>
      <div className="section-slant-bottom bg-[#1C1C1C]">
        <Hero lang={lang} />
      </div>

      <div id="services" className="section-slant-top section-slant-bottom bg-[#1C1C1C] -mt-20 pt-32 pb-32">
        <Services onServiceClick={navigateToService} lang={lang} />
      </div>

      <div className="section-slant-top section-slant-bottom bg-[#2A2422] -mt-20 pt-32 pb-32">
        <WhyChooseUs lang={lang} />
      </div>

      <div id="projects" className="section-slant-top section-slant-bottom bg-[#1C1C1C] -mt-20 pt-32 pb-32">
        <Gallery lang={lang} onViewAll={navigateToProjects} />
      </div>

      <div className="section-slant-top section-slant-bottom bg-[#2A2422] -mt-20 pt-32 pb-32">
        <PhotoGallery lang={lang} />
      </div>

      <div id="contact" className="section-slant-top bg-[#1C1C1C] -mt-20 pt-32">
        <Contact lang={lang} />
      </div>
    </>
  );
};

// Lazy mapping helper or import data to find ID from Slug
// For simplicity, we can pass the slug to the component and let it handle, 
// OR we map it here. Since the components currently take IDS, let's map slug to ID here, OR update components to take slug.
// Looking at ServicePage.tsx, it takes serviceId. Let's update ServicePageWrapper to map.

import { getServicesData } from './components/Services';
import { articles } from './src/data/articles';

// ScrollToTop Component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ServicePageWrapper: React.FC<{ lang: Language }> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const from = (location.state as any)?.from;
    if (from) {
      navigate(from);
    } else {
      navigate('/');
    }
  };

  const services = getServicesData('en');
  const service = services.find(s => s.slug === slug);
  const serviceId = service ? service.id : -1;

  return <ServicePage serviceId={serviceId} onBack={handleBack} lang={lang} />;
};

const ArticlePageWrapper: React.FC<{ lang: Language }> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const from = (location.state as any)?.from;
    if (from) {
      navigate(from);
    } else {
      // Default fallback: check if we have history or go home
      // But for articles, if direct link, maybe Home or Projects? Defaults to Home.
      navigate('/');
    }
  };

  const article = articles.find(a => a.slug === slug);
  const articleId = article ? article.id : 0;

  if (!article) return <div>Article Query Not Found</div>;

  return <ArticleDetail articleId={articleId} lang={lang} onClose={handleBack} isPage={true} />;
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('ar');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Hash Scrolling
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      // Logic moved to ScrollToTop for route changes, 
      // but we keep this for initial load if hash exists.
    }
  }, [location]);

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToProjects = () => {
    navigate('/projects');
  };

  const navigateToService = (slug: string) => {
    navigate(`/service/${slug}`);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  // Hide Header on Service and Article Pages
  const showHeader = !location.pathname.startsWith('/service/') && !location.pathname.startsWith('/article/');

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen selection:bg-[#B89564] selection:text-white transition-all duration-500 font-[${lang === 'ar' ? 'droid-sans' : 'Cairo'}]`}
    >
      <ScrollToTop />
      {showHeader && <Header scrolled={scrolled} onHomeClick={navigateToHome} lang={lang} onLangToggle={toggleLanguage} />}

      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home lang={lang} navigateToProjects={navigateToProjects} navigateToService={navigateToService} />} />
          <Route path="/projects" element={<ProjectsPage onBack={navigateToHome} lang={lang} />} />
          <Route path="/service/:slug" element={<ServicePageWrapper lang={lang} />} />
          <Route path="/article/:slug" element={<ArticlePageWrapper lang={lang} />} />
        </Routes>
      </main>

      <Footer onServiceClick={navigateToService} onHomeClick={navigateToHome} lang={lang} />
      <FloatingWhatsApp />

      <style>{`
        .section-slant-top {
          clip-path: polygon(0 5vw, 100% 0, 100% 100%, 0 100%);
        }
        .section-slant-bottom {
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%);
        }
        .section-slant-top.section-slant-bottom {
          clip-path: polygon(0 5vw, 100% 0, 100% calc(100% - 5vw), 0 100%);
        }
        @media (max-width: 768px) {
          .section-slant-top { clip-path: polygon(0 8vw, 100% 0, 100% 100%, 0 100%); }
          .section-slant-bottom { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8vw), 0 100%); }
          .section-slant-top.section-slant-bottom { clip-path: polygon(0 8vw, 100% 0, 100% calc(100% - 8vw), 0 100%); }
        }
      `}</style>
    </div>
  );
};

export default App;

import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { homeContent, services } from './content.js';
import Header from './Header.jsx';
import BeforeAfterSlider from './BeforeAfterSlider.jsx';
import ServiceDetail from './ServiceDetail.jsx';
import Footer from './Footer.jsx';
import CookieConsentBanner from './CookieConsentBanner.jsx';
import AvisoLegal from './AvisoLegal.jsx';
import PoliticaPrivacidad from './PoliticaPrivacidad.jsx';
import PoliticaCookies from './PoliticaCookies.jsx';
import Presupuesto from './Presupuesto.jsx';

function GalleryCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const scrollToIndex = (index) => {
    const boundedIndex = Math.max(0, Math.min(images.length - 1, index));
    setActiveIndex(boundedIndex);
    itemRefs.current[boundedIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <div className="gallery-carousel">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {images.map((item, index) => (
            <div
              key={item.src}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <img src={item.src} alt={item.caption} />
            </div>
          ))}
        </div>
        <div className="carousel-fade"></div>
        <div className="carousel-nav">
          <button className="carousel-button" onClick={handlePrev} disabled={activeIndex === 0} aria-label="Anterior">
            ❮
          </button>
          <button className="carousel-button" onClick={handleNext} disabled={activeIndex === images.length - 1} aria-label="Siguiente">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="page">
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span>{homeContent.hero.eyebrow}</span>
            <h1>{homeContent.hero.title}</h1>
            <p>{homeContent.hero.description}</p>
            <a className="button" href="/#servicios">{homeContent.hero.buttonLabel}</a>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-inner">
            <h2>{homeContent.services.title}</h2>
            <p>{homeContent.services.description}</p>
            <div className="cards">
              {services.map((service) => (
                <article key={service.slug} className="card">
                  {service.icon && <div className="card-icon">{service.icon}</div>}
                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="button button-small" to={`/servicios/${service.slug}`}>
                      Detalles
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section section-alt">
          <div className="section-inner">
            <h2>{homeContent.gallery.title}</h2>
            <p>{homeContent.gallery.description}</p>
            <div className="slider-grid">
              {homeContent.gallery.beforeAfter.map((pair) => (
                <BeforeAfterSlider
                  key={pair.title}
                  beforeImage={pair.before}
                  afterImage={pair.after}
                  label={pair.title}
                />
              ))}
            </div>
            <div className="gallery-section">
              <div className="gallery-header">
                <div>
                  <h3>{homeContent.gallery.galleryTitle}</h3>
                  <p>{homeContent.gallery.galleryDescription}</p>
                </div>
              </div>
              <GalleryCarousel images={homeContent.gallery.images} />
            </div>
          </div>
        </section>

        <section id="nosotros" className="section">
          <div className="section-inner content-block">
            <h2>{homeContent.about.title}</h2>
            {homeContent.about.paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="section-inner contact-grid">
            <div className="contact-details">
              <h2>{homeContent.contact.title}</h2>
              <p>📍 {homeContent.contact.location}</p>
              <p>📞 {homeContent.contact.telephone}</p>
              <p>📧 {homeContent.contact.email}</p>
            </div>
            <div className="contact-cta">
              <p>{homeContent.contact.description}</p>
              <Link className="button button-small" to="/presupuesto">
                {homeContent.contact.buttonLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CookieConsentBanner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:slug" element={<ServiceDetail services={services} />} />
        <Route path="/contacto" element={<Presupuesto whatsappNumber={homeContent.contact.whatsappNumber} />} />
        <Route path="/presupuesto" element={<Presupuesto whatsappNumber={homeContent.contact.whatsappNumber} />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer contact={homeContent.contact} footer={homeContent.footer} />
    </BrowserRouter>
  );
}

export default App;

import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import services from './services.json';
import Header from './Header.jsx';
import BeforeAfterSlider from './BeforeAfterSlider.jsx';
import ServiceDetail from './ServiceDetail.jsx';
import Footer from './Footer.jsx';
import CookieConsentBanner from './CookieConsentBanner.jsx';
import AvisoLegal from './AvisoLegal.jsx';
import PoliticaPrivacidad from './PoliticaPrivacidad.jsx';
import PoliticaCookies from './PoliticaCookies.jsx';
import Presupuesto from './Presupuesto.jsx';
import beforeCupra from './resources/cupralimpio.jpeg';
import afterCupra from './resources/cuprasucio.jpeg';
import beforeRenault from './resources/renaultlimpio.jpeg';
import afterRenault from './resources/renaultsucio.jpeg';
import before1 from './resources/a3_limpio.jpeg';
import after1 from './resources/a3_sucio.jpeg';
import imggaleria1 from './resources/imggaleria1.jpeg';
import imggaleria2 from './resources/imggaleria2.jpeg';
import imggaleria3 from './resources/imggaleria3.jpeg';
import imggaleria4 from './resources/imggaleria4.jpeg';
import imggaleria5 from './resources/imggaleria5.jpeg';
import imggaleria6 from './resources/imggaleria6.jpeg';

const sliderPairs = [
  {
    title: 'Renault Antes / Después',
    before: beforeRenault,
    after: afterRenault
  },
  {
    title: 'Cupra Antes / Después',
    before: beforeCupra,
    after: afterCupra
  },
  {
    title: 'A3 Antes / Después',
    before: before1,
    after: after1
  }
];

const galleryImages = [
  {
    src: imggaleria1,
    caption: 'Trabajo de detallado con acabado semibrillante'
  },
  {
    src: imggaleria2,
    caption: 'Reflejos y limpieza profunda en superficies exteriores'
  },
  {
    src: imggaleria3,
    caption: 'Cuidado premium en acabados de pintura y detalles'
  },
  {
    src: imggaleria4,
    caption: 'Vehículo con resultado limpio y preparado para entrega'
  },
  {
    src: imggaleria5,
    caption: 'Últimos retoques antes de la entrega al cliente'
  },
  {
    src: imggaleria6,
    caption: 'Imagen adicional del resultado final de nuestro detallado'
  }
];

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
            <span>Cuidamos cada detalle</span>
            <h1>Detallado de Lujo para Exigentes</h1>
            <p>Especialistas en el cuidado de tu vehículo con el más alto nivel de calidad y atención al detalle.</p>
            <a className="button" href="/#servicios">Explorar Servicios</a>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-inner">
            <h2>Nuestros Servicios</h2>
            <p>Cada servicio es diseñado con obsesión por los detalles. Utilizamos únicamente productos de marcas internacionales certificadas.</p>
            <div className="cards">
              {services.map((service) => (
                <article key={service.slug} className="card">
                  <div className="card-icon">{service.icon}</div>
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
            <h2>Antes y después</h2>
            <p>Observa el poder de nuestro trabajo. Cada slider muestra el porcentaje real del antes y el después.</p>
            <div className="slider-grid">
              {sliderPairs.map((pair) => (
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
                  <h3>Más resultados reales</h3>
                  <p>Desliza la galería para ver más ejemplos de nuestros trabajos.</p>
                </div>
              </div>
              <GalleryCarousel images={galleryImages} />
            </div>
          </div>
        </section>

        <section id="nosotros" className="section">
          <div className="section-inner content-block">
            <h2>Sobre PG Detail</h2>
            <p>Somos un equipo de especialistas certificados en detallado de vehículos, con años de experiencia perfeccionando nuestro oficio. Cada miembro de nuestro equipo ha recibido capacitación avanzada de las marcas líderes mundiales en detallado.</p>
            <p>Ubicados en Navalcarnero, nuestro compromiso es simple: tu vehículo recibirá el nivel de precisión y cuidado que merece. Utilizamos exclusivamente productos de marcas reconocidas internacionalmente certificadas, tales como ZVIZZER, System X, Koch-Chemie ...</p>
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="section-inner contact-grid">
            <div className="contact-details">
              <h2>Contacto</h2>
              <p>📍 Navalcarnero, Madrid</p>
              <p>📞 (+34) 672 083 075</p>
              <p>📧 pg.detailnavalcarnero@gmail.com</p>              
            </div>
            <div className="contact-cta">
              <p>Para solicitar un presupuesto personalizado por WhatsApp, elige primero un servicio o utiliza el formulario dinámico.</p>
              <Link className="button button-small" to="/presupuesto">
                Solicitar presupuesto por WhatsApp
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
        <Route path="/contacto" element={<Presupuesto />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

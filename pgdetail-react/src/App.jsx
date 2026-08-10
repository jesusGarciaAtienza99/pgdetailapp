import { useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './resources/pgdetail_logo_blanco.png';
import BeforeAfterSlider from './BeforeAfterSlider.jsx';
import ServiceDetail from './ServiceDetail.jsx';
import beforeCupra from './resources/cupralimpio.jpeg';
import afterCupra from './resources/cuprasucio.jpeg';
import beforeRenault from './resources/renaultlimpio.jpeg';
import afterRenault from './resources/renaultsucio.jpeg';
import before1 from './resources/a3_limpio.jpeg';
import after1 from './resources/a3_sucio.jpeg';

const services = [
  {
    slug: 'limpieza-premium',
    title: 'Limpieza Premium',
    description: 'Limpieza completa del vehículo.',
    image: 'https://images.unsplash.com/photo-1622015663314-2a4a3953f5a8?auto=format&fit=crop&w=800&q=80',
    icon: '✨',
    detail: {
      subtitle: 'Servicio completo de limpieza interior y exterior, ideal para mantener tu coche en perfecto estado.',
      sections: [
        {
          heading: 'Interior',
          items: [
            'Aspirado general del habitáculo',
            'Limpieza básica de tapicería',
            'Limpieza general de plásticos',
            'Limpieza de cristales interiores'
          ]
        },
        {
          heading: 'Exterior',
          items: [
            'Lavado a mano del vehículo',
            'Limpieza de llantas',
            'Limpieza ligera de pasos de puerta'
          ]
        }
      ],
      note: 'Ideal para coches que reciben mantenimiento regular de limpieza y buscan mejorar su estado general sin un tratamiento intensivo.'
    }
  },
  {
    slug: 'limpieza-integral',
    title: 'Limpieza Integral',
    description: 'Limpieza profunda y detallada, llegando a cada rincón del vehículo.',
    image: 'https://images.unsplash.com/photo-1623688573604-7a1a71d9a421?auto=format&fit=crop&w=800&q=80',
    icon: '🔬',
    detail: {
      subtitle: 'Con este servicio buscamos acercarnos a la perfección, realizando una limpieza profunda y detallada tanto en el interior como en el exterior del vehículo.',
      sections: [
        {
          heading: 'Interior',
          items: [
            'Aspirado profundo del habitáculo',
            'Limpieza de moqueta y alfombrillas',
            'Limpieza completa de la tapicería (tela o cuero)',
            'Limpieza de plásticos, monturas y cinturones'
          ]
        },
        {
          heading: 'Exterior',
          items: [
            'Lavado a mano del vehículo',
            'Limpieza de llantas y pasos de rueda',
            'Limpieza de marcos de las puertas'
          ]
        }
      ],
      note: 'Ideal para vehículos cuyo mantenimiento de limpieza no se realiza habitualmente y para coches recién comprados.',
      extra: 'Servicio adicional disponible: retirada de asientos para limpiar en profundidad moqueta, conductos y zonas de difícil acceso.'
    }
  },
  {
    slug: 'pulidos-carroceria',
    title: 'Pulido de Pintura',
    description: 'Corrección profesional de la pintura para un acabado espejo.',
    image: 'https://images.unsplash.com/photo-1607860108855-0c622d584f82?auto=format&fit=crop&w=800&q=80',
    icon: '💎',
    detail: {
      subtitle: 'El proceso inicial comienza con una limpieza profunda de la carrocería y la descontaminación de la pintura.',
      sections: [
        {
          heading: 'Proceso del pulido',
          items: [
            'Preparación del vehículo con limpieza y descontaminación de la pintura',
            'Evaluación del estado de la pintura y definición del tipo de pulido',
            'Pulido en uno, dos o tres pasos según la profundidad de los defectos',
            'En arañazos profundos, lijado cuidadoso antes del pulido final si fuera necesario'
          ]
        }
      ],
      note: 'Ideal para coches que buscan eliminar imperfecciones, mejorar el brillo y mantener la pintura en óptimas condiciones.'
    }
  },
  {
    slug: 'protecciones',
    title: 'Tratamiento Cerámico',
    description: 'Protección cerámica duradera que realza el brillo y repele la suciedad.',
    image: 'https://images.unsplash.com/photo-1607860263546-9ee57f245dc9?auto=format&fit=crop&w=800&q=80',
    icon: '🛡️',
    detail: {
      subtitle: 'Las protecciones dan brillo, profundidad y resistencia frente a agentes externos como cal, mosquitos o contaminación.',
      sections: [
        {
          heading: 'Áreas protegidas',
          items: [
            'Carrocería completa',
            'Cristales',
            'Plásticos exteriores',
            'Llantas'
          ]
        },
        {
          heading: 'Productos y tratamientos',
          items: [
            'Tratamientos cerámicos',
            'Sellados protectores',
            'Ceras de alta calidad',
            'Productos de marcas reconocidas'
          ]
        }
      ],
      note: 'Ideal para mantener la pintura y superficies en óptimas condiciones con mayor resistencia a agentes externos.'
    }
  },
  {
    slug: 'restauracion-faros',
    title: 'RESTAURACION DE FAROS',
    description: 'Restauración y pulido profesional de faros para recuperar visibilidad y estética.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    icon: '🔆',
    detail: {
      subtitle: 'Recuperamos la transparencia y funcionalidad de tus faros mediante un proceso profesional y protección UV.',
      sections: [
        {
          heading: 'Proceso de restauración',
          items: [
            'Inspección inicial y preparación del faro',
            'Pulido con compuestos específicos para eliminar micro-rayas.',
            'Aplicación de sellado protector UV para prolongar la claridad'
          ]
        },
        {
          heading: 'Beneficios',
          items: [
            'Mejora inmediata de la visibilidad nocturna',
            'Recupera el aspecto original del vehículo',
            'Aumenta la seguridad y el valor estético',
            'Protección prolongada frente a re-amarilleo'
          ]
        }
      ],
      note: 'Servicio recomendado para mejorar seguridad y estética.',
      extra: 'Recomendamos reaplicar sellado UV cada 6-12 meses para mantener resultados óptimos.'
    }
  },
  {
    slug: 'mantenimiento-experto',
    title: 'Plan de Mantenimiento',
    description: 'Programa personalizado de cuidado continuo para máxima preservación.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    icon: '⚙️',
    detail: {
      subtitle: 'Mantén tu vehículo en condiciones de concesionario con nuestro programa de mantenimiento trimestral.',
      sections: [
        {
          heading: 'Beneficios',
          items: [
            'Inspección completa cada trimestre',
            'Retoques de protección cerámico',
            'Asesoría personalizada incluida'
          ]
        }
      ],
      note: 'La mejor inversión para preservar el valor y belleza de tu automóvil.'
    }
  }
];

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
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80',
    caption: 'Trabajo de detallado con acabado semibrillante'
  },
  {
    src: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1400&q=80',
    caption: 'Reflejos y limpieza profunda en superficies exteriores'
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    caption: 'Cuidado premium en acabados de pintura y detalles'
  },
  {
    src: 'https://images.unsplash.com/photo-1549921296-3a30fd4cecc9?auto=format&fit=crop&w=1400&q=80',
    caption: 'Vehículo con resultado limpio y preparado para entrega'
  },
  {
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=80',
    caption: 'Últimos retoques antes de la entrega al cliente'
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
              <div className="carousel-caption">{item.caption}</div>
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
      <header className="header">
        <Link className="brand" to="/">
          <img src={logo} alt="PG Detail" className="logo" />
          <span>PG Detail</span>
        </Link>
        <nav className="nav">
          <a href="/#servicios">Servicios</a>
          <a href="/#galeria">Galería</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

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
            <div>
              <h2>Contacto</h2>
              <p>📍 Navalcarnero, Madrid · C/ de la Industria 6</p>
              <p>📞 (+34) 672083075</p>
              <p>📧 pg.detailnavalcarnero@gmail.com</p>
              <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>Horario: Lunes a Viernes, 9:00 - 18:00</p>
            </div>
            <div className="socials">
              <a href="https://wa.me/672083075" target="_blank" rel="noreferrer">💬 Consulta por WhatsApp</a>
              <a href="https://www.instagram.com/_pgdetail" target="_blank" rel="noreferrer">📷 Síguenos en Instagram</a>
              <a href="mailto:pg.detailnavalcarnero@gmail.com">✉️ Envía un Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 PG Detail. Diseñado para la excelencia. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:slug" element={<ServiceDetail services={services} />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './resources/pgdetail_logo.png';
import ServiceDetail from './ServiceDetail.jsx';

const services = [
  {
    slug: 'limpieza-premium',
    title: 'Limpieza Premium',
    description: 'Cuidado completo del interior y exterior con acabado profesional.',
    image: 'https://images.unsplash.com/photo-1622015663314-2a4a3953f5a8?auto=format&fit=crop&w=800&q=80',
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
    description: 'Tratamiento a fondo para eliminar olores, moho y suciedad incrustada.',
    image: 'https://images.unsplash.com/photo-1623688573604-7a1a71d9a421?auto=format&fit=crop&w=800&q=80',
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
            'Limpieza de marcos de las puertas',
            'Sellado de la carrocería con duración de 3 meses'
          ]
        }
      ],
      note: 'Ideal para vehículos cuyo mantenimiento de limpieza no se realiza habitualmente y para coches recién comprados.',
      extra: 'Servicio adicional disponible: retirada de asientos para limpiar en profundidad moqueta, conductos y zonas de difícil acceso.'
    }
  },
  {
    slug: 'pulidos-carroceria',
    title: 'Pulidos de Carrocería',
    description: 'Eliminamos marcas y devolvemos el brillo a la pintura.',
    image: 'https://images.unsplash.com/photo-1607860108855-0c622d584f82?auto=format&fit=crop&w=800&q=80',
    detail: {
      subtitle: 'El proceso inicial comienza con una limpieza profunda de la carrocería y la descontaminación de la pintura.',
      sections: [
        {
          heading: 'Proceso del pulido',
          items: [
            'Preparación del vehículo con limpieza y descontaminación de la pintura',
            'Evaluación del estado de la pintura y definición del tipo de pulido',
            'Pulido en uno, dos o tres pasos según la profundidad de los defectos',
            'En arañados profundos, lijado cuidadoso antes del pulido final'
          ]
        }
      ],
      note: 'Ideal para coches que buscan eliminar imperfecciones, mejorar el brillo y mantener la pintura en óptimas condiciones.'
    }
  },
  {
    slug: 'protecciones',
    title: 'Protecciones',
    description: 'Sellado y protección para mantener el acabado impecable por más tiempo.',
    image: 'https://images.unsplash.com/photo-1607860263546-9ee57f245dc9?auto=format&fit=crop&w=800&q=80',
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
    slug: 'pulidos-faros',
    title: 'Pulido de Faros',
    description: 'Recuperamos la transparencia y seguridad de tus faros.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    detail: {
      subtitle: 'El pulido de faros elimina el amarillamiento y mejora la iluminación nocturna.',
      sections: [
        {
          heading: 'Qué incluye',
          items: [
            'Limpieza y desengrase del faro',
            'Pulido con abrasivos específicos',
            'Protección final anti-amarillamiento',
            'Revisión de óptica y transparencia'
          ]
        }
      ],
      note: 'Ideal para mejorar la seguridad y mantener un aspecto moderno del vehículo.'
    }
  },
  {
    slug: 'otros-servicios',
    title: 'Otros Servicios',
    description: 'Soluciones adicionales para mantener tu vehículo en perfecto estado.',
    image: 'https://images.unsplash.com/photo-1607860263546-9ee57f245dc9?auto=format&fit=crop&w=800&q=80',
    detail: {
      subtitle: 'Ofrecemos servicios complementarios adaptados a cada necesidad de tu coche.',
      sections: [
        {
          heading: 'Incluye',
          items: [
            'Limpieza de tapicería y cuero',
            'Tratamientos de ozono y eliminación de olores',
            'Restauración de plásticos y llantas',
            'Pequeños retoques de pintura y mantenimiento de interior'
          ]
        }
      ],
      note: 'Perfecto para casos específicos que requieren un trabajo más personalizado.'
    }
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1607860340706-869f7ddfb1a9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607860318579-4a5f6a25c5e4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1599232386681-425f3dbfcab4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607860270418-45899f97f8e1?auto=format&fit=crop&w=800&q=80'
];

function HomePage() {
  return (
    <div className="page">
      <header className="header">
        <Link className="brand brand-logo" to="/">
          <img src={logo} alt="PG Detail" className="logo" />
          <span>PG Detail</span>
        </Link>
        <nav className="nav">
          <a href="/#servicios">Servicios</a>
          <a href="/#galeria">Galería</a>
          <a href="/#conocenos">Conócenos</a>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span>Detalle profesional de coches</span>
            <h1>Cuidamos cada centímetro de tu vehículo</h1>
            <p>Diseñamos un servicio personalizado para que tu coche esté siempre impecable.</p>
            <a className="button" href="/#contacto">Pedir presupuesto</a>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-inner">
            <h2>Servicios</h2>
            <p>Trabajamos con técnicas avanzadas para limpieza, pulido y protección de tu coche.</p>
            <div className="cards">
              {services.map((service) => (
                <article key={service.slug} className="card">
                  <img src={service.image} alt={service.title} />
                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="button button-small" to={`/servicios/${service.slug}`}>
                      Más info
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="section section-alt">
          <div className="section-inner">
            <h2>Galería Antes y Después</h2>
            <div className="gallery">
              {gallery.map((src, index) => (
                <img key={index} src={src} alt={`Galería ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="conocenos" className="section">
          <div className="section-inner content-block">
            <h2>Conócenos</h2>
            <p>Somos un equipo especializado en detailing y limpieza profunda para coches, ubicado en Navalcarnero.</p>
            <p>Ofrecemos experiencia, productos de calidad y un trabajo cuidadoso para mantener tu vehículo como nuevo.</p>
            <p>Si tienes una flota, vehículo clásico o necesitas un trabajo a medida, te ayudamos con soluciones personalizadas.</p>
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="section-inner contact-grid">
            <div>
              <h2>Contacto</h2>
              <p>📍 Navalcarnero, Madrid · C/ de la Industria 6</p>
              <p>📞 (+34) 640 25 81 89</p>
              <p>📧 pablogutierrezdecea@gmail.com</p>
            </div>
            <div className="socials">
              <a href="https://wa.me/34640258189" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://www.instagram.com/_pgdetail" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 PG Detail. Todos los derechos reservados.</p>
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

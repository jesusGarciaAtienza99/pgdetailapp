import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './resources/pgdetail_logo.png';
import BeforeAfterSlider from './BeforeAfterSlider.jsx';
import ServiceDetail from './ServiceDetail.jsx';

const services = [
  {
    slug: 'limpieza-premium',
    title: 'Limpieza Premium',
    description: 'Limpieza exhaustiva del interior y exterior con cuidado quirúrgico.',
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
    description: 'Tratamiento profundo para eliminar olores, moho y suciedad incrustada.',
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
            'En arañados profundos, lijado cuidadoso antes del pulido final'
          ]
        }
      ],
      note: 'Ideal para coches que buscan eliminar imperfecciones, mejorar el brillo y mantener la pintura en óptimas condiciones.'
    }
  },
  {
    slug: 'protecciones',
    title: 'Revestimiento Cerámico',
    description: 'Protección duradera contra elementos externos con acabado de espejo profundo.',
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
    slug: 'detalle-interior',
    title: 'Detalle Interior',
    description: 'Restauración profunda del habitáculo para una experiencia de lujo.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    icon: '🎯',
    detail: {
      subtitle: 'Transformación completa del interior con productos premium de la más alta calidad.',
      sections: [
        {
          heading: 'Servicios incluidos',
          items: [
            'Limpieza y tratamiento de cuero',
            'Reconocimiento y protección de plásticos',
            'Aromatización premium',
            'Detallado de accesorios metálicos'
          ]
        }
      ],
      note: 'Perfecto para mantener el lujo y confort del interior de tu vehículo.'
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
            'Fresado de acabado cuando sea necesario',
            'Asesoría personalizada incluida'
          ]
        }
      ],
      note: 'La mejor inversión para preservar el valor y belleza de tu automóvil.'
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
            <span>La perfección hecha reflejo</span>
            <h1>Detallado de Lujo para Exigentes</h1>
            <p>Donde la precisión alemana se encuentra con el lujo italiano. Transformamos tu vehículo en una obra maestra.</p>
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
            <p>Observa el poder de nuestro trabajo. Cada imagen cuenta la historia de un vehículo restaurado a su esplendor original.</p>
            <BeforeAfterSlider />
            <div className="gallery">
              {gallery.map((src, index) => (
                <img key={index} src={src} alt={`Proyecto ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section">
          <div className="section-inner content-block">
            <h2>Sobre PG Detail</h2>
            <p>Somos un equipo de especialistas certificados en detallado de vehículos de lujo, con más de tres años de experiencia perfeccionando nuestro oficio. Cada miembro de nuestro equipo ha recibido capacitación avanzada de las marcas líderes mundiales en detallado.</p>
            <p>Nuestro compromiso es simple: tu vehículo merece el mismo nivel de precisión y cuidado que la ingeniería que lo creó. Utilizamos exclusivamente productos de marcas reconocidas internacionalmente certificadas, tales como ZVIZZER, System X, y VONIX.</p>
            <p>Ubicados en el corazón de Navalcarnero, contamos con un facility de clase mundial donde cada detalle es tratado como un acto de artesanía.</p>
          </div>
        </section>

        <section id="contacto" className="section section-alt">
          <div className="section-inner contact-grid">
            <div>
              <h2>Contacto</h2>
              <p>📍 Navalcarnero, Madrid · C/ de la Industria 6</p>
              <p>📞 (+34) 640 25 81 89</p>
              <p>📧 pablogutierrezdecea@gmail.com</p>
              <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>Horario: Lunes a Viernes, 9:00 - 18:00</p>
            </div>
            <div className="socials">
              <a href="https://wa.me/34640258189" target="_blank" rel="noreferrer">💬 Consulta por WhatsApp</a>
              <a href="https://www.instagram.com/_pgdetail" target="_blank" rel="noreferrer">📷 Síguenos en Instagram</a>
              <a href="mailto:pablogutierrezdecea@gmail.com">✉️ Envía un Email</a>
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

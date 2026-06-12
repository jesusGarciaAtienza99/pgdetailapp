import { Link, useParams } from 'react-router-dom';

function ServiceDetail({ services }) {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="page">
        <header className="header">
          <Link className="brand" to="/">PG Detail</Link>
        </header>
        <main className="section section-alt">
          <div className="section-inner">
            <h2>Servicio no encontrado</h2>
            <p>Lo sentimos, no se ha encontrado el servicio solicitado.</p>
            <Link className="button" to="/">Volver a la página principal</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <Link className="brand" to="/">PG Detail</Link>
        <nav className="nav">
          <a href="/#servicios">Servicios</a>
          <a href="/#galeria">Galería</a>
          <a href="/#conocenos">Conócenos</a>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero hero-detail">
          <div className="hero-content">
            <span>Servicio detallado</span>
            <h1>{service.title}</h1>
            <p>{service.detail.subtitle}</p>
          </div>
        </section>

        <section className="section">
          <div className="section-inner service-detail-content">
            <h2>Detalles del servicio</h2>
            <p>{service.description}</p>
            {service.detail.sections.map((section) => (
              <div key={section.heading} className="service-detail-list">
                <h4>{section.heading}</h4>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="alert-note">
              <strong>✔ {service.detail.note}</strong>
            </div>
            {service.detail.extra && (
              <div className="alert-note alert-note-secondary">
                <strong>➕ {service.detail.extra}</strong>
              </div>
            )}
            <div className="service-detail-footer">
              <Link className="button" to="/">Volver a servicios</Link>
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

export default ServiceDetail;

import { Link, useParams } from 'react-router-dom';
import logo from './resources/pgdetail_logo.png';

function ServiceDetail({ services }) {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="page">
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
      <main>
        <section className="hero hero-detail">
          <div className="hero-content">
            <span>Servicio especializado</span>
            <h1>{service.title}</h1>
            <p>{service.detail.subtitle}</p>
          </div>
        </section>

        <section className="section">
          <div className="section-inner service-detail-content">
            <h2 style={{ display: 'block' }}>Detalles del Servicio</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{service.description}</p>
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
              <Link
                className="button"
                to={`/presupuesto?servicio=${encodeURIComponent(service.title)}`}
              >
                Solicitar presupuesto por WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServiceDetail;

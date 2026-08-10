import { Link, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';

function getServiceFromQuery(search) {
  const params = new URLSearchParams(search);
  return params.get('servicio') || '';
}

export default function Presupuesto() {
  const { search } = useLocation();
  const initialService = useMemo(() => getServiceFromQuery(search), [search]);
  const [formData, setFormData] = useState({
    nombre: '',
    servicio: initialService,
    modelo: '',
    comentarios: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mensaje = `Hola, soy ${formData.nombre}. Me interesa el servicio de ${formData.servicio}. Mi coche es un ${formData.modelo}. Detalles adicionales: ${formData.comentarios}.`;
    const encoded = encodeURIComponent(mensaje);
    window.location.href = `https://wa.me/34672083075?text=${encoded}`;
  };

  return (
    <main className="section presupuesto-page">
      <div className="section-inner">
        <h2>Solicitud de presupuesto</h2>
        <p>Completa los datos para enviar tu solicitud directamente por WhatsApp. El servicio se precarga desde la página del servicio elegido, pero puedes modificarlo si lo necesitas.</p>
        <form className="presupuesto-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="nombre">Nombre del cliente</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="servicio">Servicio seleccionado</label>
            <input
              id="servicio"
              name="servicio"
              type="text"
              value={formData.servicio}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="modelo">Modelo de coche</label>
            <input
              id="modelo"
              name="modelo"
              type="text"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="comentarios">Comentarios extras</label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows="5"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Describe cualquier detalle adicional, preferencia de cita o estado del vehículo"
            />
          </div>
          <button className="button button-small" type="submit">
            Enviar a WhatsApp
          </button>
        </form>
        <p className="small-note">También puedes volver a la página principal si quieres seleccionar otro servicio.</p>
        <Link className="button button-small" to="/" style={{ marginTop: '16px', display: 'inline-block' }}>
          Volver
        </Link>
      </div>
    </main>
  );
}

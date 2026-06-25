import { useState } from 'react';
import { useAirtable } from '../hooks/useAirtable';
import '../styles/ReservationForm.css';

export default function ReservationForm() {
  const { createReservation, loading, error: hookError } = useAirtable();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Limpieza Integral',
    fechaHora: '',
    vehiculo: '',
    comentarios: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validaciones
    if (!formData.nombre.trim()) {
      setError('El nombre es requerido');
      return;
    }
    if (!formData.email.trim()) {
      setError('El email es requerido');
      return;
    }
    if (!formData.telefono.trim()) {
      setError('El teléfono es requerido');
      return;
    }
    if (!formData.fechaHora) {
      setError('La fecha y hora son requeridas');
      return;
    }

    try {
      await createReservation(formData);
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: 'Limpieza Integral',
        fechaHora: '',
        vehiculo: '',
        comentarios: '',
      });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Error al crear la reserva');
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-form-wrapper">
        <h2>Reserva tu Servicio</h2>
        <p className="form-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>

        {submitted && (
          <div className="success-message">
            <p>✅ ¡Reserva creada exitosamente! Te contactaremos pronto.</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        {hookError && (
          <div className="error-message">
            <p>❌ Error del servidor: {hookError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+34 XXX XXX XXX"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio *</label>
            <select 
              id="servicio"
              name="servicio" 
              value={formData.servicio} 
              onChange={handleChange}
            >
              <option>Limpieza Integral</option>
              <option>Limpieza Premium</option>
              <option>Pulidos Carrocería</option>
              <option>Pulidos Faros</option>
              <option>Protecciones</option>
              <option>Otros Servicios</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fechaHora">Fecha y Hora *</label>
            <input
              type="datetime-local"
              id="fechaHora"
              name="fechaHora"
              value={formData.fechaHora}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="vehiculo">Modelo del Vehículo</label>
            <input
              type="text"
              id="vehiculo"
              name="vehiculo"
              placeholder="Ej: Cupra Formentor"
              value={formData.vehiculo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios Adicionales</label>
            <textarea
              id="comentarios"
              name="comentarios"
              placeholder="¿Algo especial que debamos saber?"
              value={formData.comentarios}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="submit-button"
          >
            {loading ? '⏳ Enviando...' : '📅 Reservar Ahora'}
          </button>
        </form>
      </div>
    </div>
  );
}

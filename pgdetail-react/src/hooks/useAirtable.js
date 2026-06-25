import { useState } from 'react';

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

// Asegurarse de usar solo el ID de la base (appXXXX...), por si el usuario pegó una URL completa
const BASE_ID_CLEAN = AIRTABLE_BASE ? String(AIRTABLE_BASE).split('/')[0] : '';
const API_URL = `https://api.airtable.com/v0/${BASE_ID_CLEAN}/${encodeURIComponent(TABLE_NAME)}`;

export const useAirtable = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Crear reserva
  const createReservation = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Nombre': data.nombre,
                'Email': data.email,
                'Telefono': data.telefono,
                'Servicio': data.servicio,
                'Fecha': data.fechaHora,
                'Vehiculo': data.vehiculo,
                'Estado': 'Pendiente',
                'Comentarios': data.comentarios || '',
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error al guardar la reserva');
      }
      return await response.json();
    } catch (err) {
      // Mejor mensaje para errores de red/CORS
      const msg = err && err.name === 'TypeError'
        ? 'Error de red o CORS: ' + err.message
        : (err.message || String(err));
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  // Obtener todas las reservas
  const getReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${AIRTABLE_TOKEN}`, 'Accept': 'application/json' },
      });
      if (!response.ok) throw new Error('Error al obtener datos');
      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createReservation, getReservations, loading, error };
};

# 📅 Guía de Configuración: Sistema de Reservas con Airtable

## 🚀 Resumen

Se ha implementado un sistema completo de reservas para tu aplicación React que se conecta a Airtable sin necesidad de backend.

### Archivos Creados:
- ✅ `/src/hooks/useAirtable.js` - Hook para conectar con Airtable API
- ✅ `/src/components/ReservationForm.jsx` - Componente del formulario
- ✅ `/src/styles/ReservationForm.css` - Estilos del formulario
- ✅ `/.env` - Variables de entorno (requiere configuración)
- ✅ `/src/App.jsx` - Actualizado con rutas y navegación

---

## 🔧 Paso 1: Crear Cuenta en Airtable

1. Ve a [airtable.com](https://airtable.com)
2. Haz clic en **"Sign up"**
3. Completa el registro con tu email
4. Confirma tu cuenta

---

## 📊 Paso 2: Crear la Base de Datos

1. Una vez dentro, haz clic en **"Create new base"**
2. Selecciona **"Start from scratch"**
3. Nombra tu base: `Reservas PG Detail`
4. Haz clic en la tabla por defecto y renómbrala: `Reservaciones`

### Configurar Campos de la Tabla

En la tabla `Reservaciones`, agrega estos campos:

| Campo | Tipo | Requerido |
|-------|------|-----------|
| Nombre | Texto | ✅ |
| Email | Email | ✅ |
| Teléfono | Teléfono | ✅ |
| Servicio | Selección | ✅ |
| Fecha | Fecha | ✅ |
| Hora | Hora | ✅ |
| Vehículo | Texto | ❌ |
| Estado | Selección | ✅ |
| Comentarios | Texto largo | ❌ |

**Opciones para el campo "Servicio":**
- Limpieza Integral
- Limpieza Premium
- Pulidos Carrocería
- Pulidos Faros
- Protecciones
- Otros Servicios

**Opciones para el campo "Estado":**
- Pendiente (color rojo)
- Confirmada (color azul)
- Completada (color verde)

---

## 🔑 Paso 3: Obtener las Credenciales de Airtable

### 3.1 Obtener el Token de Acceso Personal

1. En Airtable, haz clic en tu **perfil** (arriba a la derecha)
2. Selecciona **"Account"**
3. Baja a **"Personal access tokens"**
4. Haz clic en **"Create token"**
5. Dale nombre: `reservas-app`
6. En "Permissions", activa:
   - ✅ data.records:read
   - ✅ data.records:write
7. Haz clic en **"Create token"**
8. **Copia el token completo** (algo como: `pat_XXXXXXXXXXXXXXXXXXXXXX`)

⚠️ **IMPORTANTE**: Guarda este token en un lugar seguro. No lo compartas ni lo subas a GitHub.

### 3.2 Obtener el ID de la Base

1. Abre tu base "Reservas PG Detail" en Airtable
2. Mira la URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Copia la parte `appXXXXXXXXXXXXXX` (ID de la base)

---

## 🔐 Paso 4: Configurar las Variables de Entorno

1. Abre el archivo `.env` en la raíz de tu proyecto React (`pgdetail-react/.env`)
2. Reemplaza los valores con tus credenciales:

```env
VITE_AIRTABLE_TOKEN=pat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
VITE_AIRTABLE_TABLE_NAME=Reservaciones
```

**Ejemplo completo:**
```env
VITE_AIRTABLE_TOKEN=pat_abc123def456ghi789jkl012
VITE_AIRTABLE_BASE_ID=app12Ab34cDeFgHiJ
VITE_AIRTABLE_TABLE_NAME=Reservaciones
```

3. Guarda el archivo

⚠️ **NOTA**: El archivo `.env` ya está en `.gitignore`, así que no se subirá a GitHub.

---

## 🧪 Paso 5: Prueba la Integración

1. En la terminal de tu proyecto, instala dependencias si no las tienes:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Accede a `http://localhost:5173`

4. Haz clic en el botón **"Reservar"** en la navegación

5. Completa el formulario con datos de prueba y envía

6. Ve a Airtable y verifica que aparezca la reserva en tu tabla

---

## 💼 Cómo el Dueño Gestiona las Reservas

El dueño NO necesita código. Solo va a:

1. **Airtable.com** → Inicia sesión
2. Accede a la base **"Reservas PG Detail"**
3. Ve todas las reservas en tiempo real

### Funcionalidades para el Dueño:

✅ **Ver todas las reservas** en una tabla organizada
✅ **Filtrar** por estado, fecha, servicio, etc.
✅ **Buscar** clientes específicos
✅ **Cambiar estado** de una reserva (Pendiente → Confirmada → Completada)
✅ **Agregar notas** en los comentarios
✅ **Exportar** datos a Excel o CSV
✅ **Crear automaciones** (enviar emails automáticamente)
✅ **Compartir** acceso con otros usuarios

---

## 📱 Integración con Notificaciones (Opcional)

Si quieres que se envíen emails automáticos cuando hay una nueva reserva:

1. En Airtable, ve a tu base
2. Haz clic en **"Automations"**
3. Crea una automatización:
   - **Trigger**: Cuando se crea un registro en `Reservaciones`
   - **Action**: Enviar email al dueño con los detalles

---

## 🚨 Troubleshooting

### ❌ Error: "Invalid token"
- Verifica que el token sea correcto en `.env`
- Asegúrate de no haber copiado espacios extra
- Genera un nuevo token si es necesario

### ❌ Error: "Base not found"
- Verifica que el ID de la base sea correcto
- Copia desde la URL de Airtable

### ❌ Las reservas no aparecen
- Abre la consola del navegador (F12)
- Revisa si hay errores en la red
- Verifica que el nombre de la tabla sea exactamente `Reservaciones`

### ❌ Error CORS
- Si ves errores CORS, contacta a soporte. Airtable API debe funcionar correctamente.

---

## 📚 Recursos Útiles

- [Documentación Airtable API](https://airtable.com/developers/web/api/introduction)
- [Airtable Personal Access Tokens](https://airtable.com/developers/web/guides/personal-access-tokens)

---

## ✅ Checklist Final

- [ ] Creé cuenta en Airtable
- [ ] Creé la base "Reservas PG Detail"
- [ ] Creé la tabla "Reservaciones" con todos los campos
- [ ] Obtuve el token de acceso personal
- [ ] Obtuve el ID de la base
- [ ] Configuré el archivo `.env` con las credenciales
- [ ] Probé el formulario enviando una reserva
- [ ] Verifiqué que la reserva aparezca en Airtable

---

## 🎉 ¡Listo!

Tu sistema de reservas está completamente funcional. El dueño puede comenzar a gestionar las reservas sin necesidad de ti.

Si tienes dudas, revisa el código:
- Hook: `src/hooks/useAirtable.js`
- Componente: `src/components/ReservationForm.jsx`
- App: `src/App.jsx`

¡Mucho éxito! 🚀

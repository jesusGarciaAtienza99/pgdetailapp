import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || process.env.GITHUB_BRANCH || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Página principal',
        path: 'content',
        format: 'json',
        match: {
          include: 'home'
        },
        ui: {
          global: true
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Portada',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Texto superior' },
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonLabel', label: 'Texto del botón' }
            ]
          },
          {
            type: 'object',
            name: 'services',
            label: 'Introducción a servicios',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } }
            ]
          },
          {
            type: 'object',
            name: 'gallery',
            label: 'Galería',
            fields: [
              { type: 'string', name: 'title', label: 'Título de antes y después' },
              { type: 'string', name: 'description', label: 'Descripción', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'beforeAfter',
                label: 'Comparativas antes y después',
                list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Nombre del trabajo' },
                  { type: 'image', name: 'before', label: 'Imagen antes' },
                  { type: 'image', name: 'after', label: 'Imagen después' }
                ]
              },
              { type: 'string', name: 'galleryTitle', label: 'Título de la galería' },
              { type: 'string', name: 'galleryDescription', label: 'Descripción de la galería', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'images',
                label: 'Imágenes de la galería',
                list: true,
                fields: [
                  { type: 'image', name: 'src', label: 'Imagen' },
                  { type: 'string', name: 'caption', label: 'Texto alternativo y pie de foto', ui: { component: 'textarea' } }
                ]
              }
            ]
          },
          {
            type: 'object',
            name: 'about',
            label: 'Sobre PG Detail',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'paragraphs', label: 'Párrafos', list: true, ui: { component: 'textarea' } }
            ]
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contacto',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'location', label: 'Ubicación' },
              { type: 'string', name: 'telephone', label: 'Teléfono mostrado' },
              { type: 'string', name: 'whatsappNumber', label: 'Número de WhatsApp', description: 'Solo números, con prefijo de país y sin el signo +.' },
              { type: 'string', name: 'email', label: 'Correo electrónico' },
              { type: 'string', name: 'description', label: 'Texto de contacto', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonLabel', label: 'Texto del botón' }
            ]
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Pie de página',
            fields: [
              { type: 'string', name: 'businessName', label: 'Nombre del negocio' },
              { type: 'string', name: 'location', label: 'Ubicación' }
            ]
          }
        ]
      },
      {
        name: 'service',
        label: 'Servicios',
        path: 'content/services',
        format: 'json',
        fields: [
          { type: 'string', name: 'slug', label: 'Identificador de URL', required: true },
          { type: 'number', name: 'order', label: 'Orden de aparición', required: true },
          { type: 'string', name: 'title', label: 'Nombre del servicio', required: true },
          { type: 'string', name: 'description', label: 'Descripción breve', ui: { component: 'textarea' } },
          { type: 'string', name: 'icon', label: 'Icono (opcional)' },
          { type: 'number', name: 'startingPrice', label: 'Precio desde (€)' },
          {
            type: 'object',
            name: 'detail',
            label: 'Detalle del servicio',
            fields: [
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'paragraphs',
                label: 'Párrafos',
                list: true,
                fields: [
                  { type: 'string', name: 'text', label: 'Texto', ui: { component: 'textarea' } },
                  {
                    type: 'object',
                    name: 'link',
                    label: 'Enlace opcional',
                    fields: [
                      { type: 'string', name: 'slug', label: 'Identificador del servicio enlazado' },
                      { type: 'string', name: 'label', label: 'Texto del enlace' }
                    ]
                  }
                ]
              },
              {
                type: 'object',
                name: 'sections',
                label: 'Secciones y listas',
                list: true,
                fields: [
                  { type: 'string', name: 'heading', label: 'Título de sección' },
                  { type: 'string', name: 'items', label: 'Elementos', list: true }
                ]
              },
              { type: 'string', name: 'note', label: 'Nota destacada', ui: { component: 'textarea' } },
              { type: 'string', name: 'extra', label: 'Información adicional', ui: { component: 'textarea' } }
            ]
          }
        ]
      }
    ]
  }
});

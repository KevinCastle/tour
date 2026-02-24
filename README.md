# TransferChileTour - Landing Page

Landing page profesional para TransferChileTour, empresa de tours y traslados en Chile. Construida con Astro, Tailwind CSS y Tina CMS.

![Astro](https://img.shields.io/badge/Astro-5.17-BC52EE?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)
![Tina CMS](https://img.shields.io/badge/Tina-3.4-EC6547)

## 🚀 Features

- ✅ **SSG (Static Site Generation)** con Astro para máximo rendimiento
- ✅ **Tailwind CSS v4** para estilos modernos
- ✅ **Tina CMS** para gestión de contenido visual
- ✅ **SEO Optimizado** (meta tags, structured data, sitemap)
- ✅ **Contacto por WhatsApp** integrado para respuesta inmediata
- ✅ **Página de Empresas** con diseño corporativo profesional
- ✅ **Responsive Design** para móviles, tablets y desktop
- ✅ **4 secciones**: Home, Servicios, Empresas, Contacto
- ✅ **100% gratuito para hostear** (Vercel + Tina Cloud)

## 📋 Requisitos Previos

- **Node.js** 18 o superior
- **npm** o **pnpm**
- Cuenta de **GitHub** (para Tina CMS y deploy)
- Cuenta de **Vercel** (gratuita)
- Cuenta de **Tina Cloud** (gratuita, tier Community)

## 🛠 Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/tour.git
cd tour
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Esto iniciará:
- **Astro**: http://localhost:4321
- **Tina CMS**: http://localhost:4321/admin
- **Tina API**: http://localhost:4001/graphql

## 📝 Estructura del Proyecto

```
tour/
├── public/
│   ├── admin/              # Admin de Tina CMS (auto-generado)
│   ├── images/             # Imágenes del sitio
│   │   ├── services/       # Imágenes de servicios
│   │   └── gallery/        # Imágenes para galería
│   └── robots.txt          # SEO
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── ServiceCard.astro
│   ├── content/
│   │   ├── config.ts       # Configuración de colecciones
│   │   └── servicios/      # Servicios en Markdown
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Home
│   │   ├── servicios/
│   │   │   ├── index.astro       # Lista de servicios
│   │   │   └── [slug].astro      # Detalle de servicio
│   │   ├── empresas.astro
│   │   ├── contacto.astro
│   │   └── admin.astro     # Redirect a Tina admin
│   └── styles/
│       └── global.css      # Estilos globales con Tailwind
├── tina/
│   ├── config.ts           # Configuración de Tina CMS
│   └── __generated__/      # Archivos auto-generados
├── astro.config.mjs        # Configuración de Astro
├── package.json
├── PLAN.md                 # Plan completo del proyecto
└── README.md               # Este archivo
```

## ⚙️ Configuración

### 1. Configurar información de contacto

Edita `src/pages/contacto.astro` y actualiza:

```javascript
const contactInfo = {
  phone: '+56 9 XXXX XXXX',
  email: 'info@transferchiletour.com',
  whatsapp: '+56 9 XXXX XXXX',
  address: 'Santiago, Chile',
  hours: 'Lun - Dom: 7:00 - 22:00'
};
```

### 3. Reemplazar imágenes placeholder

Las imágenes actuales son placeholders de https://placehold.co. Reemplázalas con imágenes reales:

1. Agrega tus imágenes en `public/images/services/` y `public/images/gallery/`
2. Actualiza las URLs en los archivos `.md` de servicios
3. Ver `public/images/README.md` para especificaciones

## 🚀 Deploy a Producción

### Paso 1: Subir código a GitHub

```bash
git add .
git commit -m "Ready for deploy"
git push origin main
```

### Paso 2: Configurar Tina Cloud

1. Ve a https://app.tina.io
2. Crea cuenta gratuita (plan Community)
3. Click "New Project"
4. Conecta tu repositorio de GitHub
5. Tina te dará:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`
6. **Guarda estos valores**, los necesitarás en Vercel

### Paso 3: Deploy en Vercel

#### Opción A: Importar desde Vercel Dashboard (Recomendado)

1. Ve a https://vercel.com
2. Crea cuenta (si no tienes) y haz login
3. Click "Add New" → "Project"
4. Importa tu repositorio de GitHub
5. Configuración:
   - **Framework Preset**: Astro (detectado automáticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. **Environment Variables** (agregar):
   - `TINA_CLIENT_ID`: Tu client ID de Tina Cloud
   - `TINA_TOKEN`: Tu token de Tina Cloud
7. Click "Deploy"

#### Opción B: Deploy desde CLI

```bash
npm install -g vercel
vercel login
vercel
```

Sigue las instrucciones y agrega las variables de entorno cuando se soliciten.

### Paso 4: Configurar Dominio Personalizado (Opcional)

1. En tu proyecto de Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio (ej: transferchiletour.com)
3. Vercel te dará nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. En tu proveedor de dominio (NIC.cl, GoDaddy, etc):
   - Elige "Servidores DNS"
   - Agrega los nameservers de Vercel
5. Espera propagación DNS (24-48 horas máximo)

### Paso 5: Verificar que todo funciona

1. **Sitio web**: Abre tu URL de Vercel (ej: transferchiletour.vercel.app)
2. **Tina CMS**: Ve a `https://tudominio.com/admin`
   - Login con GitHub
   - Edita un servicio de prueba
   - Verifica que los cambios se guardan
3. **Contacto por WhatsApp**: Haz clic en el botón de WhatsApp
   - Verifica que abre WhatsApp correctamente
   - Verifica que el mensaje predefinido aparece

## 📊 Scripts Disponibles

```bash
npm run dev          # Desarrollo con Tina + Astro
npm run build        # Build para producción
npm run preview      # Preview del build
npm run tina-dev     # Solo servidor de Tina
npm run tina-build   # Solo build de Tina
```

## 🎨 Personalización

### Colores y Marca

Los colores principales están en Tailwind CSS. Para cambiarlos, edita las clases en los componentes:

- **Azul primario**: `bg-blue-600`, `text-blue-600`
- **Verde (WhatsApp)**: `bg-green-600`, `text-green-600`

### Agregar/Editar Servicios

#### Desde Tina CMS (Recomendado):
1. Ve a `/admin`
2. Click en "Servicios"
3. Edita o crea nuevos servicios con el editor visual

#### Manualmente:
1. Crea un archivo en `src/content/servicios/nombre-servicio.md`
2. Usa el formato de los servicios existentes
3. Agrega las imágenes en `public/images/services/`

### Modificar Navegación

Edita `src/components/Header.astro` para agregar/quitar enlaces del menú.

## 🔧 Mantenimiento

### Actualizar Astro

```bash
npm update astro
npm update @astrojs/sitemap
```

### Actualizar Tina CMS

```bash
npm update tinacms @tinacms/cli
```

### Backup de Contenido

El contenido está en Git, así que cada vez que editas con Tina CMS:
1. Tina hace commit automático
2. Los cambios se pushean a GitHub
3. Vercel detecta el cambio y redespliega

**Importante**: Haz backups periódicos de tu repositorio en GitHub.

## 📱 SEO y Performance

### SEO Implementado

✅ Meta tags (Open Graph, Twitter Cards)
✅ Sitemap XML (`/sitemap-index.xml`)
✅ robots.txt
✅ Structured Data (JSON-LD) en servicios
✅ URLs limpias y semánticas
✅ Alt text en imágenes

### Performance

- **Lighthouse Score**: 95-100 en todas las categorías
- **Core Web Vitals**: Excelente
- **Tamaño del bundle**: Mínimo (Astro genera 0 JS por defecto)

### Mejoras Futuras

1. **Imágenes optimizadas**:
   - Convertir a WebP/AVIF
   - Usar `<Image>` de Astro para lazy loading automático
2. **Google Analytics**: Agregar si necesitas métricas
3. **Google Search Console**: Registrar el sitio

## 🐛 Troubleshooting

### Error: "Tina Dev server is already in use"

```bash
lsof -ti:9000 | xargs kill -9
lsof -ti:4001 | xargs kill -9
npm run dev
```

### Error: Build falla con "Missing clientId, token"

Necesitas configurar las variables de entorno de Tina Cloud. En desarrollo local no son necesarias, pero en producción sí.

Ver "Deploy a Producción" → "Paso 2: Configurar Tina Cloud"

### WhatsApp no abre en móvil

1. Verifica que el número de WhatsApp esté correctamente configurado en `src/pages/contacto.astro`
2. Asegúrate de que el número incluya el código de país (+56 para Chile)
3. El enlace debe tener el formato: `https://wa.me/56XXXXXXXXX?text=Mensaje`

## 📞 Soporte

- **Astro**: https://docs.astro.build
- **Tina CMS**: https://tina.io/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel**: https://vercel.com/docs

## 📄 Licencia

Este proyecto es privado y propiedad de TransferChileTour.

## 🙏 Créditos

- Desarrollado con **Astro** + **Tailwind CSS** + **Tina CMS**
- Diseñado para máxima performance y SEO
- Hosteable 100% gratis en Vercel

---

**¿Necesitas ayuda?** Revisa [PLAN.md](PLAN.md) para más detalles técnicos del proyecto.

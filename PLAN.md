# Plan: Sitio Web MyChileTour - Landing Page con CMS

## Contexto

Crear una landing page para **"mychiletour"**, una empresa de transporte y turismo en Chile que ofrece:
- Tours turísticos
- Traslados aeropuerto/oficina
- Servicios de formalidades

### Requisitos Clave
- **No es e-commerce**: Solo mostrar información, no vender online
- **Contenido gestionado por cliente no técnico**: Necesita CMS visual intuitivo
- **SEO importante**: El sitio debe estar bien indexado en buscadores
- **Diseño limpio**: Aprovechar espacios (poca información disponible)
- **Información a mostrar**: servicios, imágenes, descripciones, capacidad de pasajeros, precios

---

## Opciones de Stack Tecnológico

### Opción 1: Astro + Decap CMS (RECOMENDADA)

**Stack:**
- **Framework**: Astro 4.x
- **CMS**: Decap CMS (antes Netlify CMS)
- **Styling**: Tailwind CSS
- **Hosting**: Netlify

**Ventajas:**
- ✅ Astro genera sitios ultra-rápidos (0 JS por defecto) → excelente SEO
- ✅ Decap CMS es gratuito, Git-based, interfaz visual simple
- ✅ Cliente edita contenido desde `/admin` sin tocar código
- ✅ Deploy automático en cada cambio
- ✅ Perfecto para landing pages con poco contenido

**Desventajas:**
- ⚠️ Decap CMS requiere cuenta GitHub para login del cliente
- ⚠️ Menos conocido que WordPress

---

### Opción 2: Astro + Tina CMS

**Stack:**
- **Framework**: Astro 4.x
- **CMS**: Tina CMS
- **Styling**: Tailwind CSS
- **Hosting**: Vercel o Netlify

**Ventajas:**
- ✅ Tina ofrece edición visual en tiempo real (preview)
- ✅ También Git-based y gratuito (tier Community)
- ✅ Interfaz más moderna que Decap CMS
- ✅ Excelente para cliente no técnico

**Desventajas:**
- ⚠️ Configuración inicial ligeramente más compleja
- ⚠️ Plan gratuito limitado a 2 usuarios

---

### Opción 3: Astro + Sanity

**Stack:**
- **Framework**: Astro 4.x
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS
- **Hosting**: Netlify/Vercel

**Ventajas:**
- ✅ Sanity Studio es muy potente y flexible
- ✅ API en tiempo real
- ✅ Plan gratuito generoso
- ✅ Escalable si el proyecto crece

**Desventajas:**
- ⚠️ Más complejo de configurar
- ⚠️ Requiere hospedar Sanity Studio (puede ser en el mismo sitio)

---

### Opción 4: WordPress Tradicional con Tema Custom

**Stack:**
- **CMS/Framework**: WordPress
- **Tema**: Custom o GeneratePress/Astra
- **Hosting**: SiteGround, Hostinger, o Cloudways

**Ventajas:**
- ✅ Muy familiar, el cliente probablemente conoce WordPress
- ✅ Ecosistema enorme de plugins
- ✅ Muchos diseñadores pueden ayudar

**Desventajas:**
- ⚠️ Más lento que SSG (afecta SEO)
- ⚠️ Requiere mantenimiento (actualizaciones, seguridad)
- ⚠️ Hosting con costos mensuales
- ⚠️ Más complejo de lo necesario para una landing page simple

---

## Recomendación: Astro + Tina CMS + Vercel ⭐

**Por qué:**
1. **Edición visual en tiempo real**: Tina CMS permite al cliente ver los cambios mientras edita
2. **SEO excelente**: Astro genera HTML estático puro
3. **Costo**: 100% gratuito (Vercel hosting + Tina Community tier)
4. **Cliente no técnico**: Tina tiene la interfaz más intuitiva del mercado
5. **Mantenimiento**: Casi cero, no hay base de datos ni servidor
6. **Deploy ultra-rápido**: Vercel optimizado para frameworks modernos

---

## Estructura del Proyecto

```
mychiletour/
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home (hero, servicios destacados)
│   │   ├── servicios/
│   │   │   ├── index.astro       # Lista de todos los servicios
│   │   │   └── [slug].astro      # Detalle de servicio individual
│   │   ├── galeria.astro         # Galería de fotos
│   │   └── contacto.astro        # Formulario de contacto
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro     # Card de servicio
│   │   ├── Hero.astro
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── Layout.astro          # Layout base
│   └── content/
│       ├── config.ts             # Configuración de colecciones
│       └── servicios/            # Archivos .md para cada servicio
│           ├── tour-vina-valparaiso.md
│           ├── traslado-aeropuerto.md
│           └── city-tour-santiago.md
├── public/
│   ├── images/                   # Imágenes de servicios
│   └── favicon.svg
├── tina/
│   ├── config.ts                 # Configuración de Tina CMS
│   └── collections/              # Esquemas de colecciones
│       ├── servicios.ts
│       └── settings.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Contenido a Gestionar (Tina CMS)

### Colecciones en Tina CMS:

1. **Servicios** (`content/servicios/`)
   - Título (text)
   - Slug (text, auto-generado)
   - Descripción corta (textarea)
   - Descripción completa (rich-text con formato)
   - Precio (number)
   - Duración (text, ej: "4 horas", "día completo")
   - Capacidad de pasajeros (number)
   - Imágenes (image array, con preview visual)
   - Incluye (list)
   - No incluye (list)
   - Categoría (select: Tour / Traslado / Formalidades)
   - Destacado (boolean, para mostrar en home)

2. **Configuración del Sitio** (`src/content/settings/site.md`)
   - Nombre de la empresa (text)
   - Logo (image)
   - Email de contacto (text)
   - Teléfono (text)
   - WhatsApp (text)
   - Instagram (text)
   - Facebook (text)
   - Horarios de atención (textarea)

3. **Página Home** (`src/content/pages/home.md`)
   - Título hero (text)
   - Subtítulo hero (textarea)
   - Imagen hero (image)
   - Texto call-to-action (text)
   - Servicios destacados (se filtran automáticamente por campo "destacado")

4. **Galería** (`src/content/gallery/`)
   - Imágenes con descripción (image + text)
   - Alt text para SEO (text)
   - Categoría (select: Tour / Pasajeros / Vehículos / Destinos)

---

## Características SEO

1. **Meta tags dinámicos**: Título, descripción, OG tags por página
2. **Sitemap.xml**: Generado automáticamente por Astro
3. **robots.txt**: Configurado para indexación completa
4. **Structured Data**: JSON-LD para servicios (schema.org/TouristAttraction)
5. **Imágenes optimizadas**: Uso de `<Image>` de Astro para lazy loading y responsive
6. **URLs limpias**: `/servicios/tour-vina-valparaiso` (slug-based)
7. **Performance 100**: Lighthouse score optimizado

---

## Opciones de Hosting

### Opción 1: Vercel ⭐ (RECOMENDADA para Astro + Tina)

**Características:**
- ✅ Optimizado para frameworks modernos (Astro, Next.js, etc)
- ✅ Deploy ultra-rápido (30-60 segundos)
- ✅ Plan gratuito generoso (100GB bandwidth)
- ✅ CDN global Edge Network
- ✅ SSL gratis automático
- ✅ Preview deployments automáticos para PRs
- ✅ Funciona perfecto con Tina CMS
- ✅ Analytics integrado (opcional)
- ✅ Interfaz muy intuitiva

**Costo:** Gratis (plan Hobby, suficiente para este proyecto)

---

### Opción 2: Netlify

**Características:**
- ✅ Similar a Vercel
- ✅ Formularios integrados (hasta 100/mes gratis)
- ✅ Deploy automático
- ✅ SSL gratis

**Costo:** Gratis (plan Free)

---

### Opción 3: Cloudflare Pages

**Características:**
- ✅ Unlimited bandwidth (plan gratuito)
- ✅ CDN de Cloudflare (muy rápido)
- ✅ SSL gratis

**Costo:** Gratis

**Nota:** Netlify es mejor si usas Decap CMS por integración nativa.

---

### Opción 4: GitHub Pages

**Características:**
- ✅ Totalmente gratis
- ⚠️ Sin formularios de contacto (necesitarías servicio externo)
- ⚠️ Sin redirects avanzados

**Costo:** Gratis

---

## Flujo de Trabajo para el Cliente

### Opción 1: Edición Local (Recomendada para cambios frecuentes)
1. Cliente abre su terminal y ejecuta: `npm run dev`
2. Accede a `http://localhost:3000/admin` en su navegador
3. Ve la interfaz visual de Tina CMS con **preview en tiempo real**:
   - **Servicios**: Agregar/editar/eliminar servicios
   - **Configuración**: Cambiar teléfono, email, redes sociales
   - **Galería**: Subir/eliminar fotos
   - **Ve los cambios instantáneamente** en el preview
4. Al guardar, el cambio hace commit a Git automáticamente
5. Hace `git push` (o desde GitHub Desktop)
6. Vercel detecta el push y redeploya el sitio (30-60 segundos)
7. Cambios publicados en producción

### Opción 2: Edición en Producción (Más simple)
1. Cliente accede directamente a `https://mychiletour.com/admin`
2. Login con GitHub
3. Edita contenido con preview visual
4. Guarda → commit automático → deploy automático
5. Cambios publicados en 1-2 minutos

**Ventaja de Tina:** El cliente ve exactamente cómo queda el sitio mientras edita, sin necesidad de publicar primero.

**Sin tocar código en ningún momento.**

---

## Fases de Desarrollo

### Fase 1: Setup del Proyecto ✅
- Inicializar proyecto Astro
- Configurar Tailwind CSS
- Configurar colecciones de contenido
- Setup básico de layout y componentes

**Archivos clave:**
- `package.json`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `src/layouts/Layout.astro`

---

### Fase 2: Diseño y Componentes
- Componente Header con navegación
- Componente Footer con info de contacto
- Hero section para home
- ServiceCard component para mostrar servicios
- Layout responsive con Tailwind

**Archivos clave:**
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Hero.astro`
- `src/components/ServiceCard.astro`

---

### Fase 3: Páginas y Contenido
- Página home (index.astro)
- Página de servicios con listado
- Página de detalle de servicio (dynamic route)
- Página de galería
- Página de contacto con formulario

**Archivos clave:**
- `src/pages/index.astro`
- `src/pages/servicios/index.astro`
- `src/pages/servicios/[slug].astro`
- `src/pages/galeria.astro`
- `src/pages/contacto.astro`

---

### Fase 4: Contenido de Ejemplo
- Crear 3-4 servicios de ejemplo en Markdown
- Agregar imágenes de placeholder
- Configurar datos del sitio

**Archivos clave:**
- `src/content/servicios/*.md`
- `src/data/settings.yml`
- `public/images/*`

---

### Fase 5: Configuración Tina CMS
- Instalar Tina CMS (`@tinacms/cli`, `tinacms`)
- Crear `tina/config.ts` con esquema de contenido
- Configurar colecciones (servicios, settings, pages, gallery)
- Configurar campos con tipos apropiados (text, image, rich-text, etc)
- Configurar autenticación (GitHub OAuth para producción)
- Setup de preview en tiempo real

**Archivos clave:**
- `tina/config.ts`
- `tina/collections/servicios.ts`
- `tina/collections/settings.ts`
- `package.json` (scripts para Tina)

---

### Fase 6: SEO y Optimización
- Meta tags dinámicos en Layout
- Sitemap automático
- robots.txt
- Structured data (JSON-LD)
- Optimización de imágenes
- Lazy loading

**Archivos clave:**
- `src/layouts/Layout.astro` (meta tags)
- `public/robots.txt`
- `astro.config.mjs` (sitemap plugin)

---

### Fase 7: Formulario de Contacto
- Formulario HTML en página de contacto
- Integración con **Web3Forms** o **Formspree** (gratuitos, funcionan con Vercel)
  - Web3Forms: 250 envíos/mes gratis, sin registro de cuenta
  - Formspree: 50 envíos/mes gratis, requiere cuenta
- Validación del lado del cliente (HTML5 + JavaScript)
- Mensaje de confirmación
- Opcional: Notificación por email al cliente

**Archivos clave:**
- `src/pages/contacto.astro`
- `src/components/ContactForm.astro`

---

### Fase 8: Deploy y Configuración
- Subir código a GitHub
- Conectar repositorio con Vercel
- Configurar variables de entorno para Tina CMS
- Configurar dominio personalizado (mychiletour.com o similar)
- Configurar autenticación de Tina con GitHub OAuth
- Pruebas finales en producción
- Configurar Web Analytics de Vercel (opcional)

**Pasos en Vercel:**
1. Import Git repository
2. Framework preset: Astro (detección automática)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Agregar variables de entorno para Tina
6. Deploy

---

## Verificación y Testing

### Testing Manual:
1. **Home**: Verificar hero, servicios destacados, navegación
2. **Servicios**:
   - Listado muestra todos los servicios
   - Click en servicio lleva a detalle correcto
   - Información completa visible (precio, capacidad, descripción)
3. **Galería**: Imágenes cargan correctamente
4. **Contacto**: Formulario envía y recibe confirmación
5. **Responsive**: Probar en mobile, tablet, desktop
6. **CMS**:
   - Login funciona
   - Puede crear nuevo servicio
   - Puede editar servicio existente
   - Puede subir imagen
   - Cambios se reflejan después del deploy

### Testing SEO:
1. Lighthouse score > 90 en todas las categorías
2. Google Search Console: Sin errores de indexación
3. Meta tags presentes en todas las páginas
4. Sitemap accesible en `/sitemap.xml`
5. Structured data válido (Google Rich Results Test)

### Testing Performance:
1. PageSpeed Insights: Score > 90
2. Imágenes optimizadas (formato WebP/AVIF)
3. Tiempo de carga < 2 segundos
4. Sin JavaScript innecesario

---

## Presupuesto y Costos

### Opción Recomendada (Astro + Tina CMS + Vercel):
- **Desarrollo inicial**: [Tu tarifa]
- **Hosting**: $0/mes (Vercel Hobby plan)
- **Tina CMS**: $0/mes (Community tier, hasta 2 usuarios)
- **Formulario de contacto**: $0/mes (Web3Forms: 250 envíos/mes gratis)
- **Dominio**: ~$12-15/año (.com) o ~$25/año (.cl)
- **Mantenimiento**: Mínimo (opcional)

**Total primer año:** Solo dominio + desarrollo

### Costos futuros opcionales:
- Si excede límites de Vercel Hobby: Plan Pro $20/mes (raramente necesario para landing page)
- Si necesita más de 2 usuarios en Tina: Plan Starter $29/mes (poco probable)
- Dominio renovación anual

**Estimación realista:** Con tráfico normal de landing page, todo seguirá gratis excepto el dominio.

---

## Consideraciones Importantes

### Limitaciones del Plan Gratuito de Tina CMS:
- **2 usuarios máximo**: Perfecto si solo tu cliente y tú accederán al CMS
- Si necesitan más usuarios: Plan Starter $29/mes (hasta 5 usuarios)
- Almacenamiento de media: Tina usa tu repositorio Git para imágenes (sin límite)

### Requerimientos para el Cliente:
1. **Cuenta de GitHub** (gratuita): Necesaria para autenticación en Tina CMS
2. **Conocimiento básico de Git** (opcional):
   - Si edita localmente: Necesita saber hacer `git push`
   - Si edita en producción: No necesita saber Git (todo automático)
3. **Editor de código** (si edita localmente): VS Code es recomendado

### Capacitación para el Cliente:
Deberás crear una guía simple (con screenshots) que explique:
1. Cómo acceder al CMS (`/admin`)
2. Cómo agregar un nuevo servicio
3. Cómo editar un servicio existente
4. Cómo subir imágenes
5. Cómo publicar cambios

**Tiempo estimado de capacitación:** 30-60 minutos (Tina es muy intuitivo)

---

## Próximos Pasos

1. ✅ **Stack confirmado**: Astro + Tina CMS + Vercel
2. **Obtener contenido**:
   - Lista de servicios a mostrar
   - Textos de cada servicio
   - Imágenes (mínimo 3-4 por servicio)
   - Logo de mychiletour
   - Colores de marca (si existen)
4. **Iniciar desarrollo**: Fase 1-8

---

## Alternativas a Considerar

**Si el cliente prefiere algo más familiar:**
- WordPress con tema Astra + Elementor (más visual pero requiere hosting pagado ~$5-10/mes)

**Si necesita más interactividad futura (app web compleja):**
- Next.js en lugar de Astro (más complejo pero más potente para apps dinámicas)

**Si prefiere CMS más simple (Git-based):**
- Decap CMS en lugar de Tina (menos features pero configuración más simple)

**Si necesita CMS super potente y escalable:**
- Sanity en lugar de Tina (más complejo pero más flexible)

**Para formularios más avanzados:**
- Formspree Pro ($10/mes, 1000 envíos)
- Typeform o Tally (si necesita formularios más complejos con lógica condicional)

**Si prefiere otra plataforma de hosting:**
- Netlify (muy similar a Vercel, incluye formularios nativos)
- Cloudflare Pages (bandwidth ilimitado gratis)

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "servicios",
        label: "Servicios",
        path: "src/content/servicios",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción corta",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "number",
            name: "price",
            label: "Precio (CLP)",
            required: true,
          },
          {
            type: "string",
            name: "duration",
            label: "Duración",
            required: true,
          },
          {
            type: "number",
            name: "capacity",
            label: "Capacidad de pasajeros",
            required: true,
          },
          {
            type: "image",
            name: "images",
            label: "Imágenes",
            required: true,
            list: true,
          },
          {
            type: "string",
            name: "includes",
            label: "Incluye",
            list: true,
          },
          {
            type: "string",
            name: "excludes",
            label: "No incluye",
            list: true,
          },
          {
            type: "string",
            name: "category",
            label: "Categoría",
            required: true,
            options: ["tour", "traslado", "formalidades"],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Servicio destacado",
            description: "¿Mostrar en página de inicio?",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido completo",
            isBody: true,
          },
        ],
      },
    ],
  },
});

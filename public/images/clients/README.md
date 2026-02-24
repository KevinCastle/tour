# Logos de Clientes Corporativos

Esta carpeta contiene los logos de las empresas clientes que se muestran en la página de Empresas.

## Logos Requeridos

Coloque los siguientes logos en esta carpeta con los nombres exactos:

- `cmpc.png` - Logo de CMPC
- `lirquen.png` - Logo de Lirquén Vidrios
- `softys.png` - Logo de Softys
- `ey.png` - Logo de EY
- `packaging.png` - Logo de Packaging Chile

## Especificaciones

- **Formato**: PNG con fondo transparente (preferido) o JPG
- **Tamaño recomendado**:
  - Ancho: 200-400px
  - Alto: 100-200px
  - Los logos se redimensionarán automáticamente a 80px de altura
- **Calidad**: Alta resolución para verse bien en pantallas Retina

## Agregar Nuevos Logos

Para agregar un nuevo logo de cliente:

1. Coloque el archivo de imagen en esta carpeta
2. Edite el archivo `/src/content/pages/empresas.md`
3. Agregue una nueva entrada en la lista `clientLogos`:

```yaml
clientLogos:
  - name: "Nombre de la Empresa"
    logo: "/images/clients/nombre-archivo.png"
```

## Editar desde TinaCMS

También puede gestionar los logos directamente desde el panel de administración de TinaCMS en `/admin`.

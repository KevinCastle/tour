# Configuración de Web3Forms para Formulario de Contacto

El sitio usa **Web3Forms** para manejar el formulario de contacto. Es un servicio gratuito que envía los mensajes directamente a tu email.

## Plan Gratuito de Web3Forms

- ✅ 250 envíos/mes gratis
- ✅ Sin límite de formularios
- ✅ Protección anti-spam
- ✅ Notificaciones por email
- ✅ Sin marca de agua

## Pasos para Configurar

### 1. Crear cuenta en Web3Forms

1. Ve a https://web3forms.com
2. Click en "Get Started Free"
3. Regístrate con tu email (el email donde quieres recibir los mensajes)
4. Verifica tu email

### 2. Obtener tu Access Key

1. Una vez dentro del dashboard, encontrarás tu **Access Key**
2. Se ve algo así: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`
3. Copia esta key

### 3. Configurar el Access Key en el sitio

Edita el archivo `src/pages/contacto.astro` y busca esta línea:

```astro
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

Reemplaza `YOUR_ACCESS_KEY_HERE` con tu Access Key real:

```astro
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6" />
```

### 4. Verificar que funciona

1. Haz deploy del sitio (o prueba en local con `npm run dev`)
2. Ve a la página de contacto
3. Llena el formulario y envíalo
4. Deberías recibir un email con el mensaje

## Configuración Adicional (Opcional)

### Cambiar el email de destino

Por defecto, los mensajes se envían al email con el que te registraste en Web3Forms. Para cambiar el email de destino:

1. En tu dashboard de Web3Forms, ve a "Settings"
2. Cambia el "Email Address"
3. Verifica el nuevo email

### Personalizar el asunto del email

En `src/pages/contacto.astro`, busca esta línea:

```astro
<input type="hidden" name="subject" value="Nuevo mensaje desde MyChileTour" />
```

Cámbiala al asunto que prefieras.

### Cambiar la URL de redirección después del envío

Actualmente, después de enviar el formulario, el sitio redirige a la misma página con un parámetro `?success=true`. Si quieres cambiar esto:

```astro
<input type="hidden" name="redirect" value="https://mychiletour.com/gracias" />
```

Y crea una página `/gracias` para agradecer al usuario.

## Protección Anti-Spam

El formulario ya incluye:

1. **Honeypot field**: Campo invisible que los bots llenan pero los humanos no
2. **Web3Forms anti-spam**: Web3Forms tiene protección integrada

Si recibes mucho spam, puedes agregar Google reCAPTCHA:

1. En tu dashboard de Web3Forms, ve a "Settings"
2. Habilita "reCAPTCHA"
3. Sigue las instrucciones para configurar reCAPTCHA en tu sitio

## Alternativas si Web3Forms no funciona

Si por alguna razón Web3Forms no te funciona, puedes usar:

### Formspree (alternativa similar)
- https://formspree.io
- 50 envíos/mes gratis
- Similar a Web3Forms

### Email directo con mailto:
Puedes cambiar el formulario a un simple enlace mailto, pero esto no es recomendado porque:
- El usuario necesita tener un cliente de email configurado
- Es menos profesional
- No puedes trackear los envíos

## Soporte

Si tienes problemas:

1. **Web3Forms Dashboard**: https://dashboard.web3forms.com
2. **Documentación**: https://docs.web3forms.com
3. **Soporte**: support@web3forms.com

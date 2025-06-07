# DPhack Services

Plataforma multilingüe de servicios de hacking con soporte para español, inglés y ruso.

## Características

- Interfaz moderna y responsiva
- Soporte multiidioma (ES/EN/RU)
- Persistencia de preferencias de idioma
- Diseño optimizado para rendimiento

## Despliegue en Web Normal (Vercel)

1. Crear una cuenta en Vercel (https://vercel.com)
2. Instalar Vercel CLI:
```bash
npm i -g vercel
```

3. Login y despliegue:
```bash
vercel login
vercel
```

## Despliegue en Dark Web (.onion)

### Requisitos
- Docker
- Docker Compose

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/dphack1987/mis-servicios.git
cd mis-servicios
```

2. Iniciar los servicios:
```bash
docker-compose up -d
```

3. Obtener la dirección .onion:
```bash
docker-compose logs tor
```

La dirección .onion se mostrará en los logs del contenedor tor.

### Dirección .onion Persistente

Para mantener la misma dirección .onion después de reiniciar:

1. Crear archivo .env:
```bash
TOR_SERVICE_KEY=your_private_key
```

2. Descomentar las variables de entorno en docker-compose.yml:
```yaml
WEBSITE_TOR_SERVICE_KEY: ${TOR_SERVICE_KEY}
WEBSITE_TOR_SERVICE_VERSION: '3'
```

## Desarrollo Local

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir http://localhost:3000

## Tecnologías

- Next.js 15.3
- React
- Tailwind CSS
- TypeScript
- Docker
- Tor Hidden Services

## Seguridad

- Comunicación cifrada end-to-end en la versión .onion
- Sin logs ni registros
- Anonimato garantizado

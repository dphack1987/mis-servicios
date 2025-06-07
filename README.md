# DPhack Services

Plataforma multilingüe de servicios de hacking con soporte para español, inglés y ruso.

## 🌐 URLs de Acceso

- **Web Normal**: [https://dphack-services.vercel.app](https://dphack-services.vercel.app)
- **Dark Web**: La dirección .onion se genera al desplegar

## ✨ Características

- Interfaz moderna y responsiva
- Soporte multiidioma (ES/EN/RU)
- Persistencia de preferencias de idioma
- Diseño optimizado para rendimiento
- Comunicación cifrada end-to-end
- Sin logs ni registros
- Anonimato garantizado

## 🚀 Despliegue

### Web Normal (Vercel)

1. Fork este repositorio
2. Conéctalo a Vercel:
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```
3. Configura las variables de entorno en el dashboard de Vercel:
   - `NODE_ENV`: production
   - `NEXT_PUBLIC_APP_URL`: URL de tu aplicación

### Dark Web (.onion)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/dphack1987/mis-servicios.git
   cd mis-servicios
   ```

2. Ejecuta el script de instalación:
   ```bash
   chmod +x setup-onion.sh
   ./setup-onion.sh
   ```

3. La dirección .onion se mostrará en los logs

#### Dirección .onion Persistente

1. Crea `.env`:
   ```bash
   TOR_SERVICE_KEY=your_private_key
   ```

2. Edita `docker-compose.yml`:
   ```yaml
   WEBSITE_TOR_SERVICE_KEY: ${TOR_SERVICE_KEY}
   WEBSITE_TOR_SERVICE_VERSION: '3'
   ```

## 💻 Desarrollo Local

1. Instala dependencias:
   ```bash
   npm install
   ```

2. Copia `.env.local.example`:
   ```bash
   cp .env.local.example .env.local
   ```

3. Inicia el servidor:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:8000](http://localhost:8000)

## 🛠 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación
- `npm run start`: Inicia la aplicación en producción
- `npm run docker:build`: Construye la imagen Docker
- `npm run docker:start`: Inicia los contenedores
- `npm run docker:stop`: Detiene los contenedores
- `npm run deploy:vercel`: Despliega en Vercel
- `npm run deploy:prod`: Despliega en producción

## 🔧 Tecnologías

- Next.js 15.3
- React 18
- Tailwind CSS
- TypeScript
- Docker
- Tor Hidden Services

## 📝 Notas

- La versión web normal está optimizada para SEO y rendimiento
- La versión .onion prioriza la privacidad y el anonimato
- Ambas versiones comparten la misma base de código
- Las actualizaciones se sincronizan automáticamente

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Añade mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

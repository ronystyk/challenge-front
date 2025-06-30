# Challenge - Frontend con Vue 3 + TypeScript + Vite + Pinia + Tailwind

Este proyecto es una solución al reto propuesto. Este es el frontend de una aplicación web que permite consultar información de acciones y recibir recomendaciones de inversión.

## Instalación y ejecución local

### 1. Clona el repositorio

```bash
git clone https://github.com/ronystyk/challenge-front.git
cd challenge-front
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Crea un archivo `.env` con la URL del backend

Crea el archivo `.env` o copialo de `.env.example` con la siguiente extructura.

```bash
VITE_API_BASE_URL=http://localhost:8080
```

Si el servidor tiene una IP diferente recuerda actualizarla en `VITE_API_BASE_URL`

### 4. Ejecuta el servidor en modo desarrollo

```bash
npm run dev
```

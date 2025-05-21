# Rimac React Challenge

Este proyecto está desarrollado con **React 19**, **TypeScript** y **SCSS Modules**, siguiendo buenas prácticas de arquitectura escalable y separación por features.

---

## Tecnologías y Librerías Utilizadas

- **React 19**: Utilizado por su enfoque declarativo, soporte a componentes funcionales y gran ecosistema.
- **TypeScript**: Añade tipado estático al proyecto, mejorando la mantenibilidad y escalabilidad del código.
- **React Router DOM v7**: Manejo de rutas para navegación entre pantallas.
- **Axios**: Cliente HTTP para consumir las APIs del challenge.
- **SCSS Modules**: Estilos modulares y reutilizables que evitan colisiones de clases.
- **Vite**: Herramienta de desarrollo rápida con soporte moderno para React y TypeScript.
- **Vitest**: Framework de testing compatible con Vite.
- **Testing Library**: Utilizada para pruebas de componentes con enfoque en comportamiento del usuario.
- **ESLint**: Linter para asegurar calidad de código y buenas prácticas.
- **React Icons**: Biblioteca de íconos liviana y fácilmente integrable.

---

## Estructura del Proyecto

El proyecto está organizado por **features**, lo que permite una separación clara de responsabilidades:

- Cada feature contiene su propio reducer, acciones y efectos.
- El estado global se maneja con `useReducer` + `useContext`, combinando reducers por feature.
- Hay una carpeta `shared` para componentes reutilizables y utilitarios.

---

## Cómo levantar el proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/maurofersan/react-rimac.git
   cd react-rimac
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Ejecuta los tests:

   ```bash
   npm run test
   ```

5. Compila el proyecto para producción:
   ```bash
   npm run build
   ```

---

## Deploy en GitHub Pages

El proyecto se despliega automáticamente en GitHub Pages con **GitHub Actions**, mediante un workflow que incluye dos jobs:

1. **Test:** Corre los tests con `Vitest`.
2. **Deploy:** Si los tests pasan, construye el proyecto y lo sube a GitHub Pages.

El archivo `.github/workflows/deploy.yml` configura este proceso.

---

## Consideraciones adicionales

- Se genera un archivo `404.html` para soportar rutas en GitHub Pages.
- Se usa `react-router-dom` con rutas protegidas usando un componente `PrivateRoute`.
- El proyecto puede escalar fácilmente gracias a la arquitectura modular basada en features.

---

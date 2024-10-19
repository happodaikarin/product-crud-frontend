cat <<EOL > README.md
# Product CRUD Frontend

Este es el frontend del proyecto **Product CRUD**, una aplicación web para gestionar productos. La aplicación permite crear, editar, listar y eliminar productos, conectándose a un backend desarrollado en Spring Boot con una base de datos MySQL. El frontend está desarrollado con **React** y **Vite**, y estilizado con **Tailwind CSS**.

## Tecnologías

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Vite**: Empaquetador rápido para desarrollo y producción.
- **Tailwind CSS**: Framework de CSS para crear rápidamente interfaces personalizadas.
- **Axios**: Librería para realizar peticiones HTTP y conectar con el backend.
- **Docker**: Para contenerización de la aplicación.

## Estructura del proyecto

\`\`\`bash
frontend/
├── dist/               # Archivos generados para producción
├── public/             # Archivos públicos
├── src/                # Código fuente del proyecto
│   ├── assets/         # Recursos estáticos como imágenes
│   ├── components/     # Componentes reutilizables de React
│   ├── pages/          # Páginas principales de la aplicación
│   ├── services/       # Servicios para realizar peticiones a la API
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada de la aplicación
│   └── index.css       # Estilos principales
├── Dockerfile          # Definición del contenedor Docker
├── docker-compose.yml  # Configuración de Docker Compose
├── vite.config.js      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind CSS
└── nginx.conf          # Configuración de Nginx (opcional para despliegue)

\`\`\`

## Instalación

Sigue estos pasos para configurar y ejecutar el frontend de la aplicación en tu máquina local.

### Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn
- Docker (opcional)

### Clonar el repositorio

\`\`\`bash
git clone https://github.com/tu-usuario/product-crud-frontend.git
cd product-crud-frontend
\`\`\`

### Instalar dependencias

Si estás utilizando **npm**:

\`\`\`bash
npm install
\`\`\`

Si prefieres **yarn**:

\`\`\`bash
yarn install
\`\`\`

### Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la URL del backend (por ejemplo, si usas Docker para el backend):

\`\`\`bash
VITE_API_URL=http://localhost:8080/api
\`\`\`

### Ejecutar la aplicación en modo desarrollo

\`\`\`bash
npm run dev
\`\`\`

El proyecto estará disponible en \`http://localhost:3000\`.

### Construir la aplicación para producción

Para construir la aplicación en modo producción:

\`\`\`bash
npm run build
\`\`\`

Esto generará los archivos de producción en la carpeta \`dist/\`.

### Desplegar con Docker

Si deseas desplegar la aplicación usando Docker, puedes usar el \`docker-compose.yml\` para crear los contenedores tanto del frontend como del backend.

\`\`\`bash
docker-compose up --build
\`\`\`

## Funcionalidades principales

- **Crear producto**: Formulario para agregar nuevos productos a la base de datos.
- **Editar producto**: Editar productos existentes.
- **Listar productos**: Mostrar todos los productos en una lista.
- **Eliminar producto**: Borrar productos de la base de datos.

## Estilos

La aplicación está estilizada usando **Tailwind CSS**. Si deseas personalizar los estilos, puedes modificar el archivo \`tailwind.config.js\`.

## Contribuir

1. Haz un fork del proyecto.
2. Crea una nueva rama (\`git checkout -b feature/nueva-funcionalidad\`).
3. Realiza los cambios y haz commit (\`git commit -m 'Añadir nueva funcionalidad'\`).
4. Haz push a la rama (\`git push origin feature/nueva-funcionalidad\`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
EOL

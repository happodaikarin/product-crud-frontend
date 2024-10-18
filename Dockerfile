# Etapa 1: Construir la aplicación
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

# Etapa 2: Servir la aplicación estática con nginx
FROM nginx:alpine

# Copia el build de tu frontend (React)
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

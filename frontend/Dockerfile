# Etapa 1: Construcción
FROM node:18 AS build

# Directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copiar archivos construidos desde la etapa de construcción
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto en el que Nginx escuchará
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

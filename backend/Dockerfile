# backend/Dockerfile

# Usa una imagen base de Node.js
FROM node:18

# Expone el puerto en el que corre el backend (por ejemplo, 3001)
EXPOSE 3001

# Establece el directorio de trabajo
WORKDIR /src

# Copia el archivo package.json y package-lock.json
COPY package.json package-lock*.json ./

# Instala las dependencias
RUN npm install i npm

# Copia el código de la aplicación
COPY . .

# Comando para correr la aplicación
CMD ["node", "backend/index.js"]

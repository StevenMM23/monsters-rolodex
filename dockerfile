# Usa una imagen base de Node.js
FROM node:14

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación React (package.json y package-lock.json) al contenedor
COPY package*.json ./

# Instala las dependencias de tu proyecto
RUN npm install

# Copia el resto de tu aplicación React al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación React para producción (esto puede variar según tu proyecto)
RUN npm run build

# Expone un puerto para que puedas acceder a la aplicación (normalmente el puerto 3000 para aplicaciones React)
EXPOSE 3000

# Define el comando para iniciar tu aplicación React
CMD ["npm", "start"]

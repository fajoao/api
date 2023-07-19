# Use uma imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que seu aplicativo está ouvindo
EXPOSE 3000

# Defina o comando de inicialização do contêiner
CMD [ "npm", "start" ]

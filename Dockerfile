# Imagem de origem a ser utilizada pro container
FROM node:16

# Cria e define o diretório onde trabalharemos a aplicação
WORKDIR /usr/src/app

# Instalar dependências de aplicativos
# Um curinga é usado para garantir que tanto package.json quanto package-lock.json sejam copiados
# onde disponível (npm@5+)
COPY package*.json ./

# Após copiar os arquivos que descreve as depencdencias do projeto fazemos a instalação delas
RUN npm install

# Se você está fazendo o build do seu código para produção
# Exemplo de comando pra rodar testes ou pipeline necessário pra seguir com o deploy
# RUN npm ci --only=production

# Faz copia da origem do aplicativo
COPY . .

# Criamos variaveis de ambiente necessarias ENV MONGO_DB_URI='string de conexão do mongodb'
ENV MONGO_DB_URI=mongodb+srv://funpr0ject:vLQDEUHurEmEM8wK@cluster0.39grh.mongodb.net/?retryWrites=true&w=majority
ENV PORT=$PORT

# Expõe a porta para acesso externo
#EXPOSE 3000

# Comando para rodar a aplicação
CMD [ "node", "index.js" ]
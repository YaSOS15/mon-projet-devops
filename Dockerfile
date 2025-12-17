# 1. On part d'une version légère de Node.js (Linux Alpine)
FROM node:18-alpine

# 2. On crée un dossier de travail dans le conteneur
WORKDIR /app

# 3. On copie les fichiers de configuration (package.json)
COPY package*.json ./

# 4. On installe les dépendances
RUN npm install

# 5. On copie tout le reste du code
COPY . .

# 6. On dit que l'app tourne sur le port 3000
EXPOSE 3000

# 7. La commande pour lancer l'app
CMD ["node", "server.js"]
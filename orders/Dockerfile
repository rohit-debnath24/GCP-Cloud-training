#use the official Node.js LTS image
FROM node:18-alpine

#set the working directory
WORKDIR /app

#copy the package.json and package-lock.json files
COPY package*.json ./
#install the dependencies
RUN npm install 

#copy the rest of the application code
COPY . .

#Expose port 3001
EXPOSE 3003

#start the application
CMD ["node", "server.js"]
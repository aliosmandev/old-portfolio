FROM node:16.14.2

# Set up the working directory that will be used to copy files/directories below :
WORKDIR /backend

# Copy package.json to root directory inside Docker container of Strapi app
COPY package.json .

RUN npm install

COPY . .
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]

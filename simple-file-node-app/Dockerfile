FROM node:22-alpine3.19

WORKDIR /app

# load the package.json
COPY package*.json ./

# install the packages
RUN npm install

# COPY all the other files
COPY . ./

# RUN the application with the debug script
CMD ["npm", "start"]

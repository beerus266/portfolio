FROM node:18-alpine

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json ./

# RUN yarn
RUN npm install --force

# Copying all the files in our project
COPY . .

EXPOSE 3000

# CMD ["yarn", "start"]
CMD ["npm", "run", "start"]
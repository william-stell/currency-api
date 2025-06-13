FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run tests
RUN npm test

# Remove test files (example: tests/ folder and *.test.js files)
RUN rm -rf tests && rm -f **/*.test.js

RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
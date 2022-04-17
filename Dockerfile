FROM node:14
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY src/dist /app
CMD ["node", "main"]

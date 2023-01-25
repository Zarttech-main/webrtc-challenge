FROM node:16.13.0-alpine as server
WORKDIR /app
COPY . /app
RUN npm install

FROM node:16.13.0-alpine
COPY --from=server /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
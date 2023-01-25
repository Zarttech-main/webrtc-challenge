FROM node:16.13.0-alpine as angular
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build


FROM nginx:1.17.10-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
COPY --from=angular /app/dist/frontend /usr/share/nginx/html

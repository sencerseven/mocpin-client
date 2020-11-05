FROM node:latest as node
WORKDIR /app
COPY . .
RUN whoami
RUN pwd
RUN npm install
RUN npm run build --configuration=production

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/mocpin /usr/share/nginx/html
FROM nginx:alpine

COPY ./public /srv/www

COPY nginx.conf /etc/nginx/conf.d/default.conf
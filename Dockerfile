FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/*
RUN rm -rf /usr/share/nginx/html/*

COPY nginx/* /etc/nginx/conf.d
COPY .output/public/* /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

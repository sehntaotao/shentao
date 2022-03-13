#!/bin/sh
echo "GATEWAY_API_URL  为 ${GATEWAY_API_URL}"
cp nginx.conf /etc/nginx/nginx.conf
sed -i "s#GATEWAY_API_URL#${GATEWAY_API_URL}#g" /etc/nginx/nginx.conf
echo "参数修改完毕，如下所示："
cat /etc/nginx/nginx.conf
echo "启动 nginx"
nginx -g "daemon off;"

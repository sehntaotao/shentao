FROM qqt-image-registry.tencentcloudcr.com/build-tools/nginx:tools
ADD dist /opt/nfsshare/v5sit/dist/
RUN set -eux && \
                /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
                echo 'Asia/Shanghai' >/etc/timezone
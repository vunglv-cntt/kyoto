#!/bin/bash
docker image rm kyoto_website_dev:latest
docker build -t kyoto_website_dev:latest -f production.dockerfile .
docker rm -f kyoto_website_dev
# docker run -it -d --name kyoto_website_dev -p 3232:3232 --restart always kyoto_website_dev:latest
docker run -it -d --name kyoto_website_dev -p 3232:3232 --restart always --network apps --link nginx-proxy --link letsencrypt-nginx-proxy --env TZ=Asia/Ho_Chi_Minh -e VIRTUAL_HOST="kyoto.tasvietnam.com,www.kyotovietnam.vn" -e VIRTUAL_PORT=3232 -e LETSENCRYPT_HOST="kyoto.tasvietnam.com,www.kyotovietnam.vn" -e LETSENCRYPT_EMAIL="hcm.it@tasvietnam.com" kyoto_website_dev:latest
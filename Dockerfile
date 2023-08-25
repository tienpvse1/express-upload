FROM node:18.15.0-alpine
WORKDIR /usr/src/app
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN npm i -g pnpm
RUN pnpm i
COPY ./ ./
RUN pnpm build
CMD [ "pnpm", "start" ]
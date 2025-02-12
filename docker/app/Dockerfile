FROM node

WORKDIR /var/www

RUN chown node:node /var/www

COPY --chown=node:node ./frontend /var/www

USER node
RUN npm ci

CMD ["npm", "run", "dev"]
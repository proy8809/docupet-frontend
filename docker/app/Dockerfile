FROM node

WORKDIR /var/www

RUN chown -R node:node /var/www

COPY --chown=node:node ./frontend /var/www

COPY ./docker/app/entrypoint.sh /

USER node

CMD ["/entrypoint.sh"]
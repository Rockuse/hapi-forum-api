const Hapi = require('@hapi/hapi');
const jwt = require('@hapi/jwt');

const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');

const createServer = (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: { cors: { origin: ['*'] } },

  });
};

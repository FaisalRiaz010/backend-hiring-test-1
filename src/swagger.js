const swaggerUi = require("swagger-ui-express");
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "TuringTech Call API",
    version: "1.0.0",
  },
  paths: {
    "/calls/logs": {
      get: {
        summary: "Get all call logs",
        responses: {
          200: {
            description: "A list of calls",
          },
        },
      },
    },
  },
};

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerDocument),
};

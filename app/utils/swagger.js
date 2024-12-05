swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "REST API",
        version: "0.1.0",
        description: "Express.Js CRUD Demo",
        contact: {
          name: "Bipin Jnawali",
          email: "gyawalibipin133@gmail.com",
        },
      },
      servers: [
        {
          url: `${process.env.HOST_URL}/api`,
        },
      ],
    },
    apis: ["./app/swagger/*.js", "./app/routes/*.js"],
  };
  
const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
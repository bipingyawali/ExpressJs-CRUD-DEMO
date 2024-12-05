require("./env.js");

const express = require('express')

const bodyParser = require("body-parser");

var cors = require('cors')
const { specs, swaggerUi } = require('./app/utils/swagger');


const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");
// db.sequelize.sync({force: false}).then(() => {
// });

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({message: "Welcome to total ctrl."});
});

require('./app/routes/category.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.use((error, req, res, next) => {
    res.status(422).json({
        message: error.message,
        details:
          error.details &&
          error.details.map((err) => {
            return {
              message: err.message,
              param: err.path.join('.'),
            };
          }),
    });
})
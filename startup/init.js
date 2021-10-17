const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

module.exports = function (app, express) {
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(express.json());
};

/** Global Variables */
global.BASE_URL = __dirname;

/** ExpressJs Application */
const express = require("express");
const app = express();

/** DotEnv Configuration */
require("dotenv").config();

/** Our Application Initialization Scripts */
require(`${BASE_URL}/startup/init.js`)(app, express);

/** API Routes */
require(`${BASE_URL}/routes/api.js`)(app);

/** Server */
app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port: ${process.env.APP_PORT}`);
});

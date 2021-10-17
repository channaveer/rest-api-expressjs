const auth = require(`${BASE_URL}/routes/auth.js`);
const error = require(`${BASE_URL}/middleware/error.js`);

module.exports = (app) => {
    /** Welcome Route */
    app.get(["/", "/api/"], (request, response) => {
        return response.status(200).send({
            status: "success",
            message: "Good to see that your exploring our API's",
        });
    });

    /** Auth Routes */
    app.use("/api/auth", auth);

    /** Fallback Middleware */
    app.use(error);
};

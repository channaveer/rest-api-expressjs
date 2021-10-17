const LoginController = {
    authenticate(request, response) {
        const { error, value: user } = require(`${BASE_URL}/validations/LoginValidation.js`)(
            request.body
        );

        if (error) {
            return response.status(422).send({
                status: "error",
                message: "Validation errors.",
                errors: error.details,
            });
        }

        

        return response.status(200).send({
            status: "success",
            message: "Successfully authenticated user.",
            data: {},
        });
    },
};

module.exports = LoginController;

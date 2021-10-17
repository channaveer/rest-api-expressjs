const ForgotPasswordController = {
    forgotPassword(request, response) {
        const { error, value: user } =
            require(`${BASE_URL}/validations/ForgotPasswordValidation.js`)(request.body);

        if (error) {
            return response.status(422).send({
                status: "error",
                message: "Validation errors.",
                errors: error.details,
            });
        }

        return response.status(201).send({
            status: "success",
            message: "Reset password details sent to registered mail.",
        });
    },
};

module.exports = ForgotPasswordController;

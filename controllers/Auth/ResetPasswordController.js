const ResetPasswordController = {
    verifyResetPassword(request, response) {
        const { error, value: user } =
            require(`${BASE_URL}/validations/VerifyResetPasswordValidation.js`)(request.body);

        if (error) {
            return response.status(422).send({
                status: "error",
                message: "Validation errors.",
                errors: error.details,
            });
        }

        response.status(201).send({
            status: "success",
            message: "User account verified successfully.",
        });
    },

    resetPassword(request, response) {
        const { error, value: user } =
            require(`${BASE_URL}/validations/ResetPasswordValidation.js`)(request.body);

        if (error) {
            return response.status(422).send({
                status: "error",
                message: "Validation errors.",
                errors: error.details,
            });
        }

        response.status(201).send({
            status: "success",
            message: "User password reset successfully.",
        });
    },
};

module.exports = ResetPasswordController;

const EmailVerificationController = {
    accountVerification(request, response) {
        const { error, value: verification } =
            require(`${BASE_URL}/validations/EmailVerificationValidation.js`)(request.body);

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
            data: {
                verification,
            },
        });
    },
};

module.exports = EmailVerificationController;

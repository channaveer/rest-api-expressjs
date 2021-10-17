const UserService = require(`${BASE_URL}/services/UserService.js`);

const RegisterController = {
    async register(request, response) {
        const { error, value: userDetails } =
            require(`${BASE_URL}/validations/RegisterValidation.js`)(request.body);

        if (error) {
            return response.status(422).send({
                status: "error",
                message: "Validation errors.",
                errors: error.details,
            });
        }

        try {
            var user = await UserService.findByEmail(userDetails.email);

            if (user) {
                return response.status(422).send({
                    status: "error",
                    message: "Email already in use .",
                    errors: [
                        {
                            message: `Email already in use ${user.email}`,
                            path: ["email"],
                        },
                    ],
                });
            }

            await UserService.register(userDetails).then((user) => {
                return response.status(201).send({
                    status: "success",
                    message: "User registered successfully.",
                    user,
                });
            });
        } catch (error) {
            return response.status(422).send({
                status: "error",
                message: error.message,
                errors: [
                    {
                        message: error.message,
                    },
                ],
            });
        }
    },
};

module.exports = RegisterController;

const Joi = require("joi");

const ForgotPasswordValidation = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
    });

    return schema.validate(user, { abortEarly: false, stripUnknown: true });
};

module.exports = ForgotPasswordValidation;

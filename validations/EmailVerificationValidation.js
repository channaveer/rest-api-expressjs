const Joi = require("joi");

const EmailVerificationValidation = (validation) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        token: Joi.string().required(),
    });

    return schema.validate(validation, { abortEarly: false, stripUnknown: true });
};

module.exports = EmailVerificationValidation;

const Joi = require("joi");

const LoginValidation = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    return schema.validate(user, { abortEarly: false, stripUnknown: true });
};

module.exports = LoginValidation;

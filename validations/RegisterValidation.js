const Joi = require("joi");

const RegisterValidation = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).required(),
        confirm_password: Joi.string()
            .valid(Joi.ref("password"))
            .required()
            .label("Confirm password"),
    });

    return schema.validate(user, { abortEarly: false, stripUnknown: true });
};

module.exports = RegisterValidation;

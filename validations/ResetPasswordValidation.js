const Joi = require("joi");

const ResetPasswordValidation = (validation) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        token: Joi.string().required(),
        password: Joi.string().required(),
        confirm_password: Joi.any()
            .valid(Joi.ref("password"))
            .required()
            .label("Confirm password")
            .messages({ "any.valid": "Hello" }),
    });

    return schema.validate(validation, { abortEarly: false, stripUnknown: true });
};

module.exports = ResetPasswordValidation;

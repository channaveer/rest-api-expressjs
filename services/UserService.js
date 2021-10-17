const models = require(`${BASE_URL}/database/models`);
const Encryption = require(`${BASE_URL}/utils/Encryption.js`);

const UserService = {
    async findByEmail(email) {
        return await models.User.findOne({
            where: {
                email: email,
            },
        });
    },

    async register(user) {
        return await models.User.create({
            name: user.name,
            email: user.email,
            password: await Encryption.encrypt(user.password),
        });
    },
};

module.exports = UserService;

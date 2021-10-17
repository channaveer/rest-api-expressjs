const bcrypt = require("bcryptjs");

const Encryption = {
    async encrypt(string) {
        return await bcrypt.hash(string, parseInt(process.env.BCRYPT_SALT_LENGTH));
    },

    async match(string, encryptedString) {
        return await bcrypt.compare(string, encryptedString);
    },
};

module.exports = Encryption;

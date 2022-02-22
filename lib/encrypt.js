const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * exports.encrypt.
 *
 * @param {} password
     return promise with hashed password
 */
const encrypt = (password) => {
    return bcrypt.hash(password, saltRounds)
}

module.exports = encrypt

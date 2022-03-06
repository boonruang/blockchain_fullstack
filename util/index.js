const EC = require('elliptic').ec

const ec = new EC('secp256k1')
// secp Standards for Efficient Cryptography

module.exports = { ec }

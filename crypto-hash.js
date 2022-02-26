const crypto = require('crypto')

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256')

  hash.update(inputs.sort().join(''))
  console.log('input: ', inputs)
  return hash.digest('hex')
}

module.exports = cryptoHash

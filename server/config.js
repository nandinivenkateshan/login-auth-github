const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const pool = {
  accessTokenUrl: 'https://github.com/login/oauth/access_token',
  userDetailUrl: 'https://api.github.com/user',
  client_secret: process.env.SECRET_KEY
}

module.exports = pool

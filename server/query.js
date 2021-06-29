const fetch = require('node-fetch')
const FormData = require('form-data')
const pool = require('./config')

const getAccessToken = async (req, res) => {
  const { client_id, code } = req.body
  const { client_secret, accessTokenUrl, userDetailUrl } = pool
  const data = new FormData()
  data.append('client_id', client_id)
  data.append('client_secret', client_secret)
  data.append('code', code)
  try {
    const response = await fetch(accessTokenUrl, {
      method: 'POST',
      body: data
    })
    const paramsString = await response.text()
    console.log('paramstring', paramsString)
    const params = new URLSearchParams(paramsString)
    const access_token = params.get('access_token')
    try {
      const userDataResponse = await fetch(userDetailUrl, {
        headers: {
          Authorization: `token ${access_token}`
        }
      })
      const result = await userDataResponse.json()
      console.log('result', result)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = {
  getAccessToken
}

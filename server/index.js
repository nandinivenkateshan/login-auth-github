const express = require('express')
const db = require('./query')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const port = process.env.SERVER_PORT || 8080

app.post('/getAccessToken', db.getAccessToken)

app.listen(port, () => console.log(`App running on the port ${port}`))

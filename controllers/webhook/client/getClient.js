const { Client } = require('@zenvia/sdk')
const dotenv = require('dotenv')

function getClient() {
    dotenv.config()
    const client = new Client(process.env.ZENVIA_TOKEN)
    return client
}

module.exports = getClient

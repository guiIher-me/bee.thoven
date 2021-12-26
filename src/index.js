const dotenv = require('dotenv')
const { Client } = require('@zenvia/sdk')
const Webhook = require('../controllers/webhook')

dotenv.config()

const client = new Client(process.env.ZENVIA_TOKEN)
const webhook = new Webhook()
webhook.boot(client, 'whatsapp')
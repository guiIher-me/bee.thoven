const Webhook = require('./controllers/webhook/Webhook')
const webhook = new Webhook('whatsapp')
webhook.boot()

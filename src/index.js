const dotenv = require('dotenv')
const { Client, WebhookController } = require('@zenvia/sdk')
const Flow = require('../controllers/flow')
const { Message } = require('../controllers/message')

dotenv.config()

const client = new Client(process.env.ZENVIA_TOKEN)
const whatsapp = client.getChannel('whatsapp')

const webhook = new WebhookController({
  channel: 'whatsapp',
  messageEventHandler: async (messageEvent) => {
    let content = []

    if(Message.isAudio(messageEvent)) {
      let messages = await Flow.tryRecognizeAudio(messageEvent)
      content.push(...messages)
    }
      
    if(Message.isText(messageEvent)) {
      let messages = await Flow.tryRecognizeText(messageEvent)
      content.push(...messages)
    }
      
    whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
      .then((response) => { })
  },
})

webhook.on('listening', () => {
  console.info('Webhook is listening')
})

webhook.init()
const dotenv = require('dotenv')
const Music = require('../controllers/music')
const Message = require('../controllers/message')
const mainMenu = require('../controllers/menu/mainMenu')
const recognizeMusic = require('../controllers/recognize/recognizeMusic')

const {
  Client,
  WebhookController
} = require('@zenvia/sdk')

dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);
const whatsapp = client.getChannel('whatsapp')

let music

const webhook = new WebhookController({
  channel: 'whatsapp',
  messageEventHandler: async (messageEvent) => {

    let content = []

    if(Message.isAudio(messageEvent)) {
      const rec_music = await recognizeMusic(messageEvent.message.contents[0].fileUrl)

      try {
        
        if(!rec_music) throw new Error('Music not found!')

        music = new Music(rec_music)

        //show music items
        let messages = await music.getInfoMessages()
        content.push(...messages)
        console.log("Música encontrada!")

        //show menu
        messages = mainMenu.getMessages()
        content.push(...messages)

      } catch(e) {
        content.push(Message.toText('Desculpe, não conseguimos reconhecer a música'))
      }
    }


    if(Message.isText(messageEvent)) {

      try {

        let text = Message.getTextFromUser(messageEvent)
        let messages = await mainMenu.executeOptionByText(text, music)
        content.push(...messages)

      } catch(e) {
        content.push(Message.toText('Desculpe, um erro inesperado ocorreu!\nTente novamente mais tarde...'))
      }
      
    }
    
    whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
      .then((response) => { })
  },
});

webhook.on('listening', () => {
  console.info('Webhook is listening')
});

webhook.init()
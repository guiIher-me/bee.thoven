const dotenv = require('dotenv');
const recognizeMusic = require('../controllers/recognizeMusic')
const Music = require('../controllers/music')
const Message = require('../controllers/message')
const Menu = require('../controllers/menu')

const {
  Client,
  TextContent,
  WebhookController
} = require('@zenvia/sdk')


dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);
const whatsapp = client.getChannel('whatsapp')

let music;

const webhook = new WebhookController({
  channel: 'whatsapp',
  messageEventHandler: async (messageEvent) => {

    let content = [];

    if(Message.isAudio(messageEvent)) {
      const rec_music = await recognizeMusic(messageEvent.message.contents[0].fileUrl)

      try {
        
        if (!rec_music) throw new Error('Música não encontrada!')

        music = new Music(rec_music)

        //show music items
        let messages = await music.getInfoMessages()
        content.push(...messages)
        console.log("Música encontrada!")

        //show menu
        messages = Menu.getMessages()
        content.push(...messages)

      } catch(e) {

        content.push(new TextContent('Não foi possível localizar uma música para este áudio'))

      }
    }


    if(Message.isText(messageEvent)) {
      try {
        if(!music) throw new Error('object music is undefined!')

        let text = Message.getText(messageEvent)
        let messages = await Menu.executeOption(text, music)
        content.push(...messages)

      } catch(e) {

        content.push(new TextContent('Olá! Envie-nos um áudio de 5s com a música que deseja descobrir!'))

      }
      
    }

    whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
      .then((response) => {
        //console.debug('Response:', response);
      });
  },
});

webhook.on('listening', () => {
  console.info('Webhook is listening')
});

webhook.init()
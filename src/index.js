const dotenv = require('dotenv');
const recognizeMusic = require('../controller/recognizeMusic')
const Music = require('../controller/music')

let response = []
const {
  Client,
  TextContent,
  WebhookController
} = require('@zenvia/sdk');


dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel('whatsapp');

const webhook = new WebhookController({
  channel: 'whatsapp',
  messageEventHandler: async (messageEvent) => {
    let content = [];

    if (messageEvent.message.contents[0].type === 'file' && messageEvent.message.contents[0].fileMimeType.includes('audio')) {

      const rec_music = await recognizeMusic(messageEvent.message.contents[0].fileUrl);
      
      try {
        
        if (!rec_music) throw new Error('Música não encontrada!');

        const music = new Music(rec_music);
        content = await music.getMessages()
        console.log("Música encontrada!")

      } catch(e) {

        console.log(e)
        content.push(new TextContent('Não foi possível localizar.'))
      }
    }

    whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
      .then((response) => {
        //console.debug('Response:', response);
      });
  },
});

webhook.on('listening', () => {
  console.info('Webhook is listening');
});

webhook.init();
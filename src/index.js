const dotenv = require('dotenv');
const recognizeMusic = require ('../controller/recognizeMusic')

const {
  Client,
  FileContent,
  TextContent,
  WebhookController
} = require('@zenvia/sdk');


dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel('whatsapp');

const webhook = new WebhookController({
  channel: 'whatsapp',
  messageEventHandler: async (messageEvent) => {
    let content = [new TextContent('Testado')];

    if (messageEvent.message.contents[0].type === 'file' && messageEvent.message.contents[0].fileMimeType.includes('audio')) {
      const music = await recognizeMusic(messageEvent.message.contents[0].fileUrl);
      // console.log(messageEvent.message.contents[0].fileUrl) imprime isso: https://chat.zenvia.com/storage/files/07b22012f620450052d822330bfe1f2af1e238d610ec9a9668f4aa24f3022c5b.bin 
      //console.log("musica:", music)
      if (music) {
        let text = '';
        if (music.artist) {
          text = `${text}Artista: *${music.artist}*\n`;
        }
        if (music.title) {
          text = `${text}Título: *${music.title}*\n`;
        }
        if (music.album) {
          text = `${text}Álbum: *${music.album}*\n`;
        }
        content = [new TextContent(text)];
        if (music.spotify && music.spotify.picture) {
          content.push(new FileContent(music.spotify.picture, 'image/jpeg'));
        }
        if (music.spotify && music.spotify.preview) {
          content.push(new FileContent(music.spotify.preview, 'audio/mpeg'));
        }
        // if (music.spotify && music.spotify.link) {
        //   content.push(new FileContent(music.spotify.link, ''));
        // }
      } else {
        content = [new TextContent('Não foi possível localizar.')];
      }
    }

    whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
      .then((response) => {
        console.debug('Response:', response);
      });
  },
});

webhook.on('listening', () => {
  console.info('Webhook is listening');
});

webhook.init();

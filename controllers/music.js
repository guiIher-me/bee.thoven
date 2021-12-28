const getArrayMusicLinks = require('./functionArrayLinks')
const musicList = require('./musicList')
const { MESSAGES, Message } = require('./message')
const axios = require('axios')
const dotenv = require('dotenv')

module.exports = class Music {
    constructor(music) {
        this.music = music
    }

    getInfo() {
        let text = ''

        if (this.music.artist)
            text = `${text}Artista: *${this.music.artist}*\n`

        if (this.music.title)
            text = `${text}Título: *${this.music.title}*\n`
        
        if (this.music.album)
            text = `${text}Álbum: *${this.music.album}*\n`

        return text != '' ? MESSAGES.MUSIC_FOUND + text : false
    }

    hasImage() {
        return this.music.spotify && this.music.spotify.picture
    }

    hasAudioPreview() {
        return this.music.spotify && this.music.spotify.preview
    }

    async getLinks() {
        const linksMusic = await musicList(this.music.spotify.link)
        return getArrayMusicLinks(linksMusic.linksByPlatform)
    }

    async getLinksMessage() {
        const links = await this.getLinks()
        if(!links) return false

        let text = ''
        
        links.forEach(musicLink => {
            text += `*${musicLink.name}*:\n${musicLink.url}\n\n`
        });
        
        return text != '' ? text : false;
    }

    async getInfoMessages() {
        let content = []

        const musicInfoMessage = this.getInfo()

        if(musicInfoMessage)
          content.push(Message.toText(musicInfoMessage))
        
        // comentado para economizar mensagens enviadas ao webhook
        // descomente as linhas abaixo em prod

        // if (this.hasImage())
        //   content.push(Message.toFile(this.music.spotify.picture, 'image/jpeg'))
        
        // if (this.hasAudioPreview())
        //   content.push(Message.toFile(this.music.spotify.preview, 'audio/mpeg'))

        return content
    }

    async getLinksPlayerMusicMessages() {
        let content = []

        let linksMessage = await this.getLinksMessage()

        if(linksMessage) {
            linksMessage = '*Players de Música:*\n\n' + linksMessage
            content.push(Message.toText(linksMessage))
        } else
            content.push(Message.toText(MESSAGES.ERROR_PLAYERS_NOT_FOUND))

        return content
    }

    //TODO
    async getLyricsMessages() {
        let content = []
        if(this.music.lyrics)
            content.push(Message.toText(this.music.lyrics))
        else
            content.push(Message.toText(MESSAGES.ERROR_LYRICS_NOT_FOUND))

        return content
    }

    //TODO
    async getTradutionMessages() {
        let content = []
        dotenv.config();

        try {
            const LANG_PTBR = 1
            let request = `https://api.vagalume.com.br/search.php?art=${this.music.artist}&mus=${this.music.title}&apikey=${process.env.VAGALUME_TOKEN}`
            let response = await axios.get(request)            
            if(!response.data) throw new Error('Tradução não encontrada!')

            let translations = response.data.mus[0].translate
            let tradution = translations.find((trad) => trad.lang == LANG_PTBR)
            content.push(Message.toText(tradution.text))

        } catch(e) {
            content.push(Message.toText(MESSAGES.ERROR_TRADUTION_NOT_FOUND))
        } finally {
            return content
        }
    }

    //TODO
    async findMusicByText(text) {
        return []       
    }
    
}
let getArrayMusicLinks = require('./functionArrayLinks')
const musicList = require('./musicList')

const {
    FileContent,
    TextContent,
} = require('@zenvia/sdk');

module.exports = class Music {
    constructor(music) {
        this.music = music;
    }

    getInfo() {
        let text = ''

        if (this.music.artist)
            text = `${text}Artista: *${this.music.artist}*\n`

        if (this.music.title)
            text = `${text}Título: *${this.music.title}*\n`
        
        if (this.music.album)
            text = `${text}Álbum: *${this.music.album}*\n`

        return text != '' ? text : false;
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

    async getMessages() {
        let content = []

        const MusicInfoMessage = this.getInfo()

        if(MusicInfoMessage)
          content.push(new TextContent(MusicInfoMessage))
        
        if (this.hasImage())
          content.push(new FileContent(this.music.spotify.picture, 'image/jpeg'))
        
        if (this.hasAudioPreview())
          content.push(new FileContent(this.music.spotify.preview, 'audio/mpeg'))

        const linksMessage = await this.getLinksMessage()
        if(linksMessage)
            content.push(new TextContent(linksMessage))

        return content
    }
    
}
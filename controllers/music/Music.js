const Infos = require('./features/infos/Infos')
const Players = require('./features/Players/Players')
const Lyrics = require('./features/lyrics/Lyrics')
const Translator = require('./features/tradutions/Translator')

class Music {
    constructor(music) {
        this.music = music
    }

    async getInfos() {
        const infos = new Infos(this.music);
        return await infos.getMessages();
    }

    async getPlayers() {
        const players = new Players(this.music);
        return await players.getMessages();
    }

    async getLyrics() {
        const lyrics = new Lyrics(this.music);
        return await lyrics.getMessages();
    }

    async getTradution() {
        const translator = new Translator(this.music);
        return await translator.getMessages();
    }

    //TODO
    async findMusicByText(text) {
        return []       
    }
    
}

module.exports = Music

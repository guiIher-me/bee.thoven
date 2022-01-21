const getMessages = require('./getMessages');
const MusicFeature = require('../MusicFeature')

class Lyrics extends MusicFeature {
    constructor(music) {
        super(music)
    }

    async getMessages() {
        return await getMessages(this.music)
    }
}

module.exports = Lyrics

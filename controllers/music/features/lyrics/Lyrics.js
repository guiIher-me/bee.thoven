const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Lyrics extends MusicFeature {
    async getMessages() {
        return getMessages(this.music)
    }
}

module.exports = Lyrics

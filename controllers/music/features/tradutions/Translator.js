const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Translate extends MusicFeature {
    async getMessages() {
        return getMessages(this.music)
    }
}

module.exports = Translate

const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Infos extends MusicFeature {
    async getMessages() {
        return getMessages(this.music)
    }
}

module.exports = Infos

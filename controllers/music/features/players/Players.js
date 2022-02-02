const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Players extends MusicFeature {
    async getMessages() {
        return getMessages(this.music)
    }
}

module.exports = Players

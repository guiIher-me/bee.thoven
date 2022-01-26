const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Translate extends MusicFeature {
    constructor(music) {
        super(music)
    }

    async getMessages() {
        return await getMessages(this.music)
    }
}

module.exports = Translate

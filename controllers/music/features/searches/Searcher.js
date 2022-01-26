const getMessages = require('./getMessages')
const MusicFeature = require('../MusicFeature')

class Searcher extends MusicFeature {
    constructor(fileaudio) {
        super()
        this.fileaudio = fileaudio
    }

    async getMessages() {
        return await getMessages(this.fileaudio)
    }
}

module.exports = Searcher

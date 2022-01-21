
const MusicFeature = require('./MusicFeature')
const MessageHelper = require('../../message/MessageHelper')
const MESSAGES = require('../../message/messages.enum')

class NullFeature extends MusicFeature {
    constructor() {
        super(null);
    }
    
    async getMessages() {
        return MessageHelper.toText(MESSAGES.ERROR_UNEXPECTED)
    }
}

module.exports = NullFeature
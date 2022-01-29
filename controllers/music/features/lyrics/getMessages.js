const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')

async function getMessages(music) {
    const content = []
    if (music.lyrics)
        content.push(MessageHelper.toText(music.lyrics))
    else
        content.push(MessageHelper.toText(MESSAGES.ERROR_LYRICS_NOT_FOUND))

    return content
}

module.exports = getMessages

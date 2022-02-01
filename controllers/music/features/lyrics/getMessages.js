const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')

async function getMessages(music) {
    const content = []
    if (music.lyrics) {
        const lyrics = music.lyrics.replace(/&#39;/g, ' ').replace(/&#34;/g, '"')
        content.push(MessageHelper.toText(lyrics))
    } else
        content.push(MessageHelper.toText(MESSAGES.ERROR_LYRICS_NOT_FOUND))

    return content
}

module.exports = getMessages


const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')
const speechToText = require('./speechToText')
const searchTextOnWeb = require('./searchTextOnWeb')
const formatResults = require('./formatResults')
const Logger = require('../../../logger/Logger')

async function getMessages(fileaudio) {
    const content = []
    try {
        const text = await speechToText(fileaudio)
        Logger.info('Searcher.getMessages', `texto intepretado: ${text}`)

        const results = await searchTextOnWeb(text)
        const message = formatResults(text, results);

        console.log("\n\n\n\n\nMessage:")
        console.log(message)
        content.push(MessageHelper.toText(message))
    } catch(error) {
        Logger.error('Searcher.getMessages', error)
        content.push(MessageHelper.toText(MESSAGES.ERROR_MUSIC_NOT_FOUND))
    } finally {
        return content
    }
}

module.exports = getMessages
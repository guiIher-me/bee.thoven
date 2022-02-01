const formatLinks = require('./formatLinks')
const getLinks = require('./getLinks')
const getSpecificLinks = require('./getSpecificLinks')

const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')
const Logger = require('../../../logger/Logger')

async function getMessages(music) {
    const content = []

    try {
        const response = await getLinks(music.spotify.link)
        const links = getSpecificLinks(response.linksByPlatform)
        let linksMessage = formatLinks(links)

        linksMessage = `*Players de Música:*\n\n${linksMessage}`
        content.push(MessageHelper.toText(linksMessage))
        return content
    } catch (error) {
        Logger.error('players/getMessages', error)
        content.push(MessageHelper.toText(MESSAGES.ERROR_PLAYERS_NOT_FOUND))
        return content
    }
}

module.exports = getMessages

const formatLinks = require('./formatLinks')
const getLinks = require('./getLinks')
const getSpecificLinks = require('./getSpecificLinks')

const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')

async function getMessages(music) {
    let content = []
    
    const response = await getLinks(music.spotify.link)
    const links = getSpecificLinks(response.linksByPlatform)
    let linksMessage = await formatLinks(links)

    if(linksMessage) {
        linksMessage = '*Players de Música:*\n\n' + linksMessage
        content.push(MessageHelper.toText(linksMessage))
    } else
        content.push(MessageHelper.toText(MESSAGES.ERROR_PLAYERS_NOT_FOUND))

    return content
}

module.exports = getMessages

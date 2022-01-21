const filterLinks = require('./filterLinks')
const getLinks = require('./getLinks')
const MessageHelper = require("../../message/MessageHelper")
const MESSAGES = require("../../message/messages.enum")

async function getMessages(music) {
    let content = []
    
    const links = await getLinks(music)
    let linksMessage = await filterLinks(links)

    if(linksMessage) {
        linksMessage = '*Players de Música:*\n\n' + linksMessage
        content.push(MessageHelper.toText(linksMessage))
    } else
        content.push(MessageHelper.toText(MESSAGES.ERROR_PLAYERS_NOT_FOUND))

    return content
}

module.exports = getMessages

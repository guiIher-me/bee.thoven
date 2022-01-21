const Menu = require('./Menu')
const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const Option = require('./option')

let mainMenu = new Menu('Escolha uma das opções para ver mais detalhes:')

mainMenu.addOption(new Option('Players de música', true, async (params) => {
    let { music } = {...params}
    return await music.getPlayers()
}))
mainMenu.addOption(new Option('Letra', true, async (params) => {
    let { music } = {...params}
    return await music.getLyrics()
}))
mainMenu.addOption(new Option('Tradução', true, async (params) => {
    let { music } = {...params}
    return await music.getTradution()
}))
mainMenu.addOption(new Option('Não, obrigado', false, async (params) => {
    params.music = null //reset music obj
    return [MessageHelper.toText(MESSAGES.GOOD_BYE)]
}))

module.exports = mainMenu
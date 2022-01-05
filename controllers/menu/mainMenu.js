const Menu = require('./menu')
const { MESSAGES, Message } = require('../message')
const Option = require('./option')

let mainMenu = new Menu('Escolha uma das opções para ver mais detalhes:')

mainMenu.addOption(new Option('Players de música', true, async (params) => {
    let { music } = {...params}
    return await music.getLinksPlayerMusicMessages()
}))
mainMenu.addOption(new Option('Letra', true, async (params) => {
    let { music } = {...params}
    return await music.getLyricsMessages()
}))
mainMenu.addOption(new Option('Tradução', true, async (params) => {
    let { music } = {...params}
    return await music.getTradutionMessages()
}))
mainMenu.addOption(new Option('Não, obrigado', false, async (params) => {
    params.music = null //reset music obj
    return [Message.toText(MESSAGES.GOOD_BYE)]
}))

module.exports = mainMenu
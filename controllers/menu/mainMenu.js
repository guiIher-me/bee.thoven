const Menu = require('./Menu')
const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const MusicFeatureFactory = require('../music/features/MusicFeatureFactory')
const Option = require('./option')

let mainMenu = new Menu('Escolha uma das opções para ver mais detalhes:')

mainMenu.addOption(new Option('Players de música', true, async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('players', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new Option('Letra', true, async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('lyrics', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new Option('Tradução', true, async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('tradutions', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new Option('Não, obrigado', false, async (params) => {
    params.music = null //reset music obj
    return [MessageHelper.toText(MESSAGES.GOOD_BYE)]
}))

module.exports = mainMenu
const Menu = require('./Menu')
const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const MusicFeatureFactory = require('../music/features/MusicFeatureFactory')
const Option = require('./Option')
const ExitOption = require('./ExitOption')

let mainMenu = new Menu('Escolha uma das opções para ver mais detalhes:')

mainMenu.addOption(new Option('Players de música', async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('players', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new Option('Letra', async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('lyrics', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new Option('Tradução', async (params) => {
    let { music } = {...params}
    const feature = MusicFeatureFactory.createFeature('tradutions', music)
    return await feature.getMessages()
}))

mainMenu.addOption(new ExitOption('Não, obrigado', async (params) => {
    params.music = null //reset music obj
    return [MessageHelper.toText(MESSAGES.GOOD_BYE)]
}))

module.exports = mainMenu
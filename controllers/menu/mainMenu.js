const Menu = require('./Menu')
const MessageHelper = require('../message/MessageHelper')
const MESSAGES = require('../message/messages.enum')
const MusicFeatureFactory = require('../music/features/MusicFeatureFactory')
const Option = require('./Option')
const OptionExit = require('./OptionExit')

const mainMenu = new Menu('Escolha uma das opções para ver mais detalhes:')

mainMenu.addOption(new Option('Players de música', async (params) => {
    const { music } = { ...params }
    const feature = MusicFeatureFactory.createFeature('players', music)
    return feature.getMessages()
}))

mainMenu.addOption(new Option('Letra', async (params) => {
    const { music } = { ...params }
    const feature = MusicFeatureFactory.createFeature('lyrics', music)
    return feature.getMessages()
}))

mainMenu.addOption(new Option('Tradução', async (params) => {
    const { music } = { ...params }
    const feature = MusicFeatureFactory.createFeature('tradutions', music)
    return feature.getMessages()
}))

mainMenu.addOption(new OptionExit('Não, obrigado', async (params) => {
    // eslint-disable-next-line no-param-reassign
    params.music = null // reset music obj
    return [MessageHelper.toText(MESSAGES.GOOD_BYE)]
}))

module.exports = mainMenu

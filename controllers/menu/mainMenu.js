const Menu = require('./menu')
const Option = require('./option')

let mainMenu = new Menu('O que você deseja obter?')
mainMenu.addOption(new Option('Players de música', 'getLinksPlayerMusicMessages'))
mainMenu.addOption(new Option('Letra', 'getLyricsMessages'))
mainMenu.addOption(new Option('Tradução', 'getTradutionMessages'))

module.exports = mainMenu; 
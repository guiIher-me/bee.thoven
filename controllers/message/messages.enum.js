
const MESSAGES = {
    'WELCOME': 'Olá, que bom ter você aqui!\nPara começar, envie um áudio de 5 segundos com a música que deseja descobrir!',
    'MUSIC_FOUND': 'Oba! Encontrei essa aqui 👇\n\n',
    'ERROR_MUSIC_NOT_FOUND': 'Hmm... Não conseguimos reconhecer a música 😓\nVamos tentar de novo, envie um *áudio de 5 segundos* com a música que deseja descobrir!',
    'MENU_INVALID_OPTION': 'Ops! A opção escolhida não é válida, digite o número ou escreva uma das opções acima 👆',
    'ERROR_PLAYERS_NOT_FOUND': 'Ops! Não foi possível encontrar players disponíveis para essa música',
    'ERROR_LYRICS_NOT_FOUND': 'Ops! Não foi possível encontrar a letra para essa música',
    'ERROR_TRADUTION_NOT_FOUND': 'Ops! Não foi possível encontrar a tradução para essa música',
    'ERROR_UNEXPECTED': 'Poxa, um erro inesperado aconteceu 😯\nVocê pode tentar novamente mais tarde.',
    'UNKNOW_MESSAGE_TYPE': 'Hmm... Não conseguimos entender esse formato de mensagem.\nEnvie apenas o áudio da música!',
    'GOOD_BYE': 'Quando quiser, é só enviar novamente um áudio pra gente!\nAté a próxima 👋'
}
Object.freeze(MESSAGES)

module.exports = MESSAGES;
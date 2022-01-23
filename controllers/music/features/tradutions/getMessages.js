const Logger = require('../../../logger/Logger')
const axios = require('axios')
const dotenv = require('dotenv')
const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')

async function getMessages(music) {
    let content = []
    dotenv.config();

    try {
        const LANG_PTBR = 1
        let request = `https://api.vagalume.com.br/search.php?art=${music.artist}&mus=${music.title}&apikey=${process.env.VAGALUME_TOKEN}`
        let response = await axios.get(request)            
        if(!response.data) throw new Error('Tradução não encontrada!')

        let translations = response.data.mus[0].translate
        let tradution = translations.find((trad) => trad.lang == LANG_PTBR)
        content.push(MessageHelper.toText(tradution.text))

    } catch(error) {
        Logger.error('tradutions/getMessages', error)
        content.push(MessageHelper.toText(MESSAGES.ERROR_TRADUTION_NOT_FOUND))
    } finally {
        return content
    }
}

module.exports = getMessages

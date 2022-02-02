const axios = require('axios')
const dotenv = require('dotenv')
const Logger = require('../../../logger/Logger')
const MessageHelper = require('../../../message/MessageHelper')
const MESSAGES = require('../../../message/messages.enum')

async function getMessages(music) {
    const content = []
    dotenv.config()

    try {
        const LANG_PTBR = 1
        const request = `https://api.vagalume.com.br/search.php?art=${music.artist}&mus=${music.title}&apikey=${process.env.VAGALUME_TOKEN}`
        const response = await axios.get(request)
        if (!response.data)
            throw new Error('Tradução não encontrada!')

        const translations = response.data.mus[0].translate
        const tradution = translations.find((trad) => trad.lang === LANG_PTBR)
        content.push(MessageHelper.toText(tradution.text))

        return content
    } catch (error) {
        Logger.error('tradutions/getMessages', error)
        content.push(MessageHelper.toText(MESSAGES.ERROR_TRADUTION_NOT_FOUND))
        return content
    }
}

module.exports = getMessages

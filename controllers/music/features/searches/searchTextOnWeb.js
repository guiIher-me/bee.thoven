const axios = require('axios')
const dotenv = require('dotenv')
const Logger = require('../../../logger/Logger')

const baseurl = 'https://customsearch.googleapis.com/customsearch/v1'
const maxResults = 5

async function searchTextOnWeb(lyricsSnippet) {
    Logger.info('searchTextOnWeb', 'tentando pesquisar músicas pelo texto...')

    dotenv.config()
    const apiKey = process.env.GCSKey
    const searchEngineID = process.env.GCSEngine

    try {
        const response = await axios.get(`${baseurl}?key=${apiKey}&q=${lyricsSnippet}&cx=${searchEngineID}&num=${maxResults}`)
        const { data } = response

        let results = getResults(data)
        results = orderResultsByConfidence(results)

        return results
    } catch (error) {
        Logger.error('searchTextOnWeb', error)
        throw new Error('Erro ao tentar pesquisar músicas pelo texto...')
    }
}

function getResults(search) {
    if (!search || !search.items)
        return []

    const { items } = search
    const results = items.map((item) => {
        const result = {
            title: item.title,
            snippet: item.snippet,
            htmlSnippet: item.htmlSnippet,
            band: null,
            lyrics: null,
            confidence: getConfidence(item.htmlSnippet),
        }

        if (item.pagemap) {
            const music = item.pagemap.musicrecording
            if (music && music[0] && music[0].name)
                result.title = music[0].name

            const group = item.pagemap.musicgroup
            if (group && group[0] && group[0].name)
                result.band = group[0].name

            const composition = item.pagemap.musiccomposition
            if (composition && composition[0] && composition[0].lyrics)
                result.lyrics = composition[0].lyrics
        }

        return result
    })

    return results
}

function getConfidence(snippet) {
    const MAXCONFIDENCE = 11
    const contScatteredOccurrences = (snippet.match(/<b>/g) || []).length
    return MAXCONFIDENCE - contScatteredOccurrences
}

function orderResultsByConfidence(results) {
    results.sort((a, b) => {
        if (a.confidence >= b.confidence)
            return -1
        return 1
    })

    return results
}

module.exports = searchTextOnWeb

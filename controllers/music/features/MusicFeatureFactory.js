const Infos = require('./infos/Infos')
const Lyrics = require('./lyrics/Lyrics')
const Players = require('./players/Players')
const Translator = require('./tradutions/Translator')
const Searcher = require('./searches/Searcher')
const NullMusicFeature = require('./NullMusicFeature')
const Logger = require('../../logger/Logger')

class MusicFeatureFactory {
    static createFeature(featurename, params) {
        if (featurename === 'infos')
            return new Infos(params)

        if (featurename === 'lyrics')
            return new Lyrics(params)

        if (featurename === 'players')
            return new Players(params)

        if (featurename === 'tradutions')
            return new Translator(params)

        if (featurename === 'searches')
            return new Searcher(params)

        const error = new Error(`undefined feature ${featurename}`)
        Logger.error('MusicFeatureFactory', error)
        return new NullMusicFeature()
    }
}

module.exports = MusicFeatureFactory

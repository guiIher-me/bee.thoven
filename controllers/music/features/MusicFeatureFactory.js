const Infos = require('./infos/Infos')
const Lyrics = require('./lyrics/Lyrics')
const Players = require('./players/Players')
const Translator = require('./tradutions/Translator')

class MusicFeatureFactory {
    static createFeature(featurename, music) {
        if(featurename === 'infos')
            return new Infos(music)
        else if(featurename === 'lyrics')
            return new Lyrics(music)
        else if(featurename === 'players')
            return new Players(music)
        else if(featurename === 'tradutions')
            return new Translator(music)
        else
            throw error('undefined feature');
    }
}

module.exports = MusicFeatureFactory
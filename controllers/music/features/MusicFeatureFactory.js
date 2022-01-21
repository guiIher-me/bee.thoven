const Infos = require('./infos/Infos')
const Lyrics = require('./lyrics/Lyrics')
const Players = require('./players/Players')
const Translator = require('./tradutions/Translator')
const NullFeature = require('./NullFeature')

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
        else {
            console.error(`undefined feature ${featurename}`);
            return new NullFeature()
        } 
    }
}

module.exports = MusicFeatureFactory
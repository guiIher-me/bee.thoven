
const Fuse = require('fuse.js')

class RecognizeOption {

    static recognize(item, list) {
        const options = { }
        const fuse = new Fuse(list, options)
        const result = fuse.search(item)
        return result
    }

}

module.exports = RecognizeOption

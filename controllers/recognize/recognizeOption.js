
const Fuse = require('fuse.js')

module.exports = class RecognizeOption {
    
    static recognize(item, list) {
        const options = {
            minMatchCharLength: 3
        }
          
        const fuse = new Fuse(list, options)
        const result = fuse.search(item)
        return result
    }

}

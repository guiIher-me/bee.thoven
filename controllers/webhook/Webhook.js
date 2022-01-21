const boot = require('./boot')
const getChannel = require('./client/getChannel')

module.exports = class Webhook {    
    static boot(channel_str) {
        try {
            const channel = getChannel(channel_str);
            boot(channel);
        } catch(error) {
            console.log(error);
        }
    }
}

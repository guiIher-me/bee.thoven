/* eslint-disable no-underscore-dangle */

class Logger {
    static isEnable() {
        return true
    }

    static _log(logtype, functioname, message, obj = null) {
        if (Logger.isEnable()) {
            const logmessage = `${functioname} - ${message}`
            console.log(`[${logtype}] ${logmessage}`)
            if (obj)
                console.log(obj)
        }
    }

    static error(functioname, error, obj = null) {
        Logger._log('ERR', functioname, error.message, obj)
    }

    static info(functioname, message, obj = null) {
        Logger._log('INFO', functioname, message, obj)
    }

    static warn(functioname, message, obj = null) {
        Logger._log('WARN', functioname, message, obj)
    }
}

module.exports = Logger

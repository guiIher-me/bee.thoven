

module.exports = class Button {

    static optionsToButton(options) {
        let buttons = options.map((option, index) => {
            return {
                "id": `${index + 1}`,
                "title": option
            }
        })

        return buttons
    }

    static getMenu(body, options) {
        return {
            "type": "button",
            "body": `*${body}*`,
            "buttons": Button.optionsToButton(options)
        }
    }

}
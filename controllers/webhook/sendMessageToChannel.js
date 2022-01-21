
function sendMessageToChannel(channel, messageEvent, content) {
    channel.sendMessage(messageEvent.message.to, messageEvent.message.from, ...content)
        .then((response) => { console.log("Mensagem enviada pro canal") });
}

module.exports = sendMessageToChannel;
const Discord = require("discord.js")


function parseMessage(message) {
    let rawText = message.content.split(' ')
    let command = rawText[0]
    let msg = rawText.slice(1)

    return { command, msg }
}

function createEmbed() {
    return new Discord.RichEmbed()
}






module.exports = {
    parseMessage,
    createEmbed
}
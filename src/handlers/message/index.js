const Discord = require('discord.js')
const utils = require('../../utils')
const fetch = require('node-fetch')
const moment = require('moment')
const { User } = require("../../db/index")

class MessageHanlder {
    
    hello(message) {
        message.channel.send(`Hello ${message.author.username}`)
    }

    userInfo(message) {
        const embed = utils.messages.createEmbed()
        embed.setAuthor(`${message.author.username}`, message.author.icon)
        embed.setColor('e65212')
        embed.setDescription("this is a test description jdkna gdjsb gbaj fshlbgs gsdhb sdgb dsgjb sg gs ")
        embed.setTitle("User Info")
        embed.addField('Full User Name', `${message.author.username}#${message.author.discriminator}`)
        embed.addField('Date Created', `${moment(message.author.createdAt)}`)
        embed.addField('USER ID', `${message.author.id}`)
        message.channel.send(embed)
    }

    serveContent(message) {
        // needs user topics
        utils.formatContent()
    }

    async chuckNorris(message) {
        let joke
        try {
            const data = await fetch('http://api.icndb.com/jokes/random')
            const json = await data.json()
            joke = await json.value.joke
        } catch (error) {
            joke = error
        }

        message.channel.send(await joke)
    }

    preferences(message) {
        findOrCreate(User, message)
        // true: setUserInDB, start signup dialogue

        // false: return the users preferences
    }

    commandNotFound(message) {
        const embed = utils.createEmbed()
        embed.setColor('#E65212')
        embed.setImage("https://http.cat/404")
        message.channel.send(embed)
    }
}

module.exports = new MessageHanlder()
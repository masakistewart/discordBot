const parser = require('../../curriculum-parser/es/parser').parse;

const Discord = require('discord.js')
const utils = require('../../utils')
const fetch = require('node-fetch')
const moment = require('moment')
const { User } = require("../../db/index")
const { db } = require('../../utils/index')
class MessageHanlder {
    
    hello(message) {
        message.channel.send(`Hello ${message.author.username}`)
    }

    ParseInsight(content) {

        console.log((content))
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

    // serveContent(message) {
    //     // needs user topics
    //     let embed = this.insightEmbed(CurrTools.topics['comp-sci'].courses['data-structures-and-algorithms'].workouts[0].insights[0])
    //     message.channel.send(embed)
    // }

    insightEmbed(insightJson) {
        let color = this.makeColor()
        const embed = utils.messages.createEmbed()
        // console.log(insightJson)
        embed.setAuthor(insightJson.author)
        embed.setTitle(insightJson.headline)
        embed.setColor(color)
        embed.setDescription(this.ParseInsight(insightJson))
        embed.addField("category", insightJson.category, false)
        embed.addField("level", insightJson.levels[0], false)
        embed.addField("type", insightJson.type, false)
        embed.addField("type", insightJson.type, false)
        return embed
    }

    // TODO: Should be moved out of file
    makeColor() {
        let text = "#"
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      
        for (var i = 0; i < 5; i++) {
          let randomChar = possible.charAt(Math.floor(Math.random() * possible.length))
          text += randomChar
        }

        return text
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
        db.user.findOrCreate(User, message)
        // true: setUserInDB, start signup dialogue

        // false: return the users preferences
    }

    commandNotFound(message) {
        const embed = utils.messages.createEmbed()
        embed.setColor('red')
        embed.setImage("https://http.cat/404")
        message.channel.send(embed)
    }
}

// mh = new MessageHanlder()

// mh.insightEmbed()

module.exports = new MessageHanlder()
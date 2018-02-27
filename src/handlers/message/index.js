const Discord = require('discord.js')
const utils = require('../../utils')
const fetch = require('node-fetch')
const moment = require('moment')


function hello(message) {
    message.channel.send(`Hello ${message.author.username}`)
}

function userInfo(message) {
    const embed = utils.createEmbed()
    embed.setAuthor(`${message.author.username}`, message.author.icon)
    embed.setColor('e65212')
    embed.setDescription("this is a test description jdkna gdjsb gbaj fshlbgs gsdhb sdgb dsgjb sg gs ")
    embed.setTitle("User Info")
    embed.addField('Full User Name', `${message.author.username}#${message.author.discriminator}`)
    embed.addField('Date Created', `${moment(message.author.createdAt)}`)
    embed.addField('USER ID', `${message.author.id}`)
    message.channel.send(embed)
}

function serveContent(message) {
    utils.formatContent()
}

async function chuckNorris(message) {
    let joke
    try {
        const data = await fetch('http://api.icndb.com/jokes/random')
        const json = await data.json()
        joke = await json.value.joke
    } catch(error) {
        joke = error
    }
    
    message.channel.send(await joke)
}

module.exports = {
    hello,
    userInfo,
    chuckNorris
}
const discord           = require("discord.js")
const utils   = require('./utils')
const handlers          = require('./handlers')

const { messageHanlder }    = handlers
const client                = new discord.Client()


client.on('ready', async () => {
    console.log(`logged in as ${client.user.username}`)

    // try {
    //     let link = await client.generateInvite(["ADMINISTRATOR"])
    //     console.log(link)
    // } catch (e) {
    //     console.log(e.stack)
    // }
})


client.on('message', async message => {
    const { command, msg } = utils.parseMessage(message)

    switch (command) {
        case "hello":
            messageHanlder.hello(message)
            break

        case "userinfo":
            messageHanlder.userInfo(message)
            break
        case "serve content":
            break
    
        case "joke":
            messageHanlder.chuckNorris(message)
        default:
            break
    }
})


client.login(process.env.BOT_TOKEN)
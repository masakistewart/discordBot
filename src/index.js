const discord           = require("discord.js")
const { messages }   =     require('./utils')
const handlers          = require('./handlers')

const { messageHandler }    = handlers
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
    const { command, msg } = messages.parseMessage(message)
    if (!command) return
    console.log(command)
    switch (command) {
        case "hello":
            messageHandler.hello(message)
            break
        case "userinfo":
            messageHandler.userInfo(message)
            break
        case "content":
            messageHandler.serveContent(message)
            break
        case "preferences":
            messageHandler.preferences(message)
            break
        case "joke":
            messageHandler.chuckNorris(message)
            break
        default:
            console.log(command)
            messageHandler.commandNotFound(message)
            break
    }
})


try {
    console.log(getToken())
    client.login(getToken())
} catch(e) {
    console.log("error: ===> ", e.stack)
}

function getToken() {
    return process.env.BOT_TOKEN;
}

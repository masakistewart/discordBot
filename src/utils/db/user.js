function userFactory(message) {
    const { username, descriminator, createdAt, id } = message.author
    return {
        userName: username,
        descriminator: descriminator,
        dateJoinedDiscord: createdAt,
        userID: id
    }
}

async function findOrCreate(User, message) {
    const user = await User.findOne({ username: message.author.username })
    
    if (user) return user

    createUser(User, message)
}

function createUser(User, message) {
    new User(userFactory(message)).save()
}




module.exports = {
    userFactory,
    findOrCreate
}
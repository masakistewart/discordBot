function userFactory(message) {
    const { username, descriminator, createdAt, id } = message.author
    return {
        userName: username,
        descriminator: descriminator,
        dateJoinedDiscord: createdAt,
        userID: id
    }
}

function findOrCreate(User, message) {
    const user = User.find({ username: message.author.username }, (err, user) => {
        if (user) {
            User(userFactory(message)).save((err, er) => {
                console.log(err, er)
                message.channel.send("User Has Been Saved")
            })
        }
    })
}

module.exports = {
    userFactory,
    findOrCreate
}
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: String,
    descriminator: Number,
    dateJoinedDiscord: Date,
    dateJoinedEnki: Date,
    lastOnline: Date,
    userID: Number,
    topics: Array
})

userSchema.pre('save', function (next) {
    const currentDate = new Date()
    this.lastOnline = currentDate
    if (!this.dateJoinedEnki)
        this.dateJoinedEnki = currentDate
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User




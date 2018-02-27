const { messageHanlder } = require('../handlers')

mockSend = jest.fn()

const author = {
    username: "Cairo Stewart",
    icon: "fluffy",
    color: 'e6212',
    createdAt: new Date()
}

const channel = {
    send: mockSend
}

const message = {
    author,
    channel
}


describe("#hello", () => {
    it("should use the send method", () => {
        messageHanlder.hello(message)
        expect(mockSend).toBeCalled()
    }) 

    it("should greet the user with their own username", () => {
        messageHanlder.hello(message)
        expect(mockSend).toBeCalledWith("Hello Cairo Stewart")
    })
})

describe("#userinfo", () => {
    it("should use send method", () => {
        messageHanlder.userInfo(message)
        expect(mockSend).toBeCalled()
    })

    it("should have all the proper fields filled out", () => {
        expect(message.author.createdAt instanceof Date && !isNaN(message.author.createdAt.valueOf())).toBe(true);
        expect(message.author.color).toBeTruthy()
        expect(message.author.icon).toBeTruthy()
        expect(message.author.username).toBeTruthy()
    })
})
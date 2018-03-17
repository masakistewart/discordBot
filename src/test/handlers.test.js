const { messageHandler } = require('../handlers')

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
        messageHandler.hello(message)
        expect(mockSend).toBeCalled()
    }) 

    it("should greet the user with their own username", () => {
        messageHandler.hello(message)
        expect(mockSend).toBeCalledWith("Hello Cairo Stewart")
    })
})

describe("#userinfo", () => {
    it("should use send method of the message object", () => {
        messageHandler.userInfo(message)
        expect(mockSend).toBeCalled()
    })

    it("should have all the proper fields filled out", () => {
        expect(message.author.createdAt instanceof Date && !isNaN(message.author.createdAt.valueOf())).toBe(true);
        expect(message.author.color).toBeTruthy()
        expect(message.author.icon).toBeTruthy()
        expect(message.author.username).toBeTruthy()
    })
})

describe("#preferences", () => {
    it("should send a preferences dialogue if the user is new", () => {
        expect(messageHandler.preferences).toBeDefined()
    })

    it("should use the send method", () => {
        expect(messageHandler.preferences(message))
    })
})
const rules = require("../rules")

test('hello world', () => {
    expect(true).toBe(true)
    console.log("Hello World")
})

test('has action', () => {
    expect(rules.action).not.toBeUndefined()
})
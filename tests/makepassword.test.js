// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');
const util = require("../src/utility");

/*
// Let's say you have a toHash() function in this module

test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
    const input = ???
    const output = ???
    expect(p.toHash(input)).toBe(output);
});
*/

describe("makepassword should create file", () => {
    const fileName = './tests/passwordtest.txt'
    const encFileName = './tests/passwordtest.enc.txt'

    // 1. Make sure password.enc.txt does not exist before running the function

    test('Check if password.enc.txt exists',() => {
        expect(fs.existsSync(encFileName)).toBe(false);

        p.makepassword(fileName, encFileName)
    });

    // 2. Make sure password.enc.txt does exist after running the function.
    test('Check if password.enc.txt exists',() => {
        expect(fs.existsSync(encFileName)).toBe(true);
    });
    // 3. Make sure the contents of password.enc.txt has correct contents.
    test('Check makepassword: if the email:password is there and as expected',() => {
        let inputFromFile = util.readFile("./" + encFileName)
        let inputFromFileComp = util.readFile("./" + fileName)
        let holdValueSet = inputFromFileComp[0].split(":")
        var email = holdValueSet[0]
        var password = util.hash(holdValueSet[1])
        let emailPasswordPair = inputFromFile[0].split(":")
        let emailIn = emailPasswordPair[0]
        let passwordIn = emailPasswordPair[1]

        expect(emailIn).toBe(email);
        expect(passwordIn).toBe(password);
    })
})






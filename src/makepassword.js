'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {
    let inputFromFile = readFile(passwordFileName);
    let emailPasswordHashedPair = []

    for( let i = 0; i < inputFromFile.length; i++){
        let emailPasswordPair = inputFromFile[i].split(":")
        emailPasswordPair[1] = hash(emailPasswordPair[1])

        let email = emailPasswordPair[0]
        let password = emailPasswordPair[1]

        emailPasswordHashedPair[i] = email + ":" + password

    }
    writeFile(emailPasswordHashedPair, passwordEncFileName)
}


if (require.main === module) {
    makepassword('./password.txt', './password2.enc.txt')
}

module.exports = {makepassword};
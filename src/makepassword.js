'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {

    function makepassword(passwordFileName, passwordEncFileName) {

        let inputFromFile = readFile(passwordFileName);
        let emailPasswordHashedPair

        for( let i = 0; i < inputFromFile; i++){
            let emailPasswordPair = inputFromFile[i].split(":")
            emailPasswordPair[1] = hash(emailPasswordPair[1])

            let email = emailPasswordPair[0]
            let password = eamilPasswordPair[1]

            emailPasswordPair[i] = email + ":" + password

            emailPasswordHashedPair = emailPasswordPair
        }

        writeFile(emailPasswordHashedPair, "password.enc.txt")
    }
}


if (require.main === module) {
    makepassword('./password.txt', './password.enc.txt')
}

module.exports = {makepassword};
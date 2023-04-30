'use strict'
const fs = require('fs');
const util = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]

    let inputFromFile = util.readFile("./" + filename)
    password = util.hash(password)

    for( let i = 0; i < inputFromFile.length; i++){

        let emailPasswordPair = inputFromFile[i].split(":")
        let emailIn = emailPasswordPair[0]
        let passwordIn = emailPasswordPair[1]

        if (email === emailIn) {
            if (passwordIn === password) {
                return true
            } else {
                return false
            }
        }
    }

    return false


}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {passwordjs};
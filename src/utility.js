'use strict'

const fs = require('fs');
const {createHash} = require('crypto')

function readFile(fileName) {
    if (!fs.existsSync(fileName)) {
        throw `${fileName} does not exist!`
    }
    try {
        var text = fs.readFileSync(fileName).toString('utf-8');
        // edit made here: Changed \n to \r\n
        var textByLine = text.split("\r\n"); //textByline is an array
        return textByLine; // returns array
    } catch (err) {
        console.log(err)
    }
}

function writeFile(ar, fileName) {
    try {
        // edit made here: Changed \n to \r\n
        var res = ar.join("\r\n")
        fs.writeFileSync(fileName, res)
    } catch (err) {
        console.log(err)
    }
}

function hash(input) {
    return createHash('sha256').update(input).digest('hex'); // never use md5
}

module.exports = {readFile, writeFile, hash};
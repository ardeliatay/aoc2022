const rawInput = require('./input');
const input = rawInput.split("\n")

const charset = 'abcdefghijklmnopqrstuvwxyz'
const alphabet = charset + charset.toUpperCase()

const sum = arr => arr.reduce((acc, next) => acc + next, 0);

const prioritize = arr => arr.map(item => alphabet.indexOf(item) + 1)

module.exports = { input, sum, prioritize }
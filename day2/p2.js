const rawInput = require('./input');
const input = rawInput.split("\n")

const combinations = {
  AX: 3,
  AY: 4,
  AZ: 8,
  CZ: 7,
  CY: 7,
  CX: 2,
  BX: 1,
  BY: 5,
  BZ: 9
}

const rounds = input.map(i => i.split(' ').join(''))
const total = rounds.map(round => combinations[round])

const sum = arr => arr.reduce((acc, next) => acc + next, 0);
console.log(sum(total))
const rawInput = require('./input');
const input = rawInput.split("\n")

const combinations = {
  AX: 4,
  AY: 8,
  AZ: 3,
  CZ: 6,
  CY: 2,
  CX: 7,
  BX: 1,
  BY: 5,
  BZ: 9
}

const rounds = input.map(i => i.split(' ').join(''))
const total = rounds.map(round => combinations[round])

const sum = arr => arr.reduce((acc, next) => acc + next, 0);
console.log(sum(total))

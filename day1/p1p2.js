const rawInput = require('./input');
const input = rawInput.split("\n\n").map(i => i.split("\n").map(n => Number(n)))

const sum = arr => arr.reduce((acc, next) => acc + next, 0);

const totals = []

function part1() {
  input.forEach(i => totals.push(sum(i)))
  return Math.max(...totals)
}

function part2() {
  const sortedTotals = totals.sort((a, b) => b - a);
  return sum(sortedTotals.slice(0,3))
}

console.log(part1())
console.log(part2())

const { input, sum, prioritize } = require('./common');

const rucksacks = input.map(rucksack => {
    const a = rucksack.slice(0, rucksack.length / 2).split("")
    const b = rucksack.slice(rucksack.length / 2, rucksack.length).split("")
    return [a, b]
})

const duplicates = rucksacks.map(rucksack => {
    const [firstCompartment, secondCompartment] = [rucksack[0], rucksack[1]]
    return firstCompartment.filter(item => secondCompartment.includes(item))[0]
})

console.log(sum(prioritize(duplicates)))


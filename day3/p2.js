const { input, sum, prioritize } = require('./common');

let groups = []
for (let i = 0; i < input.length; i += 3) {
    groups.push(input.slice(i, i + 3));
}

function findBadge(group) {
   const rucksacks = group.map(rucksack => rucksack.split(""))
    return rucksacks[0].filter(item => {
        return rucksacks[1].includes(item) && rucksacks[2].includes(item)
    })[0]
}

const duplicates = groups.map(findBadge)

console.log(sum(prioritize(duplicates)))
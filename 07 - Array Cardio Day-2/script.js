const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
// some person with age >= 19
var person = people.some(first => {
    if (new Date().getFullYear() - first.year >= 19)
          return true
})
console.log(person)

//every person with age >=19
person = people.every(first => {
    if (new Date().getFullYear() - first.year >= 19)
        return true
})
console.log({ person })

//find object with id = 823423
console.log(comments.filter(person => person.id === 823423))

//find index of id = x and delete it.

var temp = comments.findIndex(person => person.id === 2039842)
console.log(temp)

// comments.splice(temp,1)
// console.log(comments)

var newtemp = [
    ...comments.slice(0, temp),
    ...comments.slice(temp + 1)
]

console.table(newtemp)


// const food = ['pizza', 'cake', 'salad', 'cookie'];
// food.splice(2, 1,'kart')
// console.log(food)


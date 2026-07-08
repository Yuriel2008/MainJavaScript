console.log("Javascript Array")

// List contain similar items

let numbers = [1, 2, 9, 3, 4, 8]
let names = [
    "Nguyen Vu Minh Long",
    "Nguyen Xern",
    "Chu Huyen Trang",
    "Nguyen Thu Hoai",
    "Yuriee",
]

console.log(names[0])
console.log(names[3])
console.log(numbers[2])

// How to fix and change value for some items
names[4] = "Yurie"
console.log(names)
// Change 9 => 3 for me
numbers[2] = 3
console.log(numbers)

// How to add new item to list
let newPerson = "Quang Anh"
names.push(newPerson)
names.push("Minh Huyen")
names.push("Person 2")
console.log(names);

numbers.push(3)
numbers.push(4)
numbers.push(6)
console.log(numbers)

// Delete some value
// Detete item in index, how many item you want to delete
names.splice(0, 1)
names.splice(3, 1)
console.log(names)



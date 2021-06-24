//
// what it does : one by one
//

let numbers = [ 3, 2, 1]
console.log(numbers)

// 
numbers.push(10, 11)
console.log(numbers)

var sports = ['10', '11'];
sports.push('10','10','12','13');
console.log(sports);
//
numbers.pop()
console.log(numbers)

var sports = ['10', '11','12'];
sports.pop()
console.log(sports)

//vs pop
numbers.shift()
console.log(numbers)

var numbers = ['10', '11','12'];
  numbers.shift()
console.log(numbers)

//vs push
numbers.unshift( -2, -1, 0)
console.log(numbers)

var numbers = ['10', '11','12'];
  numbers.unshift(-2,-1,0)
console.log(numbers)

//remove/separate/splice
let ns = numbers.splice(2,3)
console.log(numbers)
console.log(ns)

//extract
let sl = numbers.slice(2)
console.log(numbers)
console.log(sl)

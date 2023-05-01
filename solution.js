const array = (string) => string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ')

console.log(array('')) // null
console.log(array('1, 2')) // null
console.log(array('1, 2, 3')) // '2'
console.log(array('A1,B2,C3,D4,E5')) // 'B2, C3, D4'
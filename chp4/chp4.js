// Answer to question # 1.
let str = "Har\""
console.log(str.length)

// Answer to Question #2
console.log("Answer to Question #2")
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = 'laz'
console.log(`The word "${word}" ${sentence.includes(word)? 'is': 'is not'} in the sentence `);
console.log(sentence.startsWith('The'))
console.log(sentence.endsWith('dog.'))

// Answer to Question # 3
console.log("answer to Question #3")
console.log(str.toLowerCase())

// Answer to Question #4
console.log("Answer to Question #4");
let str1 = "Please give Rs 1000";
let amount = str1.slice("Please give Rs ".length);
console.log(amount)

// Answer to Question # 5
console.log(`The character in string are not changeable, Because string is "Immutable"`)
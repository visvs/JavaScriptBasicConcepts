const age = 24; // primitive
const name = "Alexis"; // primitive
const loading = false; // primitive
const primitiveUser = undefined; // primitive
const counter = Symbol("counter"); // primitive
const bigIntConstant = BigInt(1);

const user = { name: "Alexis" }; // reference
const friends = ['Vivi', 'Allan']; // reference
const doThing = () => console.log('this is a function'); // reference



console.log(typeof user)
console.log(typeof(friends))
console.log(typeof(doThing))

console.log(typeof( age))
console.log(typeof( name))
console.log(typeof( loading))
console.log(typeof( primitiveUser))
const response = null; // primitive

console.log(!!response)
console.log(typeof( counter))
console.log(typeof( bigIntConstant))


//Have not methods and properties
const primitiveType = "Alexis"; 
primitiveType.age = 24;

console.log(primitiveType.age)

const referenceType = {name: 'Alexis'}
referenceType.age = 23;

console.log(referenceType)

//Methods?? 
//Object wrapper
const message = 'you fell in love'

console.log(message.length)

//What??
console.log(0.1 + 0.2 )

console.log(NaN === NaN)

function myFunction (){
    const barrigas = 'gatito'
}

console.log({barrigas})
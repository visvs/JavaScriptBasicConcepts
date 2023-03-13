const msg = 'Hola @name, este es un ejemplo de como utilizar en practica las expresiones regulares, que te parece, @name?';

const myRegex = /@\w+/g
const myRegex2 = new RegExp('/@\w+/', 'g')

console.log(msg.replace(myRegex, 'Alexis')) //no muta el original
console.log(msg)

console.log(myRegex.test(msg)) //no lo uses
console.log(myRegex.exec(msg))


console.log(msg.match(myRegex).length) //usalo
if(msg.match(myRegex).length >= 1){
    //...
}


/*
TODO: REGEX para validar email
/^[a-zA-z0-9-_.]+@[a-zA-z0-9-_]+(\.[a-zA-z]{2,3}){1,2}$/g
*/
const person = {
    name: 'Alexis',
    greeting: function (){
        console.log(`Hi, my name is  ${this.name}`)
    }
}
//objecto.funcion
console.log(person.greeting())

const pet ={
    name: 'Bruno',
    greeting: function(){
        console.log(`My pet is ${this.name}`)
    }
}

const myPet = pet.greeting

console.log(myPet())

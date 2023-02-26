const person = {
    name: 'Alexis',
    greeting: function (age){
        console.log(`Hi, my name is  ${this.name} and my age is ${age}`)
    }
}

console.log(person.greeting(24))

const pet ={
    name: 'pepitas'
}
 


//call y apply invocan la funcion en ese instante (en el que son llamados)
person.greeting.call(pet, 3)
person.greeting.apply(pet, [3])

//bind retorna la nueva funcion con el this definido
//una vez usado bind no se puede volver a enlazar un objeto a dicha funcion
const petGreeting = person.greeting.bind(pet, [3])

petGreeting()
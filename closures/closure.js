const counter = () =>{
     let count = 0; //privadas

     return function incrementCount(){//declaracion
        count += 1;
        return count;
     }
}

const firstCounter = counter()

console.log(firstCounter)

console.log(firstCounter())//1
console.log(firstCounter())//2
console.log(firstCounter())//3
//los closures recuerdan el valor de las variables del padre (instancias)
console.log(counter.count)

const secondCounter = counter()
console.log(secondCounter())//4 || 1

//1. hacer variables privadas
//2. crear funciones
//At
['π', 'π', 'π'].at(1)  //'π'

console.log(['π', 'π', 'π'].push('π', 'π'))  //['π', 'π', 'π','π'] retorna el nuevo tamaΓ±o

['π', 'π', 'π'].pop()   //['π', 'π',]

['π', 'π', 'π'].unshift('π')  //['π','π', 'π', 'π']

['π', 'π', 'π'].shift()   //['π', 'π']

['π', 'π', 'π'].reverse()   //['π','π' , 'π']

['π', 'π', 'π'].fill('π₯')   //['π₯','π₯','π₯']

['π', 'π₯', 'π'].join(' ')   //'π π₯ π'

['π', 'π₯', 'π'].includes('π«')   //false

['π', 'π₯', 'π'].concat(['π«'])   //['π', 'π₯', 'π','π«']

console.log(['π', 'π₯', 'π'].toString()) //π,π₯,π

['π₯', 'π₯¦', 'π½'].some(item => item === 'π')   //false
['π₯', 'π₯¦', 'π½'].some(item => item === 'π½')   //true  --> itera hasta que encuentra incidencia


function gg (item){
    const myBoleano =  item === 'π'
    return myBoleano
}
['π', 'π', 'π'].every(gg)   //false
['π', 'π', 'π'].every(item => item === 'π')   //true



['π₯', 'π«', 'π', 'π'].find(item => item === 'π') //undefind si no encuentra nada
['π₯', 'π«', 'π', 'π'].findIndex(item => item === 'π') // -1 sino encuentra nada


['π₯', 'π«', 'π', 'π'].filter(item => item !== 'π') // ['π₯', 'π«', 'π']

['π₯', 'π«', 'π', 'π'].slice(0,3) //POSICIONES

//array.splice(indiceInicio,  espaciosEliminar , ...items)
console.log(['π₯', 'π«', 'π', 'π'].splice(0 ,3))
const laLineaIntoxicada = ['π₯', 'π«', 'π', 'π']
console.log(laLineaIntoxicada.splice(3 ,1, 'π'))
console.log(laLineaIntoxicada)

console.log([3,1,5,7,2,10, 18].sort())
console.log([3,1,5,7,2,10, 18].sort((a,b) => {
    console.log({a,b})
    return a - b
}))
console.log([3,1,5,7,2,10, 18].sort((a,b) => b - a))
//reduce
const ventas = [10,14,15,3,6,9,10, 20]

console.log(ventas.reduce((accumulador, valor, indice, array)=>{
    return accumulador = accumulador + valor
}, 0))

const authors = {
    10: 'carItoon',
    8: 'Mily',
    7: 'imagine'
}

const aVerReduceme = [
    {
        sing: 'this is my time',
        rate: 10,
    },
    {
        sing: 'flowers',
        rate: 8
    },
    {
        sing: 'bird',
        rate: 6,
    }
]

console.log(aVerReduceme.map((obj)=>{
    return {...obj, author: authors[obj.rate] ?? 'desconocido'}
}))

const result = aVerReduceme.reduce((reduciendo, valorIterado)=>{
    if(reduciendo?.rate > valorIterado.rate) return reduciendo

    return reduciendo = valorIterado
 }, {})
console.log(result)

 console.log(aVerReduceme.reduce((reduciendo, valorIterado)=>{
    return reduciendo = reduciendo + valorIterado.rate
}, 0))

//Todos pueden pasar al antro??
[{name: 'Sam', age: 24}, {name: 'Robert', age: 21}, {name: 'Max', age: 17}].every(item => item.age >= 18) //false = ya valieron
[{name: 'Sam', age: 24}, {name: 'Robert', age: 21}, {name: 'Max', age: 17}].some(item => item.age < 18) //true = ya valieron
//Quien si puede??
const amigos = [{name: 'Sam', age: 24}, {name: 'Robert', age: 21}, {name: 'Max', age: 17}]

console.log(amigos.filter((amiguis)=> amiguis.age >= 18))







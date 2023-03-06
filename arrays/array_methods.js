//At
['🍎', '🍐', '🍇'].at(1)  //'🍐'

console.log(['🍎', '🍐', '🍇'].push('🍌', '🍎'))  //['🍎', '🍐', '🍇','🍌'] retorna el nuevo tamaño

['🍎', '🍐', '🍇'].pop()   //['🍎', '🍐',]

['🍎', '🍐', '🍇'].unshift('🍌')  //['🍌','🍎', '🍐', '🍇']

['🍎', '🍐', '🍇'].shift()   //['🍐', '🍇']

['🍎', '🍐', '🍇'].reverse()   //['🍇','🍐' , '🍎']

['🍎', '🍐', '🍇'].fill('🥝')   //['🥝','🥝','🥝']

['🍌', '🥑', '🍆'].join(' ')   //'🍌 🥑 🍆'

['🍌', '🥑', '🍆'].includes('🫐')   //false

['🍌', '🥑', '🍆'].concat(['🫐'])   //['🍌', '🥑', '🍆','🫐']

console.log(['🍌', '🥑', '🍆'].toString()) //🍌,🥑,🍆

['🥕', '🥦', '🌽'].some(item => item === '🍍')   //false
['🥕', '🥦', '🌽'].some(item => item === '🌽')   //true  --> itera hasta que encuentra incidencia


function gg (item){
    const myBoleano =  item === '🍟'
    return myBoleano
}
['🍔', '🍕', '🍟'].every(gg)   //false
['🍔', '🍔', '🍔'].every(item => item === '🍔')   //true



['🥒', '🫒', '🍉', '🍟'].find(item => item === '🍟') //undefind si no encuentra nada
['🥒', '🫒', '🍉', '🍟'].findIndex(item => item === '🍟') // -1 sino encuentra nada


['🥒', '🫒', '🍉', '🍟'].filter(item => item !== '🍟') // ['🥒', '🫒', '🍉']

['🥒', '🫒', '🍉', '🍟'].slice(0,3) //POSICIONES

//array.splice(indiceInicio,  espaciosEliminar , ...items)
console.log(['🥒', '🫒', '🍉', '🍟'].splice(0 ,3))
const laLineaIntoxicada = ['🥒', '🫒', '🍉', '🍟']
console.log(laLineaIntoxicada.splice(3 ,1, '🍑'))
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







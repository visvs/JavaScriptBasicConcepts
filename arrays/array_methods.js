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


['🥕', '🥦', '🌽'].some(item => item === '🍍')   //false
['🥕', '🥦', '🌽'].some(item => item === '🌽')   //true  --> itera hasta que encuentra incidencia

['🍔', '🍕', '🍟'].every(item => item === '🍟')   //false
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
console.log([3,1,5,7,2,10, 18].sort((a,b) => a - b))
console.log([3,1,5,7,2,10, 18].sort((a,b) => b - a))

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
        rate: 8,
    }
]


console.log(aVerReduceme.reduce((reduciendo, valorIterado)=>{
    return reduciendo = reduciendo + valorIterado.rate
}, 0))

console.log(aVerReduceme.map((obj)=>{
    return {...obj, author: 'su autor'}
}, 0))



//Todos pueden pasar al antro??
[{name: 'Sam', age: 24}, {name: 'Robert', age: 21}, {name: 'Max', age: 17}].every(item => item.age >= 18) //false = ta valieron
[{name: 'Sam', age: 24}, {name: 'Robert', age: 21}, {name: 'Max', age: 17}].some(item => item.age < 18) //true = ya valieron
//Quien si puede??








// AND
//Es muy utilizado en condicionales ifs

/* Uilizado con boleanos  */
console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

/* utilizado con variables de cualquier tipo */
//retorna el primer falsy, si todos son truthy retorna el ultimo evaluado

console.log(null && 1)
console.log(1 && 0)
console.log(1 && 'ya no sere ignorado')
console.log(null && '' &&  0)

const rtaApiA = undefined;
const rtaApiB = undefined;
const defaultValue = 'https://http.cat/102'

let rta;

//rta =  rtaApiA && rtaApiB && defaultValue
rta =  (rtaApiB ?? rtaApiA) ?? defaultValue

console.log(rta)

if(rtaApiA) {
  rta = rtaApiA
}
else if(rtaApiB) {
  rta = rtaApiB
}
else {
  rta = defaultValue
}

console.log(rta)

console.log(12 % 5)


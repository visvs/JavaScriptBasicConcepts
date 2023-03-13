// OR 
//Es muy utilizado en condicionales ifs

/* Uilizado con boleanos  */
console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

/* utilizado con variables de cualquier tipo */
//retorna el primer truthy, si todos son falsy retorna el ultimo evaluado

console.log(null || 1)
console.log(1 || 0)
console.log(1 || 'sere ignorado')
console.log(null || '' ||  0)

const rtaApiA = 'https://http.cat/401';
const rtaApiB = undefined;
const defaultValue = 'https://http.cat/102'

let rta;

if(rtaApiA) {
  rta = rtaApiA
}
else if(rtaApiB) {
  rta = rtaApiB
}
else {
  rta = defaultValue
}


rta =  rtaApiA || rtaApiB || defaultValue //facilmente escalable


//Operador terneario  --> valor1 ? return1 : return2

rta = !!rtaApiA ? rtaApiA : !!rtaApiB ? rtaApiB : defaultValue
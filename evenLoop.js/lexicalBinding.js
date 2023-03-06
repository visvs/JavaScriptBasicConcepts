//Las arrow function se ejecutan en el contexto que fueron creadas por lo que tienen acceso a las variables de su scope
const instructor = {
    name: 'MiduDev',
    twitter:'@midudev',
    greeting: function(){
        console.log(`${this.name} is a genius`)

        function follow(){
            console.log(`Follow in ${this.twitter}`)
        }
        follow()
    }

}

//los obejetos no crean  nuevos scopes (locales)
//funciones crean nuevos scopes

console.log(instructor.greeting())
//no es el this de follow es el this del scope
const genius = {
    name: 'MiduDev',
    twitter:'@midudev',
    greeting: function(){
        console.log(`${this.name} is a genius`)

        function follow(){
            console.log(`Follow in ${this.twitter}`)
        }
        follow()
    }
}

//objetos guardan referencias --> pointers//address

B01
A13

console.log(genius.greeting())



console.log(genius == instructor)
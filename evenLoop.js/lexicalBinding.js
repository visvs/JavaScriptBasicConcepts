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

console.log(instructor.greeting())
//no es el this de follow es el this del scope
const genius = {
    name: 'MiduDev',
    twitter:'@midudev',
    greeting: function(){
        console.log(`${this.name} is a genius`)

        const follow = () =>{
            console.log(`Follow in ${this.twitter}`)
        }
        follow()
    }

}

console.log(genius.greeting())
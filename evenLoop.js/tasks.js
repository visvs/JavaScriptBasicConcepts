function onFetch (response){
    console.log(response)
}

function handleClick (){
    console.log('you had clicked on me')
}

function onClick (){
    setTimeout(handleClick, 100);
}

document.getElementById('root').addEventListener('onClick', onClick);
fetch('http://example.com').then((response) => onFetch(response)).catch()
fetch('http://example.com').then(onFetch)



async function callFetch(){
    try {
        const response =  await fetch('http://example.com')
        onFetch(response)
    } catch (error) {
        console.log('')
    }
}

setTimeout(()=>{
    console.log('que onda')
}, 1000)

console.log('queonda')
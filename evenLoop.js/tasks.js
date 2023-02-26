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

fetch('http://example.com').then(response => onFetch(response))
fetch('http://example.com').then(onFetch)


async function callFetch(){
    const response =  await fetch('http://example.com')

    onFetch(response)
}
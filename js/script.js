// recuperation des valeurs du formulaire 

let noun = document.getElementById('noun')
let adjective = document.getElementById('adjective')
let person = document.getElementById('person')
let verb = document.getElementById('verb')
let place = document.getElementById('place')

// recuperation de la div story
let storyDiv = document.getElementById('story')


function sendForm(event){
    event.preventDefault()
    if(noun.value == '' || adjective.value == '' || person.value == '' || verb.value == '' || place.value == ''){
        console.log('Veuillez renseigner toutes les informations demandées')
    }else{
        let text = story(noun.value,person.value,verb.value,adjective.value,place.value)
        pushStoryInTheDom(text)
    }
}


function story(noum,person,verb,adjective,place){
    return ` I like to look at ${noum}s, I think that they are ${adjective}. My favorite person is ${person}.We often ${verb} together when `
}

function pushStoryInTheDom(storyTell){
    let span = document.createElement('span') 
    span.style.fontWeight = 'bolder'
    span.style.padding = '.3em'
    span.textContent = storyTell
    storyDiv.appendChild(span)
}
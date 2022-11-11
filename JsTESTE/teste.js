let counter = 0
    
function count() {
    counter++
    document.querySelector('h2').innerHTML = counter;

    if (counter % 12 === 0) {
        alert(`Count is now ${counter}`);
    }

}

function menos() {
    counter--
    document.querySelector('h2').innerHTML = counter;

    if (counter === -2) {
        alert(`Count is now ${counter}`);
    }
}





/* function hello() {
    document.querySelector('h1').innerHTML = '########';
    } */ 
    
    function hello() {
    if (document.querySelector('h1').innerHTML === 'Hello!'){
        document.querySelector('h1').innerHTML = 'Goodbye!';
    } else{
        document.querySelector('h1').innerHTML = 'Hello!'
    }
}

// MUDAR COR

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('#red').onclick = function() {
    document.querySelector('#cor').style.color = 'red';
    document.querySelector('#cor').innerHTML = 'Red'
}

document.querySelector('#blue').onclick = function() {
    document.querySelector('#cor').style.color = 'blue';
    document.querySelector('#cor').innerHTML = 'Blue'
}

document.querySelector('#green').onclick = function() {
    document.querySelector('#cor').style.color = 'Green';
    document.querySelector('#cor').innerHTML = 'Green'
}
})

// MUDAR COR SELECT

document.addEventListener('DOMContentLoaded', () => {

document.querySelector('select').onchange = function () {
    document.querySelector('#cor2').style.color = this.value;
}
})


// TASKS

document.addEventListener('DOMContentLoaded', () => {
document.querySelector('form').onsubmit = () => {
    const task = document.querySelector('#task').value;

    const li = document.createElement('li');
    li.innerHTML = task;

    document.querySelector('#tasks').append(li);
    return false;

}
})

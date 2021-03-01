let input = document.getElementById('input')
input.addEventListener('click', addingEventListener())


function addingEventListener() {
  input.addEventListener('click', () => addingEventListener())
}





/*
let input = document.getElementById('input')

function addingEventListener(input){

}

function addEventListener(){

}
*/
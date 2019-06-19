let modalBtn = document.getElementById('modalBtn')//get modalBtn 
let modal = document.getElementsByClassName('modal')[0]//get modal
let closeTag = document.getElementById('modal-closeTag')//get modal-closeTag
modalBtn.addEventListener('click', function () {//add eventlistener for modalBtn
    modal.style.display = 'block'
})

closeTag.addEventListener('click', function () {//add eventListener for modal-closeTag
    modal.style.display = 'none'
})
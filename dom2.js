//let form = document.getElementById('addForm')
//console.log(form)
//let items = document.getElementById('items')
//console.log(items)
//let itemList = document.getElementsByClassName('list-group-item')
//console.log(itemList)
//
//
////Form sumbit Event
//form.addEventListener('submit', addItem)
//
////Add item
//function addItem(e){
//    e.preventDefault() 
//    let newItem = document.createElement('li')
//    newItem.classList.add('list-group-item')
//    newItem.innerHTML = e.target.firstElementChild.value+'<button class="btn btn-sm btn-danger float-right delete">x</button>'
//    items.appendChild(newItem)
////    console.log(e.target.firstElementChild)
////    console.log(e.target.firstElementChild.value)
//}
////console.log(items.children)
////console.log(items.childNodes)
////console.log(items.childElementCount)
////items.children.lastElementChild.addEventListener('click',delItem)
//console.log(items.children)
//let children = items.children
//for(let i = 0; i < children.length; i++){
//    //console.log(children[i].lastChild)
//    children[i].lastChild.addEventListener('click',delItem)
//    
//}
//function delItem(e){
//    e.preventDefault()
//    console.log(e.target)
//    let li = e.target.parentElement
//    console.log(li)
//    items.removeChild(li)
//}

//上面是我用的第一种方法
let form = document.getElementById('addForm')
let items =document.getElementById('items')
//console.log(form)
//console.log(items)
form.addEventListener('submit',addItem)
function addItem(e){
    e.preventDefault()
    // get input's value
    let value = document.getElementById('addItem').value
//    let value = form.firstChild.value
    let newItem = document.createElement('li')
 newItem.appendChild(document.createTextNode(value))
    newItem.className = 'list-group-item'
    let btn = document.createElement('button')
    btn.appendChild(document.createTextNode('x'))
    btn.className = 'btn btn-danger btn-sm float-right delete'
    btn.addEventListener('click',deleteItem)
    newItem.appendChild(btn)
    items.appendChild(newItem)
    

}
console.log(items)
console.log(items.children)
    //此时items的li元素已发生改变，返回items
    //remmber HTMLCollection is array collection!!!!
//so---->>>
let children = items.children
for(let i = 0; i< children.length;i++){
    //console.log(children[i])
    //children[i] ===> li
    //add click event for button(x)
    children[i].lastElementChild.addEventListener('click',deleteItem)
}
function deleteItem(e){
    e.preventDefault()
    // delte li==>e.target.parentElement
    let li = e.target.parentElement
    console.log(li)
    items.removeChild(li)
}






















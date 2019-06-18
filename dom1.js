// Examine the document object //
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123
// // console.log(document.title) print=>123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[9])
// //document.all[9].textContent = 'Hello'
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//GET ELEMENTBYID//
// console.log(document.getElementById('header-title'))
{
    // let headerTitle = document.getElementById('header-title')
    // console.log(headerTitle)
    // headerTitle.textContent = 'Hello'
    // headerTitle.innerText = 'Goodbye'
    // console.log(headerTitle.textContent)
    // console.log(headerTitle.innerText)
    // headerTitle.innerHTML = '<h3>Hello</h3>'
    // headerTitle.style.borderBottom = 'solid 3px #000'
}
//GETELEMENTSBYCLASSNAME//
{
    // let items = document.getElementsByClassName('list-group-item')
    // console.log(items)
    // console.log(items[1])
    // items[1].textContent = "Hello 2"
    // items[1].style.fontWeight = 'bold'
    // items[1].style.backgroundColor = 'yellow'

    // // Gives errors
    // // items.style.backgroundColor = '#f4f4f4'
    // for (let i = 0; i < items.length; i++) {
    //     items[i].style.backgroundColor = '#f4f4f4'
    // }
}
//GETELEMENTSBYTAGNAME//
{
    // let li = document.getElementsByTagName('li')
    // console.log(li)
    // console.log(li[1])
    // li[1].textContent = "Hello 2"
    // li[1].style.fontWeight = 'bold'
    // li[1].style.backgroundColor = 'yellow'

    // // Gives errors
    // // items.style.backgroundColor = '#f4f4f4'
    // for (let i = 0; i < li.length; i++) {
    //     li[i].style.backgroundColor = '#f4f4f4'
    // }
}
//QUERYSELECTOR//
{
    // let header = document.querySelector('#main-header')
    // header.style.borderBottom = 'solid 4px #ccc'

    // let input = document.querySelector('input')
    // input.value = 'Hello World!'

    // let submit = document.querySelector('input[type="submit"]')
    // console.log(submit)
    // submit.style.value = 'SEND'

    // let item = document.querySelector('.list-group-item')
    // console.log(item)
    // item.style.color = 'red'

    // let lastItem = document.querySelector('.list-group-item:last-child')
    // lastItem.style.color = 'blue'

    // let secondItem = document.querySelector('.list-group-item:nth-child(2)')
    // secondItem.style.color = 'coral'
}
//QUERYSELECTORALL//
{
    // let titles = document.querySelectorAll('.title')
    // console.log(titles)
    // titles[0].textContent = 'hello'

    // let odd = document.querySelectorAll('li:nth-child(odd)')
    // let even = document.querySelectorAll('li:nth-child(even)')

    // for (let i = 0; i < odd.length; i++) {
    //     odd[i].style.backgroundColor = '#f4f4f4'
    //     even[i].style.backgroundColor = 'yellow'
    // }
}
//TRAVERSING THE DOM//
{
    let itemList = document.querySelector('#items')
    //parentNode
    // console.log(itemList.parentNode)
    // itemList.parentNode.style.backgroundColor = 'yellow'
    // console.log(itemList.parentNode.parentNode.parentNode)

    //parentElement
    // console.log(itemList.parentElement)
    // itemList.parentElement.style.backgroundColor = 'yellow'
    // console.log(itemList.parentElement.parentElement.parentElement)

    //childNodes
    // console.log(itemList.childNodes)
    // console.log(itemList.children)
    // console.log(itemList.children[2])
    // itemList.children[2].style.backgroundColor = ('gray')

    //firstChild
    // console.log(itemList.firstChild)
    //firstElementChild
    // console.log(itemList.firstElementChild)
    // itemList.firstElementChild.textContent = 'hello 1'

    //lastChild
    // console.log(itemList.lastChild)
    //firstElementChild
    // console.log(itemList.lastElementChild)
    // itemList.lastElementChild.textContent = 'hello 1'

    //nextSibling
    // console.log(itemList.nextSibling)
    //nextElementSibling
    // console.log(itemList.nextElementSibling)

    //previousSibling
    // console.log(itemList.previousSibling)
    //previousElementSibling
    // console.log(itemList.previousElementSibling)
    // itemList.previousElementSibling.style.color = 'blue'
}
//createElement
{
    //create a div
//    let newDiv = document.createElement('div')
//
//    //add class
//    newDiv.className = 'hello'
//
//    //add id
//    newDiv.id = 'hello1'
//
//    //add attr
//    newDiv.setAttribute('title', 'hello div')
//
//    //create text node
//    let newDivText = document.createTextNode('hello world')
//
//    //add text to div
//    newDiv.appendChild(newDivText)
//
//    let container = document.querySelector('header')
//    let h1 = document.querySelector('header h1')
//
//    console.log(newDiv)
//
//    container.insertBefore(newDiv, h1)
}

//Events//
{
//    var button = document.querySelector('#button').addEventListener('click',buttonClick)
//    
//    
//    
//    
//    function buttonClick(e){
////        document.getElementById('header-title').textContent = 'Changed'
////        document.querySelector('#sec1').style.backgroundColor = '#f4f4f4'
////        console.log(e)
////        console.log(e.target)
////        console.log(e.target.id)
////        console.log(e.target.className)
////        console.log(e.target.classList)
////        var output = document.querySelector('#output')
////        output.innerHTML = '<h3>'+e.target.id+'</h3>'
////        console.log(e.type)
////        
////        console.log(e.clientX)
////        console.log(e.clientY)
//        
////        console.log(e.offsetX)
////        console.log(e.offsetY)
////        console.log(e.altKey)
////        console.log(e.ctrlKey)
////        console.log(e.shiftKey)
//    }    
}
{
    let button = document.querySelector('#button').addEventListener('click',runEvent)
    function runEvent(e){
        console.log('Event Type: '+e.type)
    }
//    function buttonClick(){
//        console.log('this buttonClick event')
//    }
   

    
//   this.button.addEventListener('click',buttonClick)
//    function buttonClick(e){
//        console.log('add buttonClick Event')
//    }// must use this ,否则会报错没有addeventlistener这个属性
//   button.removeEventListener('click',buttonClick)
    
    
    
    
    
    
}

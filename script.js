var form = document.getElementById('formId')
var item = document.getElementById('item')

form.addEventListener('click', youClicked)

function youClicked(e) {
    e.preventDefault()
    var value = document.getElementById('value').value

    if(value == '') {
        alert('Ты ничего не написал, бро!')
    } else {
        var li = document.createElement('li')
        li.className = 'itemContent'
        li.appendChild(document.createTextNode(value))

        var but = document.createElement('button')
        but.className = 'but'
        but.appendChild(document.createTextNode('X'))

        li.appendChild(but);
        item.appendChild(li)

        console.log(item)
    }
}


var form = document.getElementById('formId')
var item = document.getElementById('item')

form.addEventListener('click', youClicked)

function youClicked(e) {
    e.preventDefault()
    var value = document.getElementById('value').value

    if(value == '') {
        alert('Ты ничего не написал, бро!')
    } else {
        var li = document.createElement('li')
        li.className = 'itemContent'
        li.appendChild(document.createTextNode(value))

        var but = document.createElement('button')
        but.className = 'but'
        but.appendChild(document.createTextNode('X'))

        li.appendChild(but);
        item.appendChild(li)

        console.log(item)
    }
}


var del = document.getElementById('item')
del.addEventListener('click', removeItem) 

function removeItem (e) {
    if (e.target.classList.contains('but')) {
        if(confirm('Вы уверенны?')) {
            var delParent = e.target.parentElement
            del.removeChild(delParent)
        }
    }
}


var hell = document.getElementById('search')
hell.addEventListener('keyup', searchItem)

function searchItem(e) {
    var text = e.target.value.toLowerCase()
    var items = item.getElementsByTagName('li')

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
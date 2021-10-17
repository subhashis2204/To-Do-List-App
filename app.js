const ul = document.querySelector('ol')
const form = document.querySelector('form')
const button = document.querySelector('button')

function addChildLi(msg) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btn = document.createElement('button')
    btn.innerText = 'Remove'
    btn.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'padding')

    // span.classList.add('padding')

    li.classList.add('padding')
    span.append(msg)
    li.append(span, btn)
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todo = form.elements.todo
    addChildLi(todo.value)
    todo.value = ''
})

ul.addEventListener('click', function (e) {
    const element = e.target
    if (element.nodeName === 'SPAN') {
        element.innerHTML = `<del>${element.innerText}</del>`
    }
    if (element.nodeName === 'BUTTON') {
        element.parentElement.remove()
    }
})

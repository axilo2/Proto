const addBtn = document.getElementById('addBtn')
const addTitle = document.getElementById('addTitle')

addBtn.addEventListener('click', e => {
    addTitle.classList.add('not-visible')
})

const remTitle = document.getElementById('remTitle')
const remBtn = document.getElementById('remBtn')

remBtn.addEventListener('click', e => {
    //remTitle.classList.remove('container')
    remTitle.remove()
})

const toggleBtn = document.getElementById('toggleBtn')
const toggleTitle = document.getElementById('toggleTitle')

toggleBtn.addEventListener('click', e => {
    toggleTitle.classList.toggle('not-visible')
})
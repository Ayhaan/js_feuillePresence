////// Modal Add stagiaire
document.querySelector('#add').addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelectorAll('.card')[0].classList.add('active')
    document.querySelector('aside').classList.add('cardFond')

})
// Event pour close via le btn
document.querySelector('.x').addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelectorAll('.card')[0].classList.remove('active')
    document.querySelector('aside').classList.remove('cardFond')
})
// Event pour delete via l'exterieur du modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cardFond')) {
        document.querySelectorAll('.card')[0].classList.remove('active')
        document.querySelectorAll('aside')[0].classList.remove('cardFond')
    }
})

////////////////////////////////////////////////////////////////////////

////// Modal INFORMATION
document.querySelector('i').addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelectorAll('.card')[1].classList.add('active')
    document.querySelectorAll('aside')[1].classList.add('cardFond')      
})
// Event pour close via le btn
document.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('.card')[1].classList.remove('active')
    document.querySelectorAll('aside')[1].classList.remove('cardFond')
})
// Event pour close via l'exterieur du modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cardFond')) {
        document.querySelectorAll('.card')[1].classList.remove('active')
        document.querySelectorAll('aside')[1].classList.remove('cardFond')
    }
})



//Logique de base pour le STORAGE
// let myObj = {
//     nom: "ayhan",
//     age: 23
// }
// let convertObj = JSON.stringify(myObj)
// localStorage.setItem('student', convertObj)
// let final = JSON.parse(localStorage.getItem('student'))
// console.log(final);
// console.log(final.nom);

//_______________________________________________________________________________

let myUl = document.querySelector('ul')

function appelDom(x, key) {
    // PARTIE DOM création de l'élèment LI 
    let li = document.createElement('li')
    li.setAttribute('class', 'listeActive')
    li.innerText = x.nom
    let btn = document.createElement('input')
    btn.setAttribute('class', 'labeel')
    btn.setAttribute('type', 'checkbox')
    let label = document.createElement('label')
    let btnDelete = document.createElement('button')
    btnDelete.classList.add('enleve')
    btnDelete.innerText = "Retirer"
    li.append(btn, label, btnDelete)
    myUl.appendChild(li)

    // Ajout du btn delete. LE deuxieme paramètre "key" me cible précicément le li que je veux delete
    btnDelete.addEventListener('click', (e) => {
        localStorage.removeItem(key) //remove storage
        console.log(key);
        let liParrentEvent = e.target.parentElement; // remove li dans le dom
        liParrentEvent.remove()
    })
}


function addStudent(a, b, c, key) { // Ici on récupere le nom, l age, la classe et la clé unique pour le storage
    //PARTIE LOGIQUE JS
    let newStudent = { //création de l'objet que je vais transfomer pour l'envoyer dans le storage
        nom: a,
        age: b,
        classe: c,
        count: key
    }

    let convertObj = JSON.stringify(newStudent) // l'objet TO JSONN
    localStorage.setItem(key, convertObj) // ADD STORAGE 
    let final = JSON.parse(localStorage.getItem(key)) //JSON to objet
    appelDom(final, key) // on appel la partie création du dom en envoie la clé 

}


// Récupération des valeurs à stocker depuis le formulaire dans le DOM
let input = document.querySelectorAll('input')
let compt = 0 // ce compteur va me servir de clé unique pour la partir "Key" du storage. Faire en sorte que à chaque add d'un new stagiaire, le compt s'incrimente de 1 pour donner une key unique à chaque stagiaires enregistrées 
document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault() // annuler l'evenemnt par defaut du btn 
    let id = input[0].value
    let age = input[1].value
    let classe = input[2].value
    compt++ //incrimente de 1 à chaque clique
    addStudent(id, age, classe, compt) // appel de la fonction addStudent qui va faire la partie add storage et la création des li
    input[0].value = ""
    input[1].value = ""
    input[2].value = ""
})

// Add stagiaire via KeyPress
input.forEach(el => {
    el.addEventListener('keypress', (e) => {
        // e.preventDefault()
        if (e.key == "Enter") {
            let id = input[0].value
            let age = input[1].value
            let classe = input[2].value
            compt++ //incrimente de 1 à chaque clique
            addStudent(id, age, classe, compt) // appel de la fonction addStudent qui va faire la partie add storage et la création des li
            input[0].value = ""
            input[1].value = ""
            input[2].value = ""
        }
    })
});


// le 'load' est un evenement qui s'active à chaque refresh de la page. L'idée est de garder la partie Dom toujours afficher. Certe les données sont stockés dans la parties Storage mais les li créé disparaitront au refresh. L'idée est de garder les li affichés.
window.addEventListener('load', () => {
    // console.log('refresh');
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        appelDom(final, key) // On appelle lea fonction dom à chaque refresh pour recréer les li
    }
    // Le compteur se met à zero à chaque refresh et donc on doit le garder à jour
    let nbr = parseInt(localStorage.length); //on récupere la taille du storage puis le transforme en nombre
    return compt = nbr // on réassigne compt par nbr pour garder à jour le compteur
})


//Btn FILTER des classes
let ulPlus = document.querySelector('.detailplus')
let ulPlusAutre = document.querySelector('.detailplusAutre')
let listPara = document.querySelector('.listPara')

let ouverture = 0

function codingNom() {
    if (ouverture % 2 == 0) {
        listPara.style.display = "block"
        if (localStorage.length != 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)
                let valeur = localStorage.getItem(key)
                let final = JSON.parse(valeur)
                let li = document.createElement('li')
                li.innerText = final.nom

                if (final.classe == "coding16") {
                    ulPlus.append(li)
                } else {
                    ulPlusAutre.append(li)
                }

            }
        } else {
            ulPlus.innerText = ulPlus.innerText + 'vide'
            ulPlusAutre.innerText = ulPlusAutre.innerText + 'vide'

        }
    } else {
        listPara.style.display = "none"
        ulPlus.innerText = ""
        ulPlusAutre.innerText = ""
    }
    ouverture++
}
document.querySelector('#plus').addEventListener('click', codingNom)

//Storage Clear & refresh page
document.querySelector('#delete').addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})
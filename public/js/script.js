///////////////// API
let region = document.querySelector('#region')
let city = document.querySelector('#city')
let ip = document.querySelector('#ip')

const getApi = async () => {
    let data = await fetch(`http://ip-api.com/json/`)
    // console.log(data);
    let res = await data.json()
    console.log(res);
    region.innerHTML = res.country
    city.innerHTML = res.city
    ip.innerHTML = res.query + " - " + res.isp
    console.log('api');

}
getApi()
console.log('test');




///////////////// new date()
// jour
let today = new Date();

function date() {
    //Logique JS
    let annee = today.getFullYear()
    let mois = today.getMonth()+1  // 0 - 11
    // console.log(mois);
    let jour = today.getDate()
    //Ceci est une condition ternaire
    jour < 10 ? jour = `0${jour}` : jour
    mois < 10 ? mois = `0${mois}` : mois

    //DOM
    let dateToday = document.querySelector('#date')
    dateToday.innerHTML = `${jour}/${mois}/${annee}`
}
date()

// heure
let heure = () => {
    //Logique JS
    let d = new Date()
    let heures = d.getHours()
    let minutes = d.getMinutes()
    let seconde = d.getSeconds()
    //Ceci est une condition ternaire
    heures < 10 ? heures = `0${heures}` : heures
    seconde < 10 ? seconde = `0${seconde}` : seconde
    minutes < 10 ? minutes = `0${minutes}` : minutes

    //DOM
    let heureToday = document.querySelector('#heure')
    heureToday.innerText = `${heures}:${minutes}:${seconde}`
}
heure()
setInterval(heure, 1000);
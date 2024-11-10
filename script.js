document.body.innerHTML += "Vítej";
document.body.innerHTML += '<br></br>'
document.body.innerHTML += Math.round(Math.random()*10)
document.body.innerHTML += '<br></br>'
const mzda = (7 * 320)* 21
console.log(mzda)
const dan = Math.floor((0.4 * mzda)* 0.15)
console.log(dan)

const hours = Math.floor(223/60)
const minutes = (223 % 60 )
console.log(hours, minutes)
//email
document.body.innerHTML += "Tereza" + "." + "Svobodova" + "@mujmail.com"
document.body.innerHTML += '<br></br>'
document.body.innerHTML += Math.random()
document.body.innerHTML += '<br></br>'
//plat
const wageInEur = 20
const wageCZ = Math.round(wageInEur * 24.55)
document.body.innerHTML += '<h1>' + wageCZ +'</h1>'
//závod
const start = 15
const delka = 12
const konec = (start + delka) % 24
console.log("konec: " + konec)
//divadlo
const prijem = (12 * 174)* 15
console.log("divadlo" + prijem)
const student = 12 * 0.65
const vstup = 12
const studenti = (0.4* 174)*student * 15
console.log(studenti + (((0.6 * 174)*12)*15))

//zaokrouhlení
const cislo = 3.123587
console.log(Math.round(cislo * 100)/100)
console.log(Math.round(cislo * 10)/10)

//kostka
const hod = Math.ceil(Math.random()*6)
console.log("kostka " + hod)
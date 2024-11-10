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

//jazyk
const language = window.navigator.language;
console.log(language)

//ockovani 
/*
const ockName = prompt("Zadej jmeno: ")
const ockVek = Number(prompt("Zadej vek: "))
console.log(ockName,  ockVek)

//vydelek
const plat = Number(prompt("zadej plat: " ))
console.log(plat * 21 * 8)
*/
const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };
  console.log("dispozice: "+  apartment.disposition)
  console.log("najem: "+  apartment.price.rent)
  console.log("plocha", apartment.area.floorage + apartment.area.balcony)
apartment.status = 'taken'
console.log(apartment.status)

const kniha = {
    nazev: 'book1',
    isbn: '345987',
    id: { knihovna: '456',
        city: 'Praha'
    }
}
const kniha2 = {
    nazev: 'book2',
    isbn: '345989',
    id: { knihovna: '786',
        city: 'Praha'
    }
}
console.log(kniha2.nazev)

const meno = " Krokodýl ";
console.log(meno.toUpperCase())
console.log(meno.trim()) //odstraneni prázdných míst
console.log(meno.slice(0,3)) //vybrýní části
console.log(meno.indexOf('rok')) //misto výskytu od 0
console.log(meno.padEnd(15,'01')) //prida nakonec 01 na počet 15 znaku celkem
//interpolace zptené uvozovky

const order = {
    id: 37214,
    product: 'pěnová matrace',
    delivery: '21.8.2021',
  };
document.body.innerHTML += `objednavka ${order.product}`

const title = "Seznamte se Joe Black"
console.log("film ", title.length)
console.log(title.toUpperCase())
console.log(title.slice(0,4))
console.log(title.slice(title.length-5))

const age = 12
if (age >=18) { console.log("vstup")}
else {console.log("nizky věk")}

const vek = prompt("Zadej vek: ")
const heslo = prompt("zadej heslo: ")
if (vek >= 65){ 
    if (heslo.length >5) {console.log("vstup povolen")}
    else {console.log("kratke heslo")}}
else {console.log("zamitnuto")}

//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//?

const gelirinizTd= document.getElementById("geliriniz")


//? Variables
let gelirler = 0

//?Events

//? Formun submit butonuna basildiginda
 ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engeller
  gelirler  = gelirler + Number(gelirInput.value) //? string eklemeyi engelledik


localStorage.setItem("gelirler", gelirler)


// ? input degerini sifirladik 
  ekleFormu.reset()
  

  //? Degisikleri doma basan fonksyion
hesaplaVeGuncelle()
})

//! sayfa her yuklendikten sonra calisan event 
window.addEventListener("load", () => {

gelirler =Number (localStorage.getItem("gelirler"))
hesaplaVeGuncelle()

})
//? Functions
const hesaplaVeGuncelle = () => {

gelirinizTd.innerText = gelirler
}
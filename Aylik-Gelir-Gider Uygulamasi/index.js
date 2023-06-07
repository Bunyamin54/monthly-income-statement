//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//? Variables
let gelirler = ""

//?Events

//? Formun submit butonuna basildiginda
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engeller
  gelirler += gelirInput.value

  console.log(gelirler)
})

//? Functions

//? Selectors
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//? Sonuc tablosu
const gelirinizTd = document.getElementById("geliriniz")

//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

//? Variables
let gelirler = 0

//? tum harcamalari saklayacak dizi (JSON)
let harcamaListesi = []

//?Events

//! Formun submit butonuna basildiginda
ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engeller
  gelirler = gelirler + Number(gelirInput.value) //? string eklemiyi engelledik

  //? gelirlerin kalıcı olmasi icin localStorage a kopyaliyoruz
  localStorage.setItem("gelirler", gelirler)

  //? input degerini sifrladik
  ekleFormu.reset()

  //? Degisiklikleri sonuc tablosuna yazan fonks.
  hesaplaVeGuncelle()
})

//! Sayfa her yuklendikten sonra calisan event
window.addEventListener("load", () => {
  //? gelirler bilgisini local storage'dan okuyarak global degiskenimize yaz
  gelirler = Number(localStorage.getItem("gelirler"))

  //? Tarih inputunu bugun deger ile yukle
  tarihInput.valueAsDate = new Date()

  //? Degisen bilgileri hesapla ve DOM'a bas
  hesaplaVeGuncelle()
})

//! harcama formu submit edildiginde calisir
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault() //? reload'u engelle

  //? yeni harcama bilgileri ile bir obje olusutur
  const yeniHarcama = {
    id: new Date().getTime(),
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  }

  //? yeni harcama objesini diziye ekle
  harcamaListesi.push(yeniHarcama)

  //? Formdaki verileri sil
  harcamaFormu.reset()
  tarihInput.valueAsDate = new Date()
  console.log(yeniHarcama)
})


const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler
}

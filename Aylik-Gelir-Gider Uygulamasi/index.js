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

//? Haracama Tablosu

const harcamaBody = document.getElementById("harcama-body")

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

  //? localStroge'den harcama listesini okuyarak global dizimize saklıyoruz.
  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []

  harcamaListesi.forEach((h) => console.log(h))

  console.log(harcamaListesi)
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
    id: new Date().getTime(), //? Sistem saatini (ms olarak) verir. Unique gibidir.
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  }

  //? yeni harcama objesini diziye ekle
  harcamaListesi.push(yeniHarcama)

  //? dizisin son halini localStorage e gonder.
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

  harcamayiDomaYaz(yeniHarcama)

  //? Formdaki verileri sil
  harcamaFormu.reset()
  tarihInput.valueAsDate = new Date()
})

const hesaplaVeGuncelle = () => {
  gelirinizTd.innerText = gelirler
}

const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  // const { id, miktar, tarih, alan } = yeniHarcama
  harcamaBody.innerHTML += `
  <tr>
    <td>${tarih}</td>
    <td>${alan}</td>
    <td>${miktar}</td>
    <td><i id=${id} class="fa-solid fa-trash-can text-danger"></i></td>
  </tr>
  `
}

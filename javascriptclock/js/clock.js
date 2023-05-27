// Saat bilgisini almak için bir Date nesnesi oluşturun
let myName = prompt ("adınızı giriniz")

let info = document.querySelector("#myName")
info.innerHTML =myName

// let info = document.querySelector("#showTime")
// info.innerHTML =showTime

let tarih = new Date();

// gün Saat, dakika ve saniye değerlerini alın
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
// let günler = tarih.getDate();

// karşılama yazısını oluşturun
// let karşılama = "";
// if (saat < 12) {
//   karşılama = "Günaydın!";
// } else if (saat < 18) {
//   karşılama = "İyi günler!";
// } else {
//   karşılama = "İyi akşamlar!";
// }

// Saat, dakika ve saniye değerlerini iki haneli olarak biçimlendirin
saat = saat < 10 ? "0" + saat : saat;
dakika = dakika < 10 ? "0" + dakika : dakika;
saniye = saniye < 10 ? "0" + saniye : saniye

// Sonuçları birleştirin ve konsola yazdırın
let zaman = saat + ":" + dakika + ":" + saniye;

let zamanHTML = document.querySelector("#zaman")
zamanHTML.innerHTML = zaman

console.log(" Şu an saat " + zaman + ".");

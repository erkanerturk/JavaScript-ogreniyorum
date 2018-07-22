
// Closures

// Fonksiyon kendi kapsamı dışındaki bir değişkeni kullanıyorsa ve bu fonksiyon başka bir kapsamdan çalıştırılsa bile o değişkene hala erişimi vardır
// Değişkenin değeri değil referansı bellekte saklar

// text1'ın referansı bellekte saklanmaya devam eder.
// text2, satırını geçtiğinde bellekten silinir
function closures() {
  const text1 = 'Closures';
  const text2 = 'Closures değil';
  return () => { return `${text1} işlemi yapıldı`; }
}
console.log(closures()());


// array ve i değişkenin referansları bellekte saklanmaya devam eder
// Döngü çıkışında i değeri 1 daha artar
// Dizi içinde saklanan tüm fonksiyonlar i'yi referans olarak alıkları için hepsinde +1 olur
// i değeri dizi boyutunu aştığı için undefined döner
// Çözüm: Dizide saklanan fonksiyonlar IIFE olarak yazılırsa dizi içinde fonksiyonlar yerine değerler saklanır
function wrapElement(array) {
  var result = [], i, n;
  for (i = 0, n = array.length; i < n; i++) {
    result[i] = function () { return array[i]; };
  }
  return result;
}
const wrapper = wrapElement([10, 20, 30, 40, 50]);
const wrapper0 = wrapper[0];
console.log(wrapper0()); // undefined

// setTimeout call queue de beklerken for döngüsünün işi bittiği için i değeri 6 olur
// setTimeout, i'yi referans ile aldığından tüm çıktılar 6 değerini verir
// Çözüm: i değişkenini let ile tanımlamak
function run() {
  for (var i = 1; i <= 5; i += 1) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}
run(); // 6 6 6 6 6


// Statik değişken olarak kullanımı
/* Geri dönen fonksiyonun referansı değişkende saklanırsa, closures değişken bellekte saklanmaya
devam eder. Referansı tutulan fonksiyon çağırıldıkça değişken güncellenir */
const sayac = () => { let sayi = 0; return () => { sayi += 1; return sayi; }; };
const tut = sayac();
console.log(tut()); // 1
console.log(tut()); // 2

// Fonksiyonun referansı saklanarak sadece o referansta ki nesneye işlemler yapılır.
// Yeni bir fonksiyon oluşturulduğunda iki nesne birbirinden bağımsızdır.
const progL = () => {
  const languages = ['JavaScript', 'Java'];
  return {
    getLanguages: () => languages.slice(),
    addLanguage: language => languages.push(language),
  };
};
const progL1 = progL();
const progL2 = progL();
progL1.addLanguage('Ruby');
progL2.addLanguage('Go');
console.log(progL1.getLanguages()); // ['JS', 'Java', 'C#']
console.log(progL2.getLanguages()); // ['JS', 'Java', 'C++']

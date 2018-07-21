
// Scope

// Block scope, temel olarak { ve } arasında kalan kodun sadece o alana ait olması olarak tanımlanabilir.

// var; Tekrar tanımlanabilir, sonradan değiştirilebilir. Function scope'dur.
// Fonksiyon içinde değişkenler tanımlanırken herhangi bir tür yazılmazsa global değişken olur

// const; Bir kere tanımlanabilir, sonradan değiştirilemez. Block scope'dur tanımlandığı {} tan erişilebilir.
// Referans tipte olan değerler referansı ile değiştirilebilir(Object, array, function)

// let; Bir kere tanımlanabilir, sonradan değiştirilebilir. Block scope'dur tanımlandığı {} tan erişilebilir.


var i = 'Test';
for (var i = 0; i < 5; i++) {}
console.log(i); // 5

var i = 'Test';
(function () {
  for (var i = 0; i < 5; i++) {}
  console.log(i); // 5
})()
console.log(i); // Test

var i = 'Test';
(function () {
  // i global tanımlanmış değişkeni kullanır
  for (i = 0; i < 5; i++) {}
  console.log(i); // 5
})()
console.log(i); // 5

var a = 'Test';
console.log(a); // Test
var a = 'var';
console.log(a); // var

var i = 'Test';
for (let i = 0; i < 5; i++) {}
console.log(i); // Test

let b = 'Test';
console.log(b); // Test
b = 'var';
console.log(b); // var

const c = 'Test';
console.log(c); // Test
c = 'const'; // Hata verir

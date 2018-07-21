
// Hoisting

// Önce deklarasyon yapılır, sonra değer atama işlemleri
// var anahtar kelimesinde undefined sonuç verirken, let ve const'ta referance error verir.


// Değişkene atanmış fonksiyon da değişken hoist edilerek yukarıda tanımlanır.
// Atama ise satır sırası geldiğinde olur.

// Normal fonksiyon da fonksiyon bloğu yukarı hoist edilir.


function func1() {
  var a = 1;
  console.log(b); // undefined
  var b = 5;

  /* Hoisting
  var a, b;
  a = 1;
  console.log(b);
  b = 5;
  */
}

function func2() {
  return b();

  function b() {
    console.log('Hoisting');
  }

  /* Hoisting
  function b() {
    console.log('Hoisting');
  }
  return b();
  */
}

function func3() {
  return b;
  var b = () => {
    console.log('Hoisting');
  }

  /* Hoisting
  var b;
  return b;
  b = () => {
    console.log('Hoisting');
  }
  */
}

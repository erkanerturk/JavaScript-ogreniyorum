
const array = [2, 3, 6, 8, 2, 20, 1, 34, 27];

const mapArray = array.map(item => item * item);
console.log(mapArray); // [ 4, 9, 36, 64, 4, 400, 1, 1156, 729 ]

const reduceArray = array.reduce((acc, item) => acc + item, 0);
console.log(reduceArray); // 103

const filterArray = array.filter(item => item % 2 === 0);
console.log(filterArray); // [ 2, 6, 8, 2, 20, 34 ]

const findArray = array.find(item => item === 34);
console.log(findArray); // 34

const joinArray = ['Hello', 'World'].join(' ');
console.log(joinArray); // Hello World

const everyArray = array.every(item => item > 0);
console.log(everyArray); // true

const someArray = array.some(item => item > 33);
console.log(someArray); // true

const fromArray = Array.from({ length: 5 }, (value, index) => index * 2);
console.log(fromArray); // [ 0, 2, 4, 6, 8 ]

const splitArray = 'Text'.split('');
console.log(splitArray); // [ 'T', 'e', 'x', 't' ]

// Dizinin sonuna eleman eklenir
array.push(6);
// Dizinin sonundan eleman çıkarılır
array.pop();
// Dizinin başına eleman eklenir
array.unshift(0);
// Dizinin ilk elemanını çıkarılır
array.shift();
// Dizinin sonuna başka bir dizinin elemanlarını ekler ve yeni bir dizi olarak döner
const concatArray = array.concat([8, 9, 5]);
console.log(concatArray); // [ 2, 3, 6, 8, 2, 20, 1, 34, 27, 8, 9, 5 ]


const products = [
  { name: 'IPhone', price: '$1000' },
  { name: 'Samsung', price: '$600' },
  { name: 'Sony', price: '$500' },
];

const newProducts = products.map(item => ({
  ...item,
  discountedPrice: (() => {
    const price = (`${item.price.split('').filter(item => item !== '$').join('') * 0.7}`).split('');
    price.unshift('$');
    return price.join('');
  })(),
}));
console.log(newProducts[1].discountedPrice); // $420

const productNames = products.reduce((acc, item, index) => (index === 0 ? item.name : `${acc}, ${item.name}`), '');
console.log(productNames); // IPhone, Samsung, Sony

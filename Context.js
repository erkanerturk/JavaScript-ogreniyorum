
// Fonksiyonun bağlı olduğu obje onun context'idir.
// this anahtar kelimesi ile context'e erişilir.
// Arrow function'ın kendi context'i yoktur, bulunduğu objenin context'ini alır.

const mars = {
  name: 'Mars',
  getName() {
    // this ile mars objesine erişilir
    return this.name;
  },
  getNameWithThat() {
    // Context'i değişkende saklayarak iç fonksiyondan objeye erişilebilir
    const that = this;
    return function () {
      return that.name;
    };
  },
  getNameWithArrowFunc() {
    // Arrow function bulunduğu objenin context'ini aldığı için context bir değişkende saklanmadan objeye erişilebilir
    return () => this.name;
  },
};
console.log(mars.getName()); // Mars
console.log(mars.getNameWithThat()()); // Mars
console.log(mars.getNameWithArrowFunc()()); // Mars


const venus = {
  name: 'Venus',
  // Geriye fonksiyon döner.
  // Fonksiyon venus objesinde çalıştığı için venus objesindeki name'e erişir
  getName: mars.getName,
};
console.log(venus.getName()); // Venus


// Context Değiştiren Fonksiyonlar

// Fonksiyona başka bir context gönderilir, this anahtar kelimesi gönderilen context'e bağlanır.

const getPerson = {
  fullName(age) {
    return `${this.firstName} ${this.lastName} ${age}`;
  },
};
const person = {
  firstName: 'Erkan',
  lastName: 'Ertürk',
};

// .call(this, arguments)
const call = getPerson.fullName.call(person, 22);
console.log(call); // Erkan Ertürk 22
// .apply(this, [])
// call'dah farkı parametre olarak dizi alır
const apply = getPerson.fullName.apply(person, [22]);
console.log(apply); // Erkan Ertürk 22
// .bind(this, arguments)
// call ile aynı işlemi yapar ama direk fonksiyon çalışnaz, fonksiyon return edilir.
// Geri dönen fonksiyon değişkende saklanarak istenilen zamanda çalıştırılabilir.
// Tüm parametreler tek seferde gönderilmek zorunda değil.
const bind = getPerson.fullName.bind(person, 22);
console.log(bind()); // Erkan Ertürk 22


// Constructor olarak kullanılabilir
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}
const cheese = new Food('Salad', 5);
const fun = new Toy('Robot', 40);

console.log(cheese); // Food { name: 'Salad', price: 5, categort: 'food' }
console.log(fun); // Toy { name: 'Robot', price: 40, categort: 'toy' }

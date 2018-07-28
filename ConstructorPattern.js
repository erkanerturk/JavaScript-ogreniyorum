function Person(id, name, lastName, email, phoneNumber, birthDay) {
  this.id = id;
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.birthDay = birthDay;

  this.getFullName = function () {
    return `${this.name} ${this.lastName}`;
  };

  this.getEmail = function () {
    return this.email;
  };

  this.getInfo = function () {
    return `Merhaba ${this.name} ${this.lastName}, E-Posta adresiniz : ${this.email}, Telefon numaranız : ${this.phoneNumber}`;
  };

  this.getAge = function () {
    return (new Date().getUTCFullYear() - this.birthDay);
  };
}

const person1 = new Person(1, 'A', 'B', 'ab@pm.me', 5554443322, 1999);
const person2 = new Person(2, 'X', 'Y', 'xy@pm.me', 1112223344, 1985);

console.log(person1.getInfo());
console.log(person2.getInfo());

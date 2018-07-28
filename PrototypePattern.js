function Person() {}

Person.prototype.id = undefined;
Person.prototype.name = undefined;
Person.prototype.lastName = undefined;
Person.prototype.email = undefined;
Person.prototype.phoneNumber = undefined;
Person.prototype.birthDay = undefined;

Person.prototype.init = function init(id, name, lastName, email, phoneNumber, birthDay) {
  this.id = id;
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.birthDay = birthDay;
};

Person.prototype.getFullName = function () {
  return `${this.name} ${this.lastName}`;
};

Person.prototype.getEmail = function () {
  return this.email;
};

Person.prototype.getInfo = function () {
  return `Merhaba ${this.name} ${this.lastName}, E-Posta adresiniz : ${this.email}, Telefon numaranız : ${this.phoneNumber}`;
};

Person.prototype.getAge = function () {
  return (new Date().getUTCFullYear() - this.birthDay);
};

const person1 = new Person();
person1.init(1, 'A', 'B', 'ab@pm.me', 5554443322, 1999);
const person2 = new Person();
person2.init(2, 'X', 'Y', 'xy@pm.me', 1112223344, 1985);

console.log(person1.getInfo());
console.log(person2.getInfo());

// IIFE ile privateProps ve internal fonksiyonun dışarıdan erişiminin engellenir
const Person = (() => {
  const privateProps = new WeakMap();

  const internal = (key) => {
    if (!privateProps.has(key)) {
      privateProps.set(key, Object.create(null));
    }
    return privateProps.get(key);
  };

  class Person {
    constructor({ id, name, lastName, email, phoneNumber, birthDay }) {
      // Private değişkenler
      internal(this).id = id;
      internal(this).name = name;
      internal(this).lastName = lastName;
      internal(this).email = email;
      internal(this).phoneNumber = phoneNumber;
      // Public değişken
      this.birthDay = birthDay;
    }

    get id() {
      return internal(this).id;
    }

    set id(value) {
      internal(this).id = value;
    }

    get name() {
      return internal(this).name;
    }

    set name(value) {
      internal(this).name = value;
    }

    get lastName() {
      return internal(this).lastName;
    }

    set lastName(value) {
      internal(this).lastName = value;
    }

    get email() {
      return internal(this).email;
    }

    set email(value) {
      if (!(/\S+@\S+.\S+/gm).test(value)) {
        throw new Error('Hatalı giriş...');
      }
      internal(this).email = value;
    }

    get phoneNumber() {
      return internal(this).phoneNumber;
    }

    set phoneNumber(value) {
      if (typeof value !== 'number') {
        throw new Error('Sayı giriniz...');
      }
      internal(this).phoneNumber = value;
    }

    getFullName() {
      return `${internal(this).name} ${internal(this).lastName}`;
    }

    getInfo() {
      return `Merhaba ${internal(this).name} ${internal(this).lastName}, E-Posta adresiniz : ${internal(this).email}, Telefon numaranız : ${internal(this).phoneNumber}`;
    }

    getAge() {
      return (new Date().getUTCFullYear() - this.birthDay);
    }

    static sayHello() {
      return 'Static';
    }
  }

  return Person;
})();


const Student = (() => {
  const privateProps = new WeakMap();

  const internal = (key) => {
    if (!privateProps.has(key)) {
      privateProps.set(key, Object.create(null));
    }
    return privateProps.get(key);
  };

  class Student extends Person {
    constructor({ id, name, lastName, email, phoneNumber, birthDay, studentNo }) {
      super({ id, name, lastName, email, phoneNumber, birthDay });
      internal(this).studentNo = studentNo;
    }

    get studentNo() {
      return internal(this).studentNo;
    }

    set studentNo(value) {
      internal(this).studentNo = value;
    }

    getInfo() {
      return `Öğrenci numaranız : ${internal(this).studentNo}, E-Posta adresiniz : ${this.email}`;
    }
  }

  return Student;
})();


const Teacher = (() => {
  const privateProps = new WeakMap();

  const internal = (key) => {
    if (!privateProps.has(key)) {
      privateProps.set(key, Object.create(null));
    }
    return privateProps.get(key);
  };

  class Teacher extends Person {
    constructor({ id, name, lastName, email, phoneNumber, birthDay, title }) {
      super({ id, name, lastName, email, phoneNumber, birthDay });
      internal(this).title = title;
    }

    get title() {
      return internal(this).title;
    }

    set title(value) {
      internal(this).title = value;
    }
  }

  return Teacher;
})();


const obj1 = {
  id: 2,
  name: 'Okey',
  lastName: 'Durgan',
  email: 'Pauline_Lakin@gmail.com',
  phoneNumber: 8742710320,
  birthDay: 1999,
  studentNo: 19111,
};
const student1 = new Student(obj1);
student1.name = 'Roel';
student1.studentNo = 72647;
console.log(student1.getFullName());
console.log(student1.getInfo());
console.log(student1.getAge());
console.log(Student.sayHello());

const obj2 = {
  id: 2,
  name: 'Norval',
  lastName: 'Farrell',
  email: 'Callie27@hotmail.com',
  phoneNumber: 1112223344,
  birthDay: 1985,
  title: 'Prof',
};
const teacher1 = new Teacher(obj2);
console.log(teacher1.getFullName());
teacher1.name = 'Emery';
console.log(teacher1.getInfo());
console.log(teacher1.getAge());

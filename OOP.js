// Kurucu Fonksiyon
function Person(Id, Name, LastName, Email, PhoneNumber, BirthDay) {
  // Private değişkenler
  const id = Id;
  let name = Name;
  let lastName = LastName;
  let email = Email;
  let phoneNumber = PhoneNumber;
  // Public değişken
  this.birthDay = BirthDay;

  /* Get ve Set işlemleri için fonksiyon tanımlanabilir ama aynı fonksiyon adı ile
  yeni fonksiyon tanımlanabilme ihtimalinden dolayı güvenli değildir. */
  // this.setName = function setName(newName) {
  //   this.name = newName;
  // };

  // Object.defineProperties ile Get-Set işlemlerin tanımlanması
  Object.defineProperties(this, {
    id: {
      get() {
        return id;
      },
    },
    name: {
      get() {
        return name;
      },
      set(val) {
        name = val;
      },
    },
    lastName: {
      get() {
        return lastName;
      },
      set(val) {
        lastName = val;
      },
    },
    email: {
      get() {
        return email;
      },
      set(val) {
        if (!(/\S+@\S+.\S+/gm).test(val)) {
          throw new Error('Hatalı giriş...');
        }
        email = val;
      },
    },
    phoneNumber: {
      get() {
        return phoneNumber;
      },
      set(val) {
        if (typeof val !== 'number') {
          throw new Error('Sayı giriniz...');
        }
        phoneNumber = val;
      },
    },
  });
}

/* Kurucu fonksiyon içinde fonksiyon tanımlamak her nesnede o fonksiyonun ayrı ayrı oluşmasına ve
ekstra bellek kullanımına sebep olur.
Fonksiyon tüm nesnelerde aynı işi yapacak ise prototype ile sınıfa tanımlanmalı.
Her oluşturulan nesne içerisinde prototype nesnesinin referansı tutularak fonksiyona erişilir. */
Person.prototype = {
  constructor: Person,
  getFullName() {
    return `${this.name} ${this.lastName}`;
  },

  getEmail() {
    return this.email;
  },

  getInfo() {
    return `Merhaba ${this.name} ${this.lastName}, E-Posta adresiniz : ${this.email}, Telefon numaranız : ${this.phoneNumber}`;
  },

  getAge() {
    return (new Date().getUTCFullYear() - this.birthDay);
  },
};


function Student(Id, Name, LastName, Email, PhoneNumber, BirthDay, StudentNo) {
  Person.call(this, Id, Name, LastName, Email, PhoneNumber, BirthDay); // Constructor stealing
  let studentNo = StudentNo;

  Object.defineProperty(this, 'studentNo', {
    get() {
      return studentNo;
    },
    set(val) {
      studentNo = val;
    },
  });
}

// Yeni nesne oluşturmuyor sadece referansı aktarır
// Student.prototype = Person.prototype;

// call vb. fonksiyonlar, prototype ile eklenmiş özellik ve metotlar kalıtım alınmaz.
// Person prototype'ın klonlayıp Student prototype'ına eklenir
// Student.prototype = Object.create(Person.prototype);
// Object.create fonksiyonuna göre daha performanslı
Object.setPrototypeOf(Student.prototype, Person.prototype);

// Student constructor'ı prototype klonlama işleminden dolayı Person olur
// Student constructor'ı kendisine çevrilir
Student.prototype.constructor = Student;

Student.prototype.getStudentNo = function getStudentNo() {
  return this.studentNo;
};

// Metot override işlemi
Student.prototype.getInfo = function getInfo() {
  return `Öğrenci numaranız : ${this.studentNo}, E-Posta adresiniz : ${this.email}`;
};


function Teacher(Id, Name, LastName, Email, PhoneNumber, BirthDay, Title) {
  Person.call(this, Id, Name, LastName, Email, PhoneNumber, BirthDay); // Constructor stealing
  this.title = Title;

  Object.defineProperty(this, 'title', {
    // Silinip silinemeyeceğini belirtir
    configurable: false,
    // Değiştirilip değiştirilemeyeceğini belirtir.
    writable: true,
    // for / in döngüsünde döndürülüp döndürülemeyeceğini belirtir.
    enumerable: true,
    // Varsayılan değer
    // value: 'Doctor',
  });
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getTitle = function getTitle() {
  return this.title;
};


// Nesneler
const student1 = new Student(1, 'A', 'B', 'ab@pm.me', 5554443322, 1999, 1234);
const teacher1 = new Teacher(2, 'X', 'Y', 'xy@pm.me', 1112223344, 1985, 'Prof');

console.log(student1.getFullName());
console.log(student1.getEmail());
console.log(student1.getInfo());
console.log(student1.getAge());
console.log(student1.getStudentNo());

console.log(teacher1.getFullName());
console.log(teacher1.getEmail());
console.log(teacher1.getInfo());
console.log(teacher1.getAge());
console.log(teacher1.getTitle());

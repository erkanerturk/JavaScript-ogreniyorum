
const phone = 'Hey 0555 444 33 22 and 908889996655'.match(/((\+|00)(\d{1,3})|0)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})/gm);
console.log(phone); // [ '0554 444 33 22', '08889996655']

const email = (/\S+@\S+.\S+/gm).test('Text x2xx@pm.me');
console.log(email); // true

const c = '34 ABC 1234'.replace((/(\d{2})\s?([A-Z]{1,3})\s?(\d{2,4})/gm), '34 XYZ 9876');
console.log(c); // 34 XYZ 9876

/*
.match(RegEx)              Metin içinde eşleşen değerler dizi olarak döner, bulunmaz ise null döner
.search(RegEx)             Metin içinde ilk eşleşen değerin başlangıç indeks döner ve arama işlemi biter bulunmaz ise -1 döner
.replace(RegEx, newText)  Metin içindeki değeri başka bir değer ile değiştirir
RegEx.test(findText)      Metin içinde ifade varsa true yoksa false döner
*/

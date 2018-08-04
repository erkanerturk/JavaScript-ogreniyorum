function myPromise(isSuccessful) {
  return new Promise((resolve, reject) => (
    isSuccessful === true
      ? resolve('Successful')
      : reject(new Error('Error'))
  ));
}
myPromise(true)
  .then(() => myPromise(false))
  .then(res => console.log(res))
  .catch(err => console.log(err));


Promise.all([
  $.get('a.txt'),
  $.get('b.txt'),
  $.get('c.txt'),
]).then(() => console.log('Done'));


Promise.race([
  new Promise(resolve => setTimeout(resolve, 300, 'A')),
  new Promise(resolve => setTimeout(resolve, 150, 'B')),
  new Promise(resolve => setTimeout(resolve, 100, 'C')),
]).then((value) => {
  console.log('Promise Resolved', value);
});


//


const authors = [{ id: 1, name: 'Kyle Simpson' }, { id: 2, name: 'Douglas Crockford' }];
const books = [{ id: 1, authorID: 1, name: 'You Don\'t Know JS: Async & Performance' }, { id: 2, authorID: 2, name: 'JavaScript The Good Parts' }];

const getAuthor = authorName => new Promise((resolve, reject) => {
  const author = authors.find(item => item.name === authorName);
  if (author) {
    resolve(author.id);
  }
  reject(new Error('Not found'));
});

const getBooks = authorID => new Promise((resolve, reject) => {
  const book = books.filter(item => item.authorID === authorID);
  if (book && book.length) {
    resolve(book);
  }
  reject(new Error('Not found'));
});

// Promise Chain
getAuthor('Kyle Simpson')
  .then(res => getBooks(res))
  .then(res => console.log(res))
  .catch(res => console.log(res));

// Async / Await
async function getBooksAsync() {
  try {
    const author = await getAuthor('Kyle Simpson');
    const book = await getBooks(author);
    return book;
  } catch (error) {
    console.log(error);
  }
}
getBooksAsync().then(res => console.log(res));

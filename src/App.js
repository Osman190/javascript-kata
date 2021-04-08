import React, { useState } from 'react';

console.log(magazines);
const books = require('../data/books.json');
const magazines = require('../data/magazines.json');
const authors = require('../data/authors.json');
let comList = [...magazines, ...books];
comList = comList.sort(function (a, b) {
  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
  var nameB = b.title.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
const App = () => {
  console.log('Hello world!');
  // const [searchTerm, setsearchTerm] = useState('');
  const [localBooks, setlocalBooks] = useState(comList);
  const filterResults = e => {
    setlocalBooks(
      comList.filter(
        b =>
          b.isbn.toLowerCase().includes(e.target.value.toLowerCase()) ||
          b.authors.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <label htmlFor='search'> ISBN/Authoremail</label>
      <br />
      <input name='search' id='search' onChange={e => filterResults(e)} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ISBN</th>
            <th>Authors</th>
            <th>Description</th>
            <th>Publish Date</th>
          </tr>
        </thead>
        <tbody>
          {localBooks.map((b, i) => (
            <tr key={b.isbn}>
              <td>{b.title}</td>
              <td>{b.isbn}</td>
              <td>{b.authors}</td>

              <td>{b.description && b.description}</td>
              <td>{b.publishedAt && b.publishedAt}</td>
              {/* <td>{b.publishedAt}</td>  */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;

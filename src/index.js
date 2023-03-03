import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'El Trollino',
    title: 'HORA DE MIKELLINO: NUESTRA PRIMERA NOCHE',
    img: 'https://panamericana.vtexassets.com/arquivos/ids/481626-1200-auto?v=638114855532200000&width=1200&height=auto&aspect=true',
  },
  {
    author: 'Antonie Saint exupery',
    title: 'EL PRINCIPITO',
    img: 'https://panamericana.vtexassets.com/arquivos/ids/484839-1200-auto?v=638129391986400000&width=1200&height=auto&aspect=true',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

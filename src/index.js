import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'El Trollino',
  title: 'HORA DE MIKELLINO: NUESTRA PRIMERA NOCHE',
  img: 'https://panamericana.vtexassets.com/arquivos/ids/481626-1200-auto?v=638114855532200000&width=1200&height=auto&aspect=true',
};
const secondBook = {
  author: 'Antonie Saint exupery',
  title: 'EL PRINCIPITO',
  img: 'https://panamericana.vtexassets.com/arquivos/ids/484839-1200-auto?v=638129391986400000&width=1200&height=auto&aspect=true',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

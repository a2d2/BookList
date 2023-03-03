import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'El Trollino',
    title: 'HORA DE MIKELLINO: NUESTRA PRIMERA NOCHE',
    img: 'https://panamericana.vtexassets.com/arquivos/ids/481626-1200-auto?v=638114855532200000&width=1200&height=auto&aspect=true',
    id: 1,
  },
  {
    author: 'Antonie Saint exupery',
    title: 'EL PRINCIPITO',
    img: 'https://panamericana.vtexassets.com/arquivos/ids/484839-1200-auto?v=638129391986400000&width=1200&height=auto&aspect=true',
    id: 2,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        {
          /* const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />; */
        }
        return <Book {...book} key={book.id} />; //spread operator
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title } = props;
  console.log(props);
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

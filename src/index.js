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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />; //spread operator
      })}
    </section>
  );
}

const EventExamples = () => {
  //return <h1>eventos</h1>
  const handleFormInput = (event) => {
    console.log(event);
    // e.target - element
    console.log(`Input Name : ${event.target.name}`);
    console.log(`Input Value : ${event.target.value}`);
    // console.log('handle form input');
  };
  // const handleButtonClick = () => {
  //   alert('handle button click');
  // };
  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />

        <button type="submit">submit</button>
        <div>
          {/* Anonymous function instead of calling the function "handleButtonClick" ñike onClick={ handleButtonClick} */}
          <button onClick={() => alert('handle button click')}>click me</button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, author, title } = props;
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

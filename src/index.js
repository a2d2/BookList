// create getBook function in booklist, accepts id as an argument and finds the book
// Javascript Nuggets - Filter and Find
// pass the function down to Book Component and invoke on the button click in the Book Component destructure id and function invoke the function when user clicks the button, pass the id
// the goal : you should see the same book in the console

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
//import books from './books';

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  //getBook(2);

  return (
    <section className="booklist">
      {books.map((book, index) => {
        return (
          <Book {...book} key={book.id} getBook={getBook} number={index} />
        ); //spread operator
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title, getBook, id, number } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  console.log(number);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <button onClick={() => console.log(title)}>display title</button>
      <div>
        {/* this will not work since we will always be executing onClick function */}
        {/* <button onClick={getBook(id)}>click me</button> */}
        {/* One way to solve the issue is by doing the following plus adding the funtion above called getSingleBook
        <button onClick={getSingleBook}>click me</button> */}
        {/* Or we can include the function inside the event in one single line as
        this: */}
        <button onClick={() => getBook(id)}>click me</button>
        <span className="number">#{number + 1}</span>
      </div>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

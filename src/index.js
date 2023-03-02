import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = 'Jordan Moore';
const Book = () => {
  const title =
    "The Courage to Be Free: Florida's Blueprint for America's Revival";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg"
        alt="The Courage to Be Free: Florida's Blueprint for America's Revival"
      />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

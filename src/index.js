import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const img =
  'https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg';
const title =
  "The Courage to Be Free: Florida's Blueprint for America's Revival";
const author = 'Jordan Moore';

function BookList() {
  return (
    <section className="booklist">
      <Book job="developer" author={author} title={title} img={img} />
      <Book number={22} author={author} title={title} img={img} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

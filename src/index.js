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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg"
    alt="The Courage to Be Free: Florida's Blueprint for America's Revival"
  />
);
const Title = () => {
  return (
    <h3>The Courage to Be Free: Florida's Blueprint for America's Revival</h3>
  );
};
// const Author = () => (
//   <h3 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//     Ron Desantis
//   </h3>
// );
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h2 style={inlineHeadingStyles}>Jordan Moore </h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

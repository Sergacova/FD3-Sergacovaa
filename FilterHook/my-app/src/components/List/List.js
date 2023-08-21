import React from 'react';
import './List.css';

const List = ({ filterWords }) => {
  const wordsList = filterWords.map((word, index) => {
    return <li key={index}>{word}</li>;
  });

  return <ul className="List">{wordsList}</ul>;
};

export default List;

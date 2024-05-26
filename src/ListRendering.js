// ListRendering.js
import React from 'react';

const ListRendering = ({ todos }) => {
  return (
    <ul>
      {todos.filter(todo => !todo.completed).map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ListRendering;

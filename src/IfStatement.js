// IfStatement.js
import React from 'react';

const IfStatement = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <h1>Bienvenido de nuevo!</h1>;
  } else {
    return <h1>Por favor, regístrate.</h1>;
  }
};

export default IfStatement;

// TernaryOperator.js
import React from 'react';

const TernaryOperator = ({ isLoggedIn }) => {
  return (
    <h1>{isLoggedIn ? 'Bienvenido de nuevo!' : 'Por favor, regístrate.'}</h1>
  );
};

export default TernaryOperator;

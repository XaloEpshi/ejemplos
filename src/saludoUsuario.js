// SaludoUsuario.js
import React from 'react';

function printName(user){
  return user.firstName + ' ' + user.lastName;
}

const SaludoUsuario = () => {
  const user = {
    firstName: 'Tony',
    lastName: 'Stark'
  };

  return <h1>Hola, {printName(user)}</h1>;
};

export default SaludoUsuario;

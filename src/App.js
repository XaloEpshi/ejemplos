// App.js
import React from 'react';
import HolaMundo from './holaMundo';
import SaludoUsuario from './saludoUsuario';
import IfStatement from './IfStatement';
import TernaryOperator from './TernaryOperator';
import LogicalOperator from './LogicalOperator';
import ListRendering from './ListRendering';

const App = () => {
  // Datos de ejemplo para los componentes
  const isLoggedIn = true;
  const unreadMessages = ['Mensaje 1', 'Mensaje 2'];
  const todos = [
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: true },
    { id: 3, text: 'Tarea 3', completed: false }
  ];

  return (
    <div>
      <HolaMundo />
      <SaludoUsuario />
      <IfStatement isLoggedIn={isLoggedIn} />
      <TernaryOperator isLoggedIn={isLoggedIn} />
      <LogicalOperator unreadMessages={unreadMessages} />
      <ListRendering todos={todos} />
    </div>
  );
};

export default App;





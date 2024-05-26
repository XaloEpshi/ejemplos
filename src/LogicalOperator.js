// LogicalOperator.js
import React from 'react';

const LogicalOperator = ({ unreadMessages }) => {
  return (
    <div>
      <h1>¡Hola!</h1>
      {unreadMessages.length > 0 && (
        <h2>
          Tienes {unreadMessages.length} mensajes sin leer.
        </h2>
      )}
    </div>
  );
};

export default LogicalOperator;

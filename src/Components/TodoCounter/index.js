import React from 'react'
import { TodoContext } from '../../TodoContext';
import '../css/style.css'
  
function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)
  return (
    <h2 className='card'>
      Has Completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
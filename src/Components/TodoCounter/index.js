import React from 'react'
import '../css/style.css'
  
export default function TodoCounter({total, completed}) {
  return (
    <h2 className='card'>
      Has Completado {completed} de {total} tareas
    </h2>
  );
}

export { TodoCounter };
import React from 'react';
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList/index.js";
import { TodoItem } from "../Components/TodoItem/index.js";
import { CreateTodoButton } from "../Components/CreateTodoButton";// Lista FALSA de todos las tareas

// Recibo los valores como props
function AppUI({
  loading,
  error,
  totalTodos, 
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
    {/* <div className="container"> */}
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />      {/* <h2>Has completado 2 de 3 TODOS</h2> */}
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    {/* <input placeholder="Cebolla" /> */}
    <TodoList>
    {/* // Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO</p>v}

      {searchedTodos.map(todo => ( // Interactua sobre la lista Falsa todos
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    <CreateTodoButton />
    {/* </div> */}
  </React.Fragment>    
  );
}

export { AppUI };
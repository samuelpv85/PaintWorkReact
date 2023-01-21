import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import { TodoCounter } from "../Components/TodoCounter";
// import { TodoSearch } from "../Components/TodoSearch";
// import { TodoList } from "../Components/TodoList/index.js";
// import { TodoItem } from "../Components/TodoItem/index.js";
// import { CreateTodoButton } from "../Components/CreateTodoButton";// Lista FALSA de todos las tareas

import { AppUI } from './AppUI';

import { TodoProvider } from "../TodoContext/";
// const defaultTodos = [
//   { text : 'Cortar cebolla', completed: true },
//   { text : 'Cortar Papas', completed: true },
//   { text : 'Cortar Tomates', completed: false }
// ]
 
  function App() {
   
    return (
      // obtenemos las propiedades desde AppUI envueltas en el todoProvider
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    );
  }
  
  export default App;
















//   const localStorageItem = localStorage.getItem(itemName);
//   let parsedItem;
  
//   if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedItem = initialValue;
//   } else {
//     parsedItem = JSON.parse(localStorageItem);
//   }

//   const [item, setItem] = React.useState(parsedItem);

//   const saveItem = (newItem) => {
//     const stringifiedItem = JSON.stringify(newItem);
//     localStorage.setItem(itemName, stringifiedItem);
//     setItem(newItem);
//   };

//   return [
//     item,
//     saveItem,
//   ];
// }

// function App() { // Componente APP

//   // // Traemos nuestros TODOs almacenados
//   // const localStorageTodos = localStorage.getItem('TODOS_V1');
//   // let parsedTodos;
    
//   // if (!localStorageTodos) {
//   //  // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
//   //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
//   //     parsedTodos = [];
//   //   } else {
//   //   // Si existen TODOs en el localStorage los regresamos como nuestros todos
//   //   parsedTodos = JSON.parse(localStorageTodos);
//   //   }
//   // const [todos, setTodos] = React.useState(parsedTodos);
//   // const [searchValue, setSearchValue] = React.useState('');
//   // const completedTodos = todos.filter(todo => !!todo.completed).length;
//   // const totalTodos = todos.length;

//   const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
//   const [searchValue, setSearchValue] = React.useState('');

//   const completedTodos = todos.filter(todo => !!todo.completed).length;
//   const totalTodos = todos.length;
  
//     // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
//     let searchedTodos = [];

//     // Lógica para filtrar
//     if (!searchValue.length >= 1) {
//       searchedTodos = todos;
//     } else {
//       searchedTodos = todos.filter(todo => {
//         const todoText = todo.text.toLowerCase();
//         const searchText = searchValue.toLowerCase();
//         return todoText.includes(searchText);
//       });
//     }

//   // // Creamos la función en la que actualizaremos nuestro localStorage
//   //   const saveTodos = (newTodos) => {
//   //   // Convertimos a string nuestros TODOs
//   //   const stringifiedTodos = JSON.stringify(newTodos);
//   //   // Los guardamos en el localStorage
//   //   localStorage.setItem('TODOS_V1', stringifiedTodos);
//   //   // Actualizamos nuestro estado
//   //   setTodos(newTodos);
//   // };



//   const completeTodo = (text) => {
//     const todoIndex = todos.findIndex(todo => todo.text === text);
//     const newTodos = [...todos];
//     newTodos[todoIndex].completed = true;
//     // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
//     saveTodos(newTodos);
//   };

//   const deleteTodo = (text) => {
//     const todoIndex = todos.findIndex(todo => todo.text === text);
//     const newTodos = [...todos];
//     newTodos.splice(todoIndex, 1);
//     // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
//     saveTodos(newTodos);
//   };

//   return (
//     <AppUI
//       totalTodos={totalTodos}
//       completedTodos={completedTodos}
//       searchValue={searchValue}
//       setSearchValue={setSearchValue}
//       searchedTodos={searchedTodos}
//       completeTodo={completeTodo}
//       deleteTodo={deleteTodo}
//     />
//   );
// }

// export default App;
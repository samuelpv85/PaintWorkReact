import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import { TodoCounter } from "../Components/TodoCounter";
// import { TodoSearch } from "../Components/TodoSearch";
// import { TodoList } from "../Components/TodoList/index.js";
// import { TodoItem } from "../Components/TodoItem/index.js";
// import { CreateTodoButton } from "../Components/CreateTodoButton";// Lista FALSA de todos las tareas

import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text : 'Cortar cebolla', completed: true },
//   { text : 'Cortar Papas', completed: true },
//   { text : 'Cortar Tomates', completed: false }
// ]

function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    // Simulamos un segundo de delay de carga 
      setTimeout(() => {
        // Manejamos la tarea dentro de un try/catch por si ocurre algún error
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
        } catch(error) {
        // En caso de un error lo guardamos en el estado
          setError(error);
        } finally {
          // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
          setLoading(false);
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        // En caso de algún error lo guardamos en el estado
        setError(error);
      }
    };
  
    // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }
  
  function App() {
    // Desestructuramos los nuevos datos de nustro custom hook
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  
    return (
      <AppUI
        loading={loading}
        error={error}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
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
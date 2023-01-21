import React from 'react'
import '../css/style.css'

function TodoSearch({searchValue, setSearchValue}) {
  // const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  return (
    <input 
    className="TodoSearch"
    placeholder="Cortar"
    value={searchValue}
    onChange={onSearchValueChange}/>
    // ,
    // <p>{searchValue}</p>
  );
}

export { TodoSearch }
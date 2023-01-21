import React from 'react'
import '../css/style.css'

export default function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
    className="CreateTodoButton"
    onClick={() => onClickButton('Aquí va el modal:')}
    >
      +
    </button>
    );
}

export { CreateTodoButton };
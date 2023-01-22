import React from 'react'
import '../css/style.css'

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true)
  };

  return (
    <button
    className="CreateTodoButton"
    onClick= {onClickButton}
    >
      +
    </button>
    );
}

export { CreateTodoButton };
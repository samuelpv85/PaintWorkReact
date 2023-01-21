import React from 'react'
import '../css/style.css'

export default function TodoItem(props) {

  // let onComplete = () => {
  //   alert('Has completado la tarea' + props.text)
  // }

  // const onDeleted = () => {
  //   alert(`Eliminaste la tarea ${props.text}`)
  // }

  return (
<li className="card">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
      onClick={props.onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
        {props.text}
      </p>
      <span className="Icon Icon-delete" 
      onClick={props.onDelete}>
        X
      </span>
    </li>
    );
}

export { TodoItem }
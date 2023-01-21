import React from 'react'
import '../css/style.css'

export default function TodoList(props) {
  return (
    <section>
      <ul >
        {props.children}
      </ul>
    </section> 
    );
}

export { TodoList }
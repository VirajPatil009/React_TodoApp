import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  const todoStyle = {
    minHeight: "70vh"
  }
  return (
    < div className="container mb-3" style={todoStyle}>
      <h3>Todo List</h3>
      {props.todos.length === 0 ? "No Todos To Display !" :
        props.todos.map(
          (todo) => {
            return (<Todo todo={todo} key={todo.no} onDelete={props.onDelete} />
            )
          }
        )}
    </div >
  );
}

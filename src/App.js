import './App.css';
import { AddTodo } from './components/AddTodo';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Todos } from './components/Todos';
import { About } from './components/About';
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  let initTodos = localStorage.getItem("localTodos") ? JSON.parse(localStorage.getItem("localTodos")) : [];
  const [todos, setTodos] = useState(initTodos);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [todos])


  const onDelete = (todo) => {
    setTodos(todos.filter((currentTodo) => {
      return currentTodo !== todo;
    }
    ));

  }

  const addTodo = (title, desc) => {
    let no = todos.length !== 0 ? todos[todos.length - 1].no + 1 : 1;
    const newTodo = {
      no: no,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo]);
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }


  return (
    <>
      <BrowserRouter>
        <Header title="Todo App" searchbar={false} />

        <Routes>

          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>

          </Route>

          <Route exact path="/About" element={
            <><About /></>
          }>
          </Route>

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

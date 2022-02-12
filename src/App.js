import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import TodoForm from './Components/TodoForm.js';
import TodoList from './Components/TodoList.js';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="container-fluid m-auto">
        <div className="jumbotron">
          <h1 className="text-center">My To Do App</h1>
          <TodoForm input = {input} setInput = {setInput} todos = {todos} setTodos = {setTodos}/>
        </div>
        <TodoList todos = {todos} setTodos={setTodos}/>
    </div>
  );
}





export default App;

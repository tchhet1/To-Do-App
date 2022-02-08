import React from 'react';
import './App.css';
import TodoList from './Components/TodoList.js';

function App() {
  return (
    <div className="todo-app App">
      <h1>To Do App</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;

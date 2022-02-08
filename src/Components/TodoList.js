import React, { useState } from 'react';
import TodoForm from './TodoForm.js';

function TodoList(){
    const [todos, setTodos] = useState('[]');

    const addTodo = (todo) => {
        if(!todo.text) return;

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    }

    return(
        <TodoForm onSubmit={addTodo}/>
    );
}

export default TodoList;

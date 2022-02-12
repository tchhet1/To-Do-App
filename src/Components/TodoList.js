import React from 'react';
import Todo from './Todo.js';

function TodoList({ todos, setTodos }){

   
    return(
        <React.Fragment>
          <ul className="list-group">
              {todos.map((todo) =>
              <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
              )}
          </ul>
           
        </React.Fragment>
    );
}

export default TodoList;

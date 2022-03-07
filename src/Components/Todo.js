import React, { useState } from 'react';
import HandleUpdate from './HandleUpdate';
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";



function Todo({text, todo, todos, setTodos}) {
    
    const [todoEditing, setTodoEditing] = useState(null);
    const [editInput, setEditInput] = useState('');

    
    
    const handleDeletion = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
       
    }

    const handleEdit = () => {
        const updatedTodos = [...todos].map((el) => {
            if(todo.id == el.id){
                todo.editing = !todo.editing;
                todo.text = editInput;
                
            }
            return todo;
        })

        setTodos(updatedTodos);

        setEditInput(null);
    }

    const toggleComplete = (id) => {
        const updatedTodos = [...todos].map((el) => {
            if(todo.id == el.id){
                todo.completed = !todo.completed;
                
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    
   
    
 
    return (
        <div>
            {todo.id === todoEditing ? 
                <div>
                <input type="text" onChange={(e) => setEditInput(e.target.value)} />
                <button type="submit" onClick>Submit Edit</button>
            </div>
            
            : 
            
                <div>
                <li className="list-group-item  d-flex justify-content-between align-items-center" style={{ backgroundColor: todo.completed ? '#d3d3d3' : 'transparent', textDecoration: todo.completed ? 'line-through' : 'none'}}>
                <span>{capitalizedText}</span>
                <div>
                    <button className="btn-edit" onClick={toggleComplete}><BsCheck2Square /> </button>
                    <button className="btn-edit" onClick={() => setTodoEditing(todo.id)}><BsFillPencilFill /> </button>
                    <button className="mr-1 btn-delete" onClick={handleDeletion}><BsFillTrashFill /></button>
                </div>
            </li>
                </div>
    
       
            }
             </div>
    )
}

export default Todo;

{/* <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
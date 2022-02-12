import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";


function Todo({text, todo, todos, setTodos}) {
    
    const handleDeletion = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
       
    }
    return (
        <div>
            
            <li className="list-group-item  d-flex justify-content-between align-items-center">{text}
                <div>
                    <button className="btn-edit"><BsFillPencilFill /></button>
                    <button className="mr-1 btn-delete" onClick={handleDeletion}><BsFillTrashFill /></button>
                </div>
            </li>
            
             
        </div>
    )
}

export default Todo;

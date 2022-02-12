import React from 'react';

function TodoForm({ input, setInput,  todos, setTodos}) {

    const handleInput= e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(!input) return;
        setTodos([...todos,
            {text: input, completed: false, id: Math.random() * 10000}
        ]);
        setInput('');
    };

    return(
        <form className="form-group">
            <input type="text" onChange={handleInput} value = {input} placeholder="Add a to do..."  className="form-control" name="text"/>
            <button onClick={handleSubmit} className="btn btn-success btn-md mt-3 mb-3" key = {todos.id} type="submit">
                Add
            </button>
        </form>
    )
    
}

export default TodoForm;

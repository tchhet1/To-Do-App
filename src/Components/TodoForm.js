import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    };

    return(
        <form className="todo-form">
            <input type="text" onChange={handleChange} placeholder="Add an item..." value={input} className="todo-input" name="text"/>
            <button onClick={handleSubmit} className="todo-button" type="submit">
                Add
            </button>
        </form>
    )
    
}

export default TodoForm;

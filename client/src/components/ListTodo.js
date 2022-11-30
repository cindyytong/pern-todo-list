import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    async function getTodos(){
        const res = await fetch("http://localhost:5000/todos");
        const todoArray = await res.json() // parsing takes time 
        console.log(todoArray);
        setTodos(todoArray)// update the initial state
    }

    useEffect(() => { // like componentDidMount, this runs whenever the component is rendered 
        getTodos();
    }, []);

    async function deleteTodo(id) {
        try {
            const res = await fetch(
                `http://localhost:5000/todos/${id}`,
                {
                    method: "DELETE"
                }
            );
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch(e) {
            console.error(e.message);
        }
    }

    return(
        <Fragment>
           <table className="table mt-5">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td key={`edit-${todo.todo_id}`}>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                        <td>
                            <input className="form-check-input" type="checkbox" checked={todos.status}></input>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    )
};

export default ListTodo;
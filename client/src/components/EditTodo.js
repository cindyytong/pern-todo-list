import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    const editText = async(id) => {
        try{
            const body = { description };
            const res = await fetch(
                `http://localhost:5000/todos/${id}`, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            window.location = "/";
        } catch(e){
            console.error(e.message);
        }
    }
    return(
        <Fragment>
            <button 
                type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                id={`id${todo.todo_id}`}
                >
            Edit
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick = {() => setDescription(todo.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    onClick ={() => setDescription(todo.description)}
                    ></button>
                </div>
                <div className="modal-body">
                    <input type = "text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </input>
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal"
                        onClick = {() => setDescription(todo.description)}>
                        Close
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={() => editText(todo.todo_id)}>
                        Save changes
                    </button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
};

export default EditTodo;
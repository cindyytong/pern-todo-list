const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware 
app.use(cors());
app.use(express.json()); // allow us access to req.body 

// Routes 
app.listen(5000, () =>{
    console.log("Server is starting on port 5000")
});

app.get("/todos", async(req, res) => {
    try{
        debugger
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch(err) {
        console.error(err.message)
    }
})

app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.delete("/todos/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("todo was deleted");

    } catch(err) {
        console.error(err.message);
    }
})

app.post("/todos", async(req, res) => {
    try{

        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
        res.json(newTodo.rows[0]);
    } catch(err) {
        console.error(error.message);
    }
})

app.put("/todos/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const { description } = req.body; 
        const { status } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1, status = $2 WHERE todo_id = $3", [description, status, id]);
        res.json("todo was updated");
    } catch(err){
        console.error(err.message);
    }
})
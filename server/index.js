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
        const allTodos = await pool.query("SELECT * from todo");
        res.json(allTodos.rows);
    } catch(err) {
        console.error(err.message)
    }
})
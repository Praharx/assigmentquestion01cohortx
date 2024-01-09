const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
}

function removeAtIndex(arr, index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!i === index) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

app.get("/", (req, res) => {
    fs.readFile('todos.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
    })
})

app.get("/todos/:id", (req, res) => {
    fs.readFile('todos.json', 'utf8', (err, data) => {
        if (err) throw err;
        const todos = JSON.parse(data);
        const foundTodo = findIndex(todos, parseInt(req.params.id));
        if (foundTodo === -1) {
            res.status(404).send();
        }
        res.json(todos[foundTodo])
    })
})

app.post("/todos",(req,res)=>{
    let newTodo = {
        title: req.body.title,
        description: req.body.description,
        id: Math.floor(Math.random()*10000000)
    }
    fs.readFile('todos.json','utf8',(err,data)=>{
        if (err) throw err;
        const todos= JSON.parse(data);
        todos.push(newTodo);
        fs.writeFile('todos.json',JSON.stringify(todos),(err,data)=>{
            if (err) throw err;
            res.status(201).json(newTodo);
        })
    })
})

app.put("/todos/:id",(req,res)=>{
  fs.readFile('todos.json','utf8',(err,data)=>{
    if (err) throw err;
    const todos = JSON.parse(data);
    let foundIndex = findIndex(todos,parseInt(req.body.id));
    if (foundIndex === -1){
        res.status(404).send()
    }
    const updatedTodo = {
        id: todos[foundIndex].id,
        title: req.body.title,
        description:req.body.description
    };
    todos.push(updatedTodo);
    fs.writeFile('todos.json',JSON.stringify(todos),(err,data)=>{
        if(err) throw err;
        res.status(201).json(updatedTodo);
    })
  })
})

app.delete("/todos/:id",(req,res)=>{
    fs.readFile('todos.json',"utf8",(err,data)=>{
        if (err) throw err;
        let todos = JSON.parse(data);
        let deleteIndex = findIndex(todos,parseInt(req.body.id));
        if (deleteIndex === -1){
            res.status(404).send()
        }
        todos = removeAtIndex(todos,deleteIndex);
        fs.readFile('todos.json',JSON.stringify(todos),(err,data)=>{
            if (err) throw err;
            res.status(200).send();
        })
    })
})

app.use((req,res,next)=>{
    res.status(404).send();
})

module.exports = app;



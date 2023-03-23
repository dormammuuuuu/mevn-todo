const { Router } = require('express');
const Todo = require('../models/Todo');

const router = Router();

router.get('/', async (req, res) => {
    console.log('get all todos');
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', async (req, res) => {
    if (req.body.title != null) {
        res.todo.title = req.body.title;
    }
    try {
        const updatedTodo = await res.todo.save();
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log('delete todo with id: ' + id);
    try {
        const todoDelete = await Todo.findByIdAndDelete(id);
        console.log(todoDelete);
        res.status(201).json(todoDelete)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
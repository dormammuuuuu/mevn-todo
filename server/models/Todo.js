const { Schema, Model } = require('mongoose');

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Todo = Model('Todo', TodoSchema);

module.exports = Todo;
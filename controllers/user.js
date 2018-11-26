const Todo = require(‘../models/user’)

async function findAll (ctx) {
    // Fetch all Todo’s from the database and return as payload
    const todos = await Todo.find({})
    ctx.body = todos
}

module.exports = {
    findAll
  }
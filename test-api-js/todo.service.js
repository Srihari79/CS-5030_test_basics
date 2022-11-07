class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        todo = {
            "title": "T4",
            "description": "D1",
            "done": false
        }
        this.todos.todo.push(todo);
        return this.todos.todo;
    }

    delete_todo(id){
        const todo = this.todos.todo[0]
        if(todo) {
            todos.splice(0, 1)
        }
        return this.todos.todo;
    }

    update_todo(id, todo){
        const todo = this.todos.todo[0]
        if(todo.title == "T1") {
            todo.done = true;
        }
         return this.todos.todo;
    }
}


module.exports= todoservice;

class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
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
        // Your code here
    }

    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;

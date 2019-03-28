
    var todos = ["eat", "sleep", "assigments"];
    
    var input = prompt("What would you like to do?");
    
    while(input !== "quit"){
        if(input === "list"){
            printList();
        } else if(input === "new"){
            addTodo();
        } else if(input === "delete"){
            deleteTodo();
        }
        
        input = prompt("What would you like to do?");
    }
    
    console.log("You Quit the app!");
    
    function printList(){
        console.log("**********");
        todos.forEach(function(todo, index){
            console.log(index + ": " + todo);
        });
        console.log("**********");
    }
    
    function addTodo(){
        var newTodo = prompt("Enter new todo");
        
        todos.push(newTodo);
        console.log("Todo added");
    }
    
    function deleteTodo(){
        var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Todo Removed")
    }

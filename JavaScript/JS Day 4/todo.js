let todo=[];

let req= prompt("Enter your Request");

while(true){
    if(req == "quit"){
        console.log("Qutting App..");
        break;
    }

    if(req == "list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }

    else if(req == "add"){
        let task= prompt("Enter the task you wanna add" );

        todo.push(task);
        console.log("Task added..");    
    }

    else if( req == "delete"){
        let idx= prompt("enter the index of task you wanaa delete");

        todo.splice(idx,1);
        console.log("Task deleted succesfully");
    }
    else{
        console.log("wrong request");
    }
    req= prompt("Enter your Request");
}
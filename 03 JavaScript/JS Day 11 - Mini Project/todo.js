let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click", function(){  
    console.log(input.value);
    alert(`Adding ${input.value} to Task list`);

    let li=document.createElement("li");
    li.innerText=input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    ul.appendChild(li);
    li.appendChild(delBtn);

    input.value="";
})

//3. Event delegation           ---> solution of so called buttons

ul.addEventListener("click", function(event){
    if(event.target.nodeName== "BUTTON"){
        let parent= event.target.parentElement;
        parent.remove();
    }
})



// let delBtns=document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let parent=this.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }

// NOTE- if you add new task and wanna delete them using "delete button" 
// fuck off kidoo that not possible bcoz --- evnet listner only works for existing element not for everyone 
// like im just my bubuu's chikuu not everyone's
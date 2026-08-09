//2. onclick and mouseenter

//onclick
let btn=document.querySelector('button');


// btn.onclick= function(){
//     // console.log("button is clicked");
//     alert("button is clicked");
// }

// let btns=document.querySelectorAll('button');  //multiple buttons 

// for(btn of btns){
    // btn.onclick=sayhello;
    // btn.onmouseenter= function(){
    //     console.log("aala Bhadvaa")
    // }
    // btn.onclick=sayhello;
    // btn.onclick=sayname;  // only one function at time on onclick 
//3. event listners
    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayname);

    // btn.addEventListener('dblclick', sayname);
// }

function sayhello(){
    alert("hello like wale button bhaiyaa");
}
function sayname(){
    alert("Bhakti is mine!!");
}

//4. activity

//5. event listners on elements          -->possible

let p=document.querySelector('p');
p.addEventListener("dblclick", function(){
    console.log("parah was clicked");
})

let div=document.querySelector('div');
div.addEventListener("mouseleave", function(){
    console.log("mouse in outside the box");
})

//6. 'this' in event listeners

let h3=document.querySelector('h3');

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue"; 
}

btn.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);
p.addEventListener("click", changecolor);
div.addEventListener("click", changecolor);

// 7. keyboard events

let inp=document.querySelector('input');

inp.addEventListener("keydown",function(event){
    console.log(event.key);
    if(event.key == 'w') console.log("charector moves forward");
    if(event.key == 's') console.log("charector moves backward");
    if(event.key == 'a') console.log("charector moves left");
    if(event.key == 'd') console.log("charector moves right");
})

// 8. form events

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();   // this is the way u stop doing default action after submitting
//     alert("form is sumitted");
// })

//9. extracting form data

let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();   // this is the way u stop doing default action after submitting
    
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#pass");

    // there is alternative way to find out id pass
    console.dir(form);
    console.log(form.elements);
    let user=form.elements[0];
    let pass=this.elements[1];

    // console.log(user.value);
    // console.log(pass.value);
})

// 10. MOre events   change and input

user.addEventListener("change", function(){
    console.log("chnage event");
    console.log(user.value);
})
user.addEventListener("input", function(){
    console.log("input event");
    console.log(user.value);
})

let txt=document.querySelector("#duduu");
let para=document.querySelector("#bubuu");

txt.addEventListener("input", function(){
    console.log(txt.value);
    para.innerText=txt.value;
    
})
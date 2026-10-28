// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let inp=document.querySelector("input");

// inp.addEventListener("mouseout", function(){
//     console.log("mouse is out of box");
// })

// inp.addEventListener("keypress", function(){
//     console.log(inp.value);
//     console.log("key is pressed");
// })

window.addEventListener("scroll", function(){
    console.log("we are scrolling babee!!");
})

window.addEventListener("load", function(){
    console.log("succesfully full page loaded");
})

// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

let btn=document.createElement("button");
btn.innerText="click mee?";

body.append(btn);

btn.addEventListener("click", function(){
    btn.style.backgroundColor="green";
    console.log("color is changed");
})

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let h2=document.querySelector("h2");
inp.addEventListener("input", function(){
    console.log(inp.value);
    h2.innerText=inp.value;
})
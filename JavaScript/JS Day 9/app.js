// 4. selecting element by ID

let obj=document.getElementById("description");
console.dir(obj);

try{
    obj.innerText= lorem*20;
}
catch(err){

    console.log(err);
    console.log("there is an error");
}


//5. selecting element by class name
let smallImg= document.getElementsByClassName("oldImg");
console.dir(smallImg);

for(let i=0; i<smallImg.length; i++){
    console.dir(smallImg[i]);
    console.log(smallImg[i].src);
}

// images cch chane kelya hotya bcc
// for(let i=0; i<smallImg.length; i++){
//     smallImg[i].src = "marvels-spider-man-3840x2160-11990.jpeg";
//     console.log(`vlaue of image no.${i} is changed`);            
// }

// 6. selecting element by Tag name

let obj2=document.getElementsByTagName("p");
console.dir(obj2);

// obj2[1].innerText= "heyyy spidy 😒";


console.log(" ");

// 7. query selector

console.dir(document.querySelector("h1"));             // only selects first p in document
console.dir(document.querySelector("#mainImg"));
console.dir(document.querySelector(".box")); 

console.dir(document.querySelector("div a").innerHTML="kuch bhii");

console.dir(document.querySelectorAll("div a")); 
console.dir(document.querySelectorAll("p")); 

// 8. manipulating content of DOM

let para= document.querySelector("p");

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

// para.innerText= "hey!! i am Peter Parker";
// para.innerText= "hey!! i am <b>Peter Parker</b>";

// para.innerHTML= "hey!! i am <b>Peter Parker</b>";  here is the main diff only in innerhtml tags are considered,

// 9. manipulating attributes

let img=document.querySelector('img');
console.dir(img);

img.getAttribute('id');

// img.setAttribute('id','newImg');  // css-0 but succesfully id ch naav change kel

// 10. Manipulating style

let heading = document.querySelector('h1');

heading.style.color ="red";

let links= document.querySelectorAll(".box a")
console.dir(links);

// for(let i=0; i<links.length; i++){
//     links[i].style.color="purple";
// }

for(link of links){
    link.style.color="purple";
}

// 11. classList property

// let heading = document.querySelector('h1');

console.log(heading.classList);

//add
heading.classList.add("green");
heading.classList.add("underline");

console.log(heading.classList);

//remove
heading.classList.remove("green");

console.log(heading.classList);

//toggle
heading.classList.toggle("green");   //  if present-> remove ... if not present-> add 
heading.classList.toggle("bubbuuu");   //  if present-> remove ... if not present-> add 

console.log(heading.classList);

let box= document.querySelector(".box");

box.classList.add("yellowbg");
console.log(box.classList);

//12. navigation on page

// parent child
let h4=document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.childElementCount);

//children
console.log(box.parentElement);
console.log(box.children);
console.log(box.childElementCount);

//siblings
let ul=document.querySelector('ul');

console.log(ul.children);
console.log(ul.children[1].nextElementSibling);
console.log(ul.children[1].previousElementSibling);

// 13. Adding elment on page

// creation
let button=document.createElement('button');
button.innerText="click me mommy";

// appendchild
let body=document.querySelector('body');
body.appendChild(button);

//append              ----> element is added also strings and chars also added to str
let newp=document.createElement('p');
newp.append("PADHEGA INDIA TABHI TO AAGE BHADEGA INDIA");
body.append(newp);

//prepend            ----> add element at very first
box.prepend(newp);

// *** insertAdjacent element 

//1. beforebegin

box.insertAdjacentElement("beforebegin",button);

//2. afterbegin   ...first child

box.insertAdjacentElement("afterbegin",button);

//3. before end   .. last child

box.insertAdjacentElement("beforeend",button);

//4. after end  ... last la box chya pan baher

box.insertAdjacentElement("afterend",button);

//15. Practice qs.1

let para2=document.createElement('p');
para2.innerText="hey im red";

body.append(para2);

para2.classList.add("red");
console.log(para2.classList);

let h3=document.createElement('h3');
h3.innerText="im blue h3";

body.append(h3);
h3.classList.add("blue");
console.log(h3.classList);

let newdiv=document.createElement('div');
let newh1=document.createElement('h1');
let newp2=document.createElement('p');

newh1.innerText="im inside div";
newp2.innerText="mee too";
body.append(newdiv);
newdiv.appendChild(newh1);
newdiv.appendChild(newp2);

newdiv.classList.add("pink");
console.log(newdiv.classList);








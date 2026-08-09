//1. Function 
let cnt=0;
function hello(){
    if(cnt==3){
        return;
    }
    console.log("Hello");
    cnt++;
    hello();
}
hello();

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();

function Isadult(){
    let age=Number(prompt("Enter The Age"));
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}
// Isadult();

// practice qs.1 and 2

function poem(){
    console.log("Johny Johny Yes Papa lyrics In English \n What Will Your Child Learn From The Rhyme Johny Johny Yes Papa? \n Theme Of The Rhyme Johny Johny Yes Papa \n Rhyming Scheme of Johny Johny Yes Papa \n Words Your Child Will Learn From Johny Johny Yes Papa \n Activities To Teach Your Child Johny Johny Yes Papa");
}
poem();

function rolldice(){
    let dice=Math.floor(Math.random()*6)+1;
    console.log(dice);
}
rolldice();

// 2. function with Arguments 

function pritname(name){
    console.log(name);
}
pritname("Prasad");

function printINfo(name, age, sex){
    console.log(`Name- ${name} Age- ${age} Sex- ${sex}` );
}
printINfo("Prasad",22,true);
printINfo("Bhakti", 21);

// practice qs.3 and 4

function avg3(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
avg3(87,45,190);

function Table(num){
    for(let i=1; i<=10; i++){
        console.log(num*i);
    }
}
Table(10);

//3. return keyword

function sum(a,b){
    return a+b; // trminate function right there
}
let ans=sum(3,4);
console.log(ans);

// practice qs.5 and 6

function sumN(n){
    let sol=0;
    for(let i=1; i<=n; i++){
        sol=sol+i;
    }
    return sol;
}
let anss=sumN(1000);
console.log(anss);

let arr=["Prasad","Ankush","Thorat","is","God","Complex."];
function conStr(arr){
    let soll=" ";
    for(let i=0; i<arr.length; i++){
        soll=`${soll} ${arr[i]}`;
    }
    return soll;
}
let ansss=conStr(arr);
console.log(ansss);

//4 Scope (function and Global)  // func scope > global scope (specificity)

let summ=0;  //global scope
function calcSUm(a,b){
    let sum=a+b;   // function scope
    
}
calcSUm(2,3);
// console.log(sum);   this will show error bcoz not aloud outside function

//5. block code and lexical code

{
    let a=10;
    console.log(a);
}
// console.log(a);   this is an error bcoz cannot call/access variable outside of block

function Outerfunc(){
    let x=10;
    let y=20;
    // console.log(z); //error bcoz inside function's variable is not possible to use outside

    function insidefunc(){
        let z=10;
        console.log(x);

    }
    insidefunc();
}

Outerfunc();
// insidefunc();  // this is also error bcoz its not possible to call insidefunction this is lexical scope

// practice qs.7
let greet="hello"; //global scope
function outerfun(){
    let greet="namaste!!";
    console.log(greet); //function scope
    function innerfun(){
        console.log(greet); //lexical scope
    }
    innerfun();
}
console.log(greet);
outerfun();

//6. function expressions

let greett=function(){
    console.log("hello");
}
greett();

let summm= function(a,b){
    return a+b;
}
console.log(summm(13,34));

//7. Higher order Functions 

function Multigreet(func, count){
    for(let i=0; i<=count; i++){
        func();
    }
}
let grit=function(){
    console.log("heyy shonaaa 😚😚");
}
Multigreet(grit,100);

//8. Modules [this is a function for objects]

const calculator ={
    num : 13,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
}

console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(1,19));
console.log(calculator.sub(1,19));
console.log(calculator.mul(1,19));

// ASSIGNMENT QS

//1. RETURN FUNCTION GIVES VALUES GRATER THAN NUM FROM AN ARRAY
let array=[10,20,30,40];

function Arraynum(array, num){
    for(let i=0; i<array.length; i++){
        if(array[i]>num){
            return array[i];
        }
        else return "Benchod";
    }
}
let answer=Arraynum(array,69);
console.log(answer);

//2. extract unique charectors from string
let str="abcdabcdefgggh";

function ExtractChar(str){
    let charr="";
    for(let i=0; i<str.length; i++){
        let currchar=str[i];
        if(charr.indexOf(currchar) == -1){
            charr=charr+currchar;
        }
    }
    return charr;
}

let fin=ExtractChar(str);
console.log(fin);

//3. longest strn among array
let country = ["Australia", "Germany", "United States of America"];
function Longeststr(country){

    let cmt=0;
    let ans="";
    for(let i=0; i<country.length; i++){
        if(country[i].length>cmt){
            cmt=country[i].length;
            ans=country[i];
        }
    }
    return ans;
}
let tin=Longeststr(country);
console.log(tin);

//4. count of vowels from string

let sting="Prasad Ankush Thorat is God Complex."

function Vowels(sting){
    let cnt=0;
    for(let i=0; i<sting.length; i++){
        let currchar=sting[i];
        if(currchar=="a" || currchar=="e" || currchar=="i" || currchar=="o" || currchar=="u" || currchar=="A" ){
            cnt++;
        }
    }
    return cnt;
}
let gin=Vowels(sting);
console.log(gin);

//5. Write a JavaScript function to generate a random number within a range (start, end).

let st=Number(prompt("give starting number"));
let end=Number(prompt("give ending number"));
function getnum(st, end){
    let diff=end-st;
    let rand=Math.floor(Math.random()*diff)+st;
    console.log(rand);
}

getnum(st,end);


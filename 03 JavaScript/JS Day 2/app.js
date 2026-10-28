console.log("Hello!");
console.log("APna College");

// 3. Template Literals

let a=20;
let b=10;
let output=("Your Pay is: "+(a+b)+" Rupees.");
console.log(output);
console.log("Your Pay is : ", a+b," Ruppes." ); // this is legit but lengthy temp. Literals help to do it smoothly

console.log(`Your Pay is: ${a+b} Rupees`);

//4. Operators in js

//a. Arithmetic operators
let sum=a+b; 
let diff=a-b;
let multi=a*b;
let div=a/b;
let mod=a%b;
let power=a**b;

console.log(sum);
console.log(diff);
console.log(multi);
console.log(div);
console.log(mod);
console.log(power);
// b. unary

a++;
let Newsum=++a;
console.log(Newsum);

b--;
let Newnum=--b;
console.log(Newnum);

// c. Assignment Operator

a=b;
console.log(b);

// d. Comparison Operator

let age=18;

console.log(age>18);
console.log(age<18);
console.log(age>=18);
console.log(age<=18);

console.log(5==5);
console.log(5!=5);

let n=5;
let str="5";
typeof n;
typeof str;
console.log(n==str);
console.log(n===str);

console.log('a'<'A');
console.log('a'<'b');

// 5. Conditional statements

// 5.1 If statement
let agee=23;
if(agee >= 18){
    console.log("You are able to vote.!");
}
let firstnam="Bhakti";
if(firstnam == "Bhakti"){
    console.log(`Welcome to Website ${firstnam}`);
}

//5.2 Else-if Statement

age=17;
if(age>=18){
    console.log("you can Vote!");
}else if(age>=16){
    console.log("You can watch Movies!");
}else if(age>=14){
    console.log("You can swim!");
}

// 5.3 else statement

if(age>=18){
    console.log("you are voting!!");
}else{
    console.log("fuck off bitch");
}

// 5.4 Nested if-else statement
let marks=39;
if(marks>=33){
    console.log("Pass");
    if(marks>=80){
        console.log("O");
    }else if(marks>=60){
        console.log("A");
    }else if(marks>=40){
        console.log("B");
    }
}else{
    console.log("Better Luck Next time!");
}
// 6. Logical Operator

let str1="apple";

if(str1[0]=='a' && str1.length>3){
    console.log("Good string");
}else{
    console.log("not a Good String");
}

// 7. Switch Statement

let color="q";
switch(color){
    case "Red" :
        console.log("Stop");
        break;
    
    case "Yellow" :
        console.log("Go slow");
        break;
    
    case "Green" :
        console.log("go");
        break;

    default :
        console.log("Broken LIght");
}

let day = 6;

switch(day){
    case 1 :
        console.log("Monday");
        break;
    
    case 2 :
        console.log("Tuesday");
        break;
    
    case 3 :
        console.log("Wednesday");
        break;

    case 4 :
        console.log("Thursday");
        break;

    case 5 :
        console.log("Friday");
        break;

    case 6 :
        console.log("Saturday");
        break;

    case 7 :
        console.log("Sunday");
        break;

    default :
        console.log("Write valid number from 1 to 7");
}

//  ALerts and Prompts

// alert
alert("Winter is Coming");

// way of outputs in console
console.log("normal Statement");
console.error("this os an error write crdentials properly");
console.warn("last warning for youu!!!");

// Prompts

prompt("Write what you want");

let firstname= prompt("Enter your Fname :");
let lastname= prompt("Enter your Lname :");

let msg= "welcome " + firstname+" "+ lastname +"!";
alert(msg);

console.log(firstname+" "+lastname);
console.log(`welcome ${firstname} ${lastname} !`);

// Practice Qs

let numm=10;
if(numm % 10== 0) {
    console.log("good");
}else{
    console.log("bad");
}

let naam= prompt("Enter Your Name :");
let ageee= prompt("Enter Your Age :");

let op=`${naam} is ${ageee} years old`;
alert(op);

let month=1;
switch(month){
    case 1 :
        console.log("January, Febuary, March");
        break;
    
    case 2 :
        console.log("April, May, June");
        break;
    
    case 3 :
        console.log("July, August, Septembar");
        break;

    case 4 :
        console.log("October, November, December");
        break;

    default :
        console.log("write a valid number");

}


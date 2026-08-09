const student = {
    name : "prasad",
    age : 21,
    sex : "m",
    eng : 89,
    maths : 88,
    sci : 90,

    getAvg() {
        console.log(this);
        let ans = (this.eng + this.maths + this.sci) / 3;
        console.log(ans);
    }
}
console.log(student.getAvg());

function getAvg(){
    console.log(this);  // gives window --> higher level object is window
}
getAvg();

// 2. try and catch   //highly useful ig to avoid API crashesh

console.log("hello");
console.log("hello");
try{
    console.log(a);
}
catch(err){
    console.log("caught an error... a is not defined")
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// 3. arrow function 

const sum =(a,b) => {
    console.log(a+b);
}
sum(4,90);

const cube = n => {   // if 1 argment no ( ) needed [optional]
    console.log(n*n*n);
}
cube(4);

const power = (a,b) => {
    return a**b;
}
console.log(power(4,5));

const greet = () => {   // if no argument still empty () needed
    console.log("hello");
}
greet();

// 4. implicit return in arrow function 

const mul = (a,b) => (a * b);
mul(2,3);

// 5. set Timeout function 

console.log("him- heyyy bubuuu");

setTimeout(func, 6000);

function func() {
    console.log("her- bilkul nahiii 😚😚");
}
console.log("him- mla miss kelas baal.??")

//6. set interval function 

console.log("him- heyyy shonaaa");

let id1= setInterval(func1, 3000);
function func1(){
    console.log("him- sorry n baal 😭😭");
}

let id2= setInterval(func2, 4000);
function func2(){
    console.log("her- Prasad.. bye!!");
}
console.log("mafii asavi rannisaheb");

clearInterval(id1);
clearInterval(id2);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for(let i=1; i<=5; i++){
    console.log(i);
}

for(let i=10; i>0; i--){
    console.log(i);
}

for(let i=10; i>0; i=i-3){
    console.log(i);
}

// 3. Print odd Numbers
console.log("Backwards");
for (let i=15; i>0; i=i-2){ // simple method withoud using modulo
    console.log(i);
}
console.log("Forward using modulo")
for(let i=1; i<=15; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

// 4. Print Even numbers

console.log("Forward without modulo")
for(let i=2; i<=10; i=i+2){
    console.log(i);
}
console.log("Backward without modulo")
for(let i=10; i>=2; i=i-2){
    console.log(i);
}

// 5. Infinite loop

// for(let i=1 ; ; i++){
//     console.log(i);
// }

// 6. Multiplication Table

for(let i=1; i<=10; i++){
    console.log(5*i);
}

// let n= prompt("Enter your number");
// n= parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// 7. Nested for loop

for(let i=1; i<=3; i++){
    console.log(`Outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
console.log(" ");
// 8. While loops

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

let j=1;
while(j<=20){
    console.log(j);
    j=j+2;
}

let m=2;
while(m<=20){
    console.log(m);
    m=m+2;
}

// 9. Favorite movie

// let favorite = "infinity war";

// let guess= prompt("Enter your guess. should be in lowercase");

// while( (favorite != guess) && (favorite != "quit") ){
//     console.log("oops!! Try again.");
    
//     guess=prompt("wrong guess. please Try again");
// }

// if(guess == favorite){
//     console.log("congratulations.. you get it");
// }
// else{
//     console.log("you quit succesfully" );
// }

// 10. Break statement

let k=1;
while(k <= 5){
    if(k == 4){
        break;
    }
    console.log(k);
    k++;
}

// 11. Loops In array

let fruits =["mango","banana","litchi","apple","chikuu"];
fruits.push("pineapple");
for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}

// 12. Nested loops with Nested Array

let heroes =[["ironam","thor","captain america","BHAIYA KOLPE"],["flash","WonderWomen","superman","batman"]];

for(let i=0; i<heroes.length; i++){
    console.log(`${i} ${heroes[i]}`);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}  ${heroes[i][j]}`);
    }
}

let students = [["Aman", 77], ["karan", 100], ["bhakti", 94.4]];
for( let i=0; i<students.length; i++){
    console.log(students[i]);
    for(let j=0; j<students[i].length; j++){
        console.log(`${students[i][j]}`);
    } 
}
console.log(" ");

//  13. For of loops
let fruit=["mango","banana","chikku","pineapple","papaya"];
for(fal of fruit){
    console.log(fal);
}

// 14. practice qsns

// 1. delete occurnace of tow

let a1=[1,2,3,4,5,6,2,3];
let n1=2;

for(let i=0; i<a1.length; i++){
    if(a1[i]==n1){
        a1.splice(i,1);
    }
}
console.log(a1);

// 2. find length of number

let n2=287152;
let copy=n2;
let cnt=0;
while(copy>0){
    cnt++;
    copy = Math.floor(copy/10);
}
console.log(cnt);

//3. addition of every digit

let copyy=n2;
let lstdigit=0;
let ans=0;
while(copyy > 0){
    lstdigit= copyy%10;
    ans= ans+lstdigit;
    copyy = Math.floor(copyy/10);
}
console.log(ans);

//4. factorial 
let n3= Number(prompt("Enter a number for find factorial.!!"));

if(n3==0 || n3== 1){
    console.log(1);
}
let anss=1;
for(let i=1; i<=n3; i++){
    anss=anss*i;
}
console.log(anss);

// 5. largest element from an array

let largest=a1[0];
for(let i=0; i<a1.length; i++){
    if(largest<=a1[i]){
        largest=a1[i]; 
    }
    
}
console.log(largest);
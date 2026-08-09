// strings are immnutebale (impossible to chnange)

//1. trim method
let msg="  hello  ";
msg.trim();
console.log(msg.trim()); // create new strim which is trimmed not modify original 
console.log(msg);

// let password= prompt("Enter Your password :" );
// console.log(password); // as it is password with spaces
// console.log(password.trim()); // new trimmed string

//2. ToUpperCase and ToLowerCase

let msg2="Prasad Thorat";

console.log(msg2.toLowerCase());
console.log(msg2.toUpperCase()); 
console.log(msg2); // strings are immuteable

//3. methods Arguments 
// 3.1 indexOf

console.log(msg2.indexOf("Thorat"));
console.log(msg.indexOf("Bhakti"));
console.log(msg2.indexOf("a"));

// 3.2 Method chaining

let NewName = msg.trim().toUpperCase();
console.log(NewName);

// 3.3 Slice method

let msg3="apna college";
console.log(msg3.slice(0,4)); //apna    st. index is okay but ending index is not included
console.log(msg3.slice(5)); // college
console.log(msg3.slice(-2)); //ge
console.log(msg3.slice(-10)); //na college  // str.slice(-num) = str.slice(str.length - num)

// 3.4 Replace nd Repeat Method

let msg4="im so addicted to youu";
let newMsg4 = msg4.replace("so", "fucking");
console.log(newMsg4);

console.log(msg4.replace("youu", "Her"));

let fruit="mango ";
console.log(fruit.repeat(4));

// practice qs.1 
let msg5="help!";
console.log(msg5.trim().toUpperCase());

console.log(msg3.slice(5,10));
console.log(msg3.indexOf("na"));
console.log(msg3.replace("apna", "Our"));

console.log(msg3.slice(5).replace("l", "t").replace("l","t"));

// 4. Array

let students = ["aman", "shradha", "rajat"];
console.log(students);

//4.1 Visualizing array

let nums=[1,2,3,4,5];
console.log(nums);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[0]);
console.log(nums[5]);

let info=["Prasad Thorat", 21, 9.33, true];
console.log(info);
console.log(info.length);
console.log(info[0]);
console.log(info[0][0]);
console.log(info[0][7]);
console.log(info[0].length);


let emp=[];
console.log(emp);
console.log(emp.length);
console.log(emp[0]);

//4.2 Arrays are Mutable

let anme= "rohit"; // strings are immutable
anme[0]='m';
console.log(anme);

let fruits =["Apple", "Gauva", "Chikuu"];
console.log(fruits);
fruits[0]="mango";
console.log(fruits);

//4.3 array methods

let cars=["audi", "BMW", "Mercedez", "Maruti"];
console.log(cars);

cars.push("XUV");
cars.push("Mahindra"); // add to last
console.log(cars);

cars.pop();
cars.pop(); // remove from last
console.log(cars);

cars.unshift("XUV"); //add to start
cars.unshift("Mahindra");
console.log(cars);

cars.shift(); // delete to start
cars.shift();
console.log(cars);

let months= ["january","july","march","august"];
console.log(months);

months.shift();
months.shift();

months.unshift("june");
months.unshift("july");
console.log(months);

// indexOf and include methods
let primary=["yellow","red","blue"];

console.log(primary.includes("red"));
console.log(primary.indexOf("red"));

console.log(primary.includes("green"))
console.log(primary.indexOf("green"));
console.log(primary.indexOf("blue"));

// concatenation and Reverse

let first =["prasad", "ankush", "thorat"];
let second= ["is", "gretest", "among", "all"];

console.log(first.concat(second));

let all=second.concat(first);
console.log(all);

console.log(second.reverse());
console.log(second.reverse());  

// SLice in array

let colors = ["yellow","red","blue","ornage","pink","white"];
colors.slice();

console.log(colors.slice(3)); //  3 -> last
console.log(colors.slice(1,2)); //  red
console.log(colors.slice(-2));  //  pink, white

// splice in array

let car= ["bmw","xuv","maruti","jaguar","ferrari","toyota"];

car.splice(4); // delete from 4-> last
console.log(car);

car.splice(0,1);
console.log(car);

car.splice(0,0, "mercedes"); // from 0 index delete zero add mercedes
console.log(car);

car.splice(1,2); // delete 2 items from index 1 
console.log(car);

car.splice(1,0,"bmw"); //add in btn at index 1
console.log(car);

car.splice(2,1, "Gwagon"); // replace 2nd index element jaguar with Gwagon
console.log(car);

// Sort array

let days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
days.sort();
console.log(days);

let char = ['c','d','t','a','T','P','B','l','o','v','e'];
char.sort();
console.log(char);

let marks=[81,99,87,61,42,100,31]; // that doesnt sort correctely usimg sort method... DO NOT USE IT
marks.sort();
console.log(marks);

//praactice qs.2

let month=["january","july","march","august"];
month.splice(0,1);
month.splice(1,0,"june");
console.log(month);

let lang=["c","c++","html","javascript","python","java","c#","sql"];
lang.reverse();

console.log(lang.indexOf("javascript"));

// Array References

let num1=[1,2,3];
let num2=[1,2,3];

if(num1[0]==num2[0]){
    console.log("same");
}else{
    console.log("not same");
}

// Constant aaray

const g=9.8;

const array5= [1,2,3]; // u can push pop or manipulate in array
array5.push(4);

array5.shift();
console.log(array5);

// array5=[10,20,30]; //  but u cannot create a new array

// nested array (array of arrays)

let nuu=[ [1,2], [3,4], [5,6] ];
console.log(nuu);

console.log(nuu[1][0]);

// Practice qs.3 [tic-tac tow gamee]

let ttt = [ ['X', null ,'O'], [null, 'X', null], ['O' ,null ,'X'] ];
console.log(ttt);

ttt[0][1] = 'O';

// js question

// 1.
let n7=[1,2,3,-5];
let n=3;

let answer=n7.slice(0,n);
console.log(answer);

// 2. 
let n8=[1,2,3,-5];
let m=3;

let answer1=n8.slice(n8.length-m);
console.log(answer1);

// 3.
let strrr=prompt("Enter a string");

if(strrr.length==0){
    console.log("empty string");
}
else{
    console.log("not empty string");
}


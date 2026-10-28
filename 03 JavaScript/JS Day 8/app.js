// 1. array methods (for each)

let arr=[2,3,5,6,4];

let print = function(el){
    console.log(el);
};

arr.forEach(print);

let arr2= [
    {
        name: "prasad",
        marks: 90.89
    },
    {
        name: "Bhakti",
        marks: 98.86
    },
    {
        name: "sarthak",
        marks: 86.45
    }
];

arr2.forEach(function(student){
    console.log(student.marks);
})

// 2. map and filter
// map

let arr3=[1,2,3,4,5,6,7,8,9];

let double= arr3.map(function(el){
    return el*2;
});
console.log(double);

let gpa= arr2.map(function(el){
    return el.marks/10;
})
console.log(gpa);

//filter

let ans= arr3.filter(function(el){ 
    return el%2==0;   // je true asel tech fakt add hoel
});
console.log(ans);

// 3. every and some
//every --> returns true or false val

let ans2=arr3.every(function(el){
    return el<10; 
})
console.log(ans2);

console.log(arr3.every(function(el){
    return el%2==0;
}));

//4. reduce function 


// practice QS.1

//1. check every element inn array in multiple of 10
let arr4=[10,20,30,40,50];

let ans3= arr4.every(function(el){
    return el%10==0;
})
console.log(ans3);

// find minimum number from an arary using function 

function minArr(arr4){
    let min=arr4[0];
    for(let i=0; i<arr4.length ;  i++){
        if(arr4[i]<min){
            min=arr4[i];
        }
    }
    return min;
}
let ans4=minArr(arr4);
console.log(ans4);

console.log(Math.min(...arr4))

//6. deafault parameter

function sum(a, b=2){
    return a+b;
}
console.log(sum(3)); //5;
console.log(sum(3,3)); //a=3, b=3 its override this value

function sum2(a=2, b){
    return a+b;
}
console.log(sum2(2,3));
console.log(sum2(4));  // a=4, b=undefined

// 7. spread (..arr);

console.log(...arr3);

Math.min(1,2,3,4,5) //1
Math.max(1,2,3,4,5) //5

let minimum=Math.min(...arr3);
console.log(minimum);

let maximum=Math.max(...arr3);
console.log(maximum);

let str="apnacollege";
console.log(...str);


//8. speard Array literals

let newarr= [...arr4];
console.log(newarr);

newarr.push(60);
newarr.shift();
console.log(newarr);
console.log(arr4);

let str1="prasad";
let chars1=[...str1];
console.log(chars1);

let chars2=[..."bhakti"];
console.log(chars2);

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];

let nums=[...odd, ...even];
nums.sort(); // it sort on basis of charectors
console.log(nums);

// 9. spread (object literals)

const data ={
    email: "abc@mail.com",
    password: "abcd"

}

const copydata = {id: 123, ...data, country: "india"};
console.log(copydata);

const copyarr ={...arr3};
console.log(copyarr);

const copystr ={...str1};
console.log(copystr);

//10. rest 

function sum(...args){
    console.log(args);  // combine and stors every args in an single array 
}
sum(1,2,3,4,5,6);

// 10. deconstructing

let names=["Prasad","Bhakti","aman","rajat","shradhha","xyx","abc","pqr"];

let [winner, runnerup, runnerup2nd, ...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others); // here we use rest

// 11. deconstructing eith objects

const student ={
    name:"prasad",
    marks: 90.45,
    age:21,
    sex:"Male",
    subject: ["marathi","hindi","english"],
    username:"prasad18",
    passowrd:"abcd",
}

let {username: user, passowrd: secret, city="mumbai" }= student;
console.log(user);
console.log(secret);

console.log(student.city);
console.log(city);

// ASSIGNMENT QS.

// 1. SQUARE AND SUM OF ARRAY ELEMENTS AND THEN FIND AVG OF ARRAY
// let arr4=[10,20,30,40,50];

const square = arr4.map(function(el){
    return el*el;
});
console.log(square);

function sum3(square){
    let sum=0;
    for(let i=0; i<square.length; i++){
        sum=sum+square[i];
    }
    return sum;
}
let answer=sum3(square);
console.log(answer);

let avg= answer / arr4.length;
console.log(avg);

// Create a new array using the map function whose each element is equal to the original element plus 5.

let newarr1= arr4.map(function(el){
    return el=el+5;
});
console.log(newarr1);

// Create a new array whose elements are in uppercase of words present in the original array.

const str32=["Prasad", "Thorat", "IS", "GOD", "COMPLEX"];

let newarr2= str32.map(function(el){
    return el.toUpperCase();
})
console.log(newarr2);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const car = {
brand: "Tesla",
model: "Model 3",
year: 2022
};

const newobject = {...student, ...car};
console.log(newobject);
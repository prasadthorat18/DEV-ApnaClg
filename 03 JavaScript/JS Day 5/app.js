//1. object literals
    // collection of key-value pair

//2. creating object literals
    // gives more clarity than array
let delhi ={
    latitude : "19053.7° N",
    longitude : "48239.3° E"
}

const student ={
    name : "Bhakti",
    age : 21,
    marks : 98.8
}

let student2 = ["Bhakti",21, 98.8]; //sequence is fixed but in objects sequence in random


const item = {
    price : 99.99,
    discount : 50,
    colors : ["red", "pink","blue"]
}

//3. create a post on thread/twitter/x/ig

const post ={
    username : "@prasadthorat18",
    content : "I AM GREAT!!!",
    likes : 348,
    repost : 1,
    tags : ["#RBRTH", "#GOD", "#EGO"]
}
console.log(post);

//4. access or get the values --> 2 ways 1) object.key  2)object["key"]

console.log(post.content);
console.log(post.likes);
console.log(post.repost);

console.log(post["likes"]);
console.log(post["tags"]);

let prop="repost";
console.log(post[prop]);

//5. conversion in get values

const obj ={
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
console.log(obj[1]);
console.log(obj[2]);
console.log([true]);

//obj.1 and obj.2 gives an error;
obj.true;
obj.null;

//6. add, Update and delete operations

student.gender ="female";
student.grade = "O";
student.city="mumbai";

//update 
student.city="Delhi";

//delete
delete student.grade;

console.log(student);

// 7. nested object (objects of object)

const classInfo = {
    Bhakti:{
        Grade: "O",
        gender: "Female",
        City: "Pune"
    },
    Prasad:{
        Grade: "O",
        gender: "male",
        City: "Pune"
    },
    Aman:{
        Grade: "C",
        gender: "Female",
        City: "Delhi"
    }
}
console.log(classInfo.Bhakti);
console.log(classInfo.Prasad.City);
console.log(classInfo.Aman.Grade);

classInfo.Bhakti.City="USA";
console.log(classInfo.Bhakti.City)

// 8. Array of OBjects

const studentInfo = [
    {
        Name: "Bhakti",
        Grade: "O",
        gender: "Female",
        City: "Pune"
    },
    {
        Name: "Prasad",
        Grade: "O",
        gender: "Male",
        City: "Pune"
    },
    {
        Name: "Aman",
        Grade: "C",
        gender: "Female",
        City: "Delhi"
    }
]
console.log(studentInfo[0]);
console.log(studentInfo[1].gender);
console.log(studentInfo[2]);
studentInfo[0].City="usa";
studentInfo[0].Nature="Purest Soul";
console.log(studentInfo[0].City)

console.log(studentInfo[0]);

// 9. Practice qs --> random number from 1-100

let rnd1= Math.floor(Math.random()*100)+1;
console.log(rnd1);

// random no. 1-5
let rnd2= Math.floor(Math.random()*5)+1;
console.log(rnd2);

//random no. 21-25
let rnd3= Math.floor(Math.random()*5)+21;
console.log(rnd3);
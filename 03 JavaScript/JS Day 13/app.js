//1. Async Functions  --> 1. async

async function greet() {
  //   throw "weak connection";
  return "hello";
}

greet()
  .then((result) => {
    console.log("promise is resolved");
    console.log("result is :", result);
  })
  .catch((error) => {
    console.log("Promise is rejected with err :", error);
  });

let demo = async () => {
  return 5;
};
console.log(demo());

// --> 2. await

function getnum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num >= 7) {
        console.log(num);
        reject("promise rejected");
      } else {
        console.log(num);
        resolve();
      }
    }, 1000);
  });
}

async function phomo() {
  //3. rejection handeling
  try {
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
  let a = 10;
  console.log(a);
  console.log("new number is :", a + 3);
}
phomo();

//6. API data is in JSON

// 7. Accessing data from json

let JSONresp =
  '{"activity":"Learn Javascript","type":"education","participants":1,"price":0,"link":"","key":"3469378","accessibility":0.9}';

let JSONobj = JSON.parse(JSONresp);
console.log(JSONobj);
console.log(JSONobj.activity);

let student = {
  name: "prasad",
  marks: 95,
  age: 22,
  aka: "manchild",
};

console.log(JSON.stringify(student));

//8-13. API all info

// 14. our first API request

let url = "https://catfact.ninja/fact2";
// then and catch
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log(data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR -", err);
//   });

// await and async

async function getfacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (err) {
    console.log("error-", err);
  }

  console.log("byeee fuck off!!");
}

getfacts();

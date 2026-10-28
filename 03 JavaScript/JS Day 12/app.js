//2. visualizing call stack

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three(); // 3. Breakpoints

// 4. JS in single threaded Language  -> 1 task at a time

// setTimeout(function () {
//   console.log("AAJ KUCH Tufani KARTE HAI");
// }, 10000);

// setTimeout(function () {                 // this work is done by browser of callback
//   console.log("Abhi toh party shuru hoe haii");
// }, 3000);

console.log("hello..");

// 5. callback hell --> its a problem of asyncronous natute of js

let h1 = document.querySelector("h1");

function changeColor(color, dealy) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!");
    }, dealy);
  });
}

//optimal -- bhari using async fnx and await keyword --> chummeshwari
async function letsGO() {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("orange", 1000);
  await changeColor("violet", 1000);
  await changeColor("pink", 1000);
  changeColor("purple", 1000);
}
letsGO();

//better--- thod kami chutiya with ppromise but hard using .then and .catch

// changeColor("red", 1000).then(() => {
//   console.log("red color is changed");
//   return changeColor("pink", 1000).then(() => {
//     console.log("ornage color is chnaged");
//     return changeColor("green", 1000).then(() => {
//       console.log("green color is chnaged");
//       return changeColor("blue", 1000).then(() => {
//         console.log("blue color is chnaged");
//       });
//     });
//   });
// });

// brute--- saglyat chutiya without promise

// changeColor("red", 1000, function () {
//   changeColor("green", 1000, function () {
//     changeColor("blue", 1000, function () {
//       changeColor("purple", 1000);
//     });
//   });
// });

//6. Setting up for promises

// function savetoDB(data, success, failure) {
//   let internetspeed = Math.floor(Math.random() * 10) + 1;
//   if (internetspeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDB(
//   "apna college",
//   () => {
//     console.log("data is saved succesfully");

//     savetoDB(
//       "your love my love janeja you're my love",
//       () => {
//         console.log("success2 : data is saved succesfully");

//         savetoDB(
//           "kuch to hua haii",
//           () => {
//             console.log("success3 : data is saved succesfully");
//           },
//           () => {
//             console.log("failure3: failed to save data");
//           },
//         );
//       },
//       () => {
//         console.log("failure2: failed to save data");
//       },
//     );
//   },
//   () => {
//     console.log("weak connection: failed to save data");
//   },
// );

//7. refactoring with promises
function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve("success: data is saved");
    } else {
      reject("faliure: data is unsaved");
    }
  });
}

//8. then() and catch()
savetoDB("prasaaaad ")
  .then((result) => {
    console.log("data1 saved..");
    console.log("result of promise:", result);
    //9. promise chaining
    return savetoDB("apna college");
  })
  .then((result) => {
    console.log("data2 saved..");
    // 10. result and errors in promises
    console.log("result of promise:", result);
    return savetoDB("bubuuu");
  })
  .then((result) => {
    console.log("data3 saved..");
    console.log("result of promise:", result);
  })
  .catch((error) => {
    console.log("promise is rejected");
    console.log("error of promise:", error);
  });

//12. refactoring old code

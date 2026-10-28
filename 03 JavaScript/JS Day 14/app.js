let btn = document.querySelector("#btn1");

btn.addEventListener("click", async () => {
  let ans = await getfacts();
  //   console.log(ans);

  let p = document.querySelector("p");
  p.innerText = ans;
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("ERROR -", e);
    return "NO NEW FACTS";
  }
}
// 2. Dogapi using get image
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
  let ans2 = await getimage();
  console.log(ans2);

  let img = document.querySelector("img");
  img.src = ans2;
});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getimage() {
  try {
    let res2 = await axios.get(url2);
    return res2.data.message;
  } catch (e) {
    console.log("ERROR -", e);
    return "no image found";
  }
}

//3. Sending headers with an API request

const url3 = "https://icanhazdadjoke.com/";

async function getjokes() {
  try {
    const config = { headers: { Accept: "application/json" } }; // converts html file into json file
    let res3 = await axios.get(url3, config);
    console.log(res3.data);
  } catch (e) {
    console.log("error is -", e);
  }
}

//4. Activity using Query strings

let url4 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let clgArr = await getColleges(country);

  show(clgArr);
});

function show(clgArr) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (clg of clgArr) {
    console.log(clg.name);

    let li = document.createElement("li");
    li.innerText = clg.name;
    list.appendChild(li);
  }
}

async function getColleges(country) {
  try {
    let res4 = await axios.get(url4 + country);
    return res4.data;
  } catch (e) {
    console.log("error is- ", e);
    return [];
  }
}

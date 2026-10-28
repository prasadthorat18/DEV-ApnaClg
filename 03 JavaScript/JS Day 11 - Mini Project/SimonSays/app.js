let GameSeq = [];
let UserSeq = [];

let btns = ["purple", "green", "yellow", "red"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
  }

  levelup();
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 150);
}

let h2 = document.querySelector("h2");

function levelup() {
  UserSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  GameSeq.push(randColor);
  console.log(GameSeq);

  gameflash(randbtn);
}

function checkAns(idx) {
  if (UserSeq[idx] === GameSeq[idx]) {
    if (UserSeq.length == GameSeq.length) {
      setTimeout(levelup, 500);
    }
  } else {
    h2.innerHTML = `Game Over! your score was <b> ${level} </b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  UserSeq.push(userColor);

  console.log(UserSeq);

  checkAns(UserSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btns");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  UserSeq = [];
  GameSeq = [];
  level = 0;
}

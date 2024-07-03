let gameSeq = [];
let userSeq = [];
let h3 = document.querySelector("h3");
let started = false;
let btns = [".red", ".blue", ".green", ".yellow"];

let level = 0;
document.addEventListener("keypress", () => {
  if (!started) {
    started = true;
    console.log("Game has started");
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  let randIndex = Math.floor(Math.random() * 4);
  let randBtn = btns[randIndex];
  gameSeq.push(randBtn);
  flashSequence();
}
function flashSequence() {
  let i = 0;
  let interval = setInterval(() => {
    btnFlash(gameSeq[i]);
    i++;
    if (i >= gameSeq.length) {
      clearInterval(interval);
    }
  }, 800);
}

function btnFlash(col) {
  let btn = document.querySelector(col);
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

btns.forEach((col) => {
  let btn = document.querySelector(col);
  btn.addEventListener("click", () => {
    userSeq.push(col);
    btnFlash(col);
    checkSeq(userSeq.length - 1);
  });
});

function checkSeq(currLevel) {
  if (userSeq[currLevel] === gameSeq[currLevel]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 800);
    }
  } else {
    gameOver();
  }
}
function gameOver() {
  h3.innerText = "Game Over";
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}

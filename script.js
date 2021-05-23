const blocks = document.querySelectorAll(".letter_block");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");

let scrambled = true;

function getRandomX() {
  let min = -500;
  let max = 500;
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomY() {
  let min = -500;
  let max = 400;
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomSymbol() {
  const min = 9728;
  const max = 9983;
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomRGBValue() {
  const min = 100;
  const max = 255;
  return Math.round(Math.random() * (max - min) + min);
}

function scramble() {
  blocks.forEach(
    (block) =>
      (block.style.transform = `translateX(${getRandomX()}px) translateY(${getRandomY()}px)`)
  );
}

function setBackToNormal() {
  blocks.forEach((block) => {
    block.innerHTML = `&#9632;`;
    block.removeAttribute("style");
    block.style.display = "block";
  });
}

function loopScramble() {
  setInterval(() => {
    if (scrambled) {
      scramble();
    } else {
      return;
    }
  }, 2000);
}

function loopCycleEntity() {
  setInterval(() => {
    if (scrambled) {
      cycleEntity();
    } else {
      return;
    }
  }, 400);
}

function cycleEntity() {
  blocks.forEach((block) => {
    block.innerHTML = `&#${getRandomSymbol()};`;
    block.style.textShadow = `5px 5px rgb(${getRandomRGBValue()},${getRandomRGBValue()},${getRandomRGBValue()}) , -5px -5px rgb(${getRandomRGBValue()},${getRandomRGBValue()},${getRandomRGBValue()})`;
  });
}

function handleTranslateButtonClick() {
  setBackToNormal();
  scrambled = false;
}

function handleScrambleButtonClick() {
  scrambled = true;
  scramble();
  loopScramble();
  loopCycleEntity();
}

blocks.forEach((block) => {
  block.style.display = "block";
});

scramble();
loopScramble();
loopCycleEntity();

btn.addEventListener("click", handleTranslateButtonClick);
btn2.addEventListener("click", handleScrambleButtonClick);

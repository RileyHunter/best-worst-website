const blocks = document.querySelectorAll(".letter_block");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn-2");

console.log(blocks);

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

function scramble() {
  blocks.forEach(
    (block) =>
      (block.style.transform = `translateX(${getRandomX()}px) translateY(${getRandomY()}px)`)
  );
}

blocks.forEach((block) => {
  block.style.display = "block";
});

function setBackToNormal() {
  blocks.forEach((block) => {
    block.removeAttribute("style");
    block.style.display = "block";
  });
}

function handleTranslateButtonClick() {
  setBackToNormal();
}

function handleScrambleButtonClick() {
  scramble();
}

scramble();

btn.addEventListener("click", handleTranslateButtonClick);
btn2.addEventListener("click", handleScrambleButtonClick);

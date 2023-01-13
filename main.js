const body = document.querySelector("body");
const cookie = document.querySelector(".cookie");
const openedCookie = document.querySelector(".opened-cookie");
const title = document.querySelector("h1");
const button = document.querySelector("button");
const text = document.querySelector("p");
const message = document.querySelector(".message");

const phrases = [
  "Sonhos são caminhos construídos pelo coração.",
  "Impossível é uma palavra que serve só de enfeite no dicionário.",
  "Você é beleza, luz e força.",
  "Dias nublados guardam o sol atrás deles.",
  "Um dia bonito começa com um barril de esperança e um café de otimismo.",
  "Permita que o seu corpo descanse.",
  "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente.",
  "Mudar pode dar medo, mas é uma aventura que pode te levar muito longe.",
  "Tem uma força dentro de você que é capaz de sempre te surpreender!",
  "Tenha coragem para se tornar aquilo que sonha.",
  "É tão bonita a força que você emana.",
  "Resista àqueles dias que querem esconder tudo de bom que já fizemos até hoje.",
  "Essa mensagem tem um único objetivo: te ver sorrindo.",
];

function fortunePhrase(array) {
  const max = array.length;
  const min = 0;

  const arrayIndex = Math.floor(Math.random() * (max - min) + min);

  return array[arrayIndex];
}

function fortuneCookie() {
  hideAndShowCookie();
  changeTitleContent();
  hideAndShowButton();
  hideAndShowText();
  message.textContent = fortunePhrase(phrases);
  hideAndShowMessage();
}

function changeTitleContent() {
  if (title.textContent === "Aqui está a sua sorte de hoje:") {
    title.textContent = "Qual é a sua sorte de hoje?";
    return;
  }
  if (title.textContent === "Qual é a sua sorte de hoje?") {
    title.textContent = "Aqui está a sua sorte de hoje:";
    return;
  }
}

function hideAndShowCookie() {
  cookie.classList.toggle("hide");
  openedCookie.classList.toggle("hide");
}

function hideAndShowButton() {
  button.classList.toggle("hide");
}

function hideAndShowText() {
  text.classList.toggle("hide");
}

function hideAndShowMessage() {
  message.classList.toggle("hide");
}

cookie.addEventListener("click", (event) => {
  fortuneCookie();
});

button.addEventListener("click", (event) => {
  fortuneCookie();
});

body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") fortuneCookie();
});

let order = [];
let clickedOrder = [];
let score = 0;

// 0 == verde
// 1 == vermelho
// 2 == amarelo
// 3 == azul

const blue = document.querySelector(".azul");
const red = document.querySelector(".vermelho");
const green = document.querySelector(".verde");
const yellow = document.querySelector(".amarelo");

//Cria ordem aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4); // Math.floor arredonda o número sorteado, Math.random aleatoriza um número, o * 4 é para ser de 0 a 3. ou seja, 4 números
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//Acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number -250);

  setTimeout(() => {
    element.classList.remove('selected');    
  }, 500);
  
};

//Checa se os botões clicados correspondem a ordem gerada
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} \n Você Acertou! Iniciando próximo nível.`);
    nextLevel();
  }
};

//Função para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
}, 250);
  
};

//Função que retorna a cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

//Função para próximo nível
let nextLevel = () => {
  score++;
  shuffleOrder();
};

//Função para game over
let gameOver = () => {
  alert(
    `Pontuação: ${score}\n Você perdeu o jogo.\n Clique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

//Função para iniciar

let playGame = () => {
    alert('Start!')
    score = 0;

    nextLevel();

}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

//Evento de cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//Início do jogo
playGame();

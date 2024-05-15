let computerNum = 0;
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log('정답', computerNum);
}
let chances = 5;
let chancesLeft = document.getElementById('chances');
let playButton = document.getElementById('play');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let history = [];
let gameOver = false;

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);

function reset() {
  userInput.value = '';
  pickRandomNum();
  history = [];
  chances = 5;
  chancesLeft.textContent = `남은 기회: ${chances}회`;
  resultArea.textContent = '입력한 숫자';
  playButton.disabled = false;
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = '1~99 사이의 숫자를 입력해주세요';
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다';
    return;
  }

  chances--;
  chancesLeft.textContent = `남은 기회: ${chances}회`;

  if (userValue > computerNum) {
    resultArea.textContent = 'DOWN!';
  } else if (userValue < computerNum) {
    resultArea.textContent = 'UP!';
  } else if ((userValue = computerNum)) {
    resultArea.textContent = 'CORRECT!!';
    gameOver = true;
  }
  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

pickRandomNum();

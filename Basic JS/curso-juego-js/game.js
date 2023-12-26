const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
const spanLives = document.querySelector("#lives");
const spanTime = document.querySelector("#time");
const spanRecord = document.querySelector("#record");

let canvasSize;
let elementSize;
let level = 0;
let lives = 3;

let timeStart;
let timeInterval;
let timePlayer;

const playerPosition = {
  x: undefined,
  y: undefined,
};
const giftPosition = {
  x: undefined,
  y: undefined,
};
let enemyPositions = [];

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

function setCanvasSize() {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  startGame();
}

function startGame() {
  game.font = elementSize + "px Verdana";
  game.textAlign = "end";
  const map = maps[level];
  if (!map) {
    gameWin();
    return;
  } else if (lives == 0) {
    gameOver();
    return;
  }

  if (!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100);
  }

  //rows= filas
  const mapRows = map.trim().split("\n");
  //mapa completado con las cols todo sin espacio en un string
  const mapRowsCols = mapRows.map((row) => row.trim().split(""));
  updateMap();

  showLives();

  mapRowsCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementSize * (colI + 1);
      const posY = elementSize * (rowI + 1);

      if (col == "O" && !playerPosition.x && !playerPosition.y) {
        playerPosition.x = posX;
        playerPosition.y = posY;
        console.log({ playerPosition });
      } else if (col == "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == "X") {
        enemyPositions.push({
          y: posY,
          x: posX,
        });
      }
      //fill skull in map
      game.fillText(emoji, posX, posY);
    });
  });
  movePlayer();
}

function updateMap() {
  //clean array enemies in each move
  enemyPositions = [];
  //clean canvas in each move
  game.clearRect(0, 0, canvasSize, canvasSize);
}

function movePlayer() {
  const giftCollisionX =
    playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
  const giftCollisionY =
    playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
  const giftCollision = giftCollisionX && giftCollisionY;

  console.log(enemyPositions);

  const enemyCollision = enemyPositions.find((enemy) => {
    const enemyCollisionX = playerPosition.x.toFixed(3) == enemy.x.toFixed(3);
    const enemyCollisionY = playerPosition.y.toFixed(3) == enemy.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
  });

  if (giftCollision) {
    console.log("Subiste de nivel!");
    levelWin();
  } else if (enemyCollision) {
    levelLose();
  }
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}

function levelWin() {
  console.log("Subiste de nivel");
  level++;
  startGame();
}

function gameWin() {
  alert("¡Terminaste el juego!");
  clearInterval(timeInterval);

   const recordTime = localStorage.getItem('record_time');
   const playerTime = Date.now()-timeStart;
  
   if (recordTime) {
      if (recordTime >= playerTime) {
         localStorage.setItem("record_time", playerTime);
         console.log("WIIIIIII el record");
         spanRecord.innerHTML = recordTime;
      }else{
        console.log("no superaste el record")
      }
    }else{
         localStorage.setItem("record_time", playerTime);
    }

  console.log({recordTime})
  level = 0;
  lives = 3;
  timeStart = undefined;
  startGame();
}

function levelLose() {
  console.log("KABOOM!");
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  lives--;
  startGame();
}

function gameOver() {
  alert("Mucho Fail!");
  level = 0;
  lives = 3;
  timeStart = undefined;
  startGame();
}

function showLives() {
  const heartsArray = Array(lives).fill(emojis["HEART"]);
  spanLives.innerHTML = "";
  heartsArray.forEach((hearts) => spanLives.append(hearts));
}

function showTime() {
  const milliseconds = Date.now() - timeStart;
  const seconds = (milliseconds / 1000).toFixed(2);
  timePlayer = `${seconds}s`;
  spanTime.innerHTML = timePlayer;
}

window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
btnDown.addEventListener("click", moveDown);

function moveByKeys(event) {
  if (event.key == "ArrowUp") moveUp();
  else if (event.key == "ArrowLeft") moveLeft();
  else if (event.key == "ArrowRight") moveRight();
  else if (event.key == "ArrowDown") moveDown();
}

function moveUp() {
  if (Math.floor(playerPosition.y) > elementSize) {
    playerPosition.y = playerPosition.y - elementSize;
    startGame();
  }
}
function moveLeft() {
  if (Math.floor(playerPosition.x) > elementSize) {
    playerPosition.x = playerPosition.x - elementSize;
    startGame();
  }
}
function moveRight() {
  if (Math.ceil(playerPosition.x) < 10 * elementSize) {
    playerPosition.x = playerPosition.x + elementSize;
    startGame();
  }
}
function moveDown() {
  if (Math.ceil(playerPosition.y) < 10 * elementSize) {
    playerPosition.y = playerPosition.y + elementSize;
    startGame();
  }
}

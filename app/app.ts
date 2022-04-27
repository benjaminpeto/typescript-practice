function startGame() {
  // STARTING GAME

  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(32, playerName);
  postScore(-35, playerName);

  /* let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to the MathGame! Starting a new game...'; */
}

function logPlayer(name: string = "MathGame Player"): void { //assign a default value for name
  console.log(`New game initiated for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if(inputElement.value === '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = 'MathGame Player'): void {

  let logger: (value: string) => void;

  if(score < 0) {
    logger = logError;
  }
  else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}
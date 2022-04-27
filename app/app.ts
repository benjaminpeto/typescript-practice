function startGame() {
  // STARTING GAME

  let playerName: string = 'Capitan';
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to the MathGame! Starting a new game...';
}

function logPlayer(name: string): void {
  console.log(`New game initiated for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
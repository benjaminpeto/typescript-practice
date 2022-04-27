function startGame() {
  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to the MathGame! Starting a new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);
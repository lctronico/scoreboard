function add(team, points) {
    const scoreElement = document.getElementById(`${team}-score`);
    let score = parseInt(scoreElement.textContent);
    score += points;
    scoreElement.textContent = score;
  }

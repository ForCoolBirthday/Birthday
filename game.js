// Configuration du jeu
const difficulties = {
    facile: { duration: 30, spawnInterval: 800 },
    moyen: { duration: 20, spawnInterval: 600 },
    difficile: { duration: 10, spawnInterval: 400 }
};

let currentDifficulty = 'facile';
let gameActive = false;
let score = 0;
let candlesClicked = 0;
let timeLeft = 30;
let timerInterval = null;
let spawnInterval = null;

// Éléments DOM
const gameArea = document.getElementById('gameArea');
const startBtn = document.getElementById('startBtn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const candlesClickedDisplay = document.getElementById('candlesClicked');
const gameMessage = document.getElementById('gameMessage');
const gameOverContainer = document.getElementById('gameOverContainer');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

// Sélection de la difficulté
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (!gameActive) {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentDifficulty = this.dataset.difficulty;
            const duration = difficulties[currentDifficulty].duration;
            timerDisplay.textContent = duration;
            timeLeft = duration;
            gameMessage.textContent = '';
        }
    });
});

// Démarrer le jeu
startBtn.addEventListener('click', startGame);

function startGame() {
    gameActive = true;
    score = 0;
    candlesClicked = 0;
    timeLeft = difficulties[currentDifficulty].duration;
    gameOverContainer.innerHTML = '';
    gameMessage.textContent = '🎮 C\'est parti !';
    
    scoreDisplay.textContent = score;
    candlesClickedDisplay.textContent = candlesClicked;
    timerDisplay.textContent = timeLeft;
    
    startBtn.disabled = true;
    difficultyBtns.forEach(btn => btn.disabled = true);
    gameArea.innerHTML = '';

    // Boucle de création des bougies
    spawnInterval = setInterval(() => {
        if (gameActive) {
            createCandle();
        }
    }, difficulties[currentDifficulty].spawnInterval);

    // Compteur de temps
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function createCandle() {
    if (!gameActive) return;

    const candle = document.createElement('div');
    candle.className = 'candle';
    
    // Position aléatoire
    const randomX = Math.random() * (gameArea.clientWidth - 60);
    const randomY = Math.random() * (gameArea.clientHeight - 80);
    
    candle.style.left = randomX + 'px';
    candle.style.top = randomY + 'px';
    
    candle.innerHTML = `
        <div class="candle-body">
            <div class="candle-flame"></div>
        </div>
    `;

    candle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (gameActive && candle.parentNode) {
            score += 10;
            candlesClicked++;
            scoreDisplay.textContent = score;
            candlesClickedDisplay.textContent = candlesClicked;
            
            // Animation de disparition
            candle.style.animation = 'candlePopIn 0.3s ease-out reverse forwards';
            
            setTimeout(() => {
                if (candle.parentNode) {
                    candle.remove();
                }
            }, 300);

            // Afficher un message amusant aléatoire
            const messages = ['🎉', '✨', '🌟', '💫', '🎊', '👍', '🔥'];
            gameMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
            gameMessage.classList.add('success');
            setTimeout(() => gameMessage.classList.remove('success'), 500);
        }
    });

    gameArea.appendChild(candle);

    // La bougie disparaît après 2 secondes si non cliquée
    setTimeout(() => {
        if (candle.parentNode && gameActive) {
            candle.style.animation = 'candlePopIn 0.3s ease-out reverse forwards';
            setTimeout(() => {
                if (candle.parentNode) {
                    candle.remove();
                }
            }, 300);
        }
    }, 2000);
}

function endGame() {
    gameActive = false;
    clearInterval(spawnInterval);
    clearInterval(timerInterval);
    
    startBtn.disabled = false;
    difficultyBtns.forEach(btn => btn.disabled = false);
    
    // Nettoyer les bougies
    gameArea.innerHTML = '';
    
    // Afficher le message de fin
    let message = '';
    if (score === 0) {
        message = '😢 Tu n\'as cliqué sur aucune bougie !';
    } else if (score < 50) {
        message = '😅 C\'est un début ! Réessaye !';
    } else if (score < 100) {
        message = '🎉 Pas mal ! Continue !';
    } else if (score < 150) {
        message = '⭐ Excellent ! Tu es doué !';
    } else {
        message = '🏆 CHAMPION ! Incroyable !';
    }

    gameOverContainer.innerHTML = `
        <div class="game-over">
            <h2>${message}</h2>
            <div class="final-score">${score} points</div>
            <p>Bougies cliquées: <strong>${candlesClicked}</strong></p>
            <p>Difficulté: <strong>${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)}</strong></p>
        </div>
    `;

    gameMessage.textContent = '';
}

// Animation d'entrée du jeu
window.addEventListener('load', () => {
    const container = document.querySelector('.game-container');
    container.style.animation = 'fadeIn 0.5s ease-in';
});

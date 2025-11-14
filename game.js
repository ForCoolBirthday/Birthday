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
            
            // Animation de disparition spectaculaire
            candle.style.animation = 'candlePopIn 0.3s ease-out reverse forwards';
            
            // Créer une explosion de particules
            createCandleExplosion(randomX + 30, randomY + 40);
            
            setTimeout(() => {
                if (candle.parentNode) {
                    candle.remove();
                }
            }, 300);

            // Afficher un message amusant aléatoire avec animation
            const messages = ['🎉', '✨', '🌟', '💫', '🎊', '👍', '🔥', '⚡', '🌠'];
            gameMessage.textContent = messages[Math.floor(Math.random() * messages.length)];
            gameMessage.classList.add('success');
            gameMessage.style.animation = 'none';
            setTimeout(() => {
                gameMessage.style.animation = 'popMessage 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
            }, 10);
            setTimeout(() => gameMessage.classList.remove('success'), 600);
            
            // Pulse le score
            scoreDisplay.style.animation = 'none';
            setTimeout(() => {
                scoreDisplay.style.animation = 'scorePulse 0.4s ease-out forwards';
            }, 10);
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
    
    // Afficher le message de fin avec animation
    let message = '';
    let emoji = '';
    if (score === 0) {
        message = '😢 Tu n\'as cliqué sur aucune bougie !';
        emoji = '😢';
    } else if (score < 50) {
        message = '😅 C\'est un début ! Réessaye !';
        emoji = '😅';
    } else if (score < 100) {
        message = '🎉 Pas mal ! Continue !';
        emoji = '🎉';
    } else if (score < 150) {
        message = '⭐ Excellent ! Tu es doué !';
        emoji = '⭐';
    } else {
        message = '🏆 CHAMPION ! Incroyable !';
        emoji = '🏆';
    }

    // Créer confettis de fin
    if (score > 50) {
        createGameConfetti();
    }

    gameOverContainer.innerHTML = `
        <div class="game-over">
            <h2>${message}</h2>
            <div class="final-score">${score} points</div>
            <p>Bougies cliquées: <strong>${candlesClicked}</strong></p>
            <p>Difficulté: <strong>${currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)}</strong></p>
        </div>
    `;

    // Ajouter animation à la div game-over
    const gameOverDiv = gameOverContainer.querySelector('.game-over');
    if (gameOverDiv) {
        gameOverDiv.style.animation = 'slideInUp 0.6s ease-out';
    }

    gameMessage.textContent = '';
}

// Animation d'entrée du jeu
window.addEventListener('load', () => {
    const container = document.querySelector('.game-container');
    container.style.animation = 'fadeIn 0.5s ease-in';
});

// Créer une explosion de particules quand une bougie est cliquée
function createCandleExplosion(x, y) {
    const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ffeb3b', '#ff3d00'];
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 6;
        const tx = Math.cos(angle) * velocity * 30;
        const ty = Math.sin(angle) * velocity * 30;
        
        particle.style.animation = `explode 0.6s ease-out forwards`;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    }
}

// Créer confettis pour la fin du jeu
function createGameConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ff69b4', '#ff1493'];
    const confettiContainer = document.getElementById('confetti-container') || document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '2px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '999';
        confetti.style.animation = `confetti-fall 3s ease-out forwards`;
        confetti.style.setProperty('--rotation', Math.random() * 360 + 'deg');
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Ajouter les animations CSS nécessaires
const gameStyles = document.createElement('style');
gameStyles.textContent = `
    @keyframes explode {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx, 0), var(--ty, 0)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes popMessage {
        0% {
            transform: scale(0.5) translateY(20px);
            opacity: 0;
        }
        50% {
            transform: scale(1.2) translateY(-10px);
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes scorePulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes confetti-fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(gameStyles);

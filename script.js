// ===== CONFIGURATION =====
// Modifiez ces variables selon vos besoins
const eventDetails = {
    date: '14 Novembre 2025',
    time: '18:00',
    location: 'Trappe'
};

// ===== DÉCONNEXION =====
document.getElementById('logout-btn').addEventListener('click', function() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ? 🚪')) {
        // Animation de fade out
        document.body.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            sessionStorage.removeItem('authenticated');
            window.location.href = 'login.html';
        }, 500);
    }
});

// ===== Mise à jour des détails de l'événement =====
function updateEventDetails() {
    document.getElementById('event-date').textContent = eventDetails.date;
    document.getElementById('event-location').textContent = eventDetails.location;
}

// ===== Confettis =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    
    // Créer 50 confettis
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Couleurs aléatoires
        const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ff69b4', '#ff1493', '#ff4500'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Position aléatoire
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.delay = Math.random() * 0.5 + 's';
        
        // Rotation aléatoire
        confetti.style.setProperty('--rotation', Math.random() * 360 + 'deg');
        
        container.appendChild(confetti);
        
        // Supprimer après l'animation
        setTimeout(() => confetti.remove(), 3500);
    }
}

// ===== Bouton de Célébration Personnalisée =====
document.getElementById('celebration-button').addEventListener('click', function() {
    showCelebrationAnimation();
});

// Animation spectaculaire de célébration plein écran RESPONSIVE
function showCelebrationAnimation() {
    // Déterminer les tailles en fonction de la largeur de l'écran
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let cakeFontSize, titleFontSize, subtitleFontSize, messageFontSize, emojiSize, buttonFontSize;
    let cakeMargin, titleMargin, messageMargin, emojiMargin, contentPadding;
    
    if (screenWidth < 480) {
        // Mobile petit
        cakeFontSize = '2.5rem';
        titleFontSize = '1.8rem';
        subtitleFontSize = '1.5rem';
        messageFontSize = '0.9rem';
        emojiSize = '1.5rem';
        buttonFontSize = '0.9rem';
        cakeMargin = '15px';
        titleMargin = '10px 0 0 0';
        messageMargin = '20px';
        emojiMargin = '0 8px';
        contentPadding = '20px';
    } else if (screenWidth < 768) {
        // Tablette
        cakeFontSize = '3.5rem';
        titleFontSize = '2.5rem';
        subtitleFontSize = '2rem';
        messageFontSize = '1.1rem';
        emojiSize = '2rem';
        buttonFontSize = '1rem';
        cakeMargin = '20px';
        titleMargin = '15px 0 0 0';
        messageMargin = '30px';
        emojiMargin = '0 12px';
        contentPadding = '30px';
    } else {
        // Desktop
        cakeFontSize = '5rem';
        titleFontSize = '4rem';
        subtitleFontSize = '3.5rem';
        messageFontSize = '1.5rem';
        emojiSize = '2.5rem';
        buttonFontSize = '1.2rem';
        cakeMargin = '30px';
        titleMargin = '0';
        messageMargin = '40px';
        emojiMargin = '0 15px';
        contentPadding = '40px';
    }

    // Créer le container de célébration
    const celebrationContainer = document.createElement('div');
    celebrationContainer.id = 'celebration-overlay';
    celebrationContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 50%, #ff6b9d 100%);
        background-size: 200% 200%;
        animation: gradientWave 4s ease infinite;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        overflow: hidden;
        padding: ${contentPadding};
        box-sizing: border-box;
    `;

    // Créer le contenu avec tailles adaptatives
    const contentDiv = document.createElement('div');
    contentDiv.style.cssText = `
        text-align: center;
        position: relative;
        z-index: 100;
        animation: slideInBig 0.8s ease-out;
        max-width: 90vw;
        word-wrap: break-word;
    `;

    // Gâteau
    const cake = document.createElement('div');
    cake.style.cssText = `font-size: ${cakeFontSize}; margin-bottom: ${cakeMargin}; animation: bounce 2s ease-in-out infinite;`;
    cake.textContent = '🎂';
    contentDiv.appendChild(cake);

    // Titre
    const title = document.createElement('h1');
    title.style.cssText = `
        font-size: ${titleFontSize};
        color: white;
        margin: 0;
        text-shadow: 4px 4px 8px rgba(0,0,0,0.3);
        animation: slideDown 0.8s ease-out;
        word-break: break-word;
        line-height: 1.2;
    `;
    title.textContent = 'JOYEUX ANNIVERSAIRE';
    contentDiv.appendChild(title);

    // Sous-titre
    const subtitle = document.createElement('h2');
    subtitle.style.cssText = `
        font-size: ${subtitleFontSize};
        color: white;
        margin: ${titleMargin};
        text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
        animation: slideUp 0.8s ease-out 0.2s both;
        word-break: break-word;
    `;
    subtitle.textContent = 'YOHANN ! 🎉';
    contentDiv.appendChild(subtitle);

    // Message
    const message = document.createElement('p');
    message.style.cssText = `
        font-size: ${messageFontSize};
        color: rgba(255,255,255,0.95);
        margin-top: ${messageMargin};
        margin-left: auto;
        margin-right: auto;
        max-width: min(90vw, 600px);
        line-height: 1.6;
        animation: fadeIn 1s ease-out 0.5s both;
        word-wrap: break-word;
    `;
    message.innerHTML = 'Que cette journée soit remplie de sourires, de rires et de moments inoubliables ! 💝<br>Tu mérites d\'être célébré comme la personne incroyable que tu es ! ✨';
    contentDiv.appendChild(message);

    // Emojis
    const emojisDiv = document.createElement('div');
    emojisDiv.style.cssText = `
        margin-top: ${emojiMargin};
        animation: pulse 2s ease-in-out infinite;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: ${emojiMargin};
    `;
    ['🎊', '🎈', '🎆'].forEach(emoji => {
        const span = document.createElement('span');
        span.style.cssText = `font-size: ${emojiSize}; display: inline-block;`;
        span.textContent = emoji;
        emojisDiv.appendChild(span);
    });
    contentDiv.appendChild(emojisDiv);

    celebrationContainer.appendChild(contentDiv);

    // Bouton de fermeture
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-celebration';
    closeBtn.style.cssText = `
        position: fixed;
        bottom: ${screenWidth < 480 ? '20px' : '40px'};
        left: 50%;
        transform: translateX(-50%);
        padding: ${screenWidth < 480 ? '10px 25px' : '15px 40px'};
        background: white;
        color: #ff6b9d;
        border: none;
        border-radius: 50px;
        font-size: ${buttonFontSize};
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 101;
        animation: slideUp 0.8s ease-out 0.6s both;
        white-space: nowrap;
    `;
    closeBtn.textContent = 'Fermer';
    celebrationContainer.appendChild(closeBtn);

    document.body.appendChild(celebrationContainer);

    // Créer des animations de confettis et ballons intensives
    createIntensiveConfetti(celebrationContainer);
    createFloatingBalloons(celebrationContainer);
    createFireworks(celebrationContainer);

    // Gestionnaire pour fermer l'animation
    closeBtn.addEventListener('click', function() {
        celebrationContainer.style.animation = 'fadeOut 0.6s ease-out forwards';
        setTimeout(() => celebrationContainer.remove(), 600);
    });

    // Fermer avec Échap
    const closeOnEscape = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', closeOnEscape);
            celebrationContainer.style.animation = 'fadeOut 0.6s ease-out forwards';
            setTimeout(() => celebrationContainer.remove(), 600);
        }
    };
    document.addEventListener('keydown', closeOnEscape);
}

// Créer des confettis intensifs plein écran
function createIntensiveConfetti(container) {
    const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ff69b4', '#ff1493', '#ffeb3b', '#4cd964'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 99;
            animation: confetti-fall 4s ease-in forwards;
            animation-delay: ${Math.random() * 1}s;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Créer des ballons flottants
function createFloatingBalloons(container) {
    const balloonEmojis = ['🎈', '🎊', '🎉', '✨', '⭐', '💝', '🎀'];
    
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 40 + 50}px;
            left: ${Math.random() * 100}%;
            bottom: -100px;
            z-index: 99;
            cursor: pointer;
            animation: float-up ${Math.random() * 3 + 5}s ease-in-out forwards;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: auto;
        `;
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        document.body.appendChild(balloon);
        
        balloon.addEventListener('click', (e) => {
            e.stopPropagation();
            balloon.style.animation = 'pop-balloon 0.4s ease-out forwards';
            createSmallExplosion(parseFloat(balloon.style.left), parseFloat(balloon.style.bottom));
            setTimeout(() => balloon.remove(), 400);
        });
        
        setTimeout(() => balloon.remove(), 9000);
    }
}

// Créer des feux d'artifice
function createFireworks(container) {
    const fireworksInterval = setInterval(() => {
        const x = Math.random() * 100;
        const y = Math.random() * 50 + 20;
        
        for (let i = 0; i < 15; i++) {
            const spark = document.createElement('div');
            const colors = ['#ffeb3b', '#ff6b9d', '#c44569', '#ffa500'];
            spark.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${x}%;
                top: ${y}%;
                border-radius: 50%;
                pointer-events: none;
                z-index: 99;
            `;
            document.body.appendChild(spark);
            
            const angle = (i / 15) * Math.PI * 2;
            const velocity = 4;
            const tx = Math.cos(angle) * velocity * 40;
            const ty = Math.sin(angle) * velocity * 40;
            
            spark.style.animation = 'spark-burst 1.5s ease-out forwards';
            spark.style.setProperty('--tx', tx + 'px');
            spark.style.setProperty('--ty', ty + 'px');
            
            setTimeout(() => spark.remove(), 1500);
        }
    }, 800);

    // Arrêter les feux d'artifice après 10 secondes
    setTimeout(() => clearInterval(fireworksInterval), 10000);
}

// Créer une petite explosion au clic
function createSmallExplosion(x, y) {
    const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ff69b4'];
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${x}%;
            top: ${y}%;
            border-radius: 50%;
            pointer-events: none;
            z-index: 99;
        `;
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const velocity = 5;
        const tx = Math.cos(angle) * velocity * 50;
        const ty = Math.sin(angle) * velocity * 50;
        
        particle.style.animation = 'spark-burst 1s ease-out forwards';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// ===== FONCTIONNALITÉS AMUSANTES =====

// Double-cliquer sur le titre pour surprises
let clickCount = 0;
document.querySelector('.main-title').addEventListener('dblclick', function() {
    createConfetti();
    createConfetti();
    this.style.transform = 'rotate(' + (Math.random() * 20 - 10) + 'deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 500);
});

// Toucher tous les messages pour débloquer un easter egg
let messagesTouched = 0;
const messageCards = document.querySelectorAll('.message-card');
messageCards.forEach((card, index) => {
    card.addEventListener('click', function() {
        messagesTouched++;
        this.style.transform = 'scale(1.05) rotate(' + (Math.random() * 4 - 2) + 'deg)';
        
        if (messagesTouched === messageCards.length) {
            alert('🎊 Bravo ! Tu as lu tous les messages ! 🎊\n\nTu es officiellement un champion d\'anniversaire ! 🏆');
            createConfetti();
            createConfetti();
        }
    });
});

// Clavier secret : Tapez "ANNIVERSAIRE" pour déclencher une surprise
let secretCode = '';
document.addEventListener('keydown', (e) => {
    secretCode += e.key.toUpperCase();
    if (secretCode.includes('ANNIVERSAIRE')) {
        alert('🎉 CODE SECRET TROUVÉ ! 🎉\n\nTu as les super pouvoirs ! Joyeux Anniversaire ! 🚀');
        createConfetti();
        createConfetti();
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createConfetti(), i * 300);
        }
        secretCode = '';
    }
    if (secretCode.length > 20) {
        secretCode = secretCode.slice(-20);
    }
});

// Changer la couleur du site avec un raccourci clavier
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'c') {
        const colors = [
            '#ff6b9d',
            '#667eea',
            '#f093fb',
            '#4facfe',
            '#fa709a',
            '#30cfd0'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--primary-color', randomColor);
        createConfetti();
    }
});

// Gestion des photos de la galerie =====
document.querySelectorAll('.gallery-placeholder').forEach((item, index) => {
    item.addEventListener('click', function() {
        // Vous pouvez implémenter :
        // 1. Une modale pour uploader une image
        // 2. Rediriger vers une galerie externe
        // 3. Un formulaire pour ajouter des photos
        alert(`Cliquez pour ajouter une photo à la position ${index + 1}`);
    });
});

// ===== Animation des éléments au scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Ajouter des styles pour in-view
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.in-view {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: scale(0.95);
        }
    }
    
    .message-card {
        animation: slideInCard 0.6s ease-out both;
    }
    
    @keyframes slideInCard {
        from {
            opacity: 0;
            transform: translateY(20px) rotateX(10deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
        }
    }
`;
document.head.appendChild(style);

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', function() {
    updateEventDetails();
    
    // Créer des confettis aléatoires occasionnellement (optionnel)
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% de chance
            createConfetti();
        }
    }, 3000);
});

// ===== Customisation avancée =====
// Fonction pour changer la couleur primaire
function changePrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
}

// Fonction pour ajouter un message personnalisé
function addCustomMessage(title, text, author) {
    const messagesContainer = document.querySelector('.messages-container');
    const newMessage = document.createElement('div');
    newMessage.className = 'message-card';
    newMessage.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
        <span class="message-author">- ${author}</span>
    `;
    messagesContainer.appendChild(newMessage);
}

// Fonction pour ajouter une photo à la galerie
function addPhotoToGallery(imageUrl, caption) {
    const gallery = document.querySelector('.gallery');
    const newItem = document.createElement('div');
    newItem.className = 'gallery-item';
    newItem.innerHTML = `
        <img src="${imageUrl}" alt="${caption}" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    gallery.appendChild(newItem);
}

// Exemples d'utilisation (décommentez pour utiliser) :
// changePrimaryColor('#ff1493');
// addCustomMessage('Mon Message', 'Texte du message', 'Mon Nom');
// addPhotoToGallery('https://exemple.com/photo.jpg', 'Description de la photo');

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
        sessionStorage.removeItem('authenticated');
        window.location.href = 'login.html';
    }
});

// ===== Mise à jour des détails de l'événement =====
function updateEventDetails() {
    document.getElementById('event-date').textContent = eventDetails.date;
    document.getElementById('event-time').textContent = eventDetails.time;
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

// ===== Bouton RSVP =====
document.getElementById('rsvp-button').addEventListener('click', function() {
    // Animation spectaculaire
    triggerRSVPAnimation();
    
    // Après 2 secondes, afficher le message
    setTimeout(() => {
        alert('Merci de votre intérêt ! 🎉\n\nVous pouvez répondre par email ou utiliser un formulaire personnalisé.');
    }, 2000);
});

// Animation spectaculaire pour RSVP
function triggerRSVPAnimation() {
    const rsvpButton = document.getElementById('rsvp-button');
    
    // Ajouter une classe d'animation au bouton
    rsvpButton.style.transform = 'scale(1.1)';
    rsvpButton.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    
    // Créer des explosions de confettis
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 150);
    }
    
    // Créer des ballons flottants
    createBalloons();
    
    // Animation de pulse du bouton
    rsvpButton.style.animation = 'none';
    setTimeout(() => {
        rsvpButton.style.animation = 'buttonPulse 0.6s ease-out';
    }, 10);
    
    // Revenir à l'état normal après l'animation
    setTimeout(() => {
        rsvpButton.style.transform = 'scale(1)';
        rsvpButton.style.background = '';
    }, 2000);
}

// Créer des ballons flottants
function createBalloons() {
    const container = document.getElementById('confetti-container');
    const balloonEmojis = ['🎈', '🎊', '🎉', '✨', '⭐'];
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.style.position = 'fixed';
        balloon.style.fontSize = (Math.random() * 30 + 40) + 'px';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.bottom = '-50px';
        balloon.style.zIndex = '999';
        balloon.style.cursor = 'pointer';
        balloon.style.animation = `floatUp ${Math.random() * 3 + 4}s ease-in-out forwards`;
        balloon.style.opacity = '1';
        
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        
        // Rotation aléatoire
        balloon.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(balloon);
        
        // Cliquer sur un ballon le fait exploser
        balloon.addEventListener('click', function(e) {
            e.stopPropagation();
            this.style.animation = 'popBalloon 0.4s ease-out forwards';
            createSmallConfetti(parseFloat(this.style.left), parseFloat(this.style.bottom));
            setTimeout(() => this.remove(), 400);
        });
        
        // Supprimer après animation
        setTimeout(() => balloon.remove(), parseFloat(window.getComputedStyle(balloon).animationDuration) * 1000);
    }
}

// Créer de petits confettis au clic sur ballon
function createSmallConfetti(x, y) {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#c44569', '#ffa500', '#ff69b4', '#ff1493'];
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = x + '%';
        confetti.style.top = y + '%';
        
        // Animation de dispersion
        const angle = (i / 20) * Math.PI * 2;
        const velocity = 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        confetti.style.setProperty('--tx', tx);
        confetti.style.setProperty('--ty', ty);
        confetti.style.animation = 'confetti-burst 1.5s ease-out forwards';
        
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 1500);
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

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

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
    // Vous pouvez remplacer ceci par un formulaire ou une intégration de mail
    alert('Merci de votre intérêt ! 🎉\n\nVous pouvez répondre par email ou utiliser un formulaire personnalisé.');
    
    // Alternative : rediriger vers un formulaire Google, Typeform, etc.
    // window.open('https://votre-formulaire-url.com', '_blank');
});

// ===== Gestion des photos de la galerie =====
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

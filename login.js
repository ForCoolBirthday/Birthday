// ===== CONFIGURATION AUTHENTIFICATION =====
// IMPORTANT : Changez ce mot de passe ! C'est le mot de passe pour accéder au site
const CORRECT_PASSWORD = 'montremoi'; // ⚠️ À MODIFIER

// ===== Gestion du formulaire de connexion =====
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Vérifier le mot de passe
    if (password === CORRECT_PASSWORD) {
        // Marquer l'utilisateur comme authentifié
        sessionStorage.setItem('authenticated', 'true');
        
        // Message de succès
        errorMessage.textContent = '✅ Connexion réussie ! Redirection...';
        errorMessage.style.backgroundColor = '#d5f4e6';
        errorMessage.style.borderColor = '#27ae60';
        errorMessage.style.color = '#27ae60';
        errorMessage.classList.add('show');
        
        // Rediriger vers la page d'anniversaire
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // Afficher le message d'erreur
        errorMessage.classList.add('show');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

// ===== Affichage/Masquage du mot de passe =====
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

// ===== Sécurité supplémentaire =====
// Désactiver le clic droit et l'inspection du code (optionnel)
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

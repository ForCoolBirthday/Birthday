# 🎉 Site Vitrine Anniversaire

Un site vitrine moderne, élégant et entièrement personnalisable pour célébrer un anniversaire spécial !

## ✨ Caractéristiques

- 🎨 **Design moderne et coloré** avec gradient rose et dégradés
- ⏱️ **Compte à rebours interactif** qui affiche les jours, heures, minutes et secondes
- 📷 **Galerie de photos** pour afficher vos souvenirs
- 💌 **Section messages et vœux** pour les messages personnalisés
- 📅 **Détails de l'événement** (date, heure, lieu)
- 🎊 **Effets confettis animés** lors du chargement et à la date anniversaire
- 📱 **Design responsive** (fonctionne sur mobile, tablette et desktop)
- ⚡ **Performance optimisée** pour GitHub Pages

## 🚀 Démarrage rapide

### 1. Configuration de base

Ouvrez le fichier `script.js` et modifiez ces variables :

```javascript
const birthdayDate = new Date('2025-12-25T00:00:00').getTime(); // Votre date
const eventDetails = {
    date: '25 Décembre 2025',
    time: '18:00',
    location: 'Votre lieu'
};
```

### 2. Personnalisation

#### Changer la couleur primaire
Dans `script.js`, décommentez et modifiez :
```javascript
changePrimaryColor('#ff1493'); // Rose intense
```

#### Ajouter des messages
```javascript
addCustomMessage('Titre', 'Votre message ici', 'De: Nom');
```

#### Ajouter des photos
```javascript
addPhotoToGallery('https://url-de-votre-photo.jpg', 'Description');
```

## 📂 Structure des fichiers

```
BthDy/
├── index.html      # Structure HTML principale
├── style.css       # Styles et animations
├── script.js       # Interactivité et logique
├── README.md       # Ce fichier
└── .nojekyll       # Fichier pour GitHub Pages
```

## 🌐 Publication sur GitHub Pages

### Étape 1 : Créez un repository GitHub

1. Allez sur [github.com](https://github.com)
2. Créez un nouveau repository nommé `username.github.io` (remplacez `username` par votre nom d'utilisateur)
3. Rendez-le public

### Étape 2 : Uploadez les fichiers

```bash
# Initialisez Git
git init
git add .
git commit -m "Premier commit - Site anniversaire"

# Connectez le repository
git remote add origin https://github.com/votre-username/votre-username.github.io.git

# Poussez les fichiers
git branch -M main
git push -u origin main
```

### Étape 3 : Activez GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Sélectionnez `main` comme branche source
3. Attendez quelques minutes
4. Votre site sera accessible à `https://votre-username.github.io`

## 🎨 Personnalisation avancée

### Modifier les couleurs
Dans `style.css`, trouvez `:root` et modifiez :
```css
:root {
    --primary-color: #ff6b9d;      /* Rose principal */
    --secondary-color: #c44569;    /* Rose foncé */
    --accent-color: #ffa500;       /* Orange accent */
}
```

### Changer le thème
Remplacez les couleurs pour votre thème préféré :
- **Bleu** : `#3498db`, `#2980b9`, `#1abc9c`
- **Vert** : `#27ae60`, `#16a085`, `#2ecc71`
- **Violet** : `#8e44ad`, `#9b59b6`, `#e74c3c`

## 🎯 Fonctionnalités avancées

### Formulaire RSVP
Modifiez la fonction `rsvp-button` pour intégrer :
- Google Forms
- Typeform
- Un service de mail (Formspree, EmailJS)

### Intégration d'une vraie galerie
Remplacez les placeholders par des images :
```html
<img src="votre-photo.jpg" alt="Description">
```

### Musique d'ambiance
Ajoutez dans `index.html` avant `</body>` :
```html
<audio autoplay loop>
    <source src="musique.mp3" type="audio/mpeg">
</audio>
```

## 💡 Conseils de personnalisation

1. **Photos** : Uploadez vos photos sur un service comme Imgur ou utilisez des URLs externes
2. **Messages** : Modifiez les messages d'exemple avec vos propres textes
3. **Dates** : Vérifiez bien le format de date (YYYY-MM-DD)
4. **Domaine personnalisé** : Connectez un domaine custom dans les paramètres GitHub Pages

## 🐛 Dépannage

**Le site ne s'affiche pas ?**
- Vérifiez que tous les fichiers sont au même niveau
- Assurez-vous que `index.html` est à la racine

**Les animations ne fonctionnent pas ?**
- Rafraîchissez la page (Ctrl+F5 ou Cmd+Shift+R)
- Vérifiez la console du navigateur (F12) pour les erreurs

**Les confettis ne s'affichent pas ?**
- Vérifiez que JavaScript est activé
- Attendez le chargement complet de la page

## 📝 Licence

Ce projet est libre d'utilisation pour un usage personnel.

## 🎊 Bon anniversaire !

Profitez de votre journée spéciale ! 🎉🎂🎈

---

**Créé avec ❤️ pour célébrer les moments spéciaux**

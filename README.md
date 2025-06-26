# 📊 Media Tracker

**Media Tracker** est une extension Chrome qui détecte et liste les "media hits" (requêtes réseau liées à des plateformes publicitaires ou sociales).

> 🧪 L'extension n'est pas encore publiée officiellement.

---

## 🚀 Fonctionnalités

- Interception des requêtes réseau.
- Identification automatique de plateformes médias (TikTok, Snapchat, Facebook, etc.).
- Affichage des hits dans une interface de type accordéon.
- Bouton pour réinitialiser les hits.

---

## 🛠️ Installation locale

1. Clonez le projet :

```bash
   git clone https://github.com/RyanNeTwAllianz/mediaTracker.git
```
   
```bash 
   cd media-tracker
```


2. Installez les dépendances :

```bash 
   npm i
```

3. Construisez l’extension :

```bash 
   npm run build
```

4. Chargez l’extension dans Chrome :

- Ouvrez chrome://extensions

- Activez le mode développeur (coin supérieur droit)

- Cliquez sur Charger l’extension non empaquetée (coin supérieur gauche)

- Sélectionnez le dossier dist

5. TODO

- ✅ Groupement des hits par media

- ⏳ Export CSV

- ⏳ UI responsive
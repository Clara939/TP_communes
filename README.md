<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=5F0A87&text=Communes%20FR&height=120&section=header&fontColor=FFFFFF"/>
</p>

# 🌸 **Communes de France – Recherche interactive**

**Répertoire interactif** des départements et communes françaises avec **API geo.gouv.fr** !  
**Sélecteurs dynamiques** + détails complets (population, coordonnées GPS). 

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira%20Code&size=24&pause=800&color=EABFCB&background=F1FF0000&width=600&height=50&lines=API+geo.gouv.fr+departements;Communes+par+d%C3%A9partement;Population+%2B+GPS+live" />
</div>

---

## ✨ **Fonctionnalités**

📍 Liste 99 départements français (API)
🏘️ Communes dynamiques par département sélectionné
📊 Détails complets : population, codes postaux, GPS
🔄 Chargement asynchrone (async/await)
🛡️ Gestion erreurs réseau + try/catch

---

## 🎨 **Identité visuelle violet/rose**

🟣 Violet foncé #2F004F
🟣 Violet #5F0A87
🌸 Rose foncé #A4508B
🌸 Rose pâle #C191A1
💖 Rose clair #EABFCB

---

## 🔧 **Code clé**
```javascript
// API Départements
await fetch('https://geo.api.gouv.fr/departements')

// Communes par dept (dynamique)
await fetch(`https://geo.api.gouv.fr/departements/${deptCode}/communes`)

// Détails commune + GPS
await fetch(`https://geo.api.gouv.fr/communes/${communeCode}`)
```
---

## 🚀 **Flux utilisateur**

1️⃣ Sélection département → Liste communes
2️⃣ Sélection commune → Infos détaillées
3️⃣ Coordonnées GPS précises (lat/lng)
4️⃣ Population + codes postaux

---
## 🧩 **Stack technique**
<div align="center">
<img src="https://img.shields.io/badge/API-geo.gouv.fr-5F0A87?style=flat&logo=public-api&logoColor=white"/>
<img src="https://img.shields.io/badge/JS-Async%20Await-A4508B?style=flat&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-BackdropFilter-EABFCB?style=flat&logo=css3&logoColor=2F004F"/>
</div>

---

##🎯 **Skills démontrés**



    🌐 API publique française (geo.api.gouv.fr)

    ⚡ Async/await + fetch moderne

    🛡️ Gestion erreurs complète (try/catch)

    🎨 CSS avancé : backdrop-filter, variables CSS, gradients

    📱 Responsive violet/rose parfait
---
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=5F0A87&height=100&section=footer&fontColor=FFFFFF"/> </p>

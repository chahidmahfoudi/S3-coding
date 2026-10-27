
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// 1. Préparation : initialisation des variables
let nombreVentes = ventes.length;
let chiffreAffaires = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let nombreExceptionnelles = 0;
let caExceptionnelles = 0;

// 2. Traitement : une seule boucle
for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    // Calcul du chiffre d'affaires total
    chiffreAffaires = chiffreAffaires + vente;

    // Recherche de la vente maximale
    if (vente > maximum) {
        maximum = vente;
    }

    // Recherche de la vente minimale
    if (vente < minimum) {
        minimum = vente;
    }

    // Vérification des ventes exceptionnelles (>= 130)
    if (vente >= 130) {
        nombreExceptionnelles++;
        caExceptionnelles = caExceptionnelles + vente;
    }
}

// 3. Synthèse : affichage des résultats
console.log("Nombre total de ventes :", nombreVentes);
console.log("Chiffre d'affaires total :", chiffreAffaires);
console.log("Vente maximale :", maximum);
console.log("Vente minimale :", minimum);
console.log("Nombre de ventes exceptionnelles :", nombreExceptionnelles);
console.log("CA des ventes exceptionnelles :", caExceptionnelles);
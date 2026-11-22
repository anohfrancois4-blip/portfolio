// On récupère le bouton grâce à son id
const bouton = document.getElementById("theme-btn");

// Quand on clique sur le bouton...
bouton.addEventListener("click", function () {
  // ...on ajoute ou on enlève la classe "light" sur le body
  document.body.classList.toggle("light");
});
// On récupère tous les compteurs de la page
const compteurs = document.querySelectorAll(".compteur");

// On traite chaque compteur un par un
compteurs.forEach(function (compteur) {
  // On lit le chiffre à atteindre dans data-cible
  const cible = Number(compteur.dataset.cible);
  let valeur = 0;

  // Toutes les 50 ms, on augmente le chiffre de 1
  const minuteur = setInterval(function () {
    valeur++;
    compteur.textContent = valeur + "+";

    // Quand on arrive à la cible, on arrête
    if (valeur >= cible) {
      clearInterval(minuteur);
    }
  }, 50);
});
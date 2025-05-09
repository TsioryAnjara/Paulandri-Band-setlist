


const params = new URLSearchParams(window.location.search);
const title = params.get("title");

if (songs[title]) {
  document.getElementById("song-title").textContent = songs[title].title;
  document.getElementById("partie").textContent = songs[title].partie;
  document.getElementById("tonalite").textContent = songs[title].tonalite;
  document.getElementById("structure").textContent = songs[title].structure;
  document.getElementById("remarques").textContent = songs[title].remarques;
  document.getElementById("accords").textContent = songs[title].accords;
  document.getElementById("grille-accords").textContent = songs[title].grilleAccords;
} else {
  document.body.innerHTML = "<h1>Chanson non trouvée</h1>";
}

// Mise à jour de la grille d'accords
const grilleAccordsElement = document.getElementById("grille-accords");
if (songs[title] && songs[title].grilleAccords) {
  // Diviser la chaîne des accords par les tirets (séparateurs)
  const accordsList = songs[title].grilleAccords.split(" - ");
  // Créer une liste d'accords sous forme de divs
  grilleAccordsElement.innerHTML = accordsList.map(accord => `<div class="accord">${accord}</div>`).join('');
} else {
  grilleAccordsElement.textContent = "Pas de grille d'accords disponible";
}


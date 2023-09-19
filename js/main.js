/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

//Récupération de la liste déroulante
const listeBackground = document.getElementById('background');

// Écoute le changement de sélection "change" de la liste déroulante
// Et change l'arrière-plan du body
listeBackground.addEventListener('change', function () {
  const image = listeBackground.value
  document.body.style.backgroundImage = `url(./img/backgrounds/${image})`
})

// Récupère le formulaire
const formulaire = document.querySelector('form');
// Ecoute l'envoi du formulaire
// Fait rebondir le bouton "Créer un compte" puis reset le formulaire
formulaire.addEventListener('submit', function (event) {
  // Annule l'envoi du formulaire
  event.preventDefault();
  // Récupère le bouton "Créer un compte"
  const btCreer = document.querySelector('[type="submit"]');
  btCreer.classList.add('animate__heartBeat');
  btCreer.addEventListener('animationend', function () {
    alert('Compte créé avec succès !');
    formulaire.reset()
    btCreer.classList.remove('animate__heartBeat')
  });
})

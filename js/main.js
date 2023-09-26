/**
 * @author Nathan Génesta
 * @since 2022.09.26
 */

'use strict';

/*****************************
CHANGEMENT ARRIERE-PLAN
*****************************/

// Récupération du body
const body = document.querySelector("body");
const listBg = document.querySelector("#bg");
console.log(body, listBg);
// Change l'arrière-plan
// body.style.backgroundImage = "url(./img/backgrounds/" + listBg.value + ")";
body.style.backgroundImage = `url(./img/backgrounds/${ listBg.value })`;

// Ecoute l'événement "change" sur la liste déroulante
listBg.addEventListener("change", function() {
    body.style.backgroundImage = `url(./img/backgrounds/${ listBg.value })`;
});


/*****************************
 ENVOI DU FORMULAIRE
 *****************************/

// Récupération du formulaire et des champs mot de passe
const formulaire = document.querySelector("form");
const txtPassword = document.querySelector("#pwd");
const txtPasswordConfirm = document.querySelector("#confirmePwd");
console.log(formulaire, txtPassword, txtPasswordConfirm);
// Ecouter l'envoi du formulaire (submit)
formulaire.addEventListener("submit", function(event) {
    // Stopper l'envoi ou annuler l'événement
    event.preventDefault();
    // Si mot de passe plus petit que 3 caractère
    if (txtPassword.value.length < 3) {
        alert("Le mot de passe doit contenir min 3 caractère !")
        return; // Termine la fonction
    }
    // Tester que la confirmation du mot de passe soit le même que le mot de passe
    if (txtPassword.value !== txtPasswordConfirm.value) {
        alert("Mots de passes différents !")
        return; // Termine la fonction
    }
    // Imforme l'utilisateur
    alert("Compte crée avec succès !")
    // Envoi le formulaire
    formulaire.submit();
});
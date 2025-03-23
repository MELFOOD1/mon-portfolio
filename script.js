// Message de bienvenue dans la console
console.log("Bienvenue sur mon portfolio !");

// Validation du formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche l'envoi automatique

            let nom = document.getElementById("nom").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (nom === "" || email === "" || message === "") {
                alert("Veuillez remplir tous les champs !");
            } else {
                alert("Merci " + nom + "! Votre message a bien été envoyé.");
                form.reset(); // Réinitialise le formulaire
            }
        });
    }
});

// Effet de survol sur les projets 
const projectItems = document.querySelectorAll("ul li");

projectItems.forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.color = "blue";
    });

    item.addEventListener("mouseout", function () {
        this.style.color = "black";
    });
});

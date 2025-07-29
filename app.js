let name = prompt("Quel est ton nom ?");

// let age = prompt("Quel est ton âge ?");
// if (age >= 14 && age <= 18) {
//     alert("Bienvenue à Jump In Tech !");
// } else if (age > 18) {
//     alert("Oh, tu es trop vieux pour Jump In Tech, mais tu peux toujours nous suivre !");
// } else {
//     alert("Tu es trop jeune pour Jump In Tech, reviens dans quelques années.");
// }

let monTitre = document.getElementById("titre-principal");
monTitre.innerText = "Les abeilles de "+ name + " !";

if (name === "Alice") {
    monTitre.style.color = "#ff0000ff";
} else {
    monTitre.style.color = "#A16E0C";
}















let balle = document.querySelector(".balle");
let beeImg = balle.querySelector("img");
let beeActive = false;

balle.style.display = "none";

const toggleBeeBtn = document.getElementById("toggleBee");
toggleBeeBtn.addEventListener("click", function() {
    beeActive = !beeActive;
    balle.style.display = beeActive ? "block" : "none";
});

document.addEventListener("mousemove", function(event) {
    if (!beeActive) return;
    let x = event.pageX;
    let y = event.pageY;

    // Position de la balle
    let balleRect = balle.getBoundingClientRect();
    let balleCenterX = balleRect.left + balleRect.width / 2 + window.scrollX;
    let balleCenterY = balleRect.top + balleRect.height / 2 + window.scrollY;

    // Calcul de l'angle entre la balle et le curseur
    let dx = x - balleCenterX;
    let dy = y - balleCenterY;
    let angle = Math.atan2(dy, dx) * 180 / Math.PI;

    // Applique la rotation à l'image
    beeImg.style.transform = `rotate(${angle}deg)`;

    // Déplacement de la balle
    if (y < 122) y = 122;
    balle.style.transition = "top 0.3s ease-out, left 0.3s ease-out";
    balle.style.top = (y - 55) + "px";
    balle.style.left = (x - 70) + "px";
});

        // Fonction pour changer la couleur de la balle quand on clique dessus
        function couleurAleatoire() {
        const couleurs = ["#fff5d8ff", "#ffe4f1ff", "#e0f7ffff", "#e4ffe4ff", "#fff5e9ff", "#f1deffff"];
        return couleurs[Math.floor(Math.random() * couleurs.length)];
        }

        balle.addEventListener("click", function() {
            let myBody = document.getElementById("body");
            myBody.style.backgroundColor = couleurAleatoire();
        });

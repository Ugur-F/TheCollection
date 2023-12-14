const fCollection = [
    {
        name: "Khabib N.",
        nickname: '"The Eagle"',
        nationality: "assets/img/flag/russie.png",
        picture: "assets/img/athlete/khabibN.png",
        division: "Lightweight",
    },

    {
        name: "Charles Oliveira",
        nickname: '"Do Bronxs"',
        nationality: "assets/img/flag/bresil.png",
        picture: "assets/img/athlete/charlesO.png",
        division: "Lightweight",
    },

    {
        name: "Francis Ngannou",
        nickname: '"The Predator"',
        nationality: "assets/img/flag/cameroun.png",
        picture: "assets/img/athlete/francisN.png",
        division: "Heavyweight",
    },

    {
        name: "Jon Jones",
        nickname: '"Bones"',
        nationality: "assets/img/flag/etats-unis.png",
        picture: "assets/img/athlete/jonJ.png",
        division: "Heavyweight",
    },

    {
        name: "Demetrious Johnson",
        nickname: '"Mighty Mouse"',
        nationality: "assets/img/flag/etats-unis.png",
        picture: "assets/img/athlete/demetriousJ.png",
        division: "Flyweight",
    },

    {
        name: "Kamaru Usman",
        nickname: '"Nigerian Nightmare"',
        nationality: "assets/img/flag/cameroun.png",
        picture: "assets/img/athlete/kamaruU.png",
        division: "Middleweight",
    },

    {
        name: "Israel Adesanya",
        nickname: '"The Last Stylebender"',
        nationality: "assets/img/flag/nigeria.png",
        picture: "assets/img/athlete/israelA.png",
        division: "Middleweight",
    },
    
    {
        name: "Khamzat Chimaev",
        nickname: '"Borz"',
        nationality: "assets/img/flag/suede.png",
        picture: "assets/img/athlete/khamzatC.png",
        division: "Middleweight",
    },

    {
        name: "Max Holloway",
        nickname: '"Blessed"',
        nationality: "assets/img/flag/etats-unis.png",
        picture: "assets/img/athlete/maxH.png",
        division: "Featherweight",
    },

    {
        name: "Dustin Poirier",
        nickname: '"The Diamond"',
        nationality: "assets/img/flag/etats-unis.png",
        picture: "assets/img/athlete/dustinP.png",
        division: "Lightweight",
    },
]

//=========================================================================================================

function createCard(athlete) {
    const card = document.createElement("section");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = athlete.name;

    const h3 = document.createElement("h3");
    h3.textContent = athlete.nickname;

    const imgAthlete = document.createElement("img");
    imgAthlete.classList.add("imgAthlete");
    imgAthlete.src = athlete.picture;
    imgAthlete.alt = `Image de ${athlete.name}`;

    const p = document.createElement("p");
    p.textContent = athlete.division;

    const imgFlag = document.createElement("img");
    imgFlag.src = athlete.nationality;
    imgFlag.alt = `Drapeau de ${athlete.name}`;

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(imgAthlete);
    card.appendChild(p);
    card.appendChild(imgFlag);

    return card;
}

// const main = document.querySelector("main");

// fCollection.forEach((athlete) => {
//     const card = createCard(athlete);
//     main.appendChild(card);
// });

//

const main = document.querySelector("main");
const allButton = document.getElementById("allButton");
const flyweightButton = document.getElementById("flyweightButton");
const featherweightButton = document.getElementById("featherweightButton");
const lightweightButton = document.getElementById("lightweightButton");
const middleweightButton = document.getElementById("middleweightButton");
const heavyweightButton = document.getElementById("heavyweightButton");

function showAllCards() {
    main.innerHTML = ""; // Efface le contenu actuel de main

    fCollection.forEach((athlete) => {
        const card = createCard(athlete);
        main.appendChild(card);
    });
}

function showCardsByDivision(division) {
    main.innerHTML = ""; // Efface le contenu actuel de main

    const filteredAthletes = fCollection.filter(athlete => athlete.division === division);

    filteredAthletes.forEach((athlete) => {
        const card = createCard(athlete);
        main.appendChild(card);
    });
}

allButton.addEventListener("click", showAllCards);
flyweightButton.addEventListener("click", () => showCardsByDivision("Flyweight"));
featherweightButton.addEventListener("click", () => showCardsByDivision("Featherweight"));
lightweightButton.addEventListener("click", () => showCardsByDivision("Lightweight"));
middleweightButton.addEventListener("click", () => showCardsByDivision("Middleweight"));
heavyweightButton.addEventListener("click", () => showCardsByDivision("Heavyweight"));


document.addEventListener("DOMContentLoaded", showAllCards); //afficher toutes les card quand j'ouvre la page
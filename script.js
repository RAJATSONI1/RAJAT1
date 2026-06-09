// Smooth fade-in animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Coming Soon subtle glow effect
const comingBox = document.querySelector('.coming-box');

comingBox.addEventListener('mousemove', () => {
    comingBox.style.boxShadow = '0 0 80px rgba(255,215,0,0.15)';
});

comingBox.addEventListener('mouseleave', () => {
    comingBox.style.boxShadow = '0 0 50px rgba(255,215,0,0.08)';
});
const jewelleryFacts = [

"Pure gold is so soft that it can be shaped by hand pressure.",

"Gold never rusts, corrodes or tarnishes naturally.",

"More than 50% of the world's gold is used in jewellery.",

"Silver is the most reflective metal known to mankind.",

"Ancient Indian jewellery craftsmanship dates back over 5000 years.",

"Gold can be stretched into extremely thin wires without breaking.",

"The word jewellery originates from the French word 'jouel', meaning plaything or ornament.",

"Silver possesses natural antimicrobial properties.",

"Many royal crowns around the world contain both gold and silver elements.",

"A single ounce of gold can be beaten into a sheet covering nearly 100 square feet.",

"Custom jewellery often becomes family heirlooms passed through generations.",

"Laser cutting technology allows jewellery designs impossible to create by hand.",

"Gold purity is measured in karats, with 24K being the purest form.",

"India remains one of the world's largest consumers of gold jewellery.",

"Every handcrafted jewellery piece carries tiny differences that make it unique."

];

const factBtn = document.getElementById("fact-btn");
const factBox = document.getElementById("fact-box");

factBtn.addEventListener("click", () => {

    const randomFact =
        jewelleryFacts[Math.floor(Math.random() * jewelleryFacts.length)];

    factBox.innerHTML = randomFact;

});
const showcaseItems =
document.querySelectorAll(".carousel-item");

let activeIndex = 1;

function rotateShowcase() {

    showcaseItems.forEach(item => {
        item.classList.remove("active");
    });

    activeIndex++;

    if(activeIndex >= showcaseItems.length) {
        activeIndex = 0;
    }

    showcaseItems[activeIndex]
        .classList.add("active");
}

setInterval(rotateShowcase, 10000);
const dreamPopup =
document.getElementById("dreamPopup");

const processModal =
document.getElementById("processModal");

const showProcessBtn =
document.getElementById("showProcessBtn");

const closePopup =
document.getElementById("closePopup");

const closeProcess =
document.getElementById("closeProcess");

/* Show popup after 12 seconds */

setTimeout(() => {

    dreamPopup.style.display = "block";

}, 12000);

/* Open process */

showProcessBtn.addEventListener("click", () => {

    processModal.style.display = "block";

    dreamPopup.style.display = "none";

});

/* Close popup */

closePopup.addEventListener("click", () => {

    dreamPopup.style.display = "none";

});

/* Close process modal */

closeProcess.addEventListener("click", () => {

    processModal.style.display = "none";

});
const updateElement =
document.getElementById("lastUpdated");

const now = new Date();

const formattedDate =
now.toLocaleDateString("en-IN", {

    day: "2-digit",
    month: "long",
    year: "numeric"

});

const formattedTime =
now.toLocaleTimeString("en-IN", {

    hour: "2-digit",
    minute: "2-digit"

});

updateElement.innerHTML =
`Rates Last Updated: ${formattedDate} • ${formattedTime}`;
function updateMarketClock() {

    const now = new Date();

    const dateOptions = {

        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    const timeOptions = {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

        hour12: true
    };

    document.getElementById("currentDate")
        .innerHTML =
        now.toLocaleDateString(
            "en-IN",
            dateOptions
        );

    document.getElementById("currentTime")
        .innerHTML =
        now.toLocaleTimeString(
            "en-IN",
            timeOptions
        );
}

updateMarketClock();

setInterval(
    updateMarketClock,
    1000
);
const reviews =
document.querySelectorAll(".review-card");

let reviewIndex = 0;

function rotateReviews() {

    reviews.forEach(review => {

        review.classList.remove("active-review");

    });

    reviewIndex++;

    if(reviewIndex >= reviews.length) {

        reviewIndex = 0;
    }

    reviews[reviewIndex]
        .classList.add("active-review");
}

setInterval(
    rotateReviews,
    8000
);
let isAnimating = false;

const card = document.querySelector(".box");  // Changed from ".custom-box" to ".box" to match HTML
const loadingScreen = document.getElementById("loading-screen");

if (card && loadingScreen) {
    card.addEventListener("click", function (event) {
        event.preventDefault();
        loadingScreen.classList.add("active");
        setTimeout(() => {
            window.location.href = "nextpage.html";
        }, 3000);
    });
}

function openEnvelope() {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById('envelopeContainer');
    const overlay = document.getElementById('envelopeOverlay');

    if (!container || !overlay) return; 

    container.className = 'envelope-center';
    overlay.classList.add('active');

    container.classList.add('stage-rise');
    setTimeout(() => {
        container.classList.add('stage-open');
        setTimeout(() => {
            container.classList.add('stage-paper');
            isAnimating = false;
        }, 600);
    }, 700);
}

function readLetter() {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById('envelopeContainer');

    if (!container) return;

    container.classList.add('stage-close');
    setTimeout(() => {
        container.classList.add('stage-zoom');
        letter.style.top = '50%';
        letter.style.left = '50%';
        isAnimating = false;
    }, 500);
}

function closeEnvelope() {
    const container = document.getElementById('envelopeContainer');
    const letter = document.getElementById('letter');
    const overlay = document.getElementById('envelopeOverlay');

    if (!container || !letter || !overlay) return; 

    letter.style.position = '';
    letter.style.top = '';
    letter.style.left = '';
    letter.style.transform = '';
    letter.style.transition = '';

    container.className = 'envelope-center';
    overlay.classList.remove('active');
    isAnimating = false;
}
const projects = [
{
    title: "Birthday Gift!",
    desc: "It's a birthday present!",
    longInfo: "Birthday present for my gf! She's the best and i've decided i wanted to do something special for her birthday. Spent so much time relearning everything, spent months prior to her birthday so i could surprise her! Click the youtube button to see the process on how i built it! :D",
    img: "ProjectImg/Blender/Birthday.png",
    model: "BModels/Cecil1.glb",
    youtubeUrl: "https://youtu.be/Ma1QK68O-EI"
},
{
    title: "Aqua Deltarune",
    desc: "Who might you be?",
    longInfo: "Aqua.",
    img: "ProjectImg/Blender/Aqua.png",
    model: "BModels/Aqua.glb",
    youtubeUrl: "https://www.youtube.com/watch?v=REPLACE_ME_2"
},
{
    title: "Yellow Deltarune",
    desc: "Whoa! There's 2 dollars in here!",
    longInfo: "Yellow Deltarune.",
    img: "ProjectImg/Blender/Yellow.jpg",
    model: "BModels/Yellow.glb",
    youtubeUrl: "https://www.youtube.com/watch?v=REPLACE_ME_3"
}
];

let index = 0;
let hasModelPlayed = false; // becomes true after the first model finishes loading
const modelEl = document.getElementById('modelEl');
const thumbGrid = document.getElementById('thumbGrid');
const infoBtn = document.getElementById('infoBtn');
const youtubeBtn = document.getElementById('youtubeBtn');
const backBtn = document.getElementById('backBtn');
const defaultView = document.getElementById('defaultView');
const detailView = document.getElementById('detailView');
const infoCard = document.querySelector('.info-card');

// Build the thumbnail grid once
projects.forEach((p, i) => {
const thumb = document.createElement('div');
thumb.className = 'thumb';
thumb.dataset.index = i;
thumb.innerHTML = `
    <span class="selected-tag">Viewing</span>
    <img src="${p.img}" alt="${p.title}">
    <div class="label">${p.title}</div>
`;
thumb.addEventListener('click', () => {
    index = i;
    showDefaultView();
    render();
});
thumbGrid.appendChild(thumb);
});

function render() {
const p = projects[index];
modelEl.src = p.model;
document.getElementById('titleEl').textContent = p.title;
document.getElementById('descEl').textContent = p.desc;
document.getElementById('detailTitleEl').textContent = p.title;
document.getElementById('detailTextEl').textContent = p.longInfo;

// update selected state on thumbnails
document.querySelectorAll('.thumb').forEach(el => {
    el.classList.toggle('selected', Number(el.dataset.index) === index);
});

// point the youtube button at this project's video
youtubeBtn.dataset.url = p.youtubeUrl;
}

function showDetailView() {
defaultView.hidden = true;
detailView.hidden = false;
infoCard.scrollTop = 0;
}

function showDefaultView() {
detailView.hidden = true;
defaultView.hidden = false;
}

infoBtn.addEventListener('click', showDetailView);
backBtn.addEventListener('click', showDefaultView);

youtubeBtn.addEventListener('click', () => {
window.open(youtubeBtn.dataset.url, '_blank');
});

// Only the FIRST model load triggers the rise-up animation.
// Every load after that, .visible is already applied, so the new
// model just pops into place with no transition (instant snap).
modelEl.addEventListener('load', () => {
if (!hasModelPlayed) {
    requestAnimationFrame(() => modelEl.classList.add('visible'));
    hasModelPlayed = true;
}
});

render();
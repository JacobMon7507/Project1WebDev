const batchSize = 6;
let num_loaded = 0

const button = document.getElementById("load-more");
const grid = document.getElementById("card-grid");
const modal_container = document.getElementById("modal-container");
const close_modal = document.getElementById("close-modal");

async function loadMiracles() {
    const res = await fetch("https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json");
    const data = await res.json();
    renderMiracles(data);
}

function renderMiracles(data) {
    const batch = data.slice(num_loaded, num_loaded + batchSize);
    for (let i = 0; i < batch.length; i++) {
        const card = document.createElement('div');
        card.classList.add("card");

        const title = document.createElement('h3');
        title.textContent = batch[i].title;

        const location = document.createElement('p');
        location.textContent = batch[i].location;

        const year = document.createElement('p');
        year.textContent = batch[i].year;

        const summary = document.createElement('p');
        summary.textContent = batch[i].summary;

        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(year);
        card.appendChild(summary);

        card.addEventListener('click', () => {
            modal_container.classList.add("show");
            displayModal(batch[i]);
        })

        grid.appendChild(card);
    }
}

function displayModal(card) {
    document.getElementById("modal-title").textContent = card.title;
    document.getElementById("modal-details").textContent = card.details;
    document.getElementById("modal-category").textContent = card.category;
    document.getElementById("modal-type").textContent = card.type;
}

button.addEventListener("click", loadMiracles);
close_modal.addEventListener("click", () => {
    modal_container.classList.remove("show");
})

loadMiracles();
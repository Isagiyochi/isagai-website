const dummyData = [
    { title: "Bluelock", image: "bluelock wallpaper.jpeg" },
    { title: "Tomodachi Game", image: "1338560-h-63da662694d3.webp" },
    { title: "Hajimeno Ippo", image: "hajimeno ippo.jpe" },
    { title: "Hunter X Hunter", image: "hunter x hunter.jpe" },
    { title: "Skeleton Knight In Another Worlds", image: "skeleton knight in another world.jpe" },
    { title: "I Got a Cheat Skill from Another Worlds", image: "I Got a Cheat Skill from Another Worlds.jpe" },
    { title: "sololeveling", image: "solo-leveling.jpg" },
    { title: "Megalo Box", image: "megalobox.jpe" },
];

const searchInput = document.getElementById('search-input');
const resultList = document.getElementById('result-list');
const resultContainer = document.getElementById('result-container');

searchInput.addEventListener('input', updateAutoComplete);

function updateAutoComplete() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = dummyData.filter(anime => anime.title.toLowerCase().includes(searchTerm));

    // Display auto-complete suggestions
    if (filteredResults.length > 0) {
        resultContainer.style.display = 'block';
        resultList.innerHTML = '';

        filteredResults.forEach(result => {
            const listItem = document.createElement('div');
            listItem.className = 'result-item';

            const image = document.createElement('img');
            image.src = result.image;
            listItem.appendChild(image);

            const heading = document.createElement('h3');
            heading.textContent = result.title;
            listItem.appendChild(heading);

            resultList.appendChild(listItem);
        });
    } else {
        resultContainer.style.display = 'none';
    }
}

function searchAnime() {
    // Handle search functionality here
    // You can use the selected auto-complete suggestion or perform a search based on the current input value
}


// card
let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth;

    if (index < 0) {
        index = 0;
    } else if (index >= slider.children.length) {
        index = slider.children.length - 1;
    }

    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get section() {
        const paintingCard = document.createElement("div");
        paintingCard.className = "painting-card";
        
        const img = document.createElement("img");
        img.src = `images/${this.image}`;
        img.alt = this.name;
        
        const title = document.createElement("h3");
        title.innerHTML = this.name;
        
        paintingCard.appendChild(img);
        paintingCard.appendChild(title);
        
        // Click event to show modal
        paintingCard.onclick = () => {
            this.showModal();
        };
        
        return paintingCard;
    }

    showModal() {
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalArtist = document.getElementById("modal-artist");
        const modalImage = document.getElementById("modal-image");
        
        modalTitle.innerHTML = this.name;
        modalArtist.innerHTML = `by ${this.artist}`;
        modalImage.src = `images/${this.image}`;
        modalImage.alt = this.name;
        
        modal.classList.remove("hidden");
    }
}

// Array of paintings
const paintings = [];

paintings.push(new Painting("Mona Lisa", "Leonardo da Vinci", "art1.jpg", true));
paintings.push(new Painting("Starry Night", "Vincent van Gogh", "art2.jpg", true));
paintings.push(new Painting("Forbidden grass", "Werner Bronkhorst", "art3.jpg", false));
paintings.push(new Painting("Almond Blossoms", "Vincent van Gogh", "art4.jpg", true));

// Load paintings when page loads
window.onload = () => {
    // Ensure modal starts hidden
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
    
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = "";
    
    // Loop through paintings and add them to the DOM
    paintings.forEach(painting => {
        galleryContainer.appendChild(painting.section);
    });
};

// Close modal functionality
document.getElementById("close-modal").onclick = () => {
    document.getElementById("modal").classList.add("hidden");
};

// Close modal when clicking outside
document.getElementById("modal").onclick = (event) => {
    if (event.target.id === "modal") {
        document.getElementById("modal").classList.add("hidden");
    }
};

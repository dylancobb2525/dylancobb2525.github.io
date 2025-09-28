// Associative arrays for dog data
const beforeImages = [];
beforeImages["Barbie"] = "images/dog1sad.jpg";
beforeImages["Max"] = "images/dog2sad.jpg";
beforeImages["Luna"] = "images/dog3sad.jpg";
beforeImages["Buddy"] = "images/dog4sad.jpg";

const afterImages = [];
afterImages["Barbie"] = "images/dog1happy.jpg";
afterImages["Max"] = "images/dog2happy.jpg";
afterImages["Luna"] = "images/dog3happy.jpg";
afterImages["Buddy"] = "images/dog4happy.jpg";

// Load dogs when page loads
window.onload = () => {
    
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    
    const dogContainer = document.getElementById("dog-container");
    dogContainer.innerHTML = "";
    
    // Loop through dogs
    for(let dogName in beforeImages) {
        const dogCard = document.createElement("div");
        dogCard.className = "dog-card";
        
        const dogImg = document.createElement("img");
        dogImg.src = beforeImages[dogName];
        dogImg.alt = dogName;
        
        const dogOverlay = document.createElement("div");
        dogOverlay.className = "dog-overlay";
        dogOverlay.innerHTML = `Please adopt ${dogName}`;
        
        dogCard.appendChild(dogImg);
        dogCard.appendChild(dogOverlay);
        
        // Click event to show popup
        dogCard.onclick = () => {
            const popupTitle = document.getElementById("popup-title");
            const popupImage = document.getElementById("popup-image");
            
            popupTitle.innerHTML = `${dogName} after adoption`;
            popupImage.src = afterImages[dogName];
            popupImage.alt = dogName;
            
            popup.classList.remove("hidden");
        };
        
        dogContainer.appendChild(dogCard);
    }
};

// Close popup functionality
document.getElementById("close").onclick = () => {
    document.getElementById("popup").classList.add("hidden");
};

// Close popup when clicking outside
document.getElementById("popup").onclick = (event) => {
    if (event.target.id === "popup") {
        document.getElementById("popup").classList.add("hidden");
    }
};

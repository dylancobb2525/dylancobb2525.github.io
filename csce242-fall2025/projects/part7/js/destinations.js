const getDestinations = async () => {
    const url = "../destinations.json";

    try {
        const response = await fetch(url);
        return response.json();
    }
    catch (error) {
        console.log("Error fetching destinations:", error);
    }
};

const createDestinationCard = (destination) => {
    const card = document.createElement("div");
    card.classList.add("location-card-large");

    const img = document.createElement("img");
    img.src = destination.img_name;
    img.alt = destination.name;
    img.onclick = () => expandImage(img);
    card.append(img);

    const locationInfo = document.createElement("div");
    locationInfo.classList.add("location-info");
    card.append(locationInfo);

    const h3 = document.createElement("h3");
    h3.innerHTML = destination.name;
    locationInfo.append(h3);

    const p = document.createElement("p");
    p.innerHTML = destination.description;
    locationInfo.append(p);

    // Add additional info for visited destinations
    if (destination.visited) {
        const yearP = document.createElement("p");
        yearP.innerHTML = `Visited: ${destination.year_visited}`;
        yearP.style.fontStyle = "italic";
        yearP.style.fontSize = "0.9em";
        locationInfo.append(yearP);
    }

    return card;
};

const showDestinations = async (category = null) => {
    const destinations = await getDestinations();
    const locationsGrid = document.querySelector(".locations-grid");
    
    // Clear existing content
    locationsGrid.innerHTML = "";

    // Filter destinations by category if specified
    const filteredDestinations = category 
        ? destinations.filter(dest => dest.category === category)
        : destinations;

    // Create cards for each destination
    filteredDestinations.forEach(destination => {
        const card = createDestinationCard(destination);
        locationsGrid.append(card);
    });
};

// Load destinations when page loads
window.onload = () => {
    // Determine which category to show based on current page
    const currentPage = window.location.pathname;
    
    if (currentPage.includes("us-locations")) {
        showDestinations("US Destinations");
    } else if (currentPage.includes("international-locations")) {
        showDestinations("International Destinations");
    } else if (currentPage.includes("bucket-list-locations")) {
        showDestinations("Bucket List");
    } else {
        // Show all destinations for main travels page
        showDestinations();
    }
};

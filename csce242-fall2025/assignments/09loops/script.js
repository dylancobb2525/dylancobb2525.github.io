document.getElementById("draw-scene").onclick = () => {
    const sceneArea = document.getElementById("scene-area");
    const sunMoonDiv = document.getElementById("sun-moon");
    const cloudsDiv = document.getElementById("clouds");
    const treesDiv = document.getElementById("trees");
    
    // Clear existing elements
    sunMoonDiv.innerHTML = "";
    cloudsDiv.innerHTML = "";
    treesDiv.innerHTML = "";
    
    // Get current hour using JavaScript Date
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    
    // Determine if it's night (6pm to 6am) or day
    if (currentHour >= 18 || currentHour < 6) {
        // Night time - show moon and black background
        sceneArea.classList.add("night");
        const moon = document.createElement("div");
        moon.className = "moon";
        sunMoonDiv.appendChild(moon);
    } else {
        // Day time - show sun and blue background
        sceneArea.classList.remove("night");
        const sun = document.createElement("div");
        sun.className = "sun";
        sunMoonDiv.appendChild(sun);
    }
    
    // Create 6 clouds using for loop
    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.className = "cloud";
        cloud.style.left = (i * 12) + "%";
        cloud.style.top = Math.random() * 20 + "px";
        cloudsDiv.appendChild(cloud);
    }
    
    // Create 6 trees using for loop
    for (let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.className = "tree";
        tree.style.left = (i * 12) + "%";
        
        const canopy = document.createElement("div");
        canopy.className = "tree-canopy";
        
        const trunk = document.createElement("div");
        trunk.className = "tree-trunk";
        
        tree.appendChild(canopy);
        tree.appendChild(trunk);
        treesDiv.appendChild(tree);
    }
};

// Exercise nav
const exercise1Btn = document.getElementById("exercise1-btn");
const exercise2Btn = document.getElementById("exercise2-btn");
const exercise1Section = document.getElementById("exercise1-section");
const exercise2Section = document.getElementById("exercise2-section");

const showExercise1 = () => {
    exercise1Section.classList.remove("hidden");
    exercise2Section.classList.add("hidden");
    exercise1Btn.classList.add("active");
    exercise2Btn.classList.remove("active");
};

const showExercise2 = () => {
    exercise1Section.classList.add("hidden");
    exercise2Section.classList.remove("hidden");
    exercise1Btn.classList.remove("active");
    exercise2Btn.classList.add("active");
};

exercise1Btn.onclick = showExercise1;
exercise2Btn.onclick = showExercise2;

// Mobile nav
const toggleNav = document.getElementById("toggle-nav");
const mobileNav = document.getElementById("mobile-nav");
const mobileExercise1 = document.getElementById("mobile-exercise1");
const mobileExercise2 = document.getElementById("mobile-exercise2");

toggleNav.onclick = () => {
    mobileNav.classList.toggle("hidden");
    
    const arrow = toggleNav.querySelector("div");
    if (mobileNav.classList.contains("hidden")) {
        arrow.style.borderTop = "12px solid white";
        arrow.style.borderBottom = "none";
    } else {
        arrow.style.borderBottom = "12px solid white";
        arrow.style.borderTop = "none";
    }
};

mobileExercise1.onclick = (event) => {
    event.preventDefault();
    showExercise1();
    mobileNav.classList.add("hidden");
    const arrow = toggleNav.querySelector("div");
    arrow.style.borderTop = "12px solid white";
    arrow.style.borderBottom = "none";
};

mobileExercise2.onclick = (event) => {
    event.preventDefault();
    showExercise2();
    mobileNav.classList.add("hidden");
    const arrow = toggleNav.querySelector("div");
    arrow.style.borderTop = "12px solid white";
    arrow.style.borderBottom = "none";
};

// Exercise 1: Plant watering tracker
const daysSlider = document.getElementById("days-slider");
const sliderValue = document.getElementById("slider-value");
const plantImage = document.querySelector("#plant-image img");
const daysMessage = document.getElementById("days-message");
const plantStatus = document.getElementById("plant-status");

const updatePlantStatus = () => {
    const days = parseInt(daysSlider.value);
    sliderValue.textContent = days;
    
    daysMessage.textContent = `It's been ${days} days since watering your plant`;
    
    if (days >= 1 && days <= 2) {
        plantImage.src = "images/1-2days.png";
        plantImage.alt = "Healthy plant";
        plantStatus.textContent = "Your plant is healthy and happy";
    } else if (days >= 3 && days <= 5) {
        plantImage.src = "images/3-5days.png";
        plantImage.alt = "Plant needs watering";
        plantStatus.textContent = "Your plant needs watering";
    } else if (days >= 6 && days <= 9) {
        plantImage.src = "images/6-9days.png";
        plantImage.alt = "Plant wilting";
        plantStatus.textContent = "Leaves are dropping the color is changing, water soon";
    } else if (days >= 10 && days <= 12) {
        plantImage.src = "images/10-12days.png";
        plantImage.alt = "Dead plant";
        plantStatus.textContent = "Sorry, your plant is no longer with us";
    }
};

daysSlider.oninput = updatePlantStatus;

// Exercise 2 Digital clock
const currentTimeElement = document.getElementById("current-time");

const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const minutesFormatted = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutesFormatted} ${ampm}`;
    
    currentTimeElement.textContent = timeString;
};


updateClock();
setInterval(updateClock, 60000);

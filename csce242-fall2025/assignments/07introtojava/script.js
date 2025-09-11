// JavaScript for Assignment 7 


const beatlesLyrics = [
    "Here comes the sun",
    "Sun",
    "Sun", 
    "Sun",
    "Here it comes"
];


const cloudyImage = "images/cloudy.png";
const sunnyImage = "images/sunny.png";


let isSunny = false;


const displaySunnyLyrics = () => {
    const sunnyText = document.getElementById("sunny-text");
    const lyricsText = beatlesLyrics.join("<br>");
    sunnyText.innerHTML = lyricsText;
    sunnyText.style.color = "#2C3E50";
    sunnyText.style.fontWeight = "bold";
};


const changeImage = () => {
    const weatherImage = document.getElementById("weather-image");
    
    if (isSunny) {
        weatherImage.src = cloudyImage;
        weatherImage.alt = "Cloudy Weather";
        isSunny = false;
    } else {
        weatherImage.src = sunnyImage;
        weatherImage.alt = "Sunny Weather";
        isSunny = true;
    }
};

const becomeSunny = () => {
    const weatherImage = document.getElementById("weather-image");
    weatherImage.src = sunnyImage;
    weatherImage.alt = "Sunny Weather";
    isSunny = true;
};


const handleColorChange = (event) => {
    const colorCode = document.getElementById("color-code");
    const colorParagraph = document.getElementById("color-paragraph");
    const selectedColor = event.target.value;
    
    colorCode.textContent = `Color Code: ${selectedColor}`;
    colorParagraph.style.color = selectedColor;
};


document.addEventListener("DOMContentLoaded", () => {
   
    const sunnyContent = document.getElementById("sunny-content");
    sunnyContent.onclick = displaySunnyLyrics;
    
    
    const colorInput = document.getElementById("color-input");
    colorInput.onchange = handleColorChange;
    
    const becomeSunnyBtn = document.getElementById("become-sunny-btn");
    becomeSunnyBtn.onclick = becomeSunny;
    
    window.changeImage = changeImage;
});

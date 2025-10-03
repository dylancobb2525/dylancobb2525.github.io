document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const expandImage = (img) => {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    
    popupImg.src = img.src;
    popup.classList.remove("hidden");
};

document.getElementById("image-popup").onclick = () => {
    document.getElementById("image-popup").classList.add("hidden");
};

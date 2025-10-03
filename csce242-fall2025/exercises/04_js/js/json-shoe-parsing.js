const getShoes = async () => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();

    }
    catch (error) {
        console.log("sorry");
    }
};

const showShoes = async () => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach(shoe => {
        const section = document.createElement("section");
        section.classList.add("shoe");

        const h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = shoe.name;

        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`;

        const ul = document.createElement("ul");
        section.append(ul);

        shoe.reviews.forEach(review => {
            const li = document.createElement("li");
            ul.append(li);
            li.innerHTML = review;
        });

        shoeListDiv.append(section);
    });
}; 

showShoes();
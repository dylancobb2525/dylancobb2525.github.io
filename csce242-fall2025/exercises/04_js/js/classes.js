class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const columnContainer = document.createElement("div");
        columnContainer.classList.add("columns");
        section.append(columnContainer);

        const divCol1 = document.createElement("div");
        columnContainer.append(divCol1);
        divCol1.append(this.picture(this.pic));

        const divCol2 = document.createElement("div");
        columnContainer.append(divCol2);
        divCol2.append(this.paragraph("Breed", this.breed));
        divCol2.append(this.paragraph("Color", this.color));
        divCol2.append(this.paragraph("Age", this.age));
        divCol2.append(this.paragraph("Size", this.size));
        

        return section;
    }

    paragraph(key, value) {
        const p = document.createElement("p");
        p.innerHTML = `${key}: ${value}`;
        return p;
    }

    picture(filename) {
    const img = document.createElement("img");
    img.src = `images/classes/${filename}`;
    img.alt = this.title;
    return img;
    }
}

const dogs = [];

dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "Small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retreiver", "Yellow", 1, "Medium", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pitbull", "White", 3, "Large", "pitt-bull.jpg"));

//on page load
const dogListdiv = document.getElementById("dog-list");

dogs.forEach(dog => {
    dogListdiv.append(dog.item);
});
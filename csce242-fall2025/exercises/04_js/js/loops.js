document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);
    
    for(let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum) {
        error.innerHTML = "* second number must be greater than first number";
        return;
    }
    //loop for every number from start to end display the number in paragraphs
    for(let i = startNum; i <= endNum; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked on ${i}`);
        }
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";
    
    const toys = ["ball", "rocket", "spaceship", "robot", "bear"];

    toys.forEach((toy, i) => {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
}

document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["rocket"] = 10.99;
    toys["spaceship"] = 15.99;
    toys["robot"] = 20.99;
    toys["bear"] = 25.99;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    for(let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);

        p.onclick = () => {
            priceP.innerHTML = `${toy}: $${toys[toy]}`;
        };
    }  

};

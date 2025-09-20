/*
constsayHello = () => {
    console.log("Hello World");
}

const btnClickMe = document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = () => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");
};

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
};

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
};

document.getElementById("btn-clear").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
};

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-result");
    p.innerHTML = "";
    const error = document.getElementById("error-color");
    error.innerHTML = "";
    let mood = "";

    if (color === "") {
        error.innerHTML = "* blank";
        return;
    }

    if(color == "red") {
        mood = "You choose red, you are angry.";
    } else if(color == "yellow") {
        mood = "You choose yellow, you are happy.";
    } 

    if(mood == "") {
        error.innerHTML = "* invalid color";
        return;
    }
    p.innerHTML = `You chose ${color}, you are ${mood}`;

}

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");

    if(ball.classList.contains("bounce")) {
        event.currentTarget.innerHTML = "Start";
    } else {
        event.currentTarget.innerHTML = "Stop";
    }
    ball.classList.toggle("bounce");
}

/* Counter */
let counter = 0;
let counterInterval;
const countp = document.getElementById("p-count");
const btnStartCount = document.getElementById("btn-count-start");
const btnStopCount = document.getElementById("btn-count-stop");
btnStopCount.disabled = true;

btnStartCount.onclick = () => {
    btnStartCount.disabled = true;
    btnStopCount.disabled = false;
    counterInterval = setInterval(()=>{
        counter++;
        countp.innerHTML = counter;
    }, 1000);
}

btnStopCount.onclick = () => {
    clearInterval(counterInterval);
    btnStopCount.disabled = true;
    btnStartCount.disabled = false;
}

/*Donation Stuff*/
const goal = 10000;
let totalDonations = 0;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";
    const donationMessage = document.getElementById("donation-message");
    donationMessage.innerHTML = "";

    if(isNaN(donation) || donation <= 0) {
        errorSpan.innerHTML = "* invalid donation";
        return;
    }
    const donationPercent = (totalDonations + donation) / goal * 100;

    if(donationPercent >= 100) {
        donationMessage.innerHTML = "You have met your goal!";
    } else if (donationPercent > 50) {
        donationMessage.innerHTML = "you are halfway there!";
    } else {
        donationMessage.innerHTML = "You are not even close to your goal!";
    }

    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}
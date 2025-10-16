const form = document.getElementById('contact-form');

document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();
    
    const result = document.getElementById('contact-result');
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";
    result.style.display = "block";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Message sent successfully! I'll get back to you soon.";
            result.className = "success-message";
        } else {
            console.log(response);
            result.innerHTML = json.message;
            result.className = "error-message";
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong! Please try again.";
        result.className = "error-message";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    });
};

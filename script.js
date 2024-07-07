function sendEmail(event) {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const raw = JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "message": message,
        "recipient_email": "lovelyroushni33@gmail.com",
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        mode: "no-cors",
        redirect: "follow"
    };

    fetch("https://script.google.com/macros/s/AKfycbxFFoz_MAZ1QsYrl7BuCbxM09b06Qvljpz-7KSCSj47GdCVKgQj1oPJX-8H85WG7Eg_/exec",
        requestOptions)
        .then(response => response.text)
        .then(result => {
            console.log(result);
            alert("Form Submitted Successfully!");
        }).catch(error => {
            console.error(error);
            alert("There wan an eror submitting the form.");
        });

}
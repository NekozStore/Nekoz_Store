window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("opacity-0");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1200);
});

const Country_API_URL = "https://restcountries.com/v3.1/all";
const Google_API_URL = "https://script.google.com/macros/s/AKfycbzmagVRTz1pajQ-uScgrU-YNB7Gc656q4tVNT1DMlyIyxgy3Cypq64f_QCDfLJ7Hovs7g/exec";

document.addEventListener("DOMContentLoaded", function () {
    fetchCountries();
});

async function fetchCountries() {
    const select = document.getElementById("country");
    try {
        const response = await fetch(Country_API_URL);
        let countries = await response.json();
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        countries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.name.common;
            option.textContent = country.name.common;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

document.getElementById("launchForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const button = e.target.querySelector('button[type="submit"]');
    button.disabled = true;
    button.innerText = "Sending...";

    const formData = new FormData(e.target);

    try {
        const response = await fetch(Google_API_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors",
        });

        let thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.classList.remove("hidden");

        button.disabled = false;
        button.innerText = "Unlock Your Exclusive Deal Now!";
        e.target.reset();
    } catch (error) {
        console.error("Error:", error);
        button.disabled = false;
        button.innerText = "Try again";
    }
});

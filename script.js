const key = "44e0bdb1f8b143deb39165914252505";

const img = document.getElementById("img");
img.style.display = "none";
const weather = document.getElementById("weather");
const temp = document.getElementById("temp");
const umidità = document.getElementById("umidità");
const vento = document.getElementById("vento");

const others = document.querySelector(".others");
others.style.display = "none";

async function fetchData(query) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        img.style.display = "flex";
        img.src = data.current.condition.icon;
        weather.innerHTML = data.current.condition.text;
        
        others.style.display = "flex";
        temp.innerHTML = "Temperature: "+ data.current.temp_c + " " + "°C";
        umidità.innerHTML = "Humidity: " + data.current.humidity + "%";
        vento.innerHTML = "Wind Speed: " + data.current.wind_kph + " " + "km/h";
    }
    
    catch(error) {
        console.error(error);
    }
}

const button = document.getElementById("submit");

button.addEventListener("click", () => {
    let query = document.getElementById("city").value
    fetchData(query);
})

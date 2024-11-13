// Add your OpenWeather API key here
const apiKey = '';

// Get user's location and fetch weather data
function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                    recommendOutfit(data.main.temp);
                })
                .catch(error => {
                    document.getElementById('weather-info').innerText = "Unable to retrieve weather data.";
                    console.error(error);
                });
        });
    } else {
        document.getElementById('weather-info').innerText = "Geolocation is not supported by this browser.";
    }
}

// Display weather information
function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    weatherInfo.innerHTML = `The temperature is ${temp}°C and the weather is ${weather}.`;
}

// Recommend outfits based on temperature
function recommendOutfit(temp) {
    const outfitRecommendation = document.getElementById('outfit-recommendation');
    let outfit;

    if (temp > 25) {
        outfit = "It's hot! Wear a T-shirt and shorts.";
    } else if (temp > 15) {
        outfit = "It's warm. A light jacket or sweater will do.";
    } else if (temp > 5) {
        outfit = "It's cool. Wear a jacket.";
    } else {
        outfit = "It's cold! Wear a heavy coat, scarf, and gloves.";
    }

    outfitRecommendation.innerHTML = `<h2>Outfit Recommendation:</h2><p>${outfit}</p>`;
}

// Call the function on page load
window.onload = getWeather;

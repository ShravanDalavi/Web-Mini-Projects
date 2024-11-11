# Weather-Based Outfit Recommender
A simple web application that recommends outfits based on the current weather conditions. Using the OpenWeather API, the app fetches the user's location and weather data to provide tailored clothing suggestions.

## Features
- **Real-Time Weather Fetching**: Automatically retrieves weather data based on the user's location.
- **Outfit Recommendations**: Suggests appropriate outfits based on the current temperature.
- **Responsive Design**: Works on various devices, providing an optimal user experience.

## Demo
[Link to demo](https://fhrwcx.csb.app/)


## Installation

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/weather-outfit-recommender.git
```
2. Navigate into the project directory:
```bash
cd weather-outfit-recommender
```
3. Open the `index.html` file in your browser to start using the app.

## Usage
1. When the page loads, the app will ask for your location to retrieve the current weather data.
2. Once the weather data is fetched, the app will display the temperature and weather conditions.
3. Based on the temperature, a clothing recommendation will be displayed on the screen.

## Technologies
- HTML5: Structure of the web application.
- CSS3: Styling and responsive layout.
- JavaScript: Fetches weather data and provides recommendations based on the current temperature.
- OpenWeather API: Retrieves real-time weather data for the user's location.

## How It Works

1. The application uses the browser's geolocation API to get the user's latitude and longitude.
2. The app sends a request to the OpenWeather API using the coordinates to fetch the current weather.
3. Once the weather data is received, the temperature and weather description are displayed on the page.
4. Based on the temperature, the app recommends an appropriate outfit for the user.

## Customization
1. API Key:
- Replace the API key in the `script.js` file with your own OpenWeather API key. You can obtain a key by signing up at OpenWeather.
```javascript
const apiKey = 'your-api-key-here';
```
2. Outfit Recommendations:
- You can customize the outfit recommendations in the `recommendOutfit` function in `script.js` to better suit your preferences.
```javascript
if (temp > 25) {
    outfit = "It's hot! Wear a T-shirt and shorts.";
} else if (temp > 15) {
    outfit = "It's warm. A light jacket or sweater will do.";
} else if (temp > 5) {
    outfit = "It's cool. Wear a jacket.";
} else {
    outfit = "It's cold! Wear a heavy coat, scarf, and gloves.";
}
```
3. Styling:
- Modify the `style.css file` to change the look and feel of the app, such as background color, text size, or layout.

## File Structure
```bash
weather-outfit-recommender/
│
├── index.html         # Main HTML file containing the UI structure
├── script.js          # JavaScript file for fetching weather data and generating recommendations
├── style.css          # CSS file for styling the app
└── README.md          # Project documentation
```

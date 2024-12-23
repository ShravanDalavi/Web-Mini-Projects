# Date Difference Calculator
A simple web application that calculates the difference between two dates, providing the result in terms of years, months, and days.

## Features
- **Date Difference Calculation**: Calculate the difference between two dates in terms of years, months, and days.
- **Interactive User Interface**: Input fields for selecting start and end dates with a clear display of results.
- **Responsive Design**: Works seamlessly on various screen sizes, including mobile devices.

## Demo

[Link to demo](https://codepen.io/Shravan-Dalavi/pen/yLmNemE)


![image](https://github.com/user-attachments/assets/32c11393-1931-4030-aab4-ac5ac8c9c5ef)


## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
```
2. Navigate to the project folder:
```bash
cd Web-Mini-Projects/projects/Date\ Calculate
```
3. Open `index.html` in your web browser to start the clock.
```bash
open index.html
```

## Usage

1. Enter a start date in the "Start Date" field.
2. Enter an end date in the "End Date" field.
3. Click the "Calculate Difference" button to see the difference between the two dates.
4. The result will display the difference in years, months, and days.

## Technologies
- HTML5: For the structure of the web application.
- CSS3: For styling and layout of the app.
- JavaScript: For calculating the date difference and displaying the results interactively.

## How It Works
1. The user inputs two dates: a start date and an end date.
2. The JavaScript function `calculateDateDifference()` is triggered when the user clicks the "Calculate Difference" button.
3. The function calculates the difference between the two dates in terms of years, months, and days.
4. The result is then displayed dynamically on the page under the result section.

## Customization
1. Modify Calculation Logic:
- You can update the calculation logic in the script.js file if you need different date formats or additional output details.
```javascript
function calculateDateDifference() {
    // Current logic for calculating date difference
}
```
2. Styling:
- You can modify the look and feel of the application by editing the `style.css` file.
Example:
```css
body {
    background: linear-gradient(135deg, #f8f9fa, #dfe4ea);
}
```
## File Structure
```bash
date-difference-calculator/
│
├── index.html         # Main HTML file containing the structure of the app
├── script.js          # JavaScript file containing the date difference logic
├── style.css          # CSS file for styling the application
└── README.md          # Project documentation
```

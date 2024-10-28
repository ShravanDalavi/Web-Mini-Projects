
# Analog Clock with Dark Mode

This project is a web-based Analog Clock that displays the current time and date. It includes a dark mode toggle to switch between light and dark themes, with vibrant colors for both modes. The clock updates every second and visually displays the hour, minute, and second hands, along with the current date.

## Features
- Analog Clock: Displays current time with hour, minute, and second hands.
- Date Display: Shows the current date in a formatted style.
- Dark Mode: Allows users to toggle between light and dark themes.
- Responsive Design: Adjusts smoothly for different screen sizes, making it usable on both desktop and mobile devices.

## Demo
[Link to demo](https://4nz2kd.csb.app/)

Light-mode
![image](https://github.com/user-attachments/assets/cbbbcb4d-3047-46ba-9a15-c4dac88a6c12)

Dark-mode
![image](https://github.com/user-attachments/assets/32ddbbb7-dbb7-4323-93d1-bafc290de02b)


## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/analog-clock.git
```
2. Navigate to the project folder:
```bash
cd analog-clock
```
3. Open `index.html` in your web browser to start the clock.

## Usage

- Open the `index.html` file in your browser.
- The clock will automatically start displaying the current time.
- Use the toggle switch in the top right corner to switch between light and dark mode.
- The date is displayed below the clock and updates dynamically.

## Technologies

- HTML: Defines the structure of the clock and the layout of the page.
- CSS: Provides styling for the clock, including themes, layout, and animations.
- JavaScript: Handles the clock’s logic, updating the time every second, and managing the theme toggle.

## How It Works

- Clock Functionality: The `script.js` file uses JavaScript to calculate the positions of the hour, minute, and second hands based on the current time. The hands are updated every second using `setInterval()`.
- Theme Toggle: The theme toggle switch applies a class to the `body `element, switching between light and dark mode by updating background colors, text, and other styles.
- Date Display: The date is formatted and displayed using JavaScript’s `toLocaleDateString()` method, which updates in real-time.

## Customization

- Colors: You can customize the colors of the clock hands, background, and theme in the `style.css` file.
- Themes: Modify the dark and light mode themes by adjusting the styles under the `.light-mode` and .`dark-mode` classes in `style.css`.
- Clock Style: Adjust the size or appearance of the clock elements (like the hands or numbers) by editing the corresponding CSS.

## File Structure

```bash

/analog-clock
│
├── index.html       # Main HTML file for the Analog Clock
├── style.css        # CSS file for styling and themes
└── script.js        # JavaScript file for clock logic and theme control

```

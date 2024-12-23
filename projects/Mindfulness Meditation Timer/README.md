# Mindfulness Meditation Timer
A simple and customizable web-based timer to assist with mindfulness and meditation practices. Users can set the duration of the meditation session and select calming background sounds such as rain, ocean, or forest. The timer displays the remaining time and plays a sound when the session ends.

## Features
Meditation Timer: Allows users to set a meditation session duration.
Custom Sounds: Offers calming background sounds (rain, ocean, forest) to enhance the meditation experience.
Responsive Design: Adapts to different screen sizes for a smooth experience on both mobile and desktop devices.
Audio Feedback: Plays a bell sound when the session ends to signal completion.

## Demo
[Link to demo](https://57ymkh.csb.app/)

![image](https://github.com/user-attachments/assets/37f22306-085f-4492-a88b-e856e7c21ca0)


## Installation
1. Clone the repository to your local machine:
```bash
git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
```
2. Navigate to the project folder:
```bash
cd Web-Mini-Projects/projects/Mindfulness\ Meditation\ Timer
```
3. Open `index.html` in your web browser to start the clock.
```bash
open index.html
```.

## Usage

- Select the meditation time (in minutes) using the input field.
- Choose a background sound from the dropdown (Rain, Ocean, Forest).
- Click the "Start Meditation" button to begin.
- When the session is over, a bell will sound and the timer will reset.
- Use the "Reset" button to stop the timer or reset the session manually.

## Technologies

- HTML: For structuring the page.
- CSS: For styling the page and creating a responsive layout.
- JavaScript: For adding functionality such as timer control, sound selection, and managing the countdown.

## How It Works

1. Timer Functionality: The user inputs a session duration, and the timer starts counting down from the specified time. The countdown is displayed on the screen, and the background color changes as the session nears completion (from normal to warning, and finally to danger).
2. Sound Management: When the timer starts, the selected sound (Rain, Ocean, or Forest) plays in the background. Once the session ends, a bell sound plays to signify completion.
3. Responsive Design: The layout adjusts to fit both mobile and desktop devices. CSS media queries ensure that the interface remains user-friendly across different screen sizes.

## Customization

- Sounds: Add your own sounds by including them in the `sounds` folder and updating the options in the HTML dropdown and JavaScript.
- Styles: Modify the `style.css` file to change the look and feel of the timer, including fonts, colors, and animations.
- Session Time: You can modify the default session time or add validation for specific ranges in the `script.js` file.

## File Structure
```bash
/meditation-timer
│
├── index.html       # Main page structure
├── style.css        # Styling for the meditation timer
├── script.js        # Timer logic and sound control
└── sounds/          # Folder containing background and ending sounds
    ├── rain.mp3
    ├── ocean.mp3
    └── forest.mp3

```

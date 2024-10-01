# Event Countdown Timer

A simple web-based countdown timer that allows users to add events and track the time remaining until the event starts. Includes customization options such as time zone selection and background color.

## Features

- **Event Countdown**: Tracks the time remaining for upcoming events.
- **Time Zone Support**: Adjusts event time according to the selected time zone.
- **Background Color Customization**: Users can choose a background color for each event.
- **Event Deletion**: Easily remove events after they have passed.
- **Alarm Sound**: Plays an alarm when the event time is reached.

## Demo

[Link to demo](https://codepen.io/Shravan-Dalavi/pen/xxovaxK)

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/event-countdown-timer.git
```
2. Navigate to the project directory:
```bash
cd event-countdown-timer
```
3. Open the `index.html` file in your browser to start using the countdown timer.

## Usage
1. Enter the event name in the "Event Name" input field.
2. Select the date and time for the event using the "Event Date" field.
3. Choose your preferred time zone from the dropdown menu.
4. Customize the background color for the event.
5. Click the "Add Event" button to start the countdown.
6. The countdown will update every second, and an alarm will sound when the event time is reached.
7. You can delete an event using the "Delete" button associated with each event.

## Customization

1. Modify Event Time Zones:
- Update the list of time zones in the `index.html` file. You can add or remove time zones in the `<select id="time-zone">` dropdown.
```html
<select id="time-zone">
    <option value="UTC">UTC</option>
    <option value="America/New_York">New York (EST)</option>
    <!-- Add more options here -->
</select>
```

2. Change the Look and Feel:

- Customize the styles in `style.css` to change the design. For example, you can adjust the background color or button styles.

Example (Change the button hover color):
```css
button:hover {
    background-color: #555; /* Change this value */
}
```
3. Event Countdown Customization:

- Modify the countdown logic in script.js to suit your needs. You can change the alarm sound, countdown behavior, or add additional features like recurring events.

## File Structure
```bash
event-countdown-timer/
│
├── index.html         # Main HTML file containing the UI structure
├── script.js          # JavaScript file containing the countdown logic
├── style.css          # CSS file for styling the timer
├── alarm.mp3          # Audio file for the alarm sound (ensure it's included)
└── README.md          # Project documentation

```

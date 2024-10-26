# Multi-Step Form

This project is a simple Multi-Step Form built using HTML, CSS, and JavaScript. It is designed to guide users through multiple steps in a form, where each step contains different input fields.

## Features

- Three-step form navigation (Step One, Step Two, Step Three)
- Form validation on each step
- Customizable progress bar indicating the current step
- Previous/Next navigation buttons
- Submit button on the final step

## Live Demo

You can view a live demo of the Multi-Step Form here: [Demo URL](https://7wn8dp.csb.app/)

## Installation

1. Clone the repository to your local machine:
 ```bash
    git clone https://github.com/yourusername/multi-step-form.git
```

2. Navigate to the project directory:
```bash
    cd multi-step-form
```

3. Open the `index.html` file in your browser:
```bash
    open index.html
```

## Usage
- Enter information in Step One (Name), Step Two (Email), and Step Three (Age).
- Use the **Next** button to move to the next step and **Previous** to go back.
- On the final step, the **Submit** button will appear, allowing you to submit the form.
- Once submitted, an alert will show the success message.

## Technologies
- **HTML**: For structuring the form.
- **CSS**: For styling and layout.
- **JavaScript**: To handle the form navigation and submission.


## How It Works

- **Step Navigation**: The form contains three steps, and the user can navigate between them using the "Next" and "Previous" buttons.
- **Progress Indicator**: A progress bar at the top of the form displays the user's current step, updating dynamically.
- **Form Validation**: Each step has required fields, and the user cannot proceed to the next step until all fields in the current step are filled out.
- **Submission**: After completing all steps, the user can submit the form, and a success message will appear.

## Customization

### Changing Steps

To add or remove steps:
1. In the HTML file (`index.html`), add or remove `.step` containers in the form:
```html
   <div class="step">
       <h2>Step Title</h2>
       <!-- Add your input fields here -->
   </div>
```
2. Update the progress circles in the .progress-bar to match the number of steps:
```html
<div class="progress-bar">
    <div class="step-circle">1</div>
    <div class="step-circle">2</div>
    <!-- Add or remove step circles here -->
</div>
```
3. In the JavaScript file, ensure the `steps` and `stepCircles` arrays are correctly targeting the added steps.

### Styling
The form is styled using basic CSS, and you can customize it by editing the `style` section in the `index.html` file:

- Update the background color, fonts, button styles, or add custom animations to match your design. 

Example for changing button colors:
```css
.step-buttons button {
    background-color: #28a745; /* Change to your preferred color */
}
```
### Validation
If you want to add more validation or custom error messages, modify the `submit` event listener in the JavaScript section:
```javascript
document.getElementById("multiStepForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your validation logic here
    alert("Form Submitted Successfully!");
});
```

## Folder Structure
```sh
multi-step-form/ 
├── index.html # The main HTML file 
├── styles.css # CSS for styling (can be embedded in index.html) 
└── script.js # JavaScript for form navigation (can be embedded in index.html)
```

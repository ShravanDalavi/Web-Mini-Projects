# Online Poll Creator
A simple web application that allows users to create online polls with customizable options. Polls are stored in the browser using LocalStorage, and users can vote on created polls and view results in real-time.

## Features

- Create polls with custom questions and multiple options.
- Save polls in the browser's LocalStorage for persistence.
- Real-time vote tracking with dynamic results display.
- Option to add more poll options dynamically.
- Ability to delete the current poll.
- Auto-refresh poll results every 3 seconds.
  
## Demo

[Link to demo](https://lzm79s.csb.app/)

![image](https://github.com/user-attachments/assets/5ae98dce-6a2c-40f6-9a0a-6af93c4d1779)


## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/ShravanDalavi/Web-Mini-Projects.git
```
2. Navigate to the project folder:
```bash
cd Web-Mini-Projects/projects/Online\ Poll\ Creator
```
3. Open `index.html` in your web browser to start the clock.
```bash
open index.html
```

## Usage

1. Open the application in your browser.
2. Enter a question and at least two options for your poll.
3. Click the "Add Another Option" button to add more poll options if needed.
4. Once all options are added, click "Create Poll" to start the poll.
5. Users can vote by selecting an option and clicking "Submit Vote."
6. Poll results are displayed in real-time and updated every 3 seconds.
7. You can delete the poll at any time by clicking the "Delete Poll" button.

## Customization
- Styling: Modify the CSS in `style.css` to customize the appearance of the poll creator.
  
- Poll Features: The poll logic is located in `script.js`. You can extend or modify the poll features, such as adding more advanced voting systems or restricting the number of votes per user.

## File Structure
```bash
online-poll-creator/
│
├── index.html       # Main HTML file with the structure of the poll creator
├── style.css        # CSS file for styling the application
└── script.js        # JavaScript file containing poll creation, voting, and result logic
```

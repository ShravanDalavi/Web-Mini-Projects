# Daily Journal Web App

A simple web-based journal application that allows users to record their daily thoughts, moods, and tag entries for easy categorization. The app also analyzes the sentiment of each journal entry based on predefined positive and negative words.

## Features

- Add Journal Entries: Users can enter their journal entries along with a date, mood, and tags.
- Sentiment Analysis: Automatically evaluates the sentiment (positive, negative, or neutral) of each entry based on the text.
- Edit and Delete Entries: Users can edit or delete their existing journal entries.
- Local Storage: Entries are saved in the browser's local storage, so data persists across sessions.
- Responsive Design: Fully responsive and optimized for mobile and desktop views.

## Demo

[Link to demo](https://codepen.io/Shravan-Dalavi/pen/XWvbezL)

## Installation
1. Clone the repository to your local machine:
```bash 
git clone https://github.com/your-username/daily-journal-app.git
```
2. Open the `index.html` file in your browser to start using the app.

## Usage
- Open the app in your browser.
- Use the form to enter the date, select a mood, add optional tags, and write your journal entry.
- The sentiment of the journal entry will be displayed after clicking "Save Entry."
- You can edit or delete any entry using the respective buttons.


## Technologies Used
- HTML: For structuring the web page.
- CSS: For styling the web page and ensuring responsiveness.
- JavaScript: For adding functionality like saving entries, sentiment analysis, and local storage management.

## How It Works
- Journal Entries: When a user fills out the form and clicks the "Save Entry" button, the app saves the entry to the browser's local storage. The form includes fields for the date, mood, tags, and journal content.
- Sentiment Analysis: The sentiment analysis function evaluates the journal text based on the presence of positive or negative words.
- Local Storage: Entries are saved in `localStorage` so that they persist even after the page is refreshed.

## Customization
To customize the app:

- Modify the CSS file (`style.css`) to change the look and feel of the app.
- Add or update the sentiment analysis logic in `script.js` to include more words or different sentiment rules.
- Modify the HTML structure in `index.html` to add more fields or alter the layout.

## File Structure
```bash
/daily-journal-app
│
├── index.html       # The main structure of the web app
├── style.css        # Styling for the web app
└── script.js        # Main logic for the journal entries and sentiment analysis
```

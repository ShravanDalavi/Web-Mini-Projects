let editIndex = -1; // Global variable to track the entry being edited

function saveEntry() {
    const entryDate = document.getElementById("entryDate").value;
    const mood = document.getElementById("mood").value;
    const entryText = document.getElementById("entryText").value;
    const tags = document.getElementById("tags").value; // Capture tags

    if (!entryDate || !mood || !entryText) {
        alert("Please fill out all fields.");
        return;
    }

    const sentiment = analyzeSentiment(entryText);
    document.getElementById("sentimentResult").innerHTML = `Sentiment: ${sentiment}`;

    // If editing an entry, update the entry
    if (editIndex > -1) {
        updateEntry(editIndex, { date: entryDate, mood, text: entryText, sentiment, tags });
        editIndex = -1;
        document.querySelector("button").textContent = "Save Entry"; // Reset button text
    } else {
        // Save new journal entry in localStorage
        const journalEntry = { date: entryDate, mood, text: entryText, sentiment, tags };
        saveToLocalStorage(journalEntry);
    }

    document.getElementById("journalForm").reset();
    displayEntries();
}

function analyzeSentiment(text) {
    const positiveWords = ['happy', 'great', 'good', 'excited', 'wonderful'];
    const negativeWords = ['sad', 'bad', 'angry', 'upset', 'terrible'];
    const textLower = text.toLowerCase();
    let sentiment = 'Neutral';

    positiveWords.forEach(word => {
        if (textLower.includes(word)) {
            sentiment = 'Positive';
        }
    });

    negativeWords.forEach(word => {
        if (textLower.includes(word)) {
            sentiment = 'Negative';
        }
    });

    return sentiment;
}

function saveToLocalStorage(entry) {
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    journalEntries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}

function updateEntry(index, updatedEntry) {
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    journalEntries[index] = updatedEntry;
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}

function deleteEntry(index) {
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    journalEntries.splice(index, 1); // Remove the entry at the specified index
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    displayEntries(); // Refresh the display after deletion
}

function displayEntries() {
    const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const journalDiv = document.getElementById("journalEntries");
    journalDiv.innerHTML = "";

    if (journalEntries.length === 0) {
        journalDiv.innerHTML = "<p>No journal entries yet.</p>";
        return;
    }

    journalEntries.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("journal-entry");

        // Format tags as a list, handling multiple tags separated by commas
        const formattedTags = entry.tags ? entry.tags.split(',').map(tag => tag.trim()).join(', ') : 'No tags';

        entryDiv.innerHTML = `
            <h3>${entry.date} - Mood: ${entry.mood} (${entry.sentiment})</h3>
            <p>${entry.text}</p>
            <p><strong>Tags:</strong> ${formattedTags}</p> <!-- Display tags -->
            <button class="edit" onclick="editEntry(${index})">Edit</button>
            <button class="delete" onclick="deleteEntry(${index})">Delete</button>
        `;
        journalDiv.appendChild(entryDiv);
    });
}

function editEntry(index) {
    const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const entry = journalEntries[index];

    document.getElementById("entryDate").value = entry.date;
    document.getElementById("mood").value = entry.mood;
    document.getElementById("entryText").value = entry.text;
    document.getElementById("tags").value = entry.tags || ""; // Pre-fill tags field

    editIndex = index; // Set the global edit index
    document.querySelector("button").textContent = "Update Entry"; // Change button text to "Update Entry"
}

// Display entries on page load
displayEntries();

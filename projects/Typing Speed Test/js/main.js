const levels = [
    { wpm: 10, accuracy: 80, words: 5 },
    { wpm: 15, accuracy: 85, words: 10 },
    { wpm: 20, accuracy: 90, words: 15 },
    { wpm: 25, accuracy: 92, words: 20 },
    { wpm: 30, accuracy: 95, words: 25 },
    { wpm: 35, accuracy: 97, words: 30 },
    { wpm: 40, accuracy: 98, words: 35 },
    { wpm: 45, accuracy: 99, words: 40 },
    { wpm: 50, accuracy: 99, words: 45 },
    { wpm: 55, accuracy: 99, words: 50 },
    { wpm: 60, accuracy: 99, words: 55 },
    { wpm: 65, accuracy: 99, words: 60 },
    { wpm: 70, accuracy: 99, words: 65 },
    { wpm: 75, accuracy: 99, words: 70 },
    { wpm: 80, accuracy: 99, words: 75 },
    { wpm: 85, accuracy: 99, words: 80 },
    { wpm: 90, accuracy: 99, words: 85 },
    { wpm: 95, accuracy: 99, words: 90 },
    { wpm: 100, accuracy: 99, words: 95 },
    { wpm: 110, accuracy: 99, words: 100 },
  ];
  
  let currentLevel = 1;
  let currentWPM = 0;
  let currentAccuracy = 0;
  let startTime = null;
  
  // DOM Elements
  const sentenceElement = document.getElementById("sentence");
  const inputBox = document.getElementById("inputBox");
  const wpmElement = document.getElementById("wpm");
  const accuracyElement = document.getElementById("accuracy");
  const resultElement = document.getElementById("result");
  const nextLevelBtn = document.getElementById("nextLevelBtn");
  const restartBtn = document.getElementById("restartBtn");
  const homeBtn = document.getElementById("homeBtn");
  const criteriaElement = document.getElementById("criteria");
  const currentLevelElement = document.getElementById("currentLevel");
  
  // Load the specified level
  function loadLevel(level) {
    currentLevel = level;
    currentLevelElement.textContent = `Level ${currentLevel}`;
  
    const levelData = levels[currentLevel - 1];
    criteriaElement.innerHTML = `Criteria: WPM >= ${levelData.wpm}, Accuracy >= ${levelData.accuracy}%`;
    sentenceElement.innerHTML = generateRandomSentence(levelData.words);
  
    inputBox.value = "";
    resultElement.style.display = "none";
    nextLevelBtn.style.display = "none";
  
    updateStats(0, 0);
    startTime = null; // Reset the timer
  }
  
  // Generate a random sentence with a given number of words
  function generateRandomSentence(wordCount) {
    const words = ["example", "random", "typing", "test", "sentence", "practice", "speed", "accuracy"];
    return Array.from({ length: wordCount }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
  }
  
  // Update WPM and accuracy
  function updateStats(wpm, accuracy) {
    currentWPM = wpm;
    currentAccuracy = accuracy;
  
    wpmElement.textContent = currentWPM;
    accuracyElement.textContent = `${currentAccuracy}%`;
  }
  
  // Check if level criteria are met
  function checkCriteria() {
    const levelData = levels[currentLevel - 1];
    return currentWPM >= levelData.wpm && currentAccuracy >= levelData.accuracy;
  }
  
  // Handle typing input
  inputBox.addEventListener("input", () => {
    const wordsTyped = inputBox.value.trim().split(/\s+/).length;
  
    if (!startTime) {
      startTime = new Date();
    }
  
    const timeElapsed = (new Date() - startTime) / 1000 / 60; // Time in minutes
    const sentence = sentenceElement.textContent;
    const input = inputBox.value;
    let correctChars = 0;
  
    let highlightedText = "";
    for (let i = 0; i < sentence.length; i++) {
      if (i < input.length) {
        if (sentence[i] === input[i]) {
          highlightedText += `<span class="correct">${sentence[i]}</span>`;
          correctChars++;
        } else {
          highlightedText += `<span class="incorrect">${sentence[i]}</span>`;
        }
      } else {
        highlightedText += sentence[i];
      }
    }
    sentenceElement.innerHTML = highlightedText;
  
    const accuracy = Math.round((correctChars / sentence.length) * 100) || 0;
    const wpm = Math.round((wordsTyped / timeElapsed) * 60) || 0;
  
    updateStats(wpm, accuracy);
  
    // Check if all words are typed correctly
    if (input === sentence) {
      resultElement.style.display = "block";
      resultElement.textContent = checkCriteria()
        ? "Level Complete! Well done!"
        : "Level Complete! Try to improve.";
      nextLevelBtn.style.display = checkCriteria() ? "inline-block" : "none";
  
      saveProgress();
    }
  });
  
  // Handle Next Level button
  nextLevelBtn.addEventListener("click", () => {
    if (currentLevel < levels.length) {
      loadLevel(currentLevel + 1);
    } else {
      alert("Congratulations! You've completed all levels!");
    }
  });
  
  // Handle Restart button
  restartBtn.addEventListener("click", () => {
    loadLevel(currentLevel);
  });
  
  // Handle Home button
  homeBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
  
  // Save progress in localStorage
  function saveProgress() {
    const achievements = JSON.parse(localStorage.getItem("achievements")) || [];
    achievements.push(
      `Level ${currentLevel}: WPM = ${currentWPM}, Accuracy = ${currentAccuracy}%`
    );
    localStorage.setItem("achievements", JSON.stringify(achievements));
  }
  
  // Load the first level on page load
  loadLevel(1);
  
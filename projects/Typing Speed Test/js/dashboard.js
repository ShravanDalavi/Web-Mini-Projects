document.addEventListener("DOMContentLoaded", () => {
    const achievements = JSON.parse(localStorage.getItem("achievements")) || [];
    const achievementsList = document.getElementById("achievements");
  
    achievementsList.innerHTML = achievements
      .map((achievement) => `<li>${achievement}</li>`)
      .join("");
  
    if (!achievements.length) {
      achievementsList.innerHTML = "<li>No achievements yet! Start the test.</li>";
    }
  });
  
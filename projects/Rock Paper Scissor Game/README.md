# Rock Paper Scissors Game
A simple and interactive Rock Paper Scissors game where a player competes against the computer. The game provides a fun way to experience this classic hand game through a web-based interface.

## Features
- **Interactive Gameplay:** Player vs. computer with real-time scoring.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Score Tracking:** Keeps track of scores for both the player and the computer.
- **Move Counter:** Limits the game to 10 moves per round.
- **Game Result:** Displays the winner and allows the player to restart the game.
  
## Demo
[Link to demo](https://codepen.io/Shravan-Dalavi/pen/jOjoZyV)
<br>
![image](https://github.com/user-attachments/assets/1c069b40-31ee-4e06-9247-cbb6243cef21)


## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/rock-paper-scissors.git
    ```

2. **Navigate into the project directory:**
    ```bash
    cd rock-paper-scissors
    ```

3. **Open `index.html` in a web browser to start the game:**
    ```bash
    open index.html
    ```

## Usage
1. Choose **Rock**, **Paper**, or **Scissors** by clicking the respective button.
2. The computer will randomly select its move.
3. The game will automatically track the score and display the result after each round.
4. The game ends after 10 moves, showing the final result (win, lose, or tie).
5. Click the **Restart** button to play again.

## Customization
You can customize various parts of the game:

1. **Change the number of moves:** 
    - Modify the number of rounds in the `scripts.js` file by adjusting the `moves` limit.

    ```javascript
    if (moves == 10) { 
        gameOver(playerOptions, movesLeft);
    }
    ```
    Change `10` to any other number for more or fewer rounds.

2. **Update the UI styles:**
    - Edit the styles in the `styles.css` file to change the look and feel of the game.

    For example, to change the background color, modify the `body` style:

    ```css
    body {
        background: linear-gradient(135deg, #d4ff00cf, #9e7f01cc);
    }
    ```

3. **Modify the result messages:**
    - Update the result text in the `scripts.js` file inside the `winner` and `gameOver` functions to personalize the game messages.

## File Structure
```sh
rock-paper-scissors/ 
│ 
├── index.html # Main HTML file that contains the game interface
├── scripts.js # JavaScript file with the game logic 
├── styles.css # CSS file for the game's styling 
└── README.md # Documentation of the project

```

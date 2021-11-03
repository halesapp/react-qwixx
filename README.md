# Quixx Score Card
A React web app to help you play the dice game Quixx.

Play this app here: https://quixx.rileyhales.com

Full rules for Quixx: https://www.ultraboardgames.com/qwixx/game-rules.php

Features:
- Full score card interface
- Responsive to tall or wide screens
- Colors that roughly match the real game
- Automatically calculates score in real time
- Scoring options/rules enforced  
- Undo and Redo buttons
- Cache game state in local browser storage to come back to later and avoid loss of game progress in event of accidental refresh

Layout:
- Header section along the top with an undo, redo, and restart button
- Scoring section in the middle
- Footer section on the bottom with automatically calculated score for each color and checkboxes for marking skips

Requires:
- 2 white dice
- 1 red die
- 1 yellow die
- 1 green die
- 1 blue die

Guide:
- Roll the dice
- Click the button corresponding to the color and number you want to score
- After you click, the buttons you can no longer score will be disabled and your score will update
- The most recently clicked button in each color/group can be toggled off
- You can use the undo button to go back to the previous score state
- You can use the redo button only after using the undo button and before you click a new scoring button
- Continue scoring until you've marked the lock in 2 columns
- Use the restart button when you're ready to begin again

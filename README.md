# 🎲 Dice Game - JavaScript Learning Project

A dynamic two-player dice game that demonstrates core JavaScript concepts including DOM manipulation, random number generation, and conditional logic.

![Dice Game Preview](images/dice1.png)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [JavaScript Concepts & Questions](#javascript-concepts--questions)
- [Code Explanation](#code-explanation)
- [Technologies](#technologies)
- [Author](#author)

---

## Overview

This project is a simple yet effective dice game where two players compete by rolling dice. Each page refresh generates new random dice values, and the game automatically determines the winner.

---

## Features

- ✅ Random dice generation on page refresh
- ✅ Two-player gameplay
- ✅ Automatic winner declaration
- ✅ Clean, responsive UI design
- ✅ Custom Google Fonts integration

---

## Demo

| Player 1 | Player 2 | Result |
|----------|----------|--------|
| 🎲 5 | 🎲 3 | Player 1 Wins! |
| 🎲 2 | 🎲 6 | Player 2 Wins! |
| 🎲 4 | 🎲 4 | Draw! |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Lagmouchyoussef/dice-game.git

# Navigate to the project directory
cd dice-game

# Open in browser
# Simply double-click dicee.html or use a local server
```

---

## Project Structure

```
dice-game/
│
├── 📄 dicee.html          # Main HTML document
├── 📄 styles.css          # Stylesheet with custom design
├── 📄 script.js           # JavaScript game logic
├── 📄 README.md           # Project documentation
│
└── 📁 images/
    ├── 🖼️ dice1.png       # Dice face 1
    ├── 🖼️ dice2.png       # Dice face 2
    ├── 🖼️ dice3.png       # Dice face 3
    ├── 🖼️ dice4.png       # Dice face 4
    ├── 🖼️ dice5.png       # Dice face 5
    └── 🖼️ dice6.png       # Dice face 6
```

---

## JavaScript Concepts & Questions

This project covers fundamental JavaScript concepts. Below are key questions and answers to help understand the code:

### ❓ Question 1: How do we generate a random number between 1 and 6?

```javascript
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
```

**Explanation:**
- `Math.random()` generates a decimal between 0 (inclusive) and 1 (exclusive)
- Multiplying by 6 gives us a number between 0 and 5.999...
- `Math.floor()` rounds down to the nearest integer (0-5)
- Adding 1 shifts the range to 1-6

---

### ❓ Question 2: How do we select and manipulate DOM elements?

```javascript
// Method 1: querySelectorAll - selects all matching elements
document.querySelectorAll('img')[0].setAttribute("src", randomImageSource);

// Method 2: querySelector - selects the first matching element
document.querySelector("h1").innerHTML = "Player 1 Wins";
```

**Explanation:**
- `querySelectorAll('img')` returns a NodeList of all `<img>` elements
- `[0]` accesses the first image, `[1]` accesses the second
- `setAttribute()` changes the `src` attribute to display a different dice
- `innerHTML` changes the text content inside the `<h1>` element

---

### ❓ Question 3: How do we construct dynamic file paths?

```javascript
var randomImageSource = "images/dice" + randomNumber1 + ".png";
```

**Explanation:**
- String concatenation combines the folder path, dice number, and file extension
- If `randomNumber1 = 3`, the result is `"images/dice3.png"`
- This dynamically selects the correct dice image

---

### ❓ Question 4: How do we use conditional statements to determine the winner?

```javascript
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
```

**Explanation:**
- `if` checks if Player 1's dice is higher
- `else if` checks if Player 2's dice is higher
- `else` handles the tie scenario (both dice equal)

---

### ❓ Question 5: Why is the script placed at the end of the body tag?

```html
<body>
    <!-- HTML content here -->
    <script src="script.js"></script>
</body>
```

**Explanation:**
- Placing the script at the end ensures the DOM is fully loaded
- This prevents errors when trying to access elements that don't exist yet
- Alternative: Use `DOMContentLoaded` event listener

---

### ❓ Question 6: What is the difference between `var`, `let`, and `const`?

```javascript
// var - function-scoped, can be redeclared (older syntax)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// let - block-scoped, can be reassigned (modern syntax)
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// const - block-scoped, cannot be reassigned
const maxDiceValue = 6;
```

**Explanation:**
- `var` is function-scoped and can lead to unexpected behavior
- `let` is block-scoped and preferred for variables that change
- `const` is block-scoped and preferred for constants

---

## Code Explanation

### Full JavaScript Code Breakdown

```javascript
// Step 1: Generate random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Step 2: Create image path for Player 1's dice
var randomImageSource = "images/dice" + randomNumber1 + ".png";

// Step 3: Update Player 1's dice image
document.querySelectorAll('img')[0].setAttribute("src", randomImageSource);

// Step 4: Generate random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Step 5: Create image path for Player 2's dice
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Step 6: Update Player 2's dice image
document.querySelectorAll('img')[1].setAttribute("src", randomImageSource2);

// Step 7: Determine and display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
```

---

## Technologies

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, and visual design |
| JavaScript | Game logic and DOM manipulation |
| Google Fonts | Custom typography (Lobster, Indie Flower) |

---

## Author

**Youssef Lagmouch**

- GitHub: [@Lagmouchyoussef](https://github.com/Lagmouchyoussef)
- Repository: [dice-game](https://github.com/Lagmouchyoussef/dice-game)

---

## License

This project is open source and available for educational purposes.

---

> 💡 **Tip**: Try refreshing the page multiple times to see different dice combinations and winners!
